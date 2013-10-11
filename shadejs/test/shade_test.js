"using strict";

var buster = require("buster");
var assert = buster.assertions.assert;
var shade = require("../src/shade.js");


buster.testCase("test test", {
	setUp: function () {

	},
	"True Test": function () {
			assert.equals(1===1, true);
	},
	"False Test": function () {
		assert.equals(2+2===5, false);
	}
});
