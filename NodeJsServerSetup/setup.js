var http = require("http"); //Load HTTP module

var myServer = http.createServer(function (request, response) {

	response.writeHead(200, {"Content-Type": "text/html"});
 // response.writeHead(200, {"Content-Type": "text/plain"}); for plain text use "plain"
	response.write("<h2> hello world</h2>");
	response.end();
}); //create my server

myServer.listen(3000);
console.log("Ben: go to http://localhost:3000");
console.log("Ben: Stop the local server from running with CTRL + C");
console.log("Ben: use text/html for the response.writeHead when responding with HTML content");


// Stop the local server from running with CTRL + C"

