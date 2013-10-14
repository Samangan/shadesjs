
(function () {
	
	var Shadesjs = window.Shadesjs = function Shadesjs() {
		//TODO: Implement
	};	

	Shadesjs.getColor = function(element) {
			console.log(element);
			var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
			console.log(color);
			return color;
	};

	//module.exports = Shadejs;
})();