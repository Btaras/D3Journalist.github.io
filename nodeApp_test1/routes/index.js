exports.index = function(req, res) {
	res.render("default", {
		title: "Home",
		className: "home",
		users: ["Ben", "Peter", "Mom", "Dad"]
	});
}

exports.about = function(req, res) {
	res.render("default", {
		title: "About Us",
		className: "about"
		
	});
}

exports.news = function(req, res) {
	res.render("default", {
		title: "News Organisations",
		className: "news",
		users: ["Vox.com", "Economist", "Bloomberg", "Facebook"]
	});
}


// app.get("/", function(req, res) {
// 	res.render("default", {
// 		title: "Home",
// 		className: "home",
// 		users: ["Ben", "Peter", "Mom", "Dad"]
// 	});
// })

// app.get("/about", function(req, res) {
// 	res.render("default", {
// 		title: "About Us",
// 		className: "about"
		
// 	});
// })

// app.get("/news", function(req, res) {
// 	res.render("default", {
// 		title: "News Organisations",
// 		className: "news",
// 		users: ["Vox.com", "Economist", "Bloomberg", "Facebook"]
// 	});
// })