'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APIOperationBase = require('./apicontrollersbase.js').APIOperationBase;
var logger = require('./logger.js').logger;

var ANetApiController = function (_APIOperationBase) {
	_inherits(ANetApiController, _APIOperationBase);

	function ANetApiController(apiRequest) {
		_classCallCheck(this, ANetApiController);

		logger.debug('Enter ANetApiController constructor');

		var _this = _possibleConstructorReturn(this, (ANetApiController.__proto__ || Object.getPrototypeOf(ANetApiController)).call(this, apiRequest));

		logger.debug('Exit ANetApiController constructor');
		return _this;
	}

	_createClass(ANetApiController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ANetApiRequest';
		}
	}]);

	return ANetApiController;
}(APIOperationBase);

module.exports.ANetApiController = ANetApiController;

var ARBCancelSubscriptionController = function (_APIOperationBase2) {
	_inherits(ARBCancelSubscriptionController, _APIOperationBase2);

	function ARBCancelSubscriptionController(apiRequest) {
		_classCallCheck(this, ARBCancelSubscriptionController);

		logger.debug('Enter ARBCancelSubscriptionController constructor');

		var _this2 = _possibleConstructorReturn(this, (ARBCancelSubscriptionController.__proto__ || Object.getPrototypeOf(ARBCancelSubscriptionController)).call(this, apiRequest));

		logger.debug('Exit ARBCancelSubscriptionController constructor');
		return _this2;
	}

	_createClass(ARBCancelSubscriptionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ARBCancelSubscriptionRequest';
		}
	}]);

	return ARBCancelSubscriptionController;
}(APIOperationBase);

module.exports.ARBCancelSubscriptionController = ARBCancelSubscriptionController;

var ARBCreateSubscriptionController = function (_APIOperationBase3) {
	_inherits(ARBCreateSubscriptionController, _APIOperationBase3);

	function ARBCreateSubscriptionController(apiRequest) {
		_classCallCheck(this, ARBCreateSubscriptionController);

		logger.debug('Enter ARBCreateSubscriptionController constructor');

		var _this3 = _possibleConstructorReturn(this, (ARBCreateSubscriptionController.__proto__ || Object.getPrototypeOf(ARBCreateSubscriptionController)).call(this, apiRequest));

		logger.debug('Exit ARBCreateSubscriptionController constructor');
		return _this3;
	}

	_createClass(ARBCreateSubscriptionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ARBCreateSubscriptionRequest';
		}
	}]);

	return ARBCreateSubscriptionController;
}(APIOperationBase);

module.exports.ARBCreateSubscriptionController = ARBCreateSubscriptionController;

var ARBGetSubscriptionController = function (_APIOperationBase4) {
	_inherits(ARBGetSubscriptionController, _APIOperationBase4);

	function ARBGetSubscriptionController(apiRequest) {
		_classCallCheck(this, ARBGetSubscriptionController);

		logger.debug('Enter ARBGetSubscriptionController constructor');

		var _this4 = _possibleConstructorReturn(this, (ARBGetSubscriptionController.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionController)).call(this, apiRequest));

		logger.debug('Exit ARBGetSubscriptionController constructor');
		return _this4;
	}

	_createClass(ARBGetSubscriptionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ARBGetSubscriptionRequest';
		}
	}]);

	return ARBGetSubscriptionController;
}(APIOperationBase);

module.exports.ARBGetSubscriptionController = ARBGetSubscriptionController;

var ARBGetSubscriptionListController = function (_APIOperationBase5) {
	_inherits(ARBGetSubscriptionListController, _APIOperationBase5);

	function ARBGetSubscriptionListController(apiRequest) {
		_classCallCheck(this, ARBGetSubscriptionListController);

		logger.debug('Enter ARBGetSubscriptionListController constructor');

		var _this5 = _possibleConstructorReturn(this, (ARBGetSubscriptionListController.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionListController)).call(this, apiRequest));

		logger.debug('Exit ARBGetSubscriptionListController constructor');
		return _this5;
	}

	_createClass(ARBGetSubscriptionListController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ARBGetSubscriptionListRequest';
		}
	}]);

	return ARBGetSubscriptionListController;
}(APIOperationBase);

module.exports.ARBGetSubscriptionListController = ARBGetSubscriptionListController;

var ARBGetSubscriptionStatusController = function (_APIOperationBase6) {
	_inherits(ARBGetSubscriptionStatusController, _APIOperationBase6);

	function ARBGetSubscriptionStatusController(apiRequest) {
		_classCallCheck(this, ARBGetSubscriptionStatusController);

		logger.debug('Enter ARBGetSubscriptionStatusController constructor');

		var _this6 = _possibleConstructorReturn(this, (ARBGetSubscriptionStatusController.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionStatusController)).call(this, apiRequest));

		logger.debug('Exit ARBGetSubscriptionStatusController constructor');
		return _this6;
	}

	_createClass(ARBGetSubscriptionStatusController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ARBGetSubscriptionStatusRequest';
		}
	}]);

	return ARBGetSubscriptionStatusController;
}(APIOperationBase);

module.exports.ARBGetSubscriptionStatusController = ARBGetSubscriptionStatusController;

var ARBUpdateSubscriptionController = function (_APIOperationBase7) {
	_inherits(ARBUpdateSubscriptionController, _APIOperationBase7);

	function ARBUpdateSubscriptionController(apiRequest) {
		_classCallCheck(this, ARBUpdateSubscriptionController);

		logger.debug('Enter ARBUpdateSubscriptionController constructor');

		var _this7 = _possibleConstructorReturn(this, (ARBUpdateSubscriptionController.__proto__ || Object.getPrototypeOf(ARBUpdateSubscriptionController)).call(this, apiRequest));

		logger.debug('Exit ARBUpdateSubscriptionController constructor');
		return _this7;
	}

	_createClass(ARBUpdateSubscriptionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ARBUpdateSubscriptionRequest';
		}
	}]);

	return ARBUpdateSubscriptionController;
}(APIOperationBase);

module.exports.ARBUpdateSubscriptionController = ARBUpdateSubscriptionController;

var AuthenticateTestController = function (_APIOperationBase8) {
	_inherits(AuthenticateTestController, _APIOperationBase8);

	function AuthenticateTestController(apiRequest) {
		_classCallCheck(this, AuthenticateTestController);

		logger.debug('Enter AuthenticateTestController constructor');

		var _this8 = _possibleConstructorReturn(this, (AuthenticateTestController.__proto__ || Object.getPrototypeOf(AuthenticateTestController)).call(this, apiRequest));

		logger.debug('Exit AuthenticateTestController constructor');
		return _this8;
	}

	_createClass(AuthenticateTestController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'AuthenticateTestRequest';
		}
	}]);

	return AuthenticateTestController;
}(APIOperationBase);

module.exports.AuthenticateTestController = AuthenticateTestController;

var CreateCustomerPaymentProfileController = function (_APIOperationBase9) {
	_inherits(CreateCustomerPaymentProfileController, _APIOperationBase9);

	function CreateCustomerPaymentProfileController(apiRequest) {
		_classCallCheck(this, CreateCustomerPaymentProfileController);

		logger.debug('Enter CreateCustomerPaymentProfileController constructor');

		var _this9 = _possibleConstructorReturn(this, (CreateCustomerPaymentProfileController.__proto__ || Object.getPrototypeOf(CreateCustomerPaymentProfileController)).call(this, apiRequest));

		logger.debug('Exit CreateCustomerPaymentProfileController constructor');
		return _this9;
	}

	_createClass(CreateCustomerPaymentProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'CreateCustomerPaymentProfileRequest';
		}
	}]);

	return CreateCustomerPaymentProfileController;
}(APIOperationBase);

module.exports.CreateCustomerPaymentProfileController = CreateCustomerPaymentProfileController;

var CreateCustomerProfileController = function (_APIOperationBase10) {
	_inherits(CreateCustomerProfileController, _APIOperationBase10);

	function CreateCustomerProfileController(apiRequest) {
		_classCallCheck(this, CreateCustomerProfileController);

		logger.debug('Enter CreateCustomerProfileController constructor');

		var _this10 = _possibleConstructorReturn(this, (CreateCustomerProfileController.__proto__ || Object.getPrototypeOf(CreateCustomerProfileController)).call(this, apiRequest));

		logger.debug('Exit CreateCustomerProfileController constructor');
		return _this10;
	}

	_createClass(CreateCustomerProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'CreateCustomerProfileRequest';
		}
	}]);

	return CreateCustomerProfileController;
}(APIOperationBase);

module.exports.CreateCustomerProfileController = CreateCustomerProfileController;

var CreateCustomerProfileFromTransactionController = function (_APIOperationBase11) {
	_inherits(CreateCustomerProfileFromTransactionController, _APIOperationBase11);

	function CreateCustomerProfileFromTransactionController(apiRequest) {
		_classCallCheck(this, CreateCustomerProfileFromTransactionController);

		logger.debug('Enter CreateCustomerProfileFromTransactionController constructor');

		var _this11 = _possibleConstructorReturn(this, (CreateCustomerProfileFromTransactionController.__proto__ || Object.getPrototypeOf(CreateCustomerProfileFromTransactionController)).call(this, apiRequest));

		logger.debug('Exit CreateCustomerProfileFromTransactionController constructor');
		return _this11;
	}

	_createClass(CreateCustomerProfileFromTransactionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'CreateCustomerProfileFromTransactionRequest';
		}
	}]);

	return CreateCustomerProfileFromTransactionController;
}(APIOperationBase);

module.exports.CreateCustomerProfileFromTransactionController = CreateCustomerProfileFromTransactionController;

var CreateCustomerProfileTransactionController = function (_APIOperationBase12) {
	_inherits(CreateCustomerProfileTransactionController, _APIOperationBase12);

	function CreateCustomerProfileTransactionController(apiRequest) {
		_classCallCheck(this, CreateCustomerProfileTransactionController);

		logger.debug('Enter CreateCustomerProfileTransactionController constructor');

		var _this12 = _possibleConstructorReturn(this, (CreateCustomerProfileTransactionController.__proto__ || Object.getPrototypeOf(CreateCustomerProfileTransactionController)).call(this, apiRequest));

		logger.debug('Exit CreateCustomerProfileTransactionController constructor');
		return _this12;
	}

	_createClass(CreateCustomerProfileTransactionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'CreateCustomerProfileTransactionRequest';
		}
	}]);

	return CreateCustomerProfileTransactionController;
}(APIOperationBase);

module.exports.CreateCustomerProfileTransactionController = CreateCustomerProfileTransactionController;

var CreateCustomerShippingAddressController = function (_APIOperationBase13) {
	_inherits(CreateCustomerShippingAddressController, _APIOperationBase13);

	function CreateCustomerShippingAddressController(apiRequest) {
		_classCallCheck(this, CreateCustomerShippingAddressController);

		logger.debug('Enter CreateCustomerShippingAddressController constructor');

		var _this13 = _possibleConstructorReturn(this, (CreateCustomerShippingAddressController.__proto__ || Object.getPrototypeOf(CreateCustomerShippingAddressController)).call(this, apiRequest));

		logger.debug('Exit CreateCustomerShippingAddressController constructor');
		return _this13;
	}

	_createClass(CreateCustomerShippingAddressController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'CreateCustomerShippingAddressRequest';
		}
	}]);

	return CreateCustomerShippingAddressController;
}(APIOperationBase);

module.exports.CreateCustomerShippingAddressController = CreateCustomerShippingAddressController;

var CreateTransactionController = function (_APIOperationBase14) {
	_inherits(CreateTransactionController, _APIOperationBase14);

	function CreateTransactionController(apiRequest) {
		_classCallCheck(this, CreateTransactionController);

		logger.debug('Enter CreateTransactionController constructor');

		var _this14 = _possibleConstructorReturn(this, (CreateTransactionController.__proto__ || Object.getPrototypeOf(CreateTransactionController)).call(this, apiRequest));

		logger.debug('Exit CreateTransactionController constructor');
		return _this14;
	}

	_createClass(CreateTransactionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'CreateTransactionRequest';
		}
	}]);

	return CreateTransactionController;
}(APIOperationBase);

module.exports.CreateTransactionController = CreateTransactionController;

var DecryptPaymentDataController = function (_APIOperationBase15) {
	_inherits(DecryptPaymentDataController, _APIOperationBase15);

	function DecryptPaymentDataController(apiRequest) {
		_classCallCheck(this, DecryptPaymentDataController);

		logger.debug('Enter DecryptPaymentDataController constructor');

		var _this15 = _possibleConstructorReturn(this, (DecryptPaymentDataController.__proto__ || Object.getPrototypeOf(DecryptPaymentDataController)).call(this, apiRequest));

		logger.debug('Exit DecryptPaymentDataController constructor');
		return _this15;
	}

	_createClass(DecryptPaymentDataController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'DecryptPaymentDataRequest';
		}
	}]);

	return DecryptPaymentDataController;
}(APIOperationBase);

module.exports.DecryptPaymentDataController = DecryptPaymentDataController;

var DeleteCustomerPaymentProfileController = function (_APIOperationBase16) {
	_inherits(DeleteCustomerPaymentProfileController, _APIOperationBase16);

	function DeleteCustomerPaymentProfileController(apiRequest) {
		_classCallCheck(this, DeleteCustomerPaymentProfileController);

		logger.debug('Enter DeleteCustomerPaymentProfileController constructor');

		var _this16 = _possibleConstructorReturn(this, (DeleteCustomerPaymentProfileController.__proto__ || Object.getPrototypeOf(DeleteCustomerPaymentProfileController)).call(this, apiRequest));

		logger.debug('Exit DeleteCustomerPaymentProfileController constructor');
		return _this16;
	}

	_createClass(DeleteCustomerPaymentProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'DeleteCustomerPaymentProfileRequest';
		}
	}]);

	return DeleteCustomerPaymentProfileController;
}(APIOperationBase);

module.exports.DeleteCustomerPaymentProfileController = DeleteCustomerPaymentProfileController;

var DeleteCustomerProfileController = function (_APIOperationBase17) {
	_inherits(DeleteCustomerProfileController, _APIOperationBase17);

	function DeleteCustomerProfileController(apiRequest) {
		_classCallCheck(this, DeleteCustomerProfileController);

		logger.debug('Enter DeleteCustomerProfileController constructor');

		var _this17 = _possibleConstructorReturn(this, (DeleteCustomerProfileController.__proto__ || Object.getPrototypeOf(DeleteCustomerProfileController)).call(this, apiRequest));

		logger.debug('Exit DeleteCustomerProfileController constructor');
		return _this17;
	}

	_createClass(DeleteCustomerProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'DeleteCustomerProfileRequest';
		}
	}]);

	return DeleteCustomerProfileController;
}(APIOperationBase);

module.exports.DeleteCustomerProfileController = DeleteCustomerProfileController;

var DeleteCustomerShippingAddressController = function (_APIOperationBase18) {
	_inherits(DeleteCustomerShippingAddressController, _APIOperationBase18);

	function DeleteCustomerShippingAddressController(apiRequest) {
		_classCallCheck(this, DeleteCustomerShippingAddressController);

		logger.debug('Enter DeleteCustomerShippingAddressController constructor');

		var _this18 = _possibleConstructorReturn(this, (DeleteCustomerShippingAddressController.__proto__ || Object.getPrototypeOf(DeleteCustomerShippingAddressController)).call(this, apiRequest));

		logger.debug('Exit DeleteCustomerShippingAddressController constructor');
		return _this18;
	}

	_createClass(DeleteCustomerShippingAddressController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'DeleteCustomerShippingAddressRequest';
		}
	}]);

	return DeleteCustomerShippingAddressController;
}(APIOperationBase);

module.exports.DeleteCustomerShippingAddressController = DeleteCustomerShippingAddressController;

var GetAUJobDetailsController = function (_APIOperationBase19) {
	_inherits(GetAUJobDetailsController, _APIOperationBase19);

	function GetAUJobDetailsController(apiRequest) {
		_classCallCheck(this, GetAUJobDetailsController);

		logger.debug('Enter GetAUJobDetailsController constructor');

		var _this19 = _possibleConstructorReturn(this, (GetAUJobDetailsController.__proto__ || Object.getPrototypeOf(GetAUJobDetailsController)).call(this, apiRequest));

		logger.debug('Exit GetAUJobDetailsController constructor');
		return _this19;
	}

	_createClass(GetAUJobDetailsController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetAUJobDetailsRequest';
		}
	}]);

	return GetAUJobDetailsController;
}(APIOperationBase);

module.exports.GetAUJobDetailsController = GetAUJobDetailsController;

var GetAUJobSummaryController = function (_APIOperationBase20) {
	_inherits(GetAUJobSummaryController, _APIOperationBase20);

	function GetAUJobSummaryController(apiRequest) {
		_classCallCheck(this, GetAUJobSummaryController);

		logger.debug('Enter GetAUJobSummaryController constructor');

		var _this20 = _possibleConstructorReturn(this, (GetAUJobSummaryController.__proto__ || Object.getPrototypeOf(GetAUJobSummaryController)).call(this, apiRequest));

		logger.debug('Exit GetAUJobSummaryController constructor');
		return _this20;
	}

	_createClass(GetAUJobSummaryController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetAUJobSummaryRequest';
		}
	}]);

	return GetAUJobSummaryController;
}(APIOperationBase);

module.exports.GetAUJobSummaryController = GetAUJobSummaryController;

var GetBatchStatisticsController = function (_APIOperationBase21) {
	_inherits(GetBatchStatisticsController, _APIOperationBase21);

	function GetBatchStatisticsController(apiRequest) {
		_classCallCheck(this, GetBatchStatisticsController);

		logger.debug('Enter GetBatchStatisticsController constructor');

		var _this21 = _possibleConstructorReturn(this, (GetBatchStatisticsController.__proto__ || Object.getPrototypeOf(GetBatchStatisticsController)).call(this, apiRequest));

		logger.debug('Exit GetBatchStatisticsController constructor');
		return _this21;
	}

	_createClass(GetBatchStatisticsController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetBatchStatisticsRequest';
		}
	}]);

	return GetBatchStatisticsController;
}(APIOperationBase);

module.exports.GetBatchStatisticsController = GetBatchStatisticsController;

var GetCustomerPaymentProfileController = function (_APIOperationBase22) {
	_inherits(GetCustomerPaymentProfileController, _APIOperationBase22);

	function GetCustomerPaymentProfileController(apiRequest) {
		_classCallCheck(this, GetCustomerPaymentProfileController);

		logger.debug('Enter GetCustomerPaymentProfileController constructor');

		var _this22 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileController.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileController)).call(this, apiRequest));

		logger.debug('Exit GetCustomerPaymentProfileController constructor');
		return _this22;
	}

	_createClass(GetCustomerPaymentProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetCustomerPaymentProfileRequest';
		}
	}]);

	return GetCustomerPaymentProfileController;
}(APIOperationBase);

module.exports.GetCustomerPaymentProfileController = GetCustomerPaymentProfileController;

var GetCustomerPaymentProfileListController = function (_APIOperationBase23) {
	_inherits(GetCustomerPaymentProfileListController, _APIOperationBase23);

	function GetCustomerPaymentProfileListController(apiRequest) {
		_classCallCheck(this, GetCustomerPaymentProfileListController);

		logger.debug('Enter GetCustomerPaymentProfileListController constructor');

		var _this23 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileListController.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileListController)).call(this, apiRequest));

		logger.debug('Exit GetCustomerPaymentProfileListController constructor');
		return _this23;
	}

	_createClass(GetCustomerPaymentProfileListController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetCustomerPaymentProfileListRequest';
		}
	}]);

	return GetCustomerPaymentProfileListController;
}(APIOperationBase);

module.exports.GetCustomerPaymentProfileListController = GetCustomerPaymentProfileListController;

var GetCustomerProfileController = function (_APIOperationBase24) {
	_inherits(GetCustomerProfileController, _APIOperationBase24);

	function GetCustomerProfileController(apiRequest) {
		_classCallCheck(this, GetCustomerProfileController);

		logger.debug('Enter GetCustomerProfileController constructor');

		var _this24 = _possibleConstructorReturn(this, (GetCustomerProfileController.__proto__ || Object.getPrototypeOf(GetCustomerProfileController)).call(this, apiRequest));

		logger.debug('Exit GetCustomerProfileController constructor');
		return _this24;
	}

	_createClass(GetCustomerProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetCustomerProfileRequest';
		}
	}]);

	return GetCustomerProfileController;
}(APIOperationBase);

module.exports.GetCustomerProfileController = GetCustomerProfileController;

var GetCustomerProfileIdsController = function (_APIOperationBase25) {
	_inherits(GetCustomerProfileIdsController, _APIOperationBase25);

	function GetCustomerProfileIdsController(apiRequest) {
		_classCallCheck(this, GetCustomerProfileIdsController);

		logger.debug('Enter GetCustomerProfileIdsController constructor');

		var _this25 = _possibleConstructorReturn(this, (GetCustomerProfileIdsController.__proto__ || Object.getPrototypeOf(GetCustomerProfileIdsController)).call(this, apiRequest));

		logger.debug('Exit GetCustomerProfileIdsController constructor');
		return _this25;
	}

	_createClass(GetCustomerProfileIdsController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetCustomerProfileIdsRequest';
		}
	}]);

	return GetCustomerProfileIdsController;
}(APIOperationBase);

module.exports.GetCustomerProfileIdsController = GetCustomerProfileIdsController;

var GetCustomerShippingAddressController = function (_APIOperationBase26) {
	_inherits(GetCustomerShippingAddressController, _APIOperationBase26);

	function GetCustomerShippingAddressController(apiRequest) {
		_classCallCheck(this, GetCustomerShippingAddressController);

		logger.debug('Enter GetCustomerShippingAddressController constructor');

		var _this26 = _possibleConstructorReturn(this, (GetCustomerShippingAddressController.__proto__ || Object.getPrototypeOf(GetCustomerShippingAddressController)).call(this, apiRequest));

		logger.debug('Exit GetCustomerShippingAddressController constructor');
		return _this26;
	}

	_createClass(GetCustomerShippingAddressController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetCustomerShippingAddressRequest';
		}
	}]);

	return GetCustomerShippingAddressController;
}(APIOperationBase);

module.exports.GetCustomerShippingAddressController = GetCustomerShippingAddressController;

var GetHostedPaymentPageController = function (_APIOperationBase27) {
	_inherits(GetHostedPaymentPageController, _APIOperationBase27);

	function GetHostedPaymentPageController(apiRequest) {
		_classCallCheck(this, GetHostedPaymentPageController);

		logger.debug('Enter GetHostedPaymentPageController constructor');

		var _this27 = _possibleConstructorReturn(this, (GetHostedPaymentPageController.__proto__ || Object.getPrototypeOf(GetHostedPaymentPageController)).call(this, apiRequest));

		logger.debug('Exit GetHostedPaymentPageController constructor');
		return _this27;
	}

	_createClass(GetHostedPaymentPageController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetHostedPaymentPageRequest';
		}
	}]);

	return GetHostedPaymentPageController;
}(APIOperationBase);

module.exports.GetHostedPaymentPageController = GetHostedPaymentPageController;

var GetHostedProfilePageController = function (_APIOperationBase28) {
	_inherits(GetHostedProfilePageController, _APIOperationBase28);

	function GetHostedProfilePageController(apiRequest) {
		_classCallCheck(this, GetHostedProfilePageController);

		logger.debug('Enter GetHostedProfilePageController constructor');

		var _this28 = _possibleConstructorReturn(this, (GetHostedProfilePageController.__proto__ || Object.getPrototypeOf(GetHostedProfilePageController)).call(this, apiRequest));

		logger.debug('Exit GetHostedProfilePageController constructor');
		return _this28;
	}

	_createClass(GetHostedProfilePageController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetHostedProfilePageRequest';
		}
	}]);

	return GetHostedProfilePageController;
}(APIOperationBase);

module.exports.GetHostedProfilePageController = GetHostedProfilePageController;

var GetMerchantDetailsController = function (_APIOperationBase29) {
	_inherits(GetMerchantDetailsController, _APIOperationBase29);

	function GetMerchantDetailsController(apiRequest) {
		_classCallCheck(this, GetMerchantDetailsController);

		logger.debug('Enter GetMerchantDetailsController constructor');

		var _this29 = _possibleConstructorReturn(this, (GetMerchantDetailsController.__proto__ || Object.getPrototypeOf(GetMerchantDetailsController)).call(this, apiRequest));

		logger.debug('Exit GetMerchantDetailsController constructor');
		return _this29;
	}

	_createClass(GetMerchantDetailsController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetMerchantDetailsRequest';
		}
	}]);

	return GetMerchantDetailsController;
}(APIOperationBase);

module.exports.GetMerchantDetailsController = GetMerchantDetailsController;

var GetSettledBatchListController = function (_APIOperationBase30) {
	_inherits(GetSettledBatchListController, _APIOperationBase30);

	function GetSettledBatchListController(apiRequest) {
		_classCallCheck(this, GetSettledBatchListController);

		logger.debug('Enter GetSettledBatchListController constructor');

		var _this30 = _possibleConstructorReturn(this, (GetSettledBatchListController.__proto__ || Object.getPrototypeOf(GetSettledBatchListController)).call(this, apiRequest));

		logger.debug('Exit GetSettledBatchListController constructor');
		return _this30;
	}

	_createClass(GetSettledBatchListController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetSettledBatchListRequest';
		}
	}]);

	return GetSettledBatchListController;
}(APIOperationBase);

module.exports.GetSettledBatchListController = GetSettledBatchListController;

var GetTransactionDetailsController = function (_APIOperationBase31) {
	_inherits(GetTransactionDetailsController, _APIOperationBase31);

	function GetTransactionDetailsController(apiRequest) {
		_classCallCheck(this, GetTransactionDetailsController);

		logger.debug('Enter GetTransactionDetailsController constructor');

		var _this31 = _possibleConstructorReturn(this, (GetTransactionDetailsController.__proto__ || Object.getPrototypeOf(GetTransactionDetailsController)).call(this, apiRequest));

		logger.debug('Exit GetTransactionDetailsController constructor');
		return _this31;
	}

	_createClass(GetTransactionDetailsController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetTransactionDetailsRequest';
		}
	}]);

	return GetTransactionDetailsController;
}(APIOperationBase);

module.exports.GetTransactionDetailsController = GetTransactionDetailsController;

var GetTransactionListController = function (_APIOperationBase32) {
	_inherits(GetTransactionListController, _APIOperationBase32);

	function GetTransactionListController(apiRequest) {
		_classCallCheck(this, GetTransactionListController);

		logger.debug('Enter GetTransactionListController constructor');

		var _this32 = _possibleConstructorReturn(this, (GetTransactionListController.__proto__ || Object.getPrototypeOf(GetTransactionListController)).call(this, apiRequest));

		logger.debug('Exit GetTransactionListController constructor');
		return _this32;
	}

	_createClass(GetTransactionListController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetTransactionListRequest';
		}
	}]);

	return GetTransactionListController;
}(APIOperationBase);

module.exports.GetTransactionListController = GetTransactionListController;

var GetTransactionListForCustomerController = function (_APIOperationBase33) {
	_inherits(GetTransactionListForCustomerController, _APIOperationBase33);

	function GetTransactionListForCustomerController(apiRequest) {
		_classCallCheck(this, GetTransactionListForCustomerController);

		logger.debug('Enter GetTransactionListForCustomerController constructor');

		var _this33 = _possibleConstructorReturn(this, (GetTransactionListForCustomerController.__proto__ || Object.getPrototypeOf(GetTransactionListForCustomerController)).call(this, apiRequest));

		logger.debug('Exit GetTransactionListForCustomerController constructor');
		return _this33;
	}

	_createClass(GetTransactionListForCustomerController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetTransactionListForCustomerRequest';
		}
	}]);

	return GetTransactionListForCustomerController;
}(APIOperationBase);

module.exports.GetTransactionListForCustomerController = GetTransactionListForCustomerController;

var GetUnsettledTransactionListController = function (_APIOperationBase34) {
	_inherits(GetUnsettledTransactionListController, _APIOperationBase34);

	function GetUnsettledTransactionListController(apiRequest) {
		_classCallCheck(this, GetUnsettledTransactionListController);

		logger.debug('Enter GetUnsettledTransactionListController constructor');

		var _this34 = _possibleConstructorReturn(this, (GetUnsettledTransactionListController.__proto__ || Object.getPrototypeOf(GetUnsettledTransactionListController)).call(this, apiRequest));

		logger.debug('Exit GetUnsettledTransactionListController constructor');
		return _this34;
	}

	_createClass(GetUnsettledTransactionListController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'GetUnsettledTransactionListRequest';
		}
	}]);

	return GetUnsettledTransactionListController;
}(APIOperationBase);

module.exports.GetUnsettledTransactionListController = GetUnsettledTransactionListController;

var IsAliveController = function (_APIOperationBase35) {
	_inherits(IsAliveController, _APIOperationBase35);

	function IsAliveController(apiRequest) {
		_classCallCheck(this, IsAliveController);

		logger.debug('Enter IsAliveController constructor');

		var _this35 = _possibleConstructorReturn(this, (IsAliveController.__proto__ || Object.getPrototypeOf(IsAliveController)).call(this, apiRequest));

		logger.debug('Exit IsAliveController constructor');
		return _this35;
	}

	_createClass(IsAliveController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'IsAliveRequest';
		}
	}]);

	return IsAliveController;
}(APIOperationBase);

module.exports.IsAliveController = IsAliveController;

var LogoutController = function (_APIOperationBase36) {
	_inherits(LogoutController, _APIOperationBase36);

	function LogoutController(apiRequest) {
		_classCallCheck(this, LogoutController);

		logger.debug('Enter LogoutController constructor');

		var _this36 = _possibleConstructorReturn(this, (LogoutController.__proto__ || Object.getPrototypeOf(LogoutController)).call(this, apiRequest));

		logger.debug('Exit LogoutController constructor');
		return _this36;
	}

	_createClass(LogoutController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'LogoutRequest';
		}
	}]);

	return LogoutController;
}(APIOperationBase);

module.exports.LogoutController = LogoutController;

var MobileDeviceLoginController = function (_APIOperationBase37) {
	_inherits(MobileDeviceLoginController, _APIOperationBase37);

	function MobileDeviceLoginController(apiRequest) {
		_classCallCheck(this, MobileDeviceLoginController);

		logger.debug('Enter MobileDeviceLoginController constructor');

		var _this37 = _possibleConstructorReturn(this, (MobileDeviceLoginController.__proto__ || Object.getPrototypeOf(MobileDeviceLoginController)).call(this, apiRequest));

		logger.debug('Exit MobileDeviceLoginController constructor');
		return _this37;
	}

	_createClass(MobileDeviceLoginController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'MobileDeviceLoginRequest';
		}
	}]);

	return MobileDeviceLoginController;
}(APIOperationBase);

module.exports.MobileDeviceLoginController = MobileDeviceLoginController;

var MobileDeviceRegistrationController = function (_APIOperationBase38) {
	_inherits(MobileDeviceRegistrationController, _APIOperationBase38);

	function MobileDeviceRegistrationController(apiRequest) {
		_classCallCheck(this, MobileDeviceRegistrationController);

		logger.debug('Enter MobileDeviceRegistrationController constructor');

		var _this38 = _possibleConstructorReturn(this, (MobileDeviceRegistrationController.__proto__ || Object.getPrototypeOf(MobileDeviceRegistrationController)).call(this, apiRequest));

		logger.debug('Exit MobileDeviceRegistrationController constructor');
		return _this38;
	}

	_createClass(MobileDeviceRegistrationController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'MobileDeviceRegistrationRequest';
		}
	}]);

	return MobileDeviceRegistrationController;
}(APIOperationBase);

module.exports.MobileDeviceRegistrationController = MobileDeviceRegistrationController;

var SecurePaymentContainerController = function (_APIOperationBase39) {
	_inherits(SecurePaymentContainerController, _APIOperationBase39);

	function SecurePaymentContainerController(apiRequest) {
		_classCallCheck(this, SecurePaymentContainerController);

		logger.debug('Enter SecurePaymentContainerController constructor');

		var _this39 = _possibleConstructorReturn(this, (SecurePaymentContainerController.__proto__ || Object.getPrototypeOf(SecurePaymentContainerController)).call(this, apiRequest));

		logger.debug('Exit SecurePaymentContainerController constructor');
		return _this39;
	}

	_createClass(SecurePaymentContainerController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'SecurePaymentContainerRequest';
		}
	}]);

	return SecurePaymentContainerController;
}(APIOperationBase);

module.exports.SecurePaymentContainerController = SecurePaymentContainerController;

var SendCustomerTransactionReceiptController = function (_APIOperationBase40) {
	_inherits(SendCustomerTransactionReceiptController, _APIOperationBase40);

	function SendCustomerTransactionReceiptController(apiRequest) {
		_classCallCheck(this, SendCustomerTransactionReceiptController);

		logger.debug('Enter SendCustomerTransactionReceiptController constructor');

		var _this40 = _possibleConstructorReturn(this, (SendCustomerTransactionReceiptController.__proto__ || Object.getPrototypeOf(SendCustomerTransactionReceiptController)).call(this, apiRequest));

		logger.debug('Exit SendCustomerTransactionReceiptController constructor');
		return _this40;
	}

	_createClass(SendCustomerTransactionReceiptController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'SendCustomerTransactionReceiptRequest';
		}
	}]);

	return SendCustomerTransactionReceiptController;
}(APIOperationBase);

module.exports.SendCustomerTransactionReceiptController = SendCustomerTransactionReceiptController;

var UpdateCustomerPaymentProfileController = function (_APIOperationBase41) {
	_inherits(UpdateCustomerPaymentProfileController, _APIOperationBase41);

	function UpdateCustomerPaymentProfileController(apiRequest) {
		_classCallCheck(this, UpdateCustomerPaymentProfileController);

		logger.debug('Enter UpdateCustomerPaymentProfileController constructor');

		var _this41 = _possibleConstructorReturn(this, (UpdateCustomerPaymentProfileController.__proto__ || Object.getPrototypeOf(UpdateCustomerPaymentProfileController)).call(this, apiRequest));

		logger.debug('Exit UpdateCustomerPaymentProfileController constructor');
		return _this41;
	}

	_createClass(UpdateCustomerPaymentProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'UpdateCustomerPaymentProfileRequest';
		}
	}]);

	return UpdateCustomerPaymentProfileController;
}(APIOperationBase);

module.exports.UpdateCustomerPaymentProfileController = UpdateCustomerPaymentProfileController;

var UpdateCustomerProfileController = function (_APIOperationBase42) {
	_inherits(UpdateCustomerProfileController, _APIOperationBase42);

	function UpdateCustomerProfileController(apiRequest) {
		_classCallCheck(this, UpdateCustomerProfileController);

		logger.debug('Enter UpdateCustomerProfileController constructor');

		var _this42 = _possibleConstructorReturn(this, (UpdateCustomerProfileController.__proto__ || Object.getPrototypeOf(UpdateCustomerProfileController)).call(this, apiRequest));

		logger.debug('Exit UpdateCustomerProfileController constructor');
		return _this42;
	}

	_createClass(UpdateCustomerProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'UpdateCustomerProfileRequest';
		}
	}]);

	return UpdateCustomerProfileController;
}(APIOperationBase);

module.exports.UpdateCustomerProfileController = UpdateCustomerProfileController;

var UpdateCustomerShippingAddressController = function (_APIOperationBase43) {
	_inherits(UpdateCustomerShippingAddressController, _APIOperationBase43);

	function UpdateCustomerShippingAddressController(apiRequest) {
		_classCallCheck(this, UpdateCustomerShippingAddressController);

		logger.debug('Enter UpdateCustomerShippingAddressController constructor');

		var _this43 = _possibleConstructorReturn(this, (UpdateCustomerShippingAddressController.__proto__ || Object.getPrototypeOf(UpdateCustomerShippingAddressController)).call(this, apiRequest));

		logger.debug('Exit UpdateCustomerShippingAddressController constructor');
		return _this43;
	}

	_createClass(UpdateCustomerShippingAddressController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'UpdateCustomerShippingAddressRequest';
		}
	}]);

	return UpdateCustomerShippingAddressController;
}(APIOperationBase);

module.exports.UpdateCustomerShippingAddressController = UpdateCustomerShippingAddressController;

var UpdateHeldTransactionController = function (_APIOperationBase44) {
	_inherits(UpdateHeldTransactionController, _APIOperationBase44);

	function UpdateHeldTransactionController(apiRequest) {
		_classCallCheck(this, UpdateHeldTransactionController);

		logger.debug('Enter UpdateHeldTransactionController constructor');

		var _this44 = _possibleConstructorReturn(this, (UpdateHeldTransactionController.__proto__ || Object.getPrototypeOf(UpdateHeldTransactionController)).call(this, apiRequest));

		logger.debug('Exit UpdateHeldTransactionController constructor');
		return _this44;
	}

	_createClass(UpdateHeldTransactionController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'UpdateHeldTransactionRequest';
		}
	}]);

	return UpdateHeldTransactionController;
}(APIOperationBase);

module.exports.UpdateHeldTransactionController = UpdateHeldTransactionController;

var UpdateMerchantDetailsController = function (_APIOperationBase45) {
	_inherits(UpdateMerchantDetailsController, _APIOperationBase45);

	function UpdateMerchantDetailsController(apiRequest) {
		_classCallCheck(this, UpdateMerchantDetailsController);

		logger.debug('Enter UpdateMerchantDetailsController constructor');

		var _this45 = _possibleConstructorReturn(this, (UpdateMerchantDetailsController.__proto__ || Object.getPrototypeOf(UpdateMerchantDetailsController)).call(this, apiRequest));

		logger.debug('Exit UpdateMerchantDetailsController constructor');
		return _this45;
	}

	_createClass(UpdateMerchantDetailsController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'UpdateMerchantDetailsRequest';
		}
	}]);

	return UpdateMerchantDetailsController;
}(APIOperationBase);

module.exports.UpdateMerchantDetailsController = UpdateMerchantDetailsController;

var UpdateSplitTenderGroupController = function (_APIOperationBase46) {
	_inherits(UpdateSplitTenderGroupController, _APIOperationBase46);

	function UpdateSplitTenderGroupController(apiRequest) {
		_classCallCheck(this, UpdateSplitTenderGroupController);

		logger.debug('Enter UpdateSplitTenderGroupController constructor');

		var _this46 = _possibleConstructorReturn(this, (UpdateSplitTenderGroupController.__proto__ || Object.getPrototypeOf(UpdateSplitTenderGroupController)).call(this, apiRequest));

		logger.debug('Exit UpdateSplitTenderGroupController constructor');
		return _this46;
	}

	_createClass(UpdateSplitTenderGroupController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'UpdateSplitTenderGroupRequest';
		}
	}]);

	return UpdateSplitTenderGroupController;
}(APIOperationBase);

module.exports.UpdateSplitTenderGroupController = UpdateSplitTenderGroupController;

var ValidateCustomerPaymentProfileController = function (_APIOperationBase47) {
	_inherits(ValidateCustomerPaymentProfileController, _APIOperationBase47);

	function ValidateCustomerPaymentProfileController(apiRequest) {
		_classCallCheck(this, ValidateCustomerPaymentProfileController);

		logger.debug('Enter ValidateCustomerPaymentProfileController constructor');

		var _this47 = _possibleConstructorReturn(this, (ValidateCustomerPaymentProfileController.__proto__ || Object.getPrototypeOf(ValidateCustomerPaymentProfileController)).call(this, apiRequest));

		logger.debug('Exit ValidateCustomerPaymentProfileController constructor');
		return _this47;
	}

	_createClass(ValidateCustomerPaymentProfileController, [{
		key: 'validateRequest',
		value: function validateRequest() {
			logger.debug('Enter validateRequest');

			logger.debug('Exit validateRequest');
			return;
		}
	}, {
		key: 'getRequestType',
		value: function getRequestType() {
			return 'ValidateCustomerPaymentProfileRequest';
		}
	}]);

	return ValidateCustomerPaymentProfileController;
}(APIOperationBase);

module.exports.ValidateCustomerPaymentProfileController = ValidateCustomerPaymentProfileController;