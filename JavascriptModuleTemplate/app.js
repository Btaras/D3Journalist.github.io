var func = (function() {
	var DEFAULT = {
		defaultMSG: "Unknown "

	};

// return an object
	return {
		personName: function() {
			var myArguments = arguments[0] || "";
			var forname = myArguments.names || DEFAULT.defaultMSG;
			console.log(forname + " is the name");
			return this;
		},
		// use the return this to call the global object func again and therefore allow method chaining
		address: function() {
			var myArguments = arguments[0] || "";
			var location = myArguments.street || DEFAULT.defaultMSG;
			console.log(location + " is the location");
			return this;
		}
	}
})();