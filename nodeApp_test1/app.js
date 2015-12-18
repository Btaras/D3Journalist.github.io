var express = require("express");
var app = express();

// Accesses the routes folder where all the different routs/pages are defined
var routes = require("./routes")

// Use EJS as templating engine
app.set('view engine', 'ejs');

// declare a variable that can be passed to all partials pages
// essectially, the locals object can send data to all pages
app.locals.pagetitle = "This is a NewsPage";


app.get('/', routes.index);
app.get("/about", routes.about);
app.get("/news", routes.news);


// how to set your own folder - if you want/need to do it
//remember that __dirname is a global variable that displays the name 
// of the current folder where the app.js file is
// app.set("views", __dirname + '/nameofmynewViewsFolder')

// use res.render to load up an ejs view file

//default.ejs file
// {title: "Home"} is a regular object, but could have data from a json file or a database
// for example, which then could be used in the application



// past this into the default page to access the ui items in the "users" array object
							// <ul>
							// <% for (var i = 0; i <users.length; i++) {%>
							// <li><%= users[i] %></li>
							// <% } %>
							// </ul>




// // about page
// app.get("/about", function (req, res) {
// 	res.render("page/about");
// })


// // Other plays/tricks on the URL calling - ingnore for now
// app.get("/", function(req, res) { //1.
// 	res.send("<h1>Hello</h1> Express"); //2.
// })

// app.get("/ben", function(req, res) { //1.
// 	res.send("<h1>Servus Ben</h1>"); //2.
// })

// // how to say somehting from the URL
// // so we are using the pass as variables
// app.get("/returntopage/:placeholder?", function(req, res) {
// 	var placeholder = req.params.placeholder;
// 	res.send(placeholder + ", says Ben in the URL"); 
// })

// app.get("/returntopage/:name?/:title?", function(req, res) {
// 	var name = req.params.name;
// 	var title = req.params.title;
// 	res.send("<p>name: " + name +  "<br>Title: " + title + "</p>"); 
// })

// Use a wildcard element - if the user types some shit after the listeing URL
app.get("*", function(req, res) {
	res.send("<p>Bad route!</p>"); 
})



var server = app.listen(3000, function() {
	console.log("Ben: this is your server calling");
	console.log("listening on port 3000");
});
