var connect = require('connect');
var serveStatic = require('serve-static');

function printUsageAndExit() {
	console.log("Usage:");
	console.log("node server.js <port> \"<path>\"");
	console.log("Examples:");
	console.log("node server.js 8090 \"../\"");
	console.log("node server.js 80 \"C:/Web/MyApplication\"");
	process.exit();
}

var args = process.argv;
if (args.length < 2) {
	printUsageAndExit();
}

var port = 8090;

if (args.length >= 3) {
	var port = args[2];
}

var path = "../SohoXiAngular";

if (args.length == 4) {
	path = args[3];
}

console.log('SoHo Xi Angular Directives Examples server is running at http://localhost:%s/', port);
console.log("Directory used: \"" + path + "\"");
console.log("Press Ctrl+C to stop");

connect().use(serveStatic(path)).listen(port);
