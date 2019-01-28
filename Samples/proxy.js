var http = require("http");
var https = require("https");

var localPort;
var remoteHost;
var remotePort;

var args = process.argv;
if (args.length == 5) {
	localPort = args[2];
	remoteHost = args[3];
	remotePort = args[4];
}

if (localPort && remoteHost && remotePort) {
	startProxy(localPort, remoteHost, remotePort);
} else {
	printUsageAndExit();
}

function printUsageAndExit() {
	console.log("Usage:");
	console.log("node proxy <locaPort> \"<remoteHost>\" <remotePort>");
	console.log("Example:");
	console.log("node proxy 8083 \"domain.server.com\" 80");
	process.exit();
}

function startProxy(localPort, remoteHost, remotePort) {
	console.log("Starting proxy http://localhost:" + localPort + " -> https://" + remoteHost + ":" + remotePort);

	var server = http.createServer(function (request, response) {

			var options = {
				hostname : remoteHost,
				port : remotePort,
				path : request.url,
				method : request.method,
				headers : request.headers,
				rejectUnauthorized : false
			};

			try {
				var proxyRequest = https.request(options);
				proxyRequest.on("response", function (proxyResponse) {
					try {
						proxyResponse.on("data", function (chunk) {
							response.write(chunk, "binary");
						});
						proxyResponse.on("end", function () {
							response.end();
						});
						proxyResponse.on("error", function (e) {
							console.log("Request error: " + e);
						});
						response.writeHead(proxyResponse.statusCode, proxyResponse.headers);
					} catch (ex) {
						console.log(ex);
					}
				});
				request.on("data", function (chunk) {
					try {
						proxyRequest.write(chunk, "binary");
					} catch (ex) {
						console.log(ex);
					}
				});
				request.on("end", function () {
					try {
						proxyRequest.end();
					} catch (ex) {
						console.log(ex);
					}
				});
			} catch (ex) {
				console.log(ex);
			}
		});

	server.on("clientError", function (e) {
		console.log("Client error: " + e);
	});

	process.on("uncaughtException", function (e) {
		console.log("Uncaught exception: " + e);
	});

	server.listen(localPort);
}
