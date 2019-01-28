const UglifyJS = require("uglify-js");
const parseArgs = require("minimist");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const del = require('del');
const p = require("child_process");
const ncp = require("ncp");

function getManifest() {
	manifestPath = path.join(widgetTempDir, "widget.manifest");
	if (!fs.existsSync(manifestPath)) {
		const message = "Failed to find widget manifest: " + manifestPath;
		stopProcess(message);
	}

	const originalManifest = fs.readFileSync(manifestPath, "utf8");
	return JSON.parse(originalManifest);
}

function buildTypeScriptBundled(widgetFolderName, moduleName, sharedModules) {
	console.log("Bundling widget files...")
	const bundleName = moduleName + "-bundle.js";
	const tscOptions = {
		"compilerOptions": {
			"baseUrl": ".",
			"outFile": widgetFolderName + "/" + bundleName,
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"lib": [ "dom", "es5", "es6" ],
			"module": "amd",
			"moduleResolution": "node",
			"noEmitOnError": true,
			"noImplicitAny": false,
			"paths": {
				"lime": [ "../../Widgets/scripts/typings/lime" ],
				"@infor/sohoxi-angular": [ "../../Widgets/scripts/typings/soho" ],
				"xi": ["../../widgets/scripts/typings/sohoxi/sohoxi-angular.d.ts"]
			},
			"removeComments": true,
			"skipLibCheck": true,
			"sourceMap": false,
			"target": "es5"					
		},
		"include": [
			widgetFolderName + "/**/*",
			"../../Widgets/scripts/typings/sohoxi/sohoxi-angular.d.ts",
			"../../Widgets/scripts/typings/infor/index.d.ts",
			"../../Widgets/scripts/typings/soho/**/*"
		]
	};

	if (sharedModules) {
		let sharedPath, sharedName, fullName;

		for (let module of sharedModules) {
			sharedName = module.name;
			sharedPath = module.path || sharedName;
			fullName = widgetFolderName + "/" + sharedPath;
			
			tscOptions.compilerOptions.paths[sharedName] = [fullName + ".js"];			
						
			if (tscOptions.exclude) {
				tscOptions.exclude.push(fullName + ".ts"); 
			} else {
				tscOptions.exclude = [fullName + ".ts"]; 				
			}

			sharedModulesArray.push(fullName);
		}

		console.log("Shared module(s) excluded from bundle");
	}
	
	const tscPath = tempDirectory + "/tsconfig-prod.json";
	fs.writeFileSync(tscPath, JSON.stringify(tscOptions), "utf8");
	execSync("tsc -p " + tscPath);	   
	if (!fs.existsSync(path.join(tempDirectory, widgetFolderName, bundleName))) {
		stopProcess("Failed to create widget bundle");
	}
}

function minifyWidget(moduleName, manifest) {
	console.log("Minifying widget...");
	const bundlePath = widgetTempDir + "/";
	const bundleToMinify = bundlePath + moduleName + "-bundle.js";
	
	const result = UglifyJS.minify(bundleToMinify);
	const renameResult = renameModules(result.code, manifest);
	const minifiedOutput = isMultiModule ? manifest.widgetId + "." + moduleName + ".js" : moduleName + ".js";
	
	fs.writeFileSync(bundlePath + "/" + minifiedOutput, renameResult, "utf8");
	
	// Minify any shared modules
	for (let modulePath of sharedModulesArray) {
		const fullPath = path.join(tempDirectory, modulePath) + ".js";
		const result = UglifyJS.minify(fullPath);
		fs.writeFileSync(fullPath, result.code, "utf8");	
	}	
}

function renameModules(code, manifest) {
	let defineSearchIndex, importSearchIndex, defineStart, importStart, defineEnd, importEnd, moduleImportStart = 0;
	let defineIndex;
	let moduleName, defineResult, importsResult;
	let importsArrayString, newImportsArrayString;
	let noOfDefines = 0;

	const defineRecursive = (defineSearchIndex, updatedCode) => {
		defineStart = updatedCode.indexOf("define(", defineSearchIndex);
		if (defineStart !== -1) { 
			defineEnd = updatedCode.indexOf(",", defineStart);
			moduleName = updatedCode.substring(defineStart + 8, defineEnd - 1);
			defineResult = updatedCode.substring(0, defineStart + 8).concat(manifest.widgetId + "." + moduleName).concat(updatedCode.substring(defineEnd - 1));
			noOfDefines++;
			defineEnd = defineResult.indexOf(",", defineStart);
			importsRecursive(importSearchIndex, defineResult, manifest.widgetId + "." + moduleName)
			defineRecursive(defineEnd, importsResult);
		}
	}

	const importsRecursive = (importSearchIndex, updatedCode, newModuleName) => {
		defineIndex = updatedCode.indexOf("define(", importSearchIndex);
		if (defineIndex !== -1) {	
			importStart = updatedCode.indexOf("[", defineIndex);
			importEnd = updatedCode.indexOf("]", importStart);
			importsArrayString = updatedCode.substring(importStart, importEnd);
			moduleImportStart = importsArrayString.indexOf(moduleName);
			if (moduleImportStart > 0 && importsArrayString[moduleImportStart-1] === '"') {
				newImportsArrayString = importsArrayString.replace(moduleName, newModuleName);
			} else {
				newImportsArrayString = importsArrayString;
			}
			
			if (importsArrayString !== newImportsArrayString) {
				importsResult = updatedCode.substring(0, importStart).concat(newImportsArrayString).concat(updatedCode.substring(importEnd));
			} else {
				importsResult = updatedCode;
			}
		
			importsRecursive(importStart, importsResult, newModuleName);
		}	
	}
	
	defineRecursive(defineSearchIndex, code);	

	if (noOfDefines === 1) {
		return defineResult.replace("\"" + manifest.widgetId + "." + moduleName + "\"" + ",", "");		
	} else {
		isMultiModule = true;
		return defineResult;		
	}
}

function updateManifest(manifest) {
	manifest.moduleName = manifest.widgetId + "." + moduleName; 
	fs.writeFileSync(path.join(widgetTempDir, "widget.manifest"), JSON.stringify(manifest), "utf8");	
}

function pack(manifest) {
	console.log("Packing widget...");
	const widgetId = manifest.widgetId;
	const outputName = widgetId + "-" + manifest.version + "." + getTimestamp();

	const options = {
        extensions: [".png", ".jpg"]
	};
	
	const sharedModules = manifest.sharedModules;
	packDirectoryToZip(widgetId, outputName, options.extensions, sharedModules);
}

function packDirectoryToZip(widgetId, outputName, extensions, sharedModules) {
	const outputPath = path.join("./Minified", outputName + ".zip");
	const output = fs.createWriteStream(outputPath);
	const archive = archiver("zip");
	const directory = widgetTempDir;

	output.on("close", function () {
		stopProcess("\nSuccessfully created zip file: " + outputPath);
	});

	archive.on("error", function (err) {
		stopProcess("Failed to create zip file " + outputPath);
	});

	const includeList = [isMultiModule ? widgetId + "." + moduleName + ".js" : moduleName + ".js", "widget.manifest"];
	let patternList = includeList.concat(extensions);
	
	if (sharedModules && sharedModules.length) {
		patternList = patternList.concat(sharedModules.map(module => { 
			const path = module.path;
			if (path) {
				return path.substr(path.lastIndexOf("/", path.length) + 1) + ".js";
			} else {
				return module.name + ".js";
			}
		}));
	}
	
	cleanFolderBeforeZip(archive, directory, patternList);
	archive.pipe(output);

	setTimeout(() => {
		archive.directory(directory, "");
		archive.finalize();
	}, ZIP_TIMEOUT);
}

function cleanFolderBeforeZip(archive, directory, patterns) {
	const names = fs.readdirSync(directory);
	let isFolder;

	for(let name of names) {
		isFolder = fs.lstatSync(path.join(directory, name)).isDirectory();
		if(!isFolder && !isMatch(patterns, name)) {
			deleteFile(directory, name);
		} else if (isFolder) {
			cleanFolderBeforeZip(archive, path.join(directory, name), patterns);
		}		
	}	
}

function deleteFile(directory, fileName) {
	del(path.join(directory, fileName)).then(() => {
		if (!fs.readdirSync(directory).length) {
			del(directory);
		}
	});
}

function isMatch(patterns, name) {
	for(let pattern of patterns) {
		if(name === pattern || endsWith(name, pattern)) {
			return true;
		}
	}
	return false;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function getTimestamp() {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let date = (new Date(Date.now() - tzoffset)).toISOString();
    date = replaceAll(date, "-", "");
    date = replaceAll(date, ":", "");
    date = date.replace("T", "-");
    return date.slice(0, 15);
}

function endsWith(value, suffix) {
    if (!value) {
        return false;
    }
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

function execSync(command) {
    p.execSync(command, { stdio: "inherit" } );
}

function stopProcess(message) {
	console.log(message);
	del(tempDirectory).then(() => {
		process.exit(1);		
	});
}

console.info("");
console.info("========================================================================");
console.info(" WARNING - Deprecated script");
console.info("========================================================================");
console.info(" This script has been deprecated and will be removed in a future relase.");
console.info(" Use the homepages.js script instead of the minifywidget.js script.");
console.info("");
console.info(" Ex:");
console.info(" node homepages pack \"infor.sample.angular.helloworld\"");
console.info("========================================================================");
console.info("");


const argv = parseArgs(process.argv.slice(2));
const widgetFolderName = argv.widget;

const targetDirectory = "./Minified";
if (!fs.existsSync(targetDirectory)) {
	fs.mkdirSync(targetDirectory);
}

const tempDirectory = targetDirectory + "/Temp";
if (!fs.existsSync(tempDirectory)) {
	fs.mkdirSync(tempDirectory);	
}

let moduleName;
let isMultiModule = false;
let sharedModulesArray = [];
const ZIP_TIMEOUT = 100;

/* Copy widget folder to Temp dir */
const sourceDir = path.join("Widgets", widgetFolderName);
const widgetTempDir = path.join(tempDirectory, widgetFolderName);

ncp(sourceDir, widgetTempDir, {}, (err) => {
	if (!err) {
		/* Typescript compile widget into bundled file */
		const manifest = getManifest();

		if (manifest.type === "inline") {
			moduleName = manifest.moduleName ? manifest.moduleName : "widget";
			buildTypeScriptBundled(widgetFolderName, moduleName, manifest.sharedModules)

			/* Minify bundled file using uglify */
			minifyWidget(moduleName, manifest);

			/* Update manifest moduleName if multi module */
			if (isMultiModule) {
				updateManifest(manifest);
			}
		}	

		/* Pack widget */
		pack(manifest);
	} else {
		stopProcess("Operation failed: " + widgetFolderName + " does not exist in /Widgets")
	}
});