'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function delete_null_properties(test, recurse) {
	for (var i in test) {
		//skip clientId here, as we are setting it in apicontrollerbase.js
		if (i == 'clientId') continue;
		if (test[i] === null) {
			delete test[i];
		} else if (recurse && _typeof(test[i]) === 'object') {
			delete_null_properties(test[i], recurse);
		}
	}
}

module.exports.delete_null_properties = delete_null_properties;