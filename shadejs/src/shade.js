"using strict";

(function () {
	//TODO: implement
	var Shadejs = {	};	

	Shadejs.getColor = function(element) {
			console.log(element);
			//TODO: implement (window.getComputedStyle(element, null).getPropertyValue("background-color")) (even though this doesnt work with ie8 --> I think this is the best solution)
			var color = "rgb:(255, 50, 255)";
			//var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			return color;
	};

	module.exports = Shadejs;
})();