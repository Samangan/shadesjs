
(function () {
	//TODO: implement
	var Shadesjs = {};	

	Shadesjs.getColor = function(element) {
			console.log(element);
			//TODO: implement (window.getComputedStyle(element, null).getPropertyValue("background-color")) (even though this doesnt work with ie8 --> I think this is the best solution)
			//var color = "rgb:(255, 50, 255)";
			//TODO: I need to put checks in below to:
			//	-check if there exists a computed style for window
			//  -check if there is a background-color property value
			//  -check if there is a color
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			console.log(color);
			return color;
	};

	//module.exports = Shadejs;
})();