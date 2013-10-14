
(function () {
	
	var Shadesjs = window.Shadesjs = function Shadesjs() {
		//TODO: Implement

	};	

	//TODO: _getAllElementsOnPage( )

	Shadesjs._getColor = function(element) {
		console.log(element);
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		console.log(color);
		return color;
	};

	/* TODO:
		* function that increases brightness for elementToShade elements
		* function that decreases brightness for elementToShade elements
		configuration file:
			* elementToShade: (default: true (entire page)) (set to false to shade none of the page) (set to a jquery selector to only shade certain elements).
	*/
})();