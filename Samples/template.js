var parseArgs = require('minimist')
var fs = require('fs');
var path = require('path');
var concat = require('gulp-concat');
var gulp = require('gulp');
var htmlMin = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');

var templateFilename = "templateCache.ts";

function TemplateGenerator(widgetPath) {
	this.widgetPath = widgetPath;

	this.htmlMinimizeOptions = {
		removeComments : true,
		collapseWhitespace : true
	};

	this.htmlTemplateHeader =
		'//This file have been auto generated with gulp script \n' +
		'import lm = require("lime");\n' +
		'export var getTemplates = (context: lm.IAngularContext): lm.IAngularTemplateInfo[] => {\n' +
		'\tvar f = (key) => { return context.getTemplateUrl(key); };\n' +
		'\tvar templates: lm.IAngularTemplateInfo[] = [];\n';

	this.htmlTemplateBody =
		'\ttemplates.push({ key: f("<%= url %>"), value: "<%= contents %>" });';

	this.htmlTemplateFooter =
		'\n\treturn templates;\n' +
		'}';

	this._htmlTemplateCacheOptions = {
		templateHeader : this.htmlTemplateHeader,
		templateBody : this.htmlTemplateBody,
		templateFooter : this.htmlTemplateFooter
	};

	this.start = function (callback) {
		gulp.start("template", callback);
	};

	this.generate = function () {
		return gulp.src(this.widgetPath + "/**/*.html")
		.pipe(htmlMin(this.htmlMinimizeOptions))
		.pipe(templateCache(this._htmlTemplateCacheOptions))
		.pipe(concat(templateFilename))
		.pipe(gulp.dest(this.widgetPath));
	}

	gulp.task("template", (function (callback) {
		return this.generate(callback)
	}).bind(this));	
}

function printUsage() {
	console.info("");
	console.info("HTML Template Cache Generator (Infor Homepages Widget SDK)");	
	console.info("==========================================================");
	console.info("node template --path \"<widget source path>\"");
	console.info("Example:");
	console.info("node template --path \"./Widgets/infor.sample.minify\"");
}

var argv = parseArgs(process.argv.slice(2));
var widgetPath = argv.path || argv.p;

if(!fs.existsSync(widgetPath)) {
	console.error("Widget path not found: " + widgetPath);
	printUsage();
	return 1;
}

var generator = new TemplateGenerator(widgetPath);
generator.start(function () {
	console.info("Generated template file: " + widgetPath + path.sep + templateFilename);
});