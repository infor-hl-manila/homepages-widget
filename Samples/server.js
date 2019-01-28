var connect = require('connect');
var serveStatic = require('serve-static');

function printUsageAndExit() {
	console.log("Usage:");
	console.log("node server <port> \"<path>\"");
	console.log("Examples:");
	console.log("node server");
	console.log("node server 8080 \"../\"");
	console.log("node server 80 \"C:/Web/MyApplication\"");
	process.exit();
}

var port = 8080;
var portStr = process.env.npm_package_config_server_port;
if (portStr) {
	try {
		port = parseInt(portStr);
	} catch (ex) {
		console.log("Invalid port " + portStr + " " + ex);
		printUsageAndExit();
	}
}

var path = process.env.npm_package_config_server_path || "./Widgets";

// Arguments will override if provided
var args = process.argv;
if (args.length >= 3) {
	port = args[2];
}
if (args.length >= 4) {
	path = args[3];
}

console.log('Web server is running at http://localhost:%s/', port);
console.log("Directory used: \"" + path + "\"");
console.log("Press Ctrl+C to stop");

connect().use(serveStatic(path)).listen(port);
