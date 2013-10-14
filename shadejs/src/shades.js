
(function () {
	var elements = {};

	//TODO: make the following configurable
	//var brightenFactor = ;
	//var darkenFactor = ;
	
	var Shadesjs = window.Shadesjs = function Shadesjs() {
		elements = Shadesjs._getAllElementsToShade();
	};	

	Shadesjs._getAllElementsToShade = function( ) {
		var elementToShade = Shadesjs.getConfig("elementToShade");
		if(elementToShade === true) {
			return document.getElementsByTagName("*");
		} 
		if(elementToShade === false) {
			return;
		}
		return document.getElementsByTagName(elementToShade); //TODO: does this work as intended?
	};	

	Shadesjs._getColor = function(element) {
		var color = window.getComputedStyle(element, null).getPropertyValue("background-color");
		return color;
	};

	Shadesjs._setColor = function(element, color) {
		element.style.backgroundColor = color;
	};

	Shadesjs._getRGBA = function(color) {
		if (typeof color === 'string' || color instanceof String){
			return color.match(/\d+/g);
		} else {
			console.log("Error: Trying to get the RGBA of a non string.");
		}
	};

	Shadesjs.Brighten = function ( ) {
		//TODO: Implement
		if (elements) {
			for (var i = 0; i < elements.length; i++) {
				var color = Shadesjs._getColor(elements[i]);

				if (color) {
					var rgbaVals = Shadesjs._getRGBA(color);
					
					var r = rgbaVals[0];
					var g = rgbaVals[1];
					var b = rgbaVals[2];
					if (rgbaVals.length === 4){
						var a = rgbaVals[3];
						Shadesjs._setColor(elements[i], "rgba(" + r + ", " + g + ", " + b + ", " + a + ")");
					} else {
						Shadesjs._setColor(elements[i], "rgb(" + r + ", " + g + ", " + b + ")");
					}
				}
			}
		}
	};

	Shadesjs.Darken = function ( ) {
		//TODO: Implement
	};

	/* TODO:
		*  ('public') function that increases brightness for elementToShade elements
		*  ('public') function that decreases brightness for elementToShade elements
	*/

	Shadesjs._configuration = {};
	Shadesjs._defaultConfiguration = {
		// Set to a jquery selector to only shade certain elements
		// If set to true to shade all elements on the page
		// If set to false to shade no elements on the page
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

	// Load Shadesjs
	window.onload = onLoad;
	function onLoad() {
		Shadesjs();
	}

})();