'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var logger = require('./logger.js').logger;
var config = require('./config').config;
var constants = require('./constants').constants;

var APIOperationBase = function () {
	function APIOperationBase(apiRequest) {
		_classCallCheck(this, APIOperationBase);

		logger.debug('Enter APIOperationBase constructor');

		this._request = null;
		this._response = null;
		this._endpoint = constants.endpoint.sandbox;

		if (null == apiRequest) logger.error('Input request cannot be null');

		this._request = apiRequest;

		logger.debug('Exit APIOperationBase constructor');
	}

	//abstract


	_createClass(APIOperationBase, [{
		key: 'validateRequest',
		value: function validateRequest() {
			return;
		}
	}, {
		key: 'validate',
		value: function validate() {
			return;
		}
	}, {
		key: 'getResponse',
		value: function getResponse() {
			return this._response;
		}
	}, {
		key: 'getResultcode',
		value: function getResultcode() {
			var resultcode = null;

			if (this._response) resultcode = this._response.resultCode;

			return resultcode;
		}
	}, {
		key: 'getMessagetype',
		value: function getMessagetype() {
			var message = null;

			if (this._response) {
				message = this._response.message;
			}

			return message;
		}
	}, {
		key: 'beforeExecute',
		value: function beforeExecute() {}
	}, {
		key: 'setClientId',
		value: function setClientId() {
		//	for (var obj in this._request) {
		//		this._request[obj]['clientId'] = config.clientId;
		//		break;
		//	}
		}
	}, {
		key: 'setEnvironment',
		value: function setEnvironment(env) {
			this._endpoint = env;
		}
	}, {
		key: 'execute',
		value: function execute(callback) {
			logger.debug('Enter APIOperationBase execute');

			logger.debug('Endpoint : ' + this._endpoint);

			this.beforeExecute();

			this.setClientId();

			var obj = this;

			logger.debug(JSON.stringify(this._request, 2, null));

			var reqOpts = {
				url: this._endpoint,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': this._request.length
				},
				json: true,
				timeout: config.timeout,
				body: this._request
			};

			if (config.proxy.setProxy) {
				reqOpts['proxy'] = config.proxy.proxyUrl;
			}

			request(reqOpts, function (error, response, body) {
				if (error) {
					logger.error(error);
				} else {
					//TODO: slice added due to BOM character. remove once BOM character is removed.
					var responseObj = JSON.parse(body.slice(1));
					logger.debug(JSON.stringify(responseObj, 2, null));
					obj._response = responseObj;
					/*
     var jsonResponse = JSON.stringify(body);
     console.log("escaped body : '" + escape(jsonResponse) + "'");
     console.log("body : '" + jsonResponse + "'");
     logger.debug("Response: " + JSON.stringify(body, 2, null));
     obj._response = body;
     */
					callback();
				}
			});

			logger.debug('Exit APIOperationBase execute');
		}
	}]);

	return APIOperationBase;
}();

module.exports.APIOperationBase = APIOperationBase;
