
(function () {
	
	var Shadesjs = window.Shadesjs = function Shadesjs() {
		//TODO: Implement

	};	

	Shadesjs._getAllElementsToShade = function( ) {
		var elementToShade = Shadesjs.getConfig("elementToShade");
		if(elementToShade === true) {
			// TODO: return all elements on the page
		} 
		if(elementToShade === false) {
			return;
		}
		//TODO: return only the elementToShade selector
	};	

	Shadesjs._getColor = function(element) {
		console.log(element);
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		console.log(color);
		return color;
	};

	/* TODO:
		* function that increases brightness for elementToShade elements
		* function that decreases brightness for elementToShade elements
	*/

	// Below is configuration functionality:

	Shadesjs._configuration = {};
	Shadesjs._defaultConfiguration = {
		// Set to a jquery selector to only shade certain elements
		// Set to true to shade all elements on the page
		// Set to false to shade no elements on the page
		elementToShade: true
	};

	Shadesjs.getConfig = function (name) {
		var value = Shadesjs._configuration[name];
		if (value === undefined) {
			if (! Shadesjs._defaultConfiguration.hasOwnProperty(name)) {
				console.error("Tried to load unknown configuration value:", name);
			}
			value = Shadesjs._defaultConfiguration[name];
		}
		return value;
	};


	Shadesjs.setConfig = function (name, value) {
		//TODO: implement
	};




})();