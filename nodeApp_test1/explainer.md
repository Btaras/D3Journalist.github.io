var express = require("express");
var app = express();

// Now tell express what to do when it gets a request by the sever
// This is called routing
app.get("/", function(req, res) { //1.
	res.send("<h1>Hello</h1> Express"); //2.
})

// 1. when the application gets a request that points to the homepage (via "/" 
// 	then exectute a function via an anonymious function (call back) 
// 	We will ask that the server will pass along the request, and then we will 
// 	issue a response whenever this program is done

// 2. what this application will do is simply send as a response "hello express"

// node expects us to pecify the mindtype, here we dont need it because 
// express expects us that we are working with a web protocol anyway


// 3. set up server
// app.listen API reference here: http://expressjs.com/en/4x/api.html#app
var server = app.listen(3000, function() {
	console.log("Ben: this is your server calling");
	console.log("listening on port 3000");
});

// 3. ask "server" to listen to the port 3000
// and when that happens, we will execute a function - this will jist gives us 
// some feedback for ourselves

// similar to what we did with node.js, but using Express methods, which make
// things a lot easier