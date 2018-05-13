'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = require('./utils.js');

var logger = require('./logger.js').logger;

var ANetApiRequest = function () {
	function ANetApiRequest(obj) {
		_classCallCheck(this, ANetApiRequest);

		logger.debug('Enter ANetApiRequest constructor');
		if (arguments.length == 1) {
			if ('merchantAuthentication' in obj && obj.merchantAuthentication != null) {
				this.setMerchantAuthentication(new MerchantAuthenticationType(obj.merchantAuthentication));
			}
			if ('clientId' in obj && obj.clientId != null) {
				this.setClientId(obj.clientId);
			}
			if ('refId' in obj && obj.refId != null) {
				this.setRefId(obj.refId);
			}
		} else {
			this.setMerchantAuthentication(null);
			this.setClientId(null);
			this.setRefId(null);
		}
		logger.debug('Exit ANetApiRequest constructor');
	}

	_createClass(ANetApiRequest, [{
		key: 'setMerchantAuthentication',
		value: function setMerchantAuthentication(p_merchantAuthentication) {
			this.merchantAuthentication = p_merchantAuthentication;
		}
	}, {
		key: 'getMerchantAuthentication',
		value: function getMerchantAuthentication() {
			if ('merchantAuthentication' in this) {
				return this.merchantAuthentication;
			}
		}
	}, {
		key: 'setClientId',
		value: function setClientId(p_clientId) {
			this.clientId = p_clientId;
		}
	}, {
		key: 'getClientId',
		value: function getClientId() {
			if ('clientId' in this) {
				return this.clientId;
			}
		}
	}, {
		key: 'setRefId',
		value: function setRefId(p_refId) {
			this.refId = p_refId;
		}
	}, {
		key: 'getRefId',
		value: function getRefId() {
			if ('refId' in this) {
				return this.refId;
			}
		}
	}]);

	return ANetApiRequest;
}();

module.exports.ANetApiRequest = ANetApiRequest;

var ANetApiResponse = function () {
	_createClass(ANetApiResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ANetApiResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ErrorResponse': this };
			logger.debug('Exit ANetApiResponse getJSON');
			return obj;
		}
	}]);

	function ANetApiResponse(obj) {
		_classCallCheck(this, ANetApiResponse);

		logger.debug('Enter ANetApiResponse constructor');
		if (arguments.length == 1) {
			if ('refId' in obj && obj.refId != null) {
				this.setRefId(obj.refId);
			}
			if ('messages' in obj && obj.messages != null) {
				this.setMessages(new MessagesType(obj.messages));
			}
			if ('sessionToken' in obj && obj.sessionToken != null) {
				this.setSessionToken(obj.sessionToken);
			}
		} else {
			this.setRefId(null);
			this.setMessages(null);
			this.setSessionToken(null);
		}
		logger.debug('Exit ANetApiResponse constructor');
	}

	_createClass(ANetApiResponse, [{
		key: 'setRefId',
		value: function setRefId(p_refId) {
			this.refId = p_refId;
		}
	}, {
		key: 'getRefId',
		value: function getRefId() {
			if ('refId' in this) {
				return this.refId;
			}
		}
	}, {
		key: 'setMessages',
		value: function setMessages(p_messages) {
			this.messages = p_messages;
		}
	}, {
		key: 'getMessages',
		value: function getMessages() {
			if ('messages' in this) {
				return this.messages;
			}
		}
	}, {
		key: 'setSessionToken',
		value: function setSessionToken(p_sessionToken) {
			this.sessionToken = p_sessionToken;
		}
	}, {
		key: 'getSessionToken',
		value: function getSessionToken() {
			if ('sessionToken' in this) {
				return this.sessionToken;
			}
		}
	}]);

	return ANetApiResponse;
}();

module.exports.ANetApiResponse = ANetApiResponse;

var ARBGetSubscriptionListSorting = function () {
	function ARBGetSubscriptionListSorting(obj) {
		_classCallCheck(this, ARBGetSubscriptionListSorting);

		logger.debug('Enter ARBGetSubscriptionListSorting constructor');
		if (arguments.length == 1) {
			if ('orderBy' in obj && obj.orderBy != null) {
				this.setOrderBy(obj.orderBy);
			}
			if ('orderDescending' in obj && obj.orderDescending != null) {
				this.setOrderDescending(obj.orderDescending);
			}
		} else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit ARBGetSubscriptionListSorting constructor');
	}

	_createClass(ARBGetSubscriptionListSorting, [{
		key: 'setOrderBy',
		value: function setOrderBy(p_orderBy) {
			this.orderBy = p_orderBy;
		}
	}, {
		key: 'getOrderBy',
		value: function getOrderBy() {
			if ('orderBy' in this) {
				return this.orderBy;
			}
		}
	}, {
		key: 'setOrderDescending',
		value: function setOrderDescending(p_orderDescending) {
			this.orderDescending = p_orderDescending;
		}
	}, {
		key: 'getOrderDescending',
		value: function getOrderDescending() {
			if ('orderDescending' in this) {
				return this.orderDescending;
			}
		}
	}]);

	return ARBGetSubscriptionListSorting;
}();

module.exports.ARBGetSubscriptionListSorting = ARBGetSubscriptionListSorting;

var ARBSubscriptionMaskedType = function () {
	function ARBSubscriptionMaskedType(obj) {
		_classCallCheck(this, ARBSubscriptionMaskedType);

		logger.debug('Enter ARBSubscriptionMaskedType constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('paymentSchedule' in obj && obj.paymentSchedule != null) {
				this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule));
			}
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
			if ('trialAmount' in obj && obj.trialAmount != null) {
				this.setTrialAmount(obj.trialAmount);
			}
			if ('status' in obj && obj.status != null) {
				this.setStatus(obj.status);
			}
			if ('profile' in obj && obj.profile != null) {
				this.setProfile(new SubscriptionCustomerProfileType(obj.profile));
			}
			if ('order' in obj && obj.order != null) {
				this.setOrder(new OrderType(obj.order));
			}
			if ('arbTransactions' in obj && obj.arbTransactions != null) {
				this.setArbTransactions(new ARBTransactionList(obj.arbTransactions));
			}
		} else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setStatus(null);
			this.setProfile(null);
			this.setOrder(null);
			this.setArbTransactions(null);
		}
		logger.debug('Exit ARBSubscriptionMaskedType constructor');
	}

	_createClass(ARBSubscriptionMaskedType, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setPaymentSchedule',
		value: function setPaymentSchedule(p_paymentSchedule) {
			this.paymentSchedule = p_paymentSchedule;
		}
	}, {
		key: 'getPaymentSchedule',
		value: function getPaymentSchedule() {
			if ('paymentSchedule' in this) {
				return this.paymentSchedule;
			}
		}
	}, {
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}, {
		key: 'setTrialAmount',
		value: function setTrialAmount(p_trialAmount) {
			this.trialAmount = p_trialAmount;
		}
	}, {
		key: 'getTrialAmount',
		value: function getTrialAmount() {
			if ('trialAmount' in this) {
				return this.trialAmount;
			}
		}
	}, {
		key: 'setStatus',
		value: function setStatus(p_status) {
			this.status = p_status;
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			if ('status' in this) {
				return this.status;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}, {
		key: 'setOrder',
		value: function setOrder(p_order) {
			this.order = p_order;
		}
	}, {
		key: 'getOrder',
		value: function getOrder() {
			if ('order' in this) {
				return this.order;
			}
		}
	}, {
		key: 'setArbTransactions',
		value: function setArbTransactions(p_arbTransactions) {
			this.arbTransactions = p_arbTransactions;
		}
	}, {
		key: 'getArbTransactions',
		value: function getArbTransactions() {
			if ('arbTransactions' in this) {
				return this.arbTransactions;
			}
		}
	}]);

	return ARBSubscriptionMaskedType;
}();

module.exports.ARBSubscriptionMaskedType = ARBSubscriptionMaskedType;

var ARBSubscriptionType = function () {
	function ARBSubscriptionType(obj) {
		_classCallCheck(this, ARBSubscriptionType);

		logger.debug('Enter ARBSubscriptionType constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('paymentSchedule' in obj && obj.paymentSchedule != null) {
				this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule));
			}
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
			if ('trialAmount' in obj && obj.trialAmount != null) {
				this.setTrialAmount(obj.trialAmount);
			}
			if ('payment' in obj && obj.payment != null) {
				this.setPayment(new PaymentType(obj.payment));
			}
			if ('order' in obj && obj.order != null) {
				this.setOrder(new OrderType(obj.order));
			}
			if ('customer' in obj && obj.customer != null) {
				this.setCustomer(new CustomerType(obj.customer));
			}
			if ('billTo' in obj && obj.billTo != null) {
				this.setBillTo(new NameAndAddressType(obj.billTo));
			}
			if ('shipTo' in obj && obj.shipTo != null) {
				this.setShipTo(new NameAndAddressType(obj.shipTo));
			}
			if ('profile' in obj && obj.profile != null) {
				this.setProfile(new CustomerProfileIdType(obj.profile));
			}
		} else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setPayment(null);
			this.setOrder(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setProfile(null);
		}
		logger.debug('Exit ARBSubscriptionType constructor');
	}

	_createClass(ARBSubscriptionType, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setPaymentSchedule',
		value: function setPaymentSchedule(p_paymentSchedule) {
			this.paymentSchedule = p_paymentSchedule;
		}
	}, {
		key: 'getPaymentSchedule',
		value: function getPaymentSchedule() {
			if ('paymentSchedule' in this) {
				return this.paymentSchedule;
			}
		}
	}, {
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}, {
		key: 'setTrialAmount',
		value: function setTrialAmount(p_trialAmount) {
			this.trialAmount = p_trialAmount;
		}
	}, {
		key: 'getTrialAmount',
		value: function getTrialAmount() {
			if ('trialAmount' in this) {
				return this.trialAmount;
			}
		}
	}, {
		key: 'setPayment',
		value: function setPayment(p_payment) {
			this.payment = p_payment;
		}
	}, {
		key: 'getPayment',
		value: function getPayment() {
			if ('payment' in this) {
				return this.payment;
			}
		}
	}, {
		key: 'setOrder',
		value: function setOrder(p_order) {
			this.order = p_order;
		}
	}, {
		key: 'getOrder',
		value: function getOrder() {
			if ('order' in this) {
				return this.order;
			}
		}
	}, {
		key: 'setCustomer',
		value: function setCustomer(p_customer) {
			this.customer = p_customer;
		}
	}, {
		key: 'getCustomer',
		value: function getCustomer() {
			if ('customer' in this) {
				return this.customer;
			}
		}
	}, {
		key: 'setBillTo',
		value: function setBillTo(p_billTo) {
			this.billTo = p_billTo;
		}
	}, {
		key: 'getBillTo',
		value: function getBillTo() {
			if ('billTo' in this) {
				return this.billTo;
			}
		}
	}, {
		key: 'setShipTo',
		value: function setShipTo(p_shipTo) {
			this.shipTo = p_shipTo;
		}
	}, {
		key: 'getShipTo',
		value: function getShipTo() {
			if ('shipTo' in this) {
				return this.shipTo;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}]);

	return ARBSubscriptionType;
}();

module.exports.ARBSubscriptionType = ARBSubscriptionType;

var ARBTransactionList = function () {
	function ARBTransactionList(obj) {
		_classCallCheck(this, ARBTransactionList);

		logger.debug('Enter ARBTransactionList constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var arbTransactionList = [];
				obj.forEach(function (item) {
					arbTransactionList.push(new ArbTransaction(item));
				});
				this.setArbTransaction(arbTransactionList);
			}
		} else {
			this.setArbTransaction(null);
		}
		logger.debug('Exit ARBTransactionList constructor');
	}

	_createClass(ARBTransactionList, [{
		key: 'setArbTransaction',
		value: function setArbTransaction(p_arbTransaction) {
			this.arbTransaction = p_arbTransaction;
		}
	}, {
		key: 'getArbTransaction',
		value: function getArbTransaction() {
			if ('arbTransaction' in this) {
				return this.arbTransaction;
			}
		}
	}]);

	return ARBTransactionList;
}();

module.exports.ARBTransactionList = ARBTransactionList;

var ArbTransaction = function () {
	function ArbTransaction(obj) {
		_classCallCheck(this, ArbTransaction);

		logger.debug('Enter ArbTransaction constructor');
		if (arguments.length == 1) {
			if ('transId' in obj && obj.transId != null) {
				this.setTransId(obj.transId);
			}
			if ('response' in obj && obj.response != null) {
				this.setResponse(obj.response);
			}
			if ('submitTimeUTC' in obj && obj.submitTimeUTC != null) {
				this.setSubmitTimeUTC(obj.submitTimeUTC);
			}
			if ('payNum' in obj && obj.payNum != null) {
				this.setPayNum(obj.payNum);
			}
			if ('attemptNum' in obj && obj.attemptNum != null) {
				this.setAttemptNum(obj.attemptNum);
			}
		} else {
			this.setTransId(null);
			this.setResponse(null);
			this.setSubmitTimeUTC(null);
			this.setPayNum(null);
			this.setAttemptNum(null);
		}
		logger.debug('Exit ArbTransaction constructor');
	}

	_createClass(ArbTransaction, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setResponse',
		value: function setResponse(p_response) {
			this.response = p_response;
		}
	}, {
		key: 'getResponse',
		value: function getResponse() {
			if ('response' in this) {
				return this.response;
			}
		}
	}, {
		key: 'setSubmitTimeUTC',
		value: function setSubmitTimeUTC(p_submitTimeUTC) {
			this.submitTimeUTC = p_submitTimeUTC;
		}
	}, {
		key: 'getSubmitTimeUTC',
		value: function getSubmitTimeUTC() {
			if ('submitTimeUTC' in this) {
				return this.submitTimeUTC;
			}
		}
	}, {
		key: 'setPayNum',
		value: function setPayNum(p_payNum) {
			this.payNum = p_payNum;
		}
	}, {
		key: 'getPayNum',
		value: function getPayNum() {
			if ('payNum' in this) {
				return this.payNum;
			}
		}
	}, {
		key: 'setAttemptNum',
		value: function setAttemptNum(p_attemptNum) {
			this.attemptNum = p_attemptNum;
		}
	}, {
		key: 'getAttemptNum',
		value: function getAttemptNum() {
			if ('attemptNum' in this) {
				return this.attemptNum;
			}
		}
	}]);

	return ArbTransaction;
}();

module.exports.ArbTransaction = ArbTransaction;

var ArrayOfAUResponseType = function () {
	function ArrayOfAUResponseType(obj) {
		_classCallCheck(this, ArrayOfAUResponseType);

		logger.debug('Enter ArrayOfAUResponseType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var auResponseList = [];
				obj.forEach(function (item) {
					auResponseList.push(new AuResponseType(item));
				});
				this.setAuResponse(auResponseList);
			}
		} else {
			this.setAuResponse(null);
		}
		logger.debug('Exit ArrayOfAUResponseType constructor');
	}

	_createClass(ArrayOfAUResponseType, [{
		key: 'setAuResponse',
		value: function setAuResponse(p_auResponse) {
			this.auResponse = p_auResponse;
		}
	}, {
		key: 'getAuResponse',
		value: function getAuResponse() {
			if ('auResponse' in this) {
				return this.auResponse;
			}
		}
	}]);

	return ArrayOfAUResponseType;
}();

module.exports.ArrayOfAUResponseType = ArrayOfAUResponseType;

var ArrayOfBatchDetailsType = function () {
	function ArrayOfBatchDetailsType(obj) {
		_classCallCheck(this, ArrayOfBatchDetailsType);

		logger.debug('Enter ArrayOfBatchDetailsType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var batchList = [];
				obj.forEach(function (item) {
					batchList.push(new BatchDetailsType(item));
				});
				this.setBatch(batchList);
			}
		} else {
			this.setBatch(null);
		}
		logger.debug('Exit ArrayOfBatchDetailsType constructor');
	}

	_createClass(ArrayOfBatchDetailsType, [{
		key: 'setBatch',
		value: function setBatch(p_batch) {
			this.batch = p_batch;
		}
	}, {
		key: 'getBatch',
		value: function getBatch() {
			if ('batch' in this) {
				return this.batch;
			}
		}
	}]);

	return ArrayOfBatchDetailsType;
}();

module.exports.ArrayOfBatchDetailsType = ArrayOfBatchDetailsType;

var ArrayOfBatchStatisticType = function () {
	function ArrayOfBatchStatisticType(obj) {
		_classCallCheck(this, ArrayOfBatchStatisticType);

		logger.debug('Enter ArrayOfBatchStatisticType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var statisticList = [];
				obj.forEach(function (item) {
					statisticList.push(new BatchStatisticType(item));
				});
				this.setStatistic(statisticList);
			}
		} else {
			this.setStatistic(null);
		}
		logger.debug('Exit ArrayOfBatchStatisticType constructor');
	}

	_createClass(ArrayOfBatchStatisticType, [{
		key: 'setStatistic',
		value: function setStatistic(p_statistic) {
			this.statistic = p_statistic;
		}
	}, {
		key: 'getStatistic',
		value: function getStatistic() {
			if ('statistic' in this) {
				return this.statistic;
			}
		}
	}]);

	return ArrayOfBatchStatisticType;
}();

module.exports.ArrayOfBatchStatisticType = ArrayOfBatchStatisticType;

var ArrayOfCardType = function () {
	function ArrayOfCardType(obj) {
		_classCallCheck(this, ArrayOfCardType);

		logger.debug('Enter ArrayOfCardType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var cardTypeList = [];
				obj.forEach(function (item) {
					cardTypeList.push(new String(item));
				});
				this.setCardType(cardTypeList);
			}
		} else {
			this.setCardType(null);
		}
		logger.debug('Exit ArrayOfCardType constructor');
	}

	_createClass(ArrayOfCardType, [{
		key: 'setCardType',
		value: function setCardType(p_cardType) {
			this.cardType = p_cardType;
		}
	}, {
		key: 'getCardType',
		value: function getCardType() {
			if ('cardType' in this) {
				return this.cardType;
			}
		}
	}]);

	return ArrayOfCardType;
}();

module.exports.ArrayOfCardType = ArrayOfCardType;

var ArrayOfCurrencyCode = function () {
	function ArrayOfCurrencyCode(obj) {
		_classCallCheck(this, ArrayOfCurrencyCode);

		logger.debug('Enter ArrayOfCurrencyCode constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var currencyList = [];
				obj.forEach(function (item) {
					currencyList.push(new String(item));
				});
				this.setCurrency(currencyList);
			}
		} else {
			this.setCurrency(null);
		}
		logger.debug('Exit ArrayOfCurrencyCode constructor');
	}

	_createClass(ArrayOfCurrencyCode, [{
		key: 'setCurrency',
		value: function setCurrency(p_currency) {
			this.currency = p_currency;
		}
	}, {
		key: 'getCurrency',
		value: function getCurrency() {
			if ('currency' in this) {
				return this.currency;
			}
		}
	}]);

	return ArrayOfCurrencyCode;
}();

module.exports.ArrayOfCurrencyCode = ArrayOfCurrencyCode;

var ArrayOfCustomerPaymentProfileListItemType = function () {
	function ArrayOfCustomerPaymentProfileListItemType(obj) {
		_classCallCheck(this, ArrayOfCustomerPaymentProfileListItemType);

		logger.debug('Enter ArrayOfCustomerPaymentProfileListItemType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var paymentProfileList = [];
				obj.forEach(function (item) {
					paymentProfileList.push(new CustomerPaymentProfileListItemType(item));
				});
				this.setPaymentProfile(paymentProfileList);
			}
		} else {
			this.setPaymentProfile(null);
		}
		logger.debug('Exit ArrayOfCustomerPaymentProfileListItemType constructor');
	}

	_createClass(ArrayOfCustomerPaymentProfileListItemType, [{
		key: 'setPaymentProfile',
		value: function setPaymentProfile(p_paymentProfile) {
			this.paymentProfile = p_paymentProfile;
		}
	}, {
		key: 'getPaymentProfile',
		value: function getPaymentProfile() {
			if ('paymentProfile' in this) {
				return this.paymentProfile;
			}
		}
	}]);

	return ArrayOfCustomerPaymentProfileListItemType;
}();

module.exports.ArrayOfCustomerPaymentProfileListItemType = ArrayOfCustomerPaymentProfileListItemType;

var ArrayOfFDSFilter = function () {
	function ArrayOfFDSFilter(obj) {
		_classCallCheck(this, ArrayOfFDSFilter);

		logger.debug('Enter ArrayOfFDSFilter constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var FDSFilterList = [];
				obj.forEach(function (item) {
					FDSFilterList.push(new FDSFilterType(item));
				});
				this.setFDSFilter(FDSFilterList);
			}
		} else {
			this.setFDSFilter(null);
		}
		logger.debug('Exit ArrayOfFDSFilter constructor');
	}

	_createClass(ArrayOfFDSFilter, [{
		key: 'setFDSFilter',
		value: function setFDSFilter(p_FDSFilter) {
			this.FDSFilter = p_FDSFilter;
		}
	}, {
		key: 'getFDSFilter',
		value: function getFDSFilter() {
			if ('FDSFilter' in this) {
				return this.FDSFilter;
			}
		}
	}]);

	return ArrayOfFDSFilter;
}();

module.exports.ArrayOfFDSFilter = ArrayOfFDSFilter;

var ArrayOfFraudFilterType = function () {
	function ArrayOfFraudFilterType(obj) {
		_classCallCheck(this, ArrayOfFraudFilterType);

		logger.debug('Enter ArrayOfFraudFilterType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var fraudFilterList = [];
				obj.forEach(function (item) {
					fraudFilterList.push(new String(item));
				});
				this.setFraudFilter(fraudFilterList);
			}
		} else {
			this.setFraudFilter(null);
		}
		logger.debug('Exit ArrayOfFraudFilterType constructor');
	}

	_createClass(ArrayOfFraudFilterType, [{
		key: 'setFraudFilter',
		value: function setFraudFilter(p_fraudFilter) {
			this.fraudFilter = p_fraudFilter;
		}
	}, {
		key: 'getFraudFilter',
		value: function getFraudFilter() {
			if ('fraudFilter' in this) {
				return this.fraudFilter;
			}
		}
	}]);

	return ArrayOfFraudFilterType;
}();

module.exports.ArrayOfFraudFilterType = ArrayOfFraudFilterType;

var ArrayOfLineItem = function () {
	function ArrayOfLineItem(obj) {
		_classCallCheck(this, ArrayOfLineItem);

		logger.debug('Enter ArrayOfLineItem constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var lineItemList = [];
				obj.forEach(function (item) {
					lineItemList.push(new LineItemType(item));
				});
				this.setLineItem(lineItemList);
			}
		} else {
			this.setLineItem(null);
		}
		logger.debug('Exit ArrayOfLineItem constructor');
	}

	_createClass(ArrayOfLineItem, [{
		key: 'setLineItem',
		value: function setLineItem(p_lineItem) {
			this.lineItem = p_lineItem;
		}
	}, {
		key: 'getLineItem',
		value: function getLineItem() {
			if ('lineItem' in this) {
				return this.lineItem;
			}
		}
	}]);

	return ArrayOfLineItem;
}();

module.exports.ArrayOfLineItem = ArrayOfLineItem;

var ArrayOfLong = function () {
	function ArrayOfLong(obj) {
		_classCallCheck(this, ArrayOfLong);

		logger.debug('Enter ArrayOfLong constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var longList = [];
				obj.forEach(function (item) {
					longList.push(new item());
				});
				this.setLong(longList);
			}
		} else {
			this.setLong(null);
		}
		logger.debug('Exit ArrayOfLong constructor');
	}

	_createClass(ArrayOfLong, [{
		key: 'setLong',
		value: function setLong(p_long) {
			this.long = p_long;
		}
	}, {
		key: 'getLong',
		value: function getLong() {
			if ('long' in this) {
				return this.long;
			}
		}
	}]);

	return ArrayOfLong;
}();

module.exports.ArrayOfLong = ArrayOfLong;

var ArrayOfMarketType = function () {
	function ArrayOfMarketType(obj) {
		_classCallCheck(this, ArrayOfMarketType);

		logger.debug('Enter ArrayOfMarketType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var marketTypeList = [];
				obj.forEach(function (item) {
					marketTypeList.push(new String(item));
				});
				this.setMarketType(marketTypeList);
			}
		} else {
			this.setMarketType(null);
		}
		logger.debug('Exit ArrayOfMarketType constructor');
	}

	_createClass(ArrayOfMarketType, [{
		key: 'setMarketType',
		value: function setMarketType(p_marketType) {
			this.marketType = p_marketType;
		}
	}, {
		key: 'getMarketType',
		value: function getMarketType() {
			if ('marketType' in this) {
				return this.marketType;
			}
		}
	}]);

	return ArrayOfMarketType;
}();

module.exports.ArrayOfMarketType = ArrayOfMarketType;

var ArrayOfNumericString = function () {
	function ArrayOfNumericString(obj) {
		_classCallCheck(this, ArrayOfNumericString);

		logger.debug('Enter ArrayOfNumericString constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var numericStringList = [];
				obj.forEach(function (item) {
					numericStringList.push(new String(item));
				});
				this.setNumericString(numericStringList);
			}
		} else {
			this.setNumericString(null);
		}
		logger.debug('Exit ArrayOfNumericString constructor');
	}

	_createClass(ArrayOfNumericString, [{
		key: 'setNumericString',
		value: function setNumericString(p_numericString) {
			this.numericString = p_numericString;
		}
	}, {
		key: 'getNumericString',
		value: function getNumericString() {
			if ('numericString' in this) {
				return this.numericString;
			}
		}
	}]);

	return ArrayOfNumericString;
}();

module.exports.ArrayOfNumericString = ArrayOfNumericString;

var ArrayOfPaymentMethod = function () {
	function ArrayOfPaymentMethod(obj) {
		_classCallCheck(this, ArrayOfPaymentMethod);

		logger.debug('Enter ArrayOfPaymentMethod constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var paymentMethodList = [];
				obj.forEach(function (item) {
					paymentMethodList.push(new String(item));
				});
				this.setPaymentMethod(paymentMethodList);
			}
		} else {
			this.setPaymentMethod(null);
		}
		logger.debug('Exit ArrayOfPaymentMethod constructor');
	}

	_createClass(ArrayOfPaymentMethod, [{
		key: 'setPaymentMethod',
		value: function setPaymentMethod(p_paymentMethod) {
			this.paymentMethod = p_paymentMethod;
		}
	}, {
		key: 'getPaymentMethod',
		value: function getPaymentMethod() {
			if ('paymentMethod' in this) {
				return this.paymentMethod;
			}
		}
	}]);

	return ArrayOfPaymentMethod;
}();

module.exports.ArrayOfPaymentMethod = ArrayOfPaymentMethod;

var ArrayOfPermissionType = function () {
	function ArrayOfPermissionType(obj) {
		_classCallCheck(this, ArrayOfPermissionType);

		logger.debug('Enter ArrayOfPermissionType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var permissionList = [];
				obj.forEach(function (item) {
					permissionList.push(new PermissionType(item));
				});
				this.setPermission(permissionList);
			}
		} else {
			this.setPermission(null);
		}
		logger.debug('Exit ArrayOfPermissionType constructor');
	}

	_createClass(ArrayOfPermissionType, [{
		key: 'setPermission',
		value: function setPermission(p_permission) {
			this.permission = p_permission;
		}
	}, {
		key: 'getPermission',
		value: function getPermission() {
			if ('permission' in this) {
				return this.permission;
			}
		}
	}]);

	return ArrayOfPermissionType;
}();

module.exports.ArrayOfPermissionType = ArrayOfPermissionType;

var ArrayOfProcessorType = function () {
	function ArrayOfProcessorType(obj) {
		_classCallCheck(this, ArrayOfProcessorType);

		logger.debug('Enter ArrayOfProcessorType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var processorList = [];
				obj.forEach(function (item) {
					processorList.push(new ProcessorType(item));
				});
				this.setProcessor(processorList);
			}
		} else {
			this.setProcessor(null);
		}
		logger.debug('Exit ArrayOfProcessorType constructor');
	}

	_createClass(ArrayOfProcessorType, [{
		key: 'setProcessor',
		value: function setProcessor(p_processor) {
			this.processor = p_processor;
		}
	}, {
		key: 'getProcessor',
		value: function getProcessor() {
			if ('processor' in this) {
				return this.processor;
			}
		}
	}]);

	return ArrayOfProcessorType;
}();

module.exports.ArrayOfProcessorType = ArrayOfProcessorType;

var ArrayOfProductCode = function () {
	function ArrayOfProductCode(obj) {
		_classCallCheck(this, ArrayOfProductCode);

		logger.debug('Enter ArrayOfProductCode constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var productCodeList = [];
				obj.forEach(function (item) {
					productCodeList.push(new String(item));
				});
				this.setProductCode(productCodeList);
			}
		} else {
			this.setProductCode(null);
		}
		logger.debug('Exit ArrayOfProductCode constructor');
	}

	_createClass(ArrayOfProductCode, [{
		key: 'setProductCode',
		value: function setProductCode(p_productCode) {
			this.productCode = p_productCode;
		}
	}, {
		key: 'getProductCode',
		value: function getProductCode() {
			if ('productCode' in this) {
				return this.productCode;
			}
		}
	}]);

	return ArrayOfProductCode;
}();

module.exports.ArrayOfProductCode = ArrayOfProductCode;

var ArrayOfReturnedItem = function () {
	function ArrayOfReturnedItem(obj) {
		_classCallCheck(this, ArrayOfReturnedItem);

		logger.debug('Enter ArrayOfReturnedItem constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var returnedItemList = [];
				obj.forEach(function (item) {
					returnedItemList.push(new ReturnedItemType(item));
				});
				this.setReturnedItem(returnedItemList);
			}
		} else {
			this.setReturnedItem(null);
		}
		logger.debug('Exit ArrayOfReturnedItem constructor');
	}

	_createClass(ArrayOfReturnedItem, [{
		key: 'setReturnedItem',
		value: function setReturnedItem(p_returnedItem) {
			this.returnedItem = p_returnedItem;
		}
	}, {
		key: 'getReturnedItem',
		value: function getReturnedItem() {
			if ('returnedItem' in this) {
				return this.returnedItem;
			}
		}
	}]);

	return ArrayOfReturnedItem;
}();

module.exports.ArrayOfReturnedItem = ArrayOfReturnedItem;

var ArrayOfSetting = function () {
	function ArrayOfSetting(obj) {
		_classCallCheck(this, ArrayOfSetting);

		logger.debug('Enter ArrayOfSetting constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var settingList = [];
				obj.forEach(function (item) {
					settingList.push(new SettingType(item));
				});
				this.setSetting(settingList);
			}
		} else {
			this.setSetting(null);
		}
		logger.debug('Exit ArrayOfSetting constructor');
	}

	_createClass(ArrayOfSetting, [{
		key: 'setSetting',
		value: function setSetting(p_setting) {
			this.setting = p_setting;
		}
	}, {
		key: 'getSetting',
		value: function getSetting() {
			if ('setting' in this) {
				return this.setting;
			}
		}
	}]);

	return ArrayOfSetting;
}();

module.exports.ArrayOfSetting = ArrayOfSetting;

var ArrayOfString = function () {
	function ArrayOfString(obj) {
		_classCallCheck(this, ArrayOfString);

		logger.debug('Enter ArrayOfString constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var stringList = [];
				obj.forEach(function (item) {
					stringList.push(new String(item));
				});
				this.setString(stringList);
			}
		} else {
			this.setString(null);
		}
		logger.debug('Exit ArrayOfString constructor');
	}

	_createClass(ArrayOfString, [{
		key: 'setString',
		value: function setString(p_string) {
			this.string = p_string;
		}
	}, {
		key: 'getString',
		value: function getString() {
			if ('string' in this) {
				return this.string;
			}
		}
	}]);

	return ArrayOfString;
}();

module.exports.ArrayOfString = ArrayOfString;

var ArrayOfSubscription = function () {
	function ArrayOfSubscription(obj) {
		_classCallCheck(this, ArrayOfSubscription);

		logger.debug('Enter ArrayOfSubscription constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var subscriptionDetailList = [];
				obj.forEach(function (item) {
					subscriptionDetailList.push(new SubscriptionDetail(item));
				});
				this.setSubscriptionDetail(subscriptionDetailList);
			}
		} else {
			this.setSubscriptionDetail(null);
		}
		logger.debug('Exit ArrayOfSubscription constructor');
	}

	_createClass(ArrayOfSubscription, [{
		key: 'setSubscriptionDetail',
		value: function setSubscriptionDetail(p_subscriptionDetail) {
			this.subscriptionDetail = p_subscriptionDetail;
		}
	}, {
		key: 'getSubscriptionDetail',
		value: function getSubscriptionDetail() {
			if ('subscriptionDetail' in this) {
				return this.subscriptionDetail;
			}
		}
	}]);

	return ArrayOfSubscription;
}();

module.exports.ArrayOfSubscription = ArrayOfSubscription;

var ArrayOfTransactionSummaryType = function () {
	function ArrayOfTransactionSummaryType(obj) {
		_classCallCheck(this, ArrayOfTransactionSummaryType);

		logger.debug('Enter ArrayOfTransactionSummaryType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var transactionList = [];
				obj.forEach(function (item) {
					transactionList.push(new TransactionSummaryType(item));
				});
				this.setTransaction(transactionList);
			}
		} else {
			this.setTransaction(null);
		}
		logger.debug('Exit ArrayOfTransactionSummaryType constructor');
	}

	_createClass(ArrayOfTransactionSummaryType, [{
		key: 'setTransaction',
		value: function setTransaction(p_transaction) {
			this.transaction = p_transaction;
		}
	}, {
		key: 'getTransaction',
		value: function getTransaction() {
			if ('transaction' in this) {
				return this.transaction;
			}
		}
	}]);

	return ArrayOfTransactionSummaryType;
}();

module.exports.ArrayOfTransactionSummaryType = ArrayOfTransactionSummaryType;

var AuDetailsType = function () {
	function AuDetailsType(obj) {
		_classCallCheck(this, AuDetailsType);

		logger.debug('Enter AuDetailsType constructor');
		if (arguments.length == 1) {
			if ('customerProfileID' in obj && obj.customerProfileID != null) {
				this.setCustomerProfileID(obj.customerProfileID);
			}
			if ('customerPaymentProfileID' in obj && obj.customerPaymentProfileID != null) {
				this.setCustomerPaymentProfileID(obj.customerPaymentProfileID);
			}
			if ('firstName' in obj && obj.firstName != null) {
				this.setFirstName(obj.firstName);
			}
			if ('lastName' in obj && obj.lastName != null) {
				this.setLastName(obj.lastName);
			}
			if ('updateTimeUTC' in obj && obj.updateTimeUTC != null) {
				this.setUpdateTimeUTC(obj.updateTimeUTC);
			}
			if ('auReasonCode' in obj && obj.auReasonCode != null) {
				this.setAuReasonCode(obj.auReasonCode);
			}
			if ('reasonDescription' in obj && obj.reasonDescription != null) {
				this.setReasonDescription(obj.reasonDescription);
			}
		} else {
			this.setCustomerProfileID(null);
			this.setCustomerPaymentProfileID(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setUpdateTimeUTC(null);
			this.setAuReasonCode(null);
			this.setReasonDescription(null);
		}
		logger.debug('Exit AuDetailsType constructor');
	}

	_createClass(AuDetailsType, [{
		key: 'setCustomerProfileID',
		value: function setCustomerProfileID(p_customerProfileID) {
			this.customerProfileID = p_customerProfileID;
		}
	}, {
		key: 'getCustomerProfileID',
		value: function getCustomerProfileID() {
			if ('customerProfileID' in this) {
				return this.customerProfileID;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileID',
		value: function setCustomerPaymentProfileID(p_customerPaymentProfileID) {
			this.customerPaymentProfileID = p_customerPaymentProfileID;
		}
	}, {
		key: 'getCustomerPaymentProfileID',
		value: function getCustomerPaymentProfileID() {
			if ('customerPaymentProfileID' in this) {
				return this.customerPaymentProfileID;
			}
		}
	}, {
		key: 'setFirstName',
		value: function setFirstName(p_firstName) {
			this.firstName = p_firstName;
		}
	}, {
		key: 'getFirstName',
		value: function getFirstName() {
			if ('firstName' in this) {
				return this.firstName;
			}
		}
	}, {
		key: 'setLastName',
		value: function setLastName(p_lastName) {
			this.lastName = p_lastName;
		}
	}, {
		key: 'getLastName',
		value: function getLastName() {
			if ('lastName' in this) {
				return this.lastName;
			}
		}
	}, {
		key: 'setUpdateTimeUTC',
		value: function setUpdateTimeUTC(p_updateTimeUTC) {
			this.updateTimeUTC = p_updateTimeUTC;
		}
	}, {
		key: 'getUpdateTimeUTC',
		value: function getUpdateTimeUTC() {
			if ('updateTimeUTC' in this) {
				return this.updateTimeUTC;
			}
		}
	}, {
		key: 'setAuReasonCode',
		value: function setAuReasonCode(p_auReasonCode) {
			this.auReasonCode = p_auReasonCode;
		}
	}, {
		key: 'getAuReasonCode',
		value: function getAuReasonCode() {
			if ('auReasonCode' in this) {
				return this.auReasonCode;
			}
		}
	}, {
		key: 'setReasonDescription',
		value: function setReasonDescription(p_reasonDescription) {
			this.reasonDescription = p_reasonDescription;
		}
	}, {
		key: 'getReasonDescription',
		value: function getReasonDescription() {
			if ('reasonDescription' in this) {
				return this.reasonDescription;
			}
		}
	}]);

	return AuDetailsType;
}();

module.exports.AuDetailsType = AuDetailsType;

var AuResponseType = function () {
	function AuResponseType(obj) {
		_classCallCheck(this, AuResponseType);

		logger.debug('Enter AuResponseType constructor');
		if (arguments.length == 1) {
			if ('auReasonCode' in obj && obj.auReasonCode != null) {
				this.setAuReasonCode(obj.auReasonCode);
			}
			if ('profileCount' in obj && obj.profileCount != null) {
				this.setProfileCount(obj.profileCount);
			}
			if ('reasonDescription' in obj && obj.reasonDescription != null) {
				this.setReasonDescription(obj.reasonDescription);
			}
		} else {
			this.setAuReasonCode(null);
			this.setProfileCount(null);
			this.setReasonDescription(null);
		}
		logger.debug('Exit AuResponseType constructor');
	}

	_createClass(AuResponseType, [{
		key: 'setAuReasonCode',
		value: function setAuReasonCode(p_auReasonCode) {
			this.auReasonCode = p_auReasonCode;
		}
	}, {
		key: 'getAuReasonCode',
		value: function getAuReasonCode() {
			if ('auReasonCode' in this) {
				return this.auReasonCode;
			}
		}
	}, {
		key: 'setProfileCount',
		value: function setProfileCount(p_profileCount) {
			this.profileCount = p_profileCount;
		}
	}, {
		key: 'getProfileCount',
		value: function getProfileCount() {
			if ('profileCount' in this) {
				return this.profileCount;
			}
		}
	}, {
		key: 'setReasonDescription',
		value: function setReasonDescription(p_reasonDescription) {
			this.reasonDescription = p_reasonDescription;
		}
	}, {
		key: 'getReasonDescription',
		value: function getReasonDescription() {
			if ('reasonDescription' in this) {
				return this.reasonDescription;
			}
		}
	}]);

	return AuResponseType;
}();

module.exports.AuResponseType = AuResponseType;

var BankAccountMaskedType = function () {
	function BankAccountMaskedType(obj) {
		_classCallCheck(this, BankAccountMaskedType);

		logger.debug('Enter BankAccountMaskedType constructor');
		if (arguments.length == 1) {
			if ('accountType' in obj && obj.accountType != null) {
				this.setAccountType(obj.accountType);
			}
			if ('routingNumber' in obj && obj.routingNumber != null) {
				this.setRoutingNumber(obj.routingNumber);
			}
			if ('accountNumber' in obj && obj.accountNumber != null) {
				this.setAccountNumber(obj.accountNumber);
			}
			if ('nameOnAccount' in obj && obj.nameOnAccount != null) {
				this.setNameOnAccount(obj.nameOnAccount);
			}
			if ('echeckType' in obj && obj.echeckType != null) {
				this.setEcheckType(obj.echeckType);
			}
			if ('bankName' in obj && obj.bankName != null) {
				this.setBankName(obj.bankName);
			}
		} else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
		}
		logger.debug('Exit BankAccountMaskedType constructor');
	}

	_createClass(BankAccountMaskedType, [{
		key: 'setAccountType',
		value: function setAccountType(p_accountType) {
			this.accountType = p_accountType;
		}
	}, {
		key: 'getAccountType',
		value: function getAccountType() {
			if ('accountType' in this) {
				return this.accountType;
			}
		}
	}, {
		key: 'setRoutingNumber',
		value: function setRoutingNumber(p_routingNumber) {
			this.routingNumber = p_routingNumber;
		}
	}, {
		key: 'getRoutingNumber',
		value: function getRoutingNumber() {
			if ('routingNumber' in this) {
				return this.routingNumber;
			}
		}
	}, {
		key: 'setAccountNumber',
		value: function setAccountNumber(p_accountNumber) {
			this.accountNumber = p_accountNumber;
		}
	}, {
		key: 'getAccountNumber',
		value: function getAccountNumber() {
			if ('accountNumber' in this) {
				return this.accountNumber;
			}
		}
	}, {
		key: 'setNameOnAccount',
		value: function setNameOnAccount(p_nameOnAccount) {
			this.nameOnAccount = p_nameOnAccount;
		}
	}, {
		key: 'getNameOnAccount',
		value: function getNameOnAccount() {
			if ('nameOnAccount' in this) {
				return this.nameOnAccount;
			}
		}
	}, {
		key: 'setEcheckType',
		value: function setEcheckType(p_echeckType) {
			this.echeckType = p_echeckType;
		}
	}, {
		key: 'getEcheckType',
		value: function getEcheckType() {
			if ('echeckType' in this) {
				return this.echeckType;
			}
		}
	}, {
		key: 'setBankName',
		value: function setBankName(p_bankName) {
			this.bankName = p_bankName;
		}
	}, {
		key: 'getBankName',
		value: function getBankName() {
			if ('bankName' in this) {
				return this.bankName;
			}
		}
	}]);

	return BankAccountMaskedType;
}();

module.exports.BankAccountMaskedType = BankAccountMaskedType;

var BankAccountType = function () {
	function BankAccountType(obj) {
		_classCallCheck(this, BankAccountType);

		logger.debug('Enter BankAccountType constructor');
		if (arguments.length == 1) {
			if ('accountType' in obj && obj.accountType != null) {
				this.setAccountType(obj.accountType);
			}
			if ('routingNumber' in obj && obj.routingNumber != null) {
				this.setRoutingNumber(obj.routingNumber);
			}
			if ('accountNumber' in obj && obj.accountNumber != null) {
				this.setAccountNumber(obj.accountNumber);
			}
			if ('nameOnAccount' in obj && obj.nameOnAccount != null) {
				this.setNameOnAccount(obj.nameOnAccount);
			}
			if ('echeckType' in obj && obj.echeckType != null) {
				this.setEcheckType(obj.echeckType);
			}
			if ('bankName' in obj && obj.bankName != null) {
				this.setBankName(obj.bankName);
			}
			if ('checkNumber' in obj && obj.checkNumber != null) {
				this.setCheckNumber(obj.checkNumber);
			}
		} else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
			this.setCheckNumber(null);
		}
		logger.debug('Exit BankAccountType constructor');
	}

	_createClass(BankAccountType, [{
		key: 'setAccountType',
		value: function setAccountType(p_accountType) {
			this.accountType = p_accountType;
		}
	}, {
		key: 'getAccountType',
		value: function getAccountType() {
			if ('accountType' in this) {
				return this.accountType;
			}
		}
	}, {
		key: 'setRoutingNumber',
		value: function setRoutingNumber(p_routingNumber) {
			this.routingNumber = p_routingNumber;
		}
	}, {
		key: 'getRoutingNumber',
		value: function getRoutingNumber() {
			if ('routingNumber' in this) {
				return this.routingNumber;
			}
		}
	}, {
		key: 'setAccountNumber',
		value: function setAccountNumber(p_accountNumber) {
			this.accountNumber = p_accountNumber;
		}
	}, {
		key: 'getAccountNumber',
		value: function getAccountNumber() {
			if ('accountNumber' in this) {
				return this.accountNumber;
			}
		}
	}, {
		key: 'setNameOnAccount',
		value: function setNameOnAccount(p_nameOnAccount) {
			this.nameOnAccount = p_nameOnAccount;
		}
	}, {
		key: 'getNameOnAccount',
		value: function getNameOnAccount() {
			if ('nameOnAccount' in this) {
				return this.nameOnAccount;
			}
		}
	}, {
		key: 'setEcheckType',
		value: function setEcheckType(p_echeckType) {
			this.echeckType = p_echeckType;
		}
	}, {
		key: 'getEcheckType',
		value: function getEcheckType() {
			if ('echeckType' in this) {
				return this.echeckType;
			}
		}
	}, {
		key: 'setBankName',
		value: function setBankName(p_bankName) {
			this.bankName = p_bankName;
		}
	}, {
		key: 'getBankName',
		value: function getBankName() {
			if ('bankName' in this) {
				return this.bankName;
			}
		}
	}, {
		key: 'setCheckNumber',
		value: function setCheckNumber(p_checkNumber) {
			this.checkNumber = p_checkNumber;
		}
	}, {
		key: 'getCheckNumber',
		value: function getCheckNumber() {
			if ('checkNumber' in this) {
				return this.checkNumber;
			}
		}
	}]);

	return BankAccountType;
}();

module.exports.BankAccountType = BankAccountType;

var BatchDetailsType = function () {
	function BatchDetailsType(obj) {
		_classCallCheck(this, BatchDetailsType);

		logger.debug('Enter BatchDetailsType constructor');
		if (arguments.length == 1) {
			if ('batchId' in obj && obj.batchId != null) {
				this.setBatchId(obj.batchId);
			}
			if ('settlementTimeUTC' in obj && obj.settlementTimeUTC != null) {
				this.setSettlementTimeUTC(obj.settlementTimeUTC);
			}
			if ('settlementTimeLocal' in obj && obj.settlementTimeLocal != null) {
				this.setSettlementTimeLocal(obj.settlementTimeLocal);
			}
			if ('settlementState' in obj && obj.settlementState != null) {
				this.setSettlementState(obj.settlementState);
			}
			if ('paymentMethod' in obj && obj.paymentMethod != null) {
				this.setPaymentMethod(obj.paymentMethod);
			}
			if ('marketType' in obj && obj.marketType != null) {
				this.setMarketType(obj.marketType);
			}
			if ('product' in obj && obj.product != null) {
				this.setProduct(obj.product);
			}
			if ('statistics' in obj && obj.statistics != null) {
				this.setStatistics(new ArrayOfBatchStatisticType(obj.statistics));
			}
		} else {
			this.setBatchId(null);
			this.setSettlementTimeUTC(null);
			this.setSettlementTimeLocal(null);
			this.setSettlementState(null);
			this.setPaymentMethod(null);
			this.setMarketType(null);
			this.setProduct(null);
			this.setStatistics(null);
		}
		logger.debug('Exit BatchDetailsType constructor');
	}

	_createClass(BatchDetailsType, [{
		key: 'setBatchId',
		value: function setBatchId(p_batchId) {
			this.batchId = p_batchId;
		}
	}, {
		key: 'getBatchId',
		value: function getBatchId() {
			if ('batchId' in this) {
				return this.batchId;
			}
		}
	}, {
		key: 'setSettlementTimeUTC',
		value: function setSettlementTimeUTC(p_settlementTimeUTC) {
			this.settlementTimeUTC = p_settlementTimeUTC;
		}
	}, {
		key: 'getSettlementTimeUTC',
		value: function getSettlementTimeUTC() {
			if ('settlementTimeUTC' in this) {
				return this.settlementTimeUTC;
			}
		}
	}, {
		key: 'setSettlementTimeLocal',
		value: function setSettlementTimeLocal(p_settlementTimeLocal) {
			this.settlementTimeLocal = p_settlementTimeLocal;
		}
	}, {
		key: 'getSettlementTimeLocal',
		value: function getSettlementTimeLocal() {
			if ('settlementTimeLocal' in this) {
				return this.settlementTimeLocal;
			}
		}
	}, {
		key: 'setSettlementState',
		value: function setSettlementState(p_settlementState) {
			this.settlementState = p_settlementState;
		}
	}, {
		key: 'getSettlementState',
		value: function getSettlementState() {
			if ('settlementState' in this) {
				return this.settlementState;
			}
		}
	}, {
		key: 'setPaymentMethod',
		value: function setPaymentMethod(p_paymentMethod) {
			this.paymentMethod = p_paymentMethod;
		}
	}, {
		key: 'getPaymentMethod',
		value: function getPaymentMethod() {
			if ('paymentMethod' in this) {
				return this.paymentMethod;
			}
		}
	}, {
		key: 'setMarketType',
		value: function setMarketType(p_marketType) {
			this.marketType = p_marketType;
		}
	}, {
		key: 'getMarketType',
		value: function getMarketType() {
			if ('marketType' in this) {
				return this.marketType;
			}
		}
	}, {
		key: 'setProduct',
		value: function setProduct(p_product) {
			this.product = p_product;
		}
	}, {
		key: 'getProduct',
		value: function getProduct() {
			if ('product' in this) {
				return this.product;
			}
		}
	}, {
		key: 'setStatistics',
		value: function setStatistics(p_statistics) {
			this.statistics = p_statistics;
		}
	}, {
		key: 'getStatistics',
		value: function getStatistics() {
			if ('statistics' in this) {
				return this.statistics;
			}
		}
	}]);

	return BatchDetailsType;
}();

module.exports.BatchDetailsType = BatchDetailsType;

var BatchStatisticType = function () {
	function BatchStatisticType(obj) {
		_classCallCheck(this, BatchStatisticType);

		logger.debug('Enter BatchStatisticType constructor');
		if (arguments.length == 1) {
			if ('accountType' in obj && obj.accountType != null) {
				this.setAccountType(obj.accountType);
			}
			if ('chargeAmount' in obj && obj.chargeAmount != null) {
				this.setChargeAmount(obj.chargeAmount);
			}
			if ('chargeCount' in obj && obj.chargeCount != null) {
				this.setChargeCount(obj.chargeCount);
			}
			if ('refundAmount' in obj && obj.refundAmount != null) {
				this.setRefundAmount(obj.refundAmount);
			}
			if ('refundCount' in obj && obj.refundCount != null) {
				this.setRefundCount(obj.refundCount);
			}
			if ('voidCount' in obj && obj.voidCount != null) {
				this.setVoidCount(obj.voidCount);
			}
			if ('declineCount' in obj && obj.declineCount != null) {
				this.setDeclineCount(obj.declineCount);
			}
			if ('errorCount' in obj && obj.errorCount != null) {
				this.setErrorCount(obj.errorCount);
			}
			if ('returnedItemAmount' in obj && obj.returnedItemAmount != null) {
				this.setReturnedItemAmount(obj.returnedItemAmount);
			}
			if ('returnedItemCount' in obj && obj.returnedItemCount != null) {
				this.setReturnedItemCount(obj.returnedItemCount);
			}
			if ('chargebackAmount' in obj && obj.chargebackAmount != null) {
				this.setChargebackAmount(obj.chargebackAmount);
			}
			if ('chargebackCount' in obj && obj.chargebackCount != null) {
				this.setChargebackCount(obj.chargebackCount);
			}
			if ('correctionNoticeCount' in obj && obj.correctionNoticeCount != null) {
				this.setCorrectionNoticeCount(obj.correctionNoticeCount);
			}
			if ('chargeChargeBackAmount' in obj && obj.chargeChargeBackAmount != null) {
				this.setChargeChargeBackAmount(obj.chargeChargeBackAmount);
			}
			if ('chargeChargeBackCount' in obj && obj.chargeChargeBackCount != null) {
				this.setChargeChargeBackCount(obj.chargeChargeBackCount);
			}
			if ('refundChargeBackAmount' in obj && obj.refundChargeBackAmount != null) {
				this.setRefundChargeBackAmount(obj.refundChargeBackAmount);
			}
			if ('refundChargeBackCount' in obj && obj.refundChargeBackCount != null) {
				this.setRefundChargeBackCount(obj.refundChargeBackCount);
			}
			if ('chargeReturnedItemsAmount' in obj && obj.chargeReturnedItemsAmount != null) {
				this.setChargeReturnedItemsAmount(obj.chargeReturnedItemsAmount);
			}
			if ('chargeReturnedItemsCount' in obj && obj.chargeReturnedItemsCount != null) {
				this.setChargeReturnedItemsCount(obj.chargeReturnedItemsCount);
			}
			if ('refundReturnedItemsAmount' in obj && obj.refundReturnedItemsAmount != null) {
				this.setRefundReturnedItemsAmount(obj.refundReturnedItemsAmount);
			}
			if ('refundReturnedItemsCount' in obj && obj.refundReturnedItemsCount != null) {
				this.setRefundReturnedItemsCount(obj.refundReturnedItemsCount);
			}
		} else {
			this.setAccountType(null);
			this.setChargeAmount(null);
			this.setChargeCount(null);
			this.setRefundAmount(null);
			this.setRefundCount(null);
			this.setVoidCount(null);
			this.setDeclineCount(null);
			this.setErrorCount(null);
			this.setReturnedItemAmount(null);
			this.setReturnedItemCount(null);
			this.setChargebackAmount(null);
			this.setChargebackCount(null);
			this.setCorrectionNoticeCount(null);
			this.setChargeChargeBackAmount(null);
			this.setChargeChargeBackCount(null);
			this.setRefundChargeBackAmount(null);
			this.setRefundChargeBackCount(null);
			this.setChargeReturnedItemsAmount(null);
			this.setChargeReturnedItemsCount(null);
			this.setRefundReturnedItemsAmount(null);
			this.setRefundReturnedItemsCount(null);
		}
		logger.debug('Exit BatchStatisticType constructor');
	}

	_createClass(BatchStatisticType, [{
		key: 'setAccountType',
		value: function setAccountType(p_accountType) {
			this.accountType = p_accountType;
		}
	}, {
		key: 'getAccountType',
		value: function getAccountType() {
			if ('accountType' in this) {
				return this.accountType;
			}
		}
	}, {
		key: 'setChargeAmount',
		value: function setChargeAmount(p_chargeAmount) {
			this.chargeAmount = p_chargeAmount;
		}
	}, {
		key: 'getChargeAmount',
		value: function getChargeAmount() {
			if ('chargeAmount' in this) {
				return this.chargeAmount;
			}
		}
	}, {
		key: 'setChargeCount',
		value: function setChargeCount(p_chargeCount) {
			this.chargeCount = p_chargeCount;
		}
	}, {
		key: 'getChargeCount',
		value: function getChargeCount() {
			if ('chargeCount' in this) {
				return this.chargeCount;
			}
		}
	}, {
		key: 'setRefundAmount',
		value: function setRefundAmount(p_refundAmount) {
			this.refundAmount = p_refundAmount;
		}
	}, {
		key: 'getRefundAmount',
		value: function getRefundAmount() {
			if ('refundAmount' in this) {
				return this.refundAmount;
			}
		}
	}, {
		key: 'setRefundCount',
		value: function setRefundCount(p_refundCount) {
			this.refundCount = p_refundCount;
		}
	}, {
		key: 'getRefundCount',
		value: function getRefundCount() {
			if ('refundCount' in this) {
				return this.refundCount;
			}
		}
	}, {
		key: 'setVoidCount',
		value: function setVoidCount(p_voidCount) {
			this.voidCount = p_voidCount;
		}
	}, {
		key: 'getVoidCount',
		value: function getVoidCount() {
			if ('voidCount' in this) {
				return this.voidCount;
			}
		}
	}, {
		key: 'setDeclineCount',
		value: function setDeclineCount(p_declineCount) {
			this.declineCount = p_declineCount;
		}
	}, {
		key: 'getDeclineCount',
		value: function getDeclineCount() {
			if ('declineCount' in this) {
				return this.declineCount;
			}
		}
	}, {
		key: 'setErrorCount',
		value: function setErrorCount(p_errorCount) {
			this.errorCount = p_errorCount;
		}
	}, {
		key: 'getErrorCount',
		value: function getErrorCount() {
			if ('errorCount' in this) {
				return this.errorCount;
			}
		}
	}, {
		key: 'setReturnedItemAmount',
		value: function setReturnedItemAmount(p_returnedItemAmount) {
			this.returnedItemAmount = p_returnedItemAmount;
		}
	}, {
		key: 'getReturnedItemAmount',
		value: function getReturnedItemAmount() {
			if ('returnedItemAmount' in this) {
				return this.returnedItemAmount;
			}
		}
	}, {
		key: 'setReturnedItemCount',
		value: function setReturnedItemCount(p_returnedItemCount) {
			this.returnedItemCount = p_returnedItemCount;
		}
	}, {
		key: 'getReturnedItemCount',
		value: function getReturnedItemCount() {
			if ('returnedItemCount' in this) {
				return this.returnedItemCount;
			}
		}
	}, {
		key: 'setChargebackAmount',
		value: function setChargebackAmount(p_chargebackAmount) {
			this.chargebackAmount = p_chargebackAmount;
		}
	}, {
		key: 'getChargebackAmount',
		value: function getChargebackAmount() {
			if ('chargebackAmount' in this) {
				return this.chargebackAmount;
			}
		}
	}, {
		key: 'setChargebackCount',
		value: function setChargebackCount(p_chargebackCount) {
			this.chargebackCount = p_chargebackCount;
		}
	}, {
		key: 'getChargebackCount',
		value: function getChargebackCount() {
			if ('chargebackCount' in this) {
				return this.chargebackCount;
			}
		}
	}, {
		key: 'setCorrectionNoticeCount',
		value: function setCorrectionNoticeCount(p_correctionNoticeCount) {
			this.correctionNoticeCount = p_correctionNoticeCount;
		}
	}, {
		key: 'getCorrectionNoticeCount',
		value: function getCorrectionNoticeCount() {
			if ('correctionNoticeCount' in this) {
				return this.correctionNoticeCount;
			}
		}
	}, {
		key: 'setChargeChargeBackAmount',
		value: function setChargeChargeBackAmount(p_chargeChargeBackAmount) {
			this.chargeChargeBackAmount = p_chargeChargeBackAmount;
		}
	}, {
		key: 'getChargeChargeBackAmount',
		value: function getChargeChargeBackAmount() {
			if ('chargeChargeBackAmount' in this) {
				return this.chargeChargeBackAmount;
			}
		}
	}, {
		key: 'setChargeChargeBackCount',
		value: function setChargeChargeBackCount(p_chargeChargeBackCount) {
			this.chargeChargeBackCount = p_chargeChargeBackCount;
		}
	}, {
		key: 'getChargeChargeBackCount',
		value: function getChargeChargeBackCount() {
			if ('chargeChargeBackCount' in this) {
				return this.chargeChargeBackCount;
			}
		}
	}, {
		key: 'setRefundChargeBackAmount',
		value: function setRefundChargeBackAmount(p_refundChargeBackAmount) {
			this.refundChargeBackAmount = p_refundChargeBackAmount;
		}
	}, {
		key: 'getRefundChargeBackAmount',
		value: function getRefundChargeBackAmount() {
			if ('refundChargeBackAmount' in this) {
				return this.refundChargeBackAmount;
			}
		}
	}, {
		key: 'setRefundChargeBackCount',
		value: function setRefundChargeBackCount(p_refundChargeBackCount) {
			this.refundChargeBackCount = p_refundChargeBackCount;
		}
	}, {
		key: 'getRefundChargeBackCount',
		value: function getRefundChargeBackCount() {
			if ('refundChargeBackCount' in this) {
				return this.refundChargeBackCount;
			}
		}
	}, {
		key: 'setChargeReturnedItemsAmount',
		value: function setChargeReturnedItemsAmount(p_chargeReturnedItemsAmount) {
			this.chargeReturnedItemsAmount = p_chargeReturnedItemsAmount;
		}
	}, {
		key: 'getChargeReturnedItemsAmount',
		value: function getChargeReturnedItemsAmount() {
			if ('chargeReturnedItemsAmount' in this) {
				return this.chargeReturnedItemsAmount;
			}
		}
	}, {
		key: 'setChargeReturnedItemsCount',
		value: function setChargeReturnedItemsCount(p_chargeReturnedItemsCount) {
			this.chargeReturnedItemsCount = p_chargeReturnedItemsCount;
		}
	}, {
		key: 'getChargeReturnedItemsCount',
		value: function getChargeReturnedItemsCount() {
			if ('chargeReturnedItemsCount' in this) {
				return this.chargeReturnedItemsCount;
			}
		}
	}, {
		key: 'setRefundReturnedItemsAmount',
		value: function setRefundReturnedItemsAmount(p_refundReturnedItemsAmount) {
			this.refundReturnedItemsAmount = p_refundReturnedItemsAmount;
		}
	}, {
		key: 'getRefundReturnedItemsAmount',
		value: function getRefundReturnedItemsAmount() {
			if ('refundReturnedItemsAmount' in this) {
				return this.refundReturnedItemsAmount;
			}
		}
	}, {
		key: 'setRefundReturnedItemsCount',
		value: function setRefundReturnedItemsCount(p_refundReturnedItemsCount) {
			this.refundReturnedItemsCount = p_refundReturnedItemsCount;
		}
	}, {
		key: 'getRefundReturnedItemsCount',
		value: function getRefundReturnedItemsCount() {
			if ('refundReturnedItemsCount' in this) {
				return this.refundReturnedItemsCount;
			}
		}
	}]);

	return BatchStatisticType;
}();

module.exports.BatchStatisticType = BatchStatisticType;

var CardArt = function () {
	function CardArt(obj) {
		_classCallCheck(this, CardArt);

		logger.debug('Enter CardArt constructor');
		if (arguments.length == 1) {
			if ('cardBrand' in obj && obj.cardBrand != null) {
				this.setCardBrand(obj.cardBrand);
			}
			if ('cardImageHeight' in obj && obj.cardImageHeight != null) {
				this.setCardImageHeight(obj.cardImageHeight);
			}
			if ('cardImageUrl' in obj && obj.cardImageUrl != null) {
				this.setCardImageUrl(obj.cardImageUrl);
			}
			if ('cardImageWidth' in obj && obj.cardImageWidth != null) {
				this.setCardImageWidth(obj.cardImageWidth);
			}
			if ('cardType' in obj && obj.cardType != null) {
				this.setCardType(obj.cardType);
			}
		} else {
			this.setCardBrand(null);
			this.setCardImageHeight(null);
			this.setCardImageUrl(null);
			this.setCardImageWidth(null);
			this.setCardType(null);
		}
		logger.debug('Exit CardArt constructor');
	}

	_createClass(CardArt, [{
		key: 'setCardBrand',
		value: function setCardBrand(p_cardBrand) {
			this.cardBrand = p_cardBrand;
		}
	}, {
		key: 'getCardBrand',
		value: function getCardBrand() {
			if ('cardBrand' in this) {
				return this.cardBrand;
			}
		}
	}, {
		key: 'setCardImageHeight',
		value: function setCardImageHeight(p_cardImageHeight) {
			this.cardImageHeight = p_cardImageHeight;
		}
	}, {
		key: 'getCardImageHeight',
		value: function getCardImageHeight() {
			if ('cardImageHeight' in this) {
				return this.cardImageHeight;
			}
		}
	}, {
		key: 'setCardImageUrl',
		value: function setCardImageUrl(p_cardImageUrl) {
			this.cardImageUrl = p_cardImageUrl;
		}
	}, {
		key: 'getCardImageUrl',
		value: function getCardImageUrl() {
			if ('cardImageUrl' in this) {
				return this.cardImageUrl;
			}
		}
	}, {
		key: 'setCardImageWidth',
		value: function setCardImageWidth(p_cardImageWidth) {
			this.cardImageWidth = p_cardImageWidth;
		}
	}, {
		key: 'getCardImageWidth',
		value: function getCardImageWidth() {
			if ('cardImageWidth' in this) {
				return this.cardImageWidth;
			}
		}
	}, {
		key: 'setCardType',
		value: function setCardType(p_cardType) {
			this.cardType = p_cardType;
		}
	}, {
		key: 'getCardType',
		value: function getCardType() {
			if ('cardType' in this) {
				return this.cardType;
			}
		}
	}]);

	return CardArt;
}();

module.exports.CardArt = CardArt;

var CcAuthenticationType = function () {
	function CcAuthenticationType(obj) {
		_classCallCheck(this, CcAuthenticationType);

		logger.debug('Enter CcAuthenticationType constructor');
		if (arguments.length == 1) {
			if ('authenticationIndicator' in obj && obj.authenticationIndicator != null) {
				this.setAuthenticationIndicator(obj.authenticationIndicator);
			}
			if ('cardholderAuthenticationValue' in obj && obj.cardholderAuthenticationValue != null) {
				this.setCardholderAuthenticationValue(obj.cardholderAuthenticationValue);
			}
		} else {
			this.setAuthenticationIndicator(null);
			this.setCardholderAuthenticationValue(null);
		}
		logger.debug('Exit CcAuthenticationType constructor');
	}

	_createClass(CcAuthenticationType, [{
		key: 'setAuthenticationIndicator',
		value: function setAuthenticationIndicator(p_authenticationIndicator) {
			this.authenticationIndicator = p_authenticationIndicator;
		}
	}, {
		key: 'getAuthenticationIndicator',
		value: function getAuthenticationIndicator() {
			if ('authenticationIndicator' in this) {
				return this.authenticationIndicator;
			}
		}
	}, {
		key: 'setCardholderAuthenticationValue',
		value: function setCardholderAuthenticationValue(p_cardholderAuthenticationValue) {
			this.cardholderAuthenticationValue = p_cardholderAuthenticationValue;
		}
	}, {
		key: 'getCardholderAuthenticationValue',
		value: function getCardholderAuthenticationValue() {
			if ('cardholderAuthenticationValue' in this) {
				return this.cardholderAuthenticationValue;
			}
		}
	}]);

	return CcAuthenticationType;
}();

module.exports.CcAuthenticationType = CcAuthenticationType;

var CreateProfileResponse = function () {
	function CreateProfileResponse(obj) {
		_classCallCheck(this, CreateProfileResponse);

		logger.debug('Enter CreateProfileResponse constructor');
		if (arguments.length == 1) {
			if ('messages' in obj && obj.messages != null) {
				this.setMessages(new MessagesType(obj.messages));
			}
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileIdList' in obj && obj.customerPaymentProfileIdList != null) {
				this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList));
			}
			if ('customerShippingAddressIdList' in obj && obj.customerShippingAddressIdList != null) {
				this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList));
			}
		} else {
			this.setMessages(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
		}
		logger.debug('Exit CreateProfileResponse constructor');
	}

	_createClass(CreateProfileResponse, [{
		key: 'setMessages',
		value: function setMessages(p_messages) {
			this.messages = p_messages;
		}
	}, {
		key: 'getMessages',
		value: function getMessages() {
			if ('messages' in this) {
				return this.messages;
			}
		}
	}, {
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileIdList',
		value: function setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) {
			this.customerPaymentProfileIdList = p_customerPaymentProfileIdList;
		}
	}, {
		key: 'getCustomerPaymentProfileIdList',
		value: function getCustomerPaymentProfileIdList() {
			if ('customerPaymentProfileIdList' in this) {
				return this.customerPaymentProfileIdList;
			}
		}
	}, {
		key: 'setCustomerShippingAddressIdList',
		value: function setCustomerShippingAddressIdList(p_customerShippingAddressIdList) {
			this.customerShippingAddressIdList = p_customerShippingAddressIdList;
		}
	}, {
		key: 'getCustomerShippingAddressIdList',
		value: function getCustomerShippingAddressIdList() {
			if ('customerShippingAddressIdList' in this) {
				return this.customerShippingAddressIdList;
			}
		}
	}]);

	return CreateProfileResponse;
}();

module.exports.CreateProfileResponse = CreateProfileResponse;

var CreditCardMaskedType = function () {
	function CreditCardMaskedType(obj) {
		_classCallCheck(this, CreditCardMaskedType);

		logger.debug('Enter CreditCardMaskedType constructor');
		if (arguments.length == 1) {
			if ('cardNumber' in obj && obj.cardNumber != null) {
				this.setCardNumber(obj.cardNumber);
			}
			if ('expirationDate' in obj && obj.expirationDate != null) {
				this.setExpirationDate(obj.expirationDate);
			}
			if ('cardType' in obj && obj.cardType != null) {
				this.setCardType(obj.cardType);
			}
			if ('cardArt' in obj && obj.cardArt != null) {
				this.setCardArt(new CardArt(obj.cardArt));
			}
			if ('issuerNumber' in obj && obj.issuerNumber != null) {
				this.setIssuerNumber(obj.issuerNumber);
			}
		} else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardType(null);
			this.setCardArt(null);
			this.setIssuerNumber(null);
		}
		logger.debug('Exit CreditCardMaskedType constructor');
	}

	_createClass(CreditCardMaskedType, [{
		key: 'setCardNumber',
		value: function setCardNumber(p_cardNumber) {
			this.cardNumber = p_cardNumber;
		}
	}, {
		key: 'getCardNumber',
		value: function getCardNumber() {
			if ('cardNumber' in this) {
				return this.cardNumber;
			}
		}
	}, {
		key: 'setExpirationDate',
		value: function setExpirationDate(p_expirationDate) {
			this.expirationDate = p_expirationDate;
		}
	}, {
		key: 'getExpirationDate',
		value: function getExpirationDate() {
			if ('expirationDate' in this) {
				return this.expirationDate;
			}
		}
	}, {
		key: 'setCardType',
		value: function setCardType(p_cardType) {
			this.cardType = p_cardType;
		}
	}, {
		key: 'getCardType',
		value: function getCardType() {
			if ('cardType' in this) {
				return this.cardType;
			}
		}
	}, {
		key: 'setCardArt',
		value: function setCardArt(p_cardArt) {
			this.cardArt = p_cardArt;
		}
	}, {
		key: 'getCardArt',
		value: function getCardArt() {
			if ('cardArt' in this) {
				return this.cardArt;
			}
		}
	}, {
		key: 'setIssuerNumber',
		value: function setIssuerNumber(p_issuerNumber) {
			this.issuerNumber = p_issuerNumber;
		}
	}, {
		key: 'getIssuerNumber',
		value: function getIssuerNumber() {
			if ('issuerNumber' in this) {
				return this.issuerNumber;
			}
		}
	}]);

	return CreditCardMaskedType;
}();

module.exports.CreditCardMaskedType = CreditCardMaskedType;

var CreditCardSimpleType = function () {
	function CreditCardSimpleType(obj) {
		_classCallCheck(this, CreditCardSimpleType);

		logger.debug('Enter CreditCardSimpleType constructor');
		if (arguments.length == 1) {
			if ('cardNumber' in obj && obj.cardNumber != null) {
				this.setCardNumber(obj.cardNumber);
			}
			if ('expirationDate' in obj && obj.expirationDate != null) {
				this.setExpirationDate(obj.expirationDate);
			}
		} else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
		}
		logger.debug('Exit CreditCardSimpleType constructor');
	}

	_createClass(CreditCardSimpleType, [{
		key: 'setCardNumber',
		value: function setCardNumber(p_cardNumber) {
			this.cardNumber = p_cardNumber;
		}
	}, {
		key: 'getCardNumber',
		value: function getCardNumber() {
			if ('cardNumber' in this) {
				return this.cardNumber;
			}
		}
	}, {
		key: 'setExpirationDate',
		value: function setExpirationDate(p_expirationDate) {
			this.expirationDate = p_expirationDate;
		}
	}, {
		key: 'getExpirationDate',
		value: function getExpirationDate() {
			if ('expirationDate' in this) {
				return this.expirationDate;
			}
		}
	}]);

	return CreditCardSimpleType;
}();

module.exports.CreditCardSimpleType = CreditCardSimpleType;

var CreditCardTrackType = function () {
	function CreditCardTrackType(obj) {
		_classCallCheck(this, CreditCardTrackType);

		logger.debug('Enter CreditCardTrackType constructor');
		if (arguments.length == 1) {
			if ('track1' in obj && obj.track1 != null) {
				this.setTrack1(obj.track1);
			}
			if ('track2' in obj && obj.track2 != null) {
				this.setTrack2(obj.track2);
			}
		} else {
			this.setTrack1(null);
			this.setTrack2(null);
		}
		logger.debug('Exit CreditCardTrackType constructor');
	}

	_createClass(CreditCardTrackType, [{
		key: 'setTrack1',
		value: function setTrack1(p_track1) {
			this.track1 = p_track1;
		}
	}, {
		key: 'getTrack1',
		value: function getTrack1() {
			if ('track1' in this) {
				return this.track1;
			}
		}
	}, {
		key: 'setTrack2',
		value: function setTrack2(p_track2) {
			this.track2 = p_track2;
		}
	}, {
		key: 'getTrack2',
		value: function getTrack2() {
			if ('track2' in this) {
				return this.track2;
			}
		}
	}]);

	return CreditCardTrackType;
}();

module.exports.CreditCardTrackType = CreditCardTrackType;

var CustomerDataType = function () {
	function CustomerDataType(obj) {
		_classCallCheck(this, CustomerDataType);

		logger.debug('Enter CustomerDataType constructor');
		if (arguments.length == 1) {
			if ('type' in obj && obj.type != null) {
				this.setType(obj.type);
			}
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('email' in obj && obj.email != null) {
				this.setEmail(obj.email);
			}
			if ('driversLicense' in obj && obj.driversLicense != null) {
				this.setDriversLicense(new DriversLicenseType(obj.driversLicense));
			}
			if ('taxId' in obj && obj.taxId != null) {
				this.setTaxId(obj.taxId);
			}
		} else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
		logger.debug('Exit CustomerDataType constructor');
	}

	_createClass(CustomerDataType, [{
		key: 'setType',
		value: function setType(p_type) {
			this.type = p_type;
		}
	}, {
		key: 'getType',
		value: function getType() {
			if ('type' in this) {
				return this.type;
			}
		}
	}, {
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}, {
		key: 'setDriversLicense',
		value: function setDriversLicense(p_driversLicense) {
			this.driversLicense = p_driversLicense;
		}
	}, {
		key: 'getDriversLicense',
		value: function getDriversLicense() {
			if ('driversLicense' in this) {
				return this.driversLicense;
			}
		}
	}, {
		key: 'setTaxId',
		value: function setTaxId(p_taxId) {
			this.taxId = p_taxId;
		}
	}, {
		key: 'getTaxId',
		value: function getTaxId() {
			if ('taxId' in this) {
				return this.taxId;
			}
		}
	}]);

	return CustomerDataType;
}();

module.exports.CustomerDataType = CustomerDataType;

var CustomerPaymentProfileBaseType = function () {
	function CustomerPaymentProfileBaseType(obj) {
		_classCallCheck(this, CustomerPaymentProfileBaseType);

		logger.debug('Enter CustomerPaymentProfileBaseType constructor');
		if (arguments.length == 1) {
			if ('customerType' in obj && obj.customerType != null) {
				this.setCustomerType(obj.customerType);
			}
			if ('billTo' in obj && obj.billTo != null) {
				this.setBillTo(new CustomerAddressType(obj.billTo));
			}
		} else {
			this.setCustomerType(null);
			this.setBillTo(null);
		}
		logger.debug('Exit CustomerPaymentProfileBaseType constructor');
	}

	_createClass(CustomerPaymentProfileBaseType, [{
		key: 'setCustomerType',
		value: function setCustomerType(p_customerType) {
			this.customerType = p_customerType;
		}
	}, {
		key: 'getCustomerType',
		value: function getCustomerType() {
			if ('customerType' in this) {
				return this.customerType;
			}
		}
	}, {
		key: 'setBillTo',
		value: function setBillTo(p_billTo) {
			this.billTo = p_billTo;
		}
	}, {
		key: 'getBillTo',
		value: function getBillTo() {
			if ('billTo' in this) {
				return this.billTo;
			}
		}
	}]);

	return CustomerPaymentProfileBaseType;
}();

module.exports.CustomerPaymentProfileBaseType = CustomerPaymentProfileBaseType;

var CustomerPaymentProfileListItemType = function () {
	function CustomerPaymentProfileListItemType(obj) {
		_classCallCheck(this, CustomerPaymentProfileListItemType);

		logger.debug('Enter CustomerPaymentProfileListItemType constructor');
		if (arguments.length == 1) {
			if ('defaultPaymentProfile' in obj && obj.defaultPaymentProfile != null) {
				this.setDefaultPaymentProfile(obj.defaultPaymentProfile);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				this.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('billTo' in obj && obj.billTo != null) {
				this.setBillTo(new CustomerAddressType(obj.billTo));
			}
			if ('payment' in obj && obj.payment != null) {
				this.setPayment(new PaymentMaskedType(obj.payment));
			}
		} else {
			this.setDefaultPaymentProfile(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerProfileId(null);
			this.setBillTo(null);
			this.setPayment(null);
		}
		logger.debug('Exit CustomerPaymentProfileListItemType constructor');
	}

	_createClass(CustomerPaymentProfileListItemType, [{
		key: 'setDefaultPaymentProfile',
		value: function setDefaultPaymentProfile(p_defaultPaymentProfile) {
			this.defaultPaymentProfile = p_defaultPaymentProfile;
		}
	}, {
		key: 'getDefaultPaymentProfile',
		value: function getDefaultPaymentProfile() {
			if ('defaultPaymentProfile' in this) {
				return this.defaultPaymentProfile;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setBillTo',
		value: function setBillTo(p_billTo) {
			this.billTo = p_billTo;
		}
	}, {
		key: 'getBillTo',
		value: function getBillTo() {
			if ('billTo' in this) {
				return this.billTo;
			}
		}
	}, {
		key: 'setPayment',
		value: function setPayment(p_payment) {
			this.payment = p_payment;
		}
	}, {
		key: 'getPayment',
		value: function getPayment() {
			if ('payment' in this) {
				return this.payment;
			}
		}
	}]);

	return CustomerPaymentProfileListItemType;
}();

module.exports.CustomerPaymentProfileListItemType = CustomerPaymentProfileListItemType;

var CustomerPaymentProfileSorting = function () {
	function CustomerPaymentProfileSorting(obj) {
		_classCallCheck(this, CustomerPaymentProfileSorting);

		logger.debug('Enter CustomerPaymentProfileSorting constructor');
		if (arguments.length == 1) {
			if ('orderBy' in obj && obj.orderBy != null) {
				this.setOrderBy(obj.orderBy);
			}
			if ('orderDescending' in obj && obj.orderDescending != null) {
				this.setOrderDescending(obj.orderDescending);
			}
		} else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit CustomerPaymentProfileSorting constructor');
	}

	_createClass(CustomerPaymentProfileSorting, [{
		key: 'setOrderBy',
		value: function setOrderBy(p_orderBy) {
			this.orderBy = p_orderBy;
		}
	}, {
		key: 'getOrderBy',
		value: function getOrderBy() {
			if ('orderBy' in this) {
				return this.orderBy;
			}
		}
	}, {
		key: 'setOrderDescending',
		value: function setOrderDescending(p_orderDescending) {
			this.orderDescending = p_orderDescending;
		}
	}, {
		key: 'getOrderDescending',
		value: function getOrderDescending() {
			if ('orderDescending' in this) {
				return this.orderDescending;
			}
		}
	}]);

	return CustomerPaymentProfileSorting;
}();

module.exports.CustomerPaymentProfileSorting = CustomerPaymentProfileSorting;

var CustomerProfileBaseType = function () {
	function CustomerProfileBaseType(obj) {
		_classCallCheck(this, CustomerProfileBaseType);

		logger.debug('Enter CustomerProfileBaseType constructor');
		if (arguments.length == 1) {
			if ('merchantCustomerId' in obj && obj.merchantCustomerId != null) {
				this.setMerchantCustomerId(obj.merchantCustomerId);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
			if ('email' in obj && obj.email != null) {
				this.setEmail(obj.email);
			}
		} else {
			this.setMerchantCustomerId(null);
			this.setDescription(null);
			this.setEmail(null);
		}
		logger.debug('Exit CustomerProfileBaseType constructor');
	}

	_createClass(CustomerProfileBaseType, [{
		key: 'setMerchantCustomerId',
		value: function setMerchantCustomerId(p_merchantCustomerId) {
			this.merchantCustomerId = p_merchantCustomerId;
		}
	}, {
		key: 'getMerchantCustomerId',
		value: function getMerchantCustomerId() {
			if ('merchantCustomerId' in this) {
				return this.merchantCustomerId;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}]);

	return CustomerProfileBaseType;
}();

module.exports.CustomerProfileBaseType = CustomerProfileBaseType;

var CustomerProfileIdType = function () {
	function CustomerProfileIdType(obj) {
		_classCallCheck(this, CustomerProfileIdType);

		logger.debug('Enter CustomerProfileIdType constructor');
		if (arguments.length == 1) {
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				this.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerAddressId' in obj && obj.customerAddressId != null) {
				this.setCustomerAddressId(obj.customerAddressId);
			}
		} else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CustomerProfileIdType constructor');
	}

	_createClass(CustomerProfileIdType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerAddressId',
		value: function setCustomerAddressId(p_customerAddressId) {
			this.customerAddressId = p_customerAddressId;
		}
	}, {
		key: 'getCustomerAddressId',
		value: function getCustomerAddressId() {
			if ('customerAddressId' in this) {
				return this.customerAddressId;
			}
		}
	}]);

	return CustomerProfileIdType;
}();

module.exports.CustomerProfileIdType = CustomerProfileIdType;

var CustomerProfilePaymentType = function () {
	function CustomerProfilePaymentType(obj) {
		_classCallCheck(this, CustomerProfilePaymentType);

		logger.debug('Enter CustomerProfilePaymentType constructor');
		if (arguments.length == 1) {
			if ('createProfile' in obj && obj.createProfile != null) {
				this.setCreateProfile(obj.createProfile);
			}
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('paymentProfile' in obj && obj.paymentProfile != null) {
				this.setPaymentProfile(new PaymentProfile(obj.paymentProfile));
			}
			if ('shippingProfileId' in obj && obj.shippingProfileId != null) {
				this.setShippingProfileId(obj.shippingProfileId);
			}
		} else {
			this.setCreateProfile(null);
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setShippingProfileId(null);
		}
		logger.debug('Exit CustomerProfilePaymentType constructor');
	}

	_createClass(CustomerProfilePaymentType, [{
		key: 'setCreateProfile',
		value: function setCreateProfile(p_createProfile) {
			this.createProfile = p_createProfile;
		}
	}, {
		key: 'getCreateProfile',
		value: function getCreateProfile() {
			if ('createProfile' in this) {
				return this.createProfile;
			}
		}
	}, {
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setPaymentProfile',
		value: function setPaymentProfile(p_paymentProfile) {
			this.paymentProfile = p_paymentProfile;
		}
	}, {
		key: 'getPaymentProfile',
		value: function getPaymentProfile() {
			if ('paymentProfile' in this) {
				return this.paymentProfile;
			}
		}
	}, {
		key: 'setShippingProfileId',
		value: function setShippingProfileId(p_shippingProfileId) {
			this.shippingProfileId = p_shippingProfileId;
		}
	}, {
		key: 'getShippingProfileId',
		value: function getShippingProfileId() {
			if ('shippingProfileId' in this) {
				return this.shippingProfileId;
			}
		}
	}]);

	return CustomerProfilePaymentType;
}();

module.exports.CustomerProfilePaymentType = CustomerProfilePaymentType;

var CustomerProfileSummaryType = function () {
	function CustomerProfileSummaryType(obj) {
		_classCallCheck(this, CustomerProfileSummaryType);

		logger.debug('Enter CustomerProfileSummaryType constructor');
		if (arguments.length == 1) {
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
			if ('merchantCustomerId' in obj && obj.merchantCustomerId != null) {
				this.setMerchantCustomerId(obj.merchantCustomerId);
			}
			if ('email' in obj && obj.email != null) {
				this.setEmail(obj.email);
			}
			if ('createdDate' in obj && obj.createdDate != null) {
				this.setCreatedDate(obj.createdDate);
			}
		} else {
			this.setCustomerProfileId(null);
			this.setDescription(null);
			this.setMerchantCustomerId(null);
			this.setEmail(null);
			this.setCreatedDate(null);
		}
		logger.debug('Exit CustomerProfileSummaryType constructor');
	}

	_createClass(CustomerProfileSummaryType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}, {
		key: 'setMerchantCustomerId',
		value: function setMerchantCustomerId(p_merchantCustomerId) {
			this.merchantCustomerId = p_merchantCustomerId;
		}
	}, {
		key: 'getMerchantCustomerId',
		value: function getMerchantCustomerId() {
			if ('merchantCustomerId' in this) {
				return this.merchantCustomerId;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}, {
		key: 'setCreatedDate',
		value: function setCreatedDate(p_createdDate) {
			this.createdDate = p_createdDate;
		}
	}, {
		key: 'getCreatedDate',
		value: function getCreatedDate() {
			if ('createdDate' in this) {
				return this.createdDate;
			}
		}
	}]);

	return CustomerProfileSummaryType;
}();

module.exports.CustomerProfileSummaryType = CustomerProfileSummaryType;

var CustomerType = function () {
	function CustomerType(obj) {
		_classCallCheck(this, CustomerType);

		logger.debug('Enter CustomerType constructor');
		if (arguments.length == 1) {
			if ('type' in obj && obj.type != null) {
				this.setType(obj.type);
			}
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('email' in obj && obj.email != null) {
				this.setEmail(obj.email);
			}
			if ('phoneNumber' in obj && obj.phoneNumber != null) {
				this.setPhoneNumber(obj.phoneNumber);
			}
			if ('faxNumber' in obj && obj.faxNumber != null) {
				this.setFaxNumber(obj.faxNumber);
			}
			if ('driversLicense' in obj && obj.driversLicense != null) {
				this.setDriversLicense(new DriversLicenseType(obj.driversLicense));
			}
			if ('taxId' in obj && obj.taxId != null) {
				this.setTaxId(obj.taxId);
			}
		} else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setPhoneNumber(null);
			this.setFaxNumber(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
		logger.debug('Exit CustomerType constructor');
	}

	_createClass(CustomerType, [{
		key: 'setType',
		value: function setType(p_type) {
			this.type = p_type;
		}
	}, {
		key: 'getType',
		value: function getType() {
			if ('type' in this) {
				return this.type;
			}
		}
	}, {
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}, {
		key: 'setPhoneNumber',
		value: function setPhoneNumber(p_phoneNumber) {
			this.phoneNumber = p_phoneNumber;
		}
	}, {
		key: 'getPhoneNumber',
		value: function getPhoneNumber() {
			if ('phoneNumber' in this) {
				return this.phoneNumber;
			}
		}
	}, {
		key: 'setFaxNumber',
		value: function setFaxNumber(p_faxNumber) {
			this.faxNumber = p_faxNumber;
		}
	}, {
		key: 'getFaxNumber',
		value: function getFaxNumber() {
			if ('faxNumber' in this) {
				return this.faxNumber;
			}
		}
	}, {
		key: 'setDriversLicense',
		value: function setDriversLicense(p_driversLicense) {
			this.driversLicense = p_driversLicense;
		}
	}, {
		key: 'getDriversLicense',
		value: function getDriversLicense() {
			if ('driversLicense' in this) {
				return this.driversLicense;
			}
		}
	}, {
		key: 'setTaxId',
		value: function setTaxId(p_taxId) {
			this.taxId = p_taxId;
		}
	}, {
		key: 'getTaxId',
		value: function getTaxId() {
			if ('taxId' in this) {
				return this.taxId;
			}
		}
	}]);

	return CustomerType;
}();

module.exports.CustomerType = CustomerType;

var DriversLicenseMaskedType = function () {
	function DriversLicenseMaskedType(obj) {
		_classCallCheck(this, DriversLicenseMaskedType);

		logger.debug('Enter DriversLicenseMaskedType constructor');
		if (arguments.length == 1) {
			if ('number' in obj && obj.number != null) {
				this.setNumber(obj.number);
			}
			if ('state' in obj && obj.state != null) {
				this.setState(obj.state);
			}
			if ('dateOfBirth' in obj && obj.dateOfBirth != null) {
				this.setDateOfBirth(obj.dateOfBirth);
			}
		} else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
		logger.debug('Exit DriversLicenseMaskedType constructor');
	}

	_createClass(DriversLicenseMaskedType, [{
		key: 'setNumber',
		value: function setNumber(p_number) {
			this.number = p_number;
		}
	}, {
		key: 'getNumber',
		value: function getNumber() {
			if ('number' in this) {
				return this.number;
			}
		}
	}, {
		key: 'setState',
		value: function setState(p_state) {
			this.state = p_state;
		}
	}, {
		key: 'getState',
		value: function getState() {
			if ('state' in this) {
				return this.state;
			}
		}
	}, {
		key: 'setDateOfBirth',
		value: function setDateOfBirth(p_dateOfBirth) {
			this.dateOfBirth = p_dateOfBirth;
		}
	}, {
		key: 'getDateOfBirth',
		value: function getDateOfBirth() {
			if ('dateOfBirth' in this) {
				return this.dateOfBirth;
			}
		}
	}]);

	return DriversLicenseMaskedType;
}();

module.exports.DriversLicenseMaskedType = DriversLicenseMaskedType;

var DriversLicenseType = function () {
	function DriversLicenseType(obj) {
		_classCallCheck(this, DriversLicenseType);

		logger.debug('Enter DriversLicenseType constructor');
		if (arguments.length == 1) {
			if ('number' in obj && obj.number != null) {
				this.setNumber(obj.number);
			}
			if ('state' in obj && obj.state != null) {
				this.setState(obj.state);
			}
			if ('dateOfBirth' in obj && obj.dateOfBirth != null) {
				this.setDateOfBirth(obj.dateOfBirth);
			}
		} else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
		logger.debug('Exit DriversLicenseType constructor');
	}

	_createClass(DriversLicenseType, [{
		key: 'setNumber',
		value: function setNumber(p_number) {
			this.number = p_number;
		}
	}, {
		key: 'getNumber',
		value: function getNumber() {
			if ('number' in this) {
				return this.number;
			}
		}
	}, {
		key: 'setState',
		value: function setState(p_state) {
			this.state = p_state;
		}
	}, {
		key: 'getState',
		value: function getState() {
			if ('state' in this) {
				return this.state;
			}
		}
	}, {
		key: 'setDateOfBirth',
		value: function setDateOfBirth(p_dateOfBirth) {
			this.dateOfBirth = p_dateOfBirth;
		}
	}, {
		key: 'getDateOfBirth',
		value: function getDateOfBirth() {
			if ('dateOfBirth' in this) {
				return this.dateOfBirth;
			}
		}
	}]);

	return DriversLicenseType;
}();

module.exports.DriversLicenseType = DriversLicenseType;

var EmvTag = function () {
	function EmvTag(obj) {
		_classCallCheck(this, EmvTag);

		logger.debug('Enter EmvTag constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('value' in obj && obj.value != null) {
				this.setValue(obj.value);
			}
			if ('formatted' in obj && obj.formatted != null) {
				this.setFormatted(obj.formatted);
			}
		} else {
			this.setName(null);
			this.setValue(null);
			this.setFormatted(null);
		}
		logger.debug('Exit EmvTag constructor');
	}

	_createClass(EmvTag, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(p_value) {
			this.value = p_value;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			if ('value' in this) {
				return this.value;
			}
		}
	}, {
		key: 'setFormatted',
		value: function setFormatted(p_formatted) {
			this.formatted = p_formatted;
		}
	}, {
		key: 'getFormatted',
		value: function getFormatted() {
			if ('formatted' in this) {
				return this.formatted;
			}
		}
	}]);

	return EmvTag;
}();

module.exports.EmvTag = EmvTag;

var EncryptedTrackDataType = function () {
	function EncryptedTrackDataType(obj) {
		_classCallCheck(this, EncryptedTrackDataType);

		logger.debug('Enter EncryptedTrackDataType constructor');
		if (arguments.length == 1) {
			if ('FormOfPayment' in obj && obj.FormOfPayment != null) {
				this.setFormOfPayment(new KeyBlock(obj.FormOfPayment));
			}
		} else {
			this.setFormOfPayment(null);
		}
		logger.debug('Exit EncryptedTrackDataType constructor');
	}

	_createClass(EncryptedTrackDataType, [{
		key: 'setFormOfPayment',
		value: function setFormOfPayment(p_FormOfPayment) {
			this.FormOfPayment = p_FormOfPayment;
		}
	}, {
		key: 'getFormOfPayment',
		value: function getFormOfPayment() {
			if ('FormOfPayment' in this) {
				return this.FormOfPayment;
			}
		}
	}]);

	return EncryptedTrackDataType;
}();

module.exports.EncryptedTrackDataType = EncryptedTrackDataType;

var EnumCollection = function () {
	function EnumCollection(obj) {
		_classCallCheck(this, EnumCollection);

		logger.debug('Enter EnumCollection constructor');
		if (arguments.length == 1) {
			if ('customerProfileSummaryType' in obj && obj.customerProfileSummaryType != null) {
				this.setCustomerProfileSummaryType(new CustomerProfileSummaryType(obj.customerProfileSummaryType));
			}
			if ('paymentSimpleType' in obj && obj.paymentSimpleType != null) {
				this.setPaymentSimpleType(new PaymentSimpleType(obj.paymentSimpleType));
			}
			if ('accountTypeEnum' in obj && obj.accountTypeEnum != null) {
				this.setAccountTypeEnum(obj.accountTypeEnum);
			}
			if ('cardTypeEnum' in obj && obj.cardTypeEnum != null) {
				this.setCardTypeEnum(obj.cardTypeEnum);
			}
			if ('FDSFilterActionEnum' in obj && obj.FDSFilterActionEnum != null) {
				this.setFDSFilterActionEnum(obj.FDSFilterActionEnum);
			}
			if ('permissionsEnum' in obj && obj.permissionsEnum != null) {
				this.setPermissionsEnum(obj.permissionsEnum);
			}
			if ('settingNameEnum' in obj && obj.settingNameEnum != null) {
				this.setSettingNameEnum(obj.settingNameEnum);
			}
			if ('settlementStateEnum' in obj && obj.settlementStateEnum != null) {
				this.setSettlementStateEnum(obj.settlementStateEnum);
			}
			if ('transactionStatusEnum' in obj && obj.transactionStatusEnum != null) {
				this.setTransactionStatusEnum(obj.transactionStatusEnum);
			}
			if ('transactionTypeEnum' in obj && obj.transactionTypeEnum != null) {
				this.setTransactionTypeEnum(obj.transactionTypeEnum);
			}
		} else {
			this.setCustomerProfileSummaryType(null);
			this.setPaymentSimpleType(null);
			this.setAccountTypeEnum(null);
			this.setCardTypeEnum(null);
			this.setFDSFilterActionEnum(null);
			this.setPermissionsEnum(null);
			this.setSettingNameEnum(null);
			this.setSettlementStateEnum(null);
			this.setTransactionStatusEnum(null);
			this.setTransactionTypeEnum(null);
		}
		logger.debug('Exit EnumCollection constructor');
	}

	_createClass(EnumCollection, [{
		key: 'setCustomerProfileSummaryType',
		value: function setCustomerProfileSummaryType(p_customerProfileSummaryType) {
			this.customerProfileSummaryType = p_customerProfileSummaryType;
		}
	}, {
		key: 'getCustomerProfileSummaryType',
		value: function getCustomerProfileSummaryType() {
			if ('customerProfileSummaryType' in this) {
				return this.customerProfileSummaryType;
			}
		}
	}, {
		key: 'setPaymentSimpleType',
		value: function setPaymentSimpleType(p_paymentSimpleType) {
			this.paymentSimpleType = p_paymentSimpleType;
		}
	}, {
		key: 'getPaymentSimpleType',
		value: function getPaymentSimpleType() {
			if ('paymentSimpleType' in this) {
				return this.paymentSimpleType;
			}
		}
	}, {
		key: 'setAccountTypeEnum',
		value: function setAccountTypeEnum(p_accountTypeEnum) {
			this.accountTypeEnum = p_accountTypeEnum;
		}
	}, {
		key: 'getAccountTypeEnum',
		value: function getAccountTypeEnum() {
			if ('accountTypeEnum' in this) {
				return this.accountTypeEnum;
			}
		}
	}, {
		key: 'setCardTypeEnum',
		value: function setCardTypeEnum(p_cardTypeEnum) {
			this.cardTypeEnum = p_cardTypeEnum;
		}
	}, {
		key: 'getCardTypeEnum',
		value: function getCardTypeEnum() {
			if ('cardTypeEnum' in this) {
				return this.cardTypeEnum;
			}
		}
	}, {
		key: 'setFDSFilterActionEnum',
		value: function setFDSFilterActionEnum(p_FDSFilterActionEnum) {
			this.FDSFilterActionEnum = p_FDSFilterActionEnum;
		}
	}, {
		key: 'getFDSFilterActionEnum',
		value: function getFDSFilterActionEnum() {
			if ('FDSFilterActionEnum' in this) {
				return this.FDSFilterActionEnum;
			}
		}
	}, {
		key: 'setPermissionsEnum',
		value: function setPermissionsEnum(p_permissionsEnum) {
			this.permissionsEnum = p_permissionsEnum;
		}
	}, {
		key: 'getPermissionsEnum',
		value: function getPermissionsEnum() {
			if ('permissionsEnum' in this) {
				return this.permissionsEnum;
			}
		}
	}, {
		key: 'setSettingNameEnum',
		value: function setSettingNameEnum(p_settingNameEnum) {
			this.settingNameEnum = p_settingNameEnum;
		}
	}, {
		key: 'getSettingNameEnum',
		value: function getSettingNameEnum() {
			if ('settingNameEnum' in this) {
				return this.settingNameEnum;
			}
		}
	}, {
		key: 'setSettlementStateEnum',
		value: function setSettlementStateEnum(p_settlementStateEnum) {
			this.settlementStateEnum = p_settlementStateEnum;
		}
	}, {
		key: 'getSettlementStateEnum',
		value: function getSettlementStateEnum() {
			if ('settlementStateEnum' in this) {
				return this.settlementStateEnum;
			}
		}
	}, {
		key: 'setTransactionStatusEnum',
		value: function setTransactionStatusEnum(p_transactionStatusEnum) {
			this.transactionStatusEnum = p_transactionStatusEnum;
		}
	}, {
		key: 'getTransactionStatusEnum',
		value: function getTransactionStatusEnum() {
			if ('transactionStatusEnum' in this) {
				return this.transactionStatusEnum;
			}
		}
	}, {
		key: 'setTransactionTypeEnum',
		value: function setTransactionTypeEnum(p_transactionTypeEnum) {
			this.transactionTypeEnum = p_transactionTypeEnum;
		}
	}, {
		key: 'getTransactionTypeEnum',
		value: function getTransactionTypeEnum() {
			if ('transactionTypeEnum' in this) {
				return this.transactionTypeEnum;
			}
		}
	}]);

	return EnumCollection;
}();

module.exports.EnumCollection = EnumCollection;

var ExtendedAmountType = function () {
	function ExtendedAmountType(obj) {
		_classCallCheck(this, ExtendedAmountType);

		logger.debug('Enter ExtendedAmountType constructor');
		if (arguments.length == 1) {
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
		} else {
			this.setAmount(null);
			this.setName(null);
			this.setDescription(null);
		}
		logger.debug('Exit ExtendedAmountType constructor');
	}

	_createClass(ExtendedAmountType, [{
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}, {
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}]);

	return ExtendedAmountType;
}();

module.exports.ExtendedAmountType = ExtendedAmountType;

var FDSFilterType = function () {
	function FDSFilterType(obj) {
		_classCallCheck(this, FDSFilterType);

		logger.debug('Enter FDSFilterType constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('action' in obj && obj.action != null) {
				this.setAction(obj.action);
			}
		} else {
			this.setName(null);
			this.setAction(null);
		}
		logger.debug('Exit FDSFilterType constructor');
	}

	_createClass(FDSFilterType, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setAction',
		value: function setAction(p_action) {
			this.action = p_action;
		}
	}, {
		key: 'getAction',
		value: function getAction() {
			if ('action' in this) {
				return this.action;
			}
		}
	}]);

	return FDSFilterType;
}();

module.exports.FDSFilterType = FDSFilterType;

var FingerPrintType = function () {
	function FingerPrintType(obj) {
		_classCallCheck(this, FingerPrintType);

		logger.debug('Enter FingerPrintType constructor');
		if (arguments.length == 1) {
			if ('hashValue' in obj && obj.hashValue != null) {
				this.setHashValue(obj.hashValue);
			}
			if ('sequence' in obj && obj.sequence != null) {
				this.setSequence(obj.sequence);
			}
			if ('timestamp' in obj && obj.timestamp != null) {
				this.setTimestamp(obj.timestamp);
			}
			if ('currencyCode' in obj && obj.currencyCode != null) {
				this.setCurrencyCode(obj.currencyCode);
			}
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
		} else {
			this.setHashValue(null);
			this.setSequence(null);
			this.setTimestamp(null);
			this.setCurrencyCode(null);
			this.setAmount(null);
		}
		logger.debug('Exit FingerPrintType constructor');
	}

	_createClass(FingerPrintType, [{
		key: 'setHashValue',
		value: function setHashValue(p_hashValue) {
			this.hashValue = p_hashValue;
		}
	}, {
		key: 'getHashValue',
		value: function getHashValue() {
			if ('hashValue' in this) {
				return this.hashValue;
			}
		}
	}, {
		key: 'setSequence',
		value: function setSequence(p_sequence) {
			this.sequence = p_sequence;
		}
	}, {
		key: 'getSequence',
		value: function getSequence() {
			if ('sequence' in this) {
				return this.sequence;
			}
		}
	}, {
		key: 'setTimestamp',
		value: function setTimestamp(p_timestamp) {
			this.timestamp = p_timestamp;
		}
	}, {
		key: 'getTimestamp',
		value: function getTimestamp() {
			if ('timestamp' in this) {
				return this.timestamp;
			}
		}
	}, {
		key: 'setCurrencyCode',
		value: function setCurrencyCode(p_currencyCode) {
			this.currencyCode = p_currencyCode;
		}
	}, {
		key: 'getCurrencyCode',
		value: function getCurrencyCode() {
			if ('currencyCode' in this) {
				return this.currencyCode;
			}
		}
	}, {
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}]);

	return FingerPrintType;
}();

module.exports.FingerPrintType = FingerPrintType;

var FraudInformationType = function () {
	function FraudInformationType(obj) {
		_classCallCheck(this, FraudInformationType);

		logger.debug('Enter FraudInformationType constructor');
		if (arguments.length == 1) {
			if ('fraudFilterList' in obj && obj.fraudFilterList != null) {
				this.setFraudFilterList(new ArrayOfFraudFilterType(obj.fraudFilterList));
			}
			if ('fraudAction' in obj && obj.fraudAction != null) {
				this.setFraudAction(obj.fraudAction);
			}
		} else {
			this.setFraudFilterList(null);
			this.setFraudAction(null);
		}
		logger.debug('Exit FraudInformationType constructor');
	}

	_createClass(FraudInformationType, [{
		key: 'setFraudFilterList',
		value: function setFraudFilterList(p_fraudFilterList) {
			this.fraudFilterList = p_fraudFilterList;
		}
	}, {
		key: 'getFraudFilterList',
		value: function getFraudFilterList() {
			if ('fraudFilterList' in this) {
				return this.fraudFilterList;
			}
		}
	}, {
		key: 'setFraudAction',
		value: function setFraudAction(p_fraudAction) {
			this.fraudAction = p_fraudAction;
		}
	}, {
		key: 'getFraudAction',
		value: function getFraudAction() {
			if ('fraudAction' in this) {
				return this.fraudAction;
			}
		}
	}]);

	return FraudInformationType;
}();

module.exports.FraudInformationType = FraudInformationType;

var HeldTransactionRequestType = function () {
	function HeldTransactionRequestType(obj) {
		_classCallCheck(this, HeldTransactionRequestType);

		logger.debug('Enter HeldTransactionRequestType constructor');
		if (arguments.length == 1) {
			if ('action' in obj && obj.action != null) {
				this.setAction(obj.action);
			}
			if ('refTransId' in obj && obj.refTransId != null) {
				this.setRefTransId(obj.refTransId);
			}
		} else {
			this.setAction(null);
			this.setRefTransId(null);
		}
		logger.debug('Exit HeldTransactionRequestType constructor');
	}

	_createClass(HeldTransactionRequestType, [{
		key: 'setAction',
		value: function setAction(p_action) {
			this.action = p_action;
		}
	}, {
		key: 'getAction',
		value: function getAction() {
			if ('action' in this) {
				return this.action;
			}
		}
	}, {
		key: 'setRefTransId',
		value: function setRefTransId(p_refTransId) {
			this.refTransId = p_refTransId;
		}
	}, {
		key: 'getRefTransId',
		value: function getRefTransId() {
			if ('refTransId' in this) {
				return this.refTransId;
			}
		}
	}]);

	return HeldTransactionRequestType;
}();

module.exports.HeldTransactionRequestType = HeldTransactionRequestType;

var ImpersonationAuthenticationType = function () {
	function ImpersonationAuthenticationType(obj) {
		_classCallCheck(this, ImpersonationAuthenticationType);

		logger.debug('Enter ImpersonationAuthenticationType constructor');
		if (arguments.length == 1) {
			if ('partnerLoginId' in obj && obj.partnerLoginId != null) {
				this.setPartnerLoginId(obj.partnerLoginId);
			}
			if ('partnerTransactionKey' in obj && obj.partnerTransactionKey != null) {
				this.setPartnerTransactionKey(obj.partnerTransactionKey);
			}
		} else {
			this.setPartnerLoginId(null);
			this.setPartnerTransactionKey(null);
		}
		logger.debug('Exit ImpersonationAuthenticationType constructor');
	}

	_createClass(ImpersonationAuthenticationType, [{
		key: 'setPartnerLoginId',
		value: function setPartnerLoginId(p_partnerLoginId) {
			this.partnerLoginId = p_partnerLoginId;
		}
	}, {
		key: 'getPartnerLoginId',
		value: function getPartnerLoginId() {
			if ('partnerLoginId' in this) {
				return this.partnerLoginId;
			}
		}
	}, {
		key: 'setPartnerTransactionKey',
		value: function setPartnerTransactionKey(p_partnerTransactionKey) {
			this.partnerTransactionKey = p_partnerTransactionKey;
		}
	}, {
		key: 'getPartnerTransactionKey',
		value: function getPartnerTransactionKey() {
			if ('partnerTransactionKey' in this) {
				return this.partnerTransactionKey;
			}
		}
	}]);

	return ImpersonationAuthenticationType;
}();

module.exports.ImpersonationAuthenticationType = ImpersonationAuthenticationType;

var IsAliveRequest = function () {
	_createClass(IsAliveRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter IsAliveRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'isAliveRequest': this };
			logger.debug('Exit IsAliveRequest getJSON');
			return obj;
		}
	}]);

	function IsAliveRequest(obj) {
		_classCallCheck(this, IsAliveRequest);

		logger.debug('Enter IsAliveRequest constructor');
		if (arguments.length == 1) {
			if ('refId' in obj && obj.refId != null) {
				this.setRefId(obj.refId);
			}
		} else {
			this.setRefId(null);
		}
		logger.debug('Exit IsAliveRequest constructor');
	}

	_createClass(IsAliveRequest, [{
		key: 'setRefId',
		value: function setRefId(p_refId) {
			this.refId = p_refId;
		}
	}, {
		key: 'getRefId',
		value: function getRefId() {
			if ('refId' in this) {
				return this.refId;
			}
		}
	}]);

	return IsAliveRequest;
}();

module.exports.IsAliveRequest = IsAliveRequest;

var KeyBlock = function () {
	function KeyBlock(obj) {
		_classCallCheck(this, KeyBlock);

		logger.debug('Enter KeyBlock constructor');
		if (arguments.length == 1) {
			if ('Value' in obj && obj.Value != null) {
				this.setValue(new KeyValue(obj.Value));
			}
		} else {
			this.setValue(null);
		}
		logger.debug('Exit KeyBlock constructor');
	}

	_createClass(KeyBlock, [{
		key: 'setValue',
		value: function setValue(p_Value) {
			this.Value = p_Value;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			if ('Value' in this) {
				return this.Value;
			}
		}
	}]);

	return KeyBlock;
}();

module.exports.KeyBlock = KeyBlock;

var KeyManagementScheme = function () {
	function KeyManagementScheme(obj) {
		_classCallCheck(this, KeyManagementScheme);

		logger.debug('Enter KeyManagementScheme constructor');
		if (arguments.length == 1) {
			if ('DUKPT' in obj && obj.DUKPT != null) {
				this.setDUKPT(new KeyManagementScheme.DUKPT(obj.DUKPT));
			}
		} else {
			this.setDUKPT(null);
		}
		logger.debug('Exit KeyManagementScheme constructor');
	}

	_createClass(KeyManagementScheme, [{
		key: 'setDUKPT',
		value: function setDUKPT(p_DUKPT) {
			this.DUKPT = p_DUKPT;
		}
	}, {
		key: 'getDUKPT',
		value: function getDUKPT() {
			if ('DUKPT' in this) {
				return this.DUKPT;
			}
		}
	}]);

	return KeyManagementScheme;
}();

module.exports.KeyManagementScheme = KeyManagementScheme;

var KeyValue = function () {
	function KeyValue(obj) {
		_classCallCheck(this, KeyValue);

		logger.debug('Enter KeyValue constructor');
		if (arguments.length == 1) {
			if ('Encoding' in obj && obj.Encoding != null) {
				this.setEncoding(obj.Encoding);
			}
			if ('EncryptionAlgorithm' in obj && obj.EncryptionAlgorithm != null) {
				this.setEncryptionAlgorithm(obj.EncryptionAlgorithm);
			}
			if ('Scheme' in obj && obj.Scheme != null) {
				this.setScheme(new KeyManagementScheme(obj.Scheme));
			}
		} else {
			this.setEncoding(null);
			this.setEncryptionAlgorithm(null);
			this.setScheme(null);
		}
		logger.debug('Exit KeyValue constructor');
	}

	_createClass(KeyValue, [{
		key: 'setEncoding',
		value: function setEncoding(p_Encoding) {
			this.Encoding = p_Encoding;
		}
	}, {
		key: 'getEncoding',
		value: function getEncoding() {
			if ('Encoding' in this) {
				return this.Encoding;
			}
		}
	}, {
		key: 'setEncryptionAlgorithm',
		value: function setEncryptionAlgorithm(p_EncryptionAlgorithm) {
			this.EncryptionAlgorithm = p_EncryptionAlgorithm;
		}
	}, {
		key: 'getEncryptionAlgorithm',
		value: function getEncryptionAlgorithm() {
			if ('EncryptionAlgorithm' in this) {
				return this.EncryptionAlgorithm;
			}
		}
	}, {
		key: 'setScheme',
		value: function setScheme(p_Scheme) {
			this.Scheme = p_Scheme;
		}
	}, {
		key: 'getScheme',
		value: function getScheme() {
			if ('Scheme' in this) {
				return this.Scheme;
			}
		}
	}]);

	return KeyValue;
}();

module.exports.KeyValue = KeyValue;

var LineItemType = function () {
	function LineItemType(obj) {
		_classCallCheck(this, LineItemType);

		logger.debug('Enter LineItemType constructor');
		if (arguments.length == 1) {
			if ('itemId' in obj && obj.itemId != null) {
				this.setItemId(obj.itemId);
			}
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
			if ('quantity' in obj && obj.quantity != null) {
				this.setQuantity(obj.quantity);
			}
			if ('unitPrice' in obj && obj.unitPrice != null) {
				this.setUnitPrice(obj.unitPrice);
			}
			if ('taxable' in obj && obj.taxable != null) {
				this.setTaxable(obj.taxable);
			}
		} else {
			this.setItemId(null);
			this.setName(null);
			this.setDescription(null);
			this.setQuantity(null);
			this.setUnitPrice(null);
			this.setTaxable(null);
		}
		logger.debug('Exit LineItemType constructor');
	}

	_createClass(LineItemType, [{
		key: 'setItemId',
		value: function setItemId(p_itemId) {
			this.itemId = p_itemId;
		}
	}, {
		key: 'getItemId',
		value: function getItemId() {
			if ('itemId' in this) {
				return this.itemId;
			}
		}
	}, {
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}, {
		key: 'setQuantity',
		value: function setQuantity(p_quantity) {
			this.quantity = p_quantity;
		}
	}, {
		key: 'getQuantity',
		value: function getQuantity() {
			if ('quantity' in this) {
				return this.quantity;
			}
		}
	}, {
		key: 'setUnitPrice',
		value: function setUnitPrice(p_unitPrice) {
			this.unitPrice = p_unitPrice;
		}
	}, {
		key: 'getUnitPrice',
		value: function getUnitPrice() {
			if ('unitPrice' in this) {
				return this.unitPrice;
			}
		}
	}, {
		key: 'setTaxable',
		value: function setTaxable(p_taxable) {
			this.taxable = p_taxable;
		}
	}, {
		key: 'getTaxable',
		value: function getTaxable() {
			if ('taxable' in this) {
				return this.taxable;
			}
		}
	}]);

	return LineItemType;
}();

module.exports.LineItemType = LineItemType;

var ListOfAUDetailsType = function () {
	function ListOfAUDetailsType(obj) {
		_classCallCheck(this, ListOfAUDetailsType);

		logger.debug('Enter ListOfAUDetailsType constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var auUpdateOrAuDeleteList = [];
				obj.forEach(function (item) {
					auUpdateOrAuDeleteList.push(new String(item));
				});
				this.setAuUpdateOrAuDelete(auUpdateOrAuDeleteList);
			}
		} else {
			this.setAuUpdateOrAuDelete(null);
		}
		logger.debug('Exit ListOfAUDetailsType constructor');
	}

	_createClass(ListOfAUDetailsType, [{
		key: 'setAuUpdateOrAuDelete',
		value: function setAuUpdateOrAuDelete(p_auUpdateOrAuDelete) {
			this.auUpdateOrAuDelete = p_auUpdateOrAuDelete;
		}
	}, {
		key: 'getAuUpdateOrAuDelete',
		value: function getAuUpdateOrAuDelete() {
			if ('auUpdateOrAuDelete' in this) {
				return this.auUpdateOrAuDelete;
			}
		}
	}]);

	return ListOfAUDetailsType;
}();

module.exports.ListOfAUDetailsType = ListOfAUDetailsType;

var MerchantAuthenticationType = function () {
	function MerchantAuthenticationType(obj) {
		_classCallCheck(this, MerchantAuthenticationType);

		logger.debug('Enter MerchantAuthenticationType constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('transactionKey' in obj && obj.transactionKey != null) {
				this.setTransactionKey(obj.transactionKey);
			}
			if ('sessionToken' in obj && obj.sessionToken != null) {
				this.setSessionToken(obj.sessionToken);
			}
			if ('password' in obj && obj.password != null) {
				this.setPassword(obj.password);
			}
			if ('impersonationAuthentication' in obj && obj.impersonationAuthentication != null) {
				this.setImpersonationAuthentication(new ImpersonationAuthenticationType(obj.impersonationAuthentication));
			}
			if ('fingerPrint' in obj && obj.fingerPrint != null) {
				this.setFingerPrint(new FingerPrintType(obj.fingerPrint));
			}
			if ('clientKey' in obj && obj.clientKey != null) {
				this.setClientKey(obj.clientKey);
			}
			if ('accessToken' in obj && obj.accessToken != null) {
				this.setAccessToken(obj.accessToken);
			}
			if ('mobileDeviceId' in obj && obj.mobileDeviceId != null) {
				this.setMobileDeviceId(obj.mobileDeviceId);
			}
		} else {
			this.setName(null);
			this.setTransactionKey(null);
			this.setSessionToken(null);
			this.setPassword(null);
			this.setImpersonationAuthentication(null);
			this.setFingerPrint(null);
			this.setClientKey(null);
			this.setAccessToken(null);
			this.setMobileDeviceId(null);
		}
		logger.debug('Exit MerchantAuthenticationType constructor');
	}

	_createClass(MerchantAuthenticationType, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setTransactionKey',
		value: function setTransactionKey(p_transactionKey) {
			this.transactionKey = p_transactionKey;
		}
	}, {
		key: 'getTransactionKey',
		value: function getTransactionKey() {
			if ('transactionKey' in this) {
				return this.transactionKey;
			}
		}
	}, {
		key: 'setSessionToken',
		value: function setSessionToken(p_sessionToken) {
			this.sessionToken = p_sessionToken;
		}
	}, {
		key: 'getSessionToken',
		value: function getSessionToken() {
			if ('sessionToken' in this) {
				return this.sessionToken;
			}
		}
	}, {
		key: 'setPassword',
		value: function setPassword(p_password) {
			this.password = p_password;
		}
	}, {
		key: 'getPassword',
		value: function getPassword() {
			if ('password' in this) {
				return this.password;
			}
		}
	}, {
		key: 'setImpersonationAuthentication',
		value: function setImpersonationAuthentication(p_impersonationAuthentication) {
			this.impersonationAuthentication = p_impersonationAuthentication;
		}
	}, {
		key: 'getImpersonationAuthentication',
		value: function getImpersonationAuthentication() {
			if ('impersonationAuthentication' in this) {
				return this.impersonationAuthentication;
			}
		}
	}, {
		key: 'setFingerPrint',
		value: function setFingerPrint(p_fingerPrint) {
			this.fingerPrint = p_fingerPrint;
		}
	}, {
		key: 'getFingerPrint',
		value: function getFingerPrint() {
			if ('fingerPrint' in this) {
				return this.fingerPrint;
			}
		}
	}, {
		key: 'setClientKey',
		value: function setClientKey(p_clientKey) {
			this.clientKey = p_clientKey;
		}
	}, {
		key: 'getClientKey',
		value: function getClientKey() {
			if ('clientKey' in this) {
				return this.clientKey;
			}
		}
	}, {
		key: 'setAccessToken',
		value: function setAccessToken(p_accessToken) {
			this.accessToken = p_accessToken;
		}
	}, {
		key: 'getAccessToken',
		value: function getAccessToken() {
			if ('accessToken' in this) {
				return this.accessToken;
			}
		}
	}, {
		key: 'setMobileDeviceId',
		value: function setMobileDeviceId(p_mobileDeviceId) {
			this.mobileDeviceId = p_mobileDeviceId;
		}
	}, {
		key: 'getMobileDeviceId',
		value: function getMobileDeviceId() {
			if ('mobileDeviceId' in this) {
				return this.mobileDeviceId;
			}
		}
	}]);

	return MerchantAuthenticationType;
}();

module.exports.MerchantAuthenticationType = MerchantAuthenticationType;

var MerchantContactType = function () {
	function MerchantContactType(obj) {
		_classCallCheck(this, MerchantContactType);

		logger.debug('Enter MerchantContactType constructor');
		if (arguments.length == 1) {
			if ('merchantName' in obj && obj.merchantName != null) {
				this.setMerchantName(obj.merchantName);
			}
			if ('merchantAddress' in obj && obj.merchantAddress != null) {
				this.setMerchantAddress(obj.merchantAddress);
			}
			if ('merchantCity' in obj && obj.merchantCity != null) {
				this.setMerchantCity(obj.merchantCity);
			}
			if ('merchantState' in obj && obj.merchantState != null) {
				this.setMerchantState(obj.merchantState);
			}
			if ('merchantZip' in obj && obj.merchantZip != null) {
				this.setMerchantZip(obj.merchantZip);
			}
			if ('merchantPhone' in obj && obj.merchantPhone != null) {
				this.setMerchantPhone(obj.merchantPhone);
			}
		} else {
			this.setMerchantName(null);
			this.setMerchantAddress(null);
			this.setMerchantCity(null);
			this.setMerchantState(null);
			this.setMerchantZip(null);
			this.setMerchantPhone(null);
		}
		logger.debug('Exit MerchantContactType constructor');
	}

	_createClass(MerchantContactType, [{
		key: 'setMerchantName',
		value: function setMerchantName(p_merchantName) {
			this.merchantName = p_merchantName;
		}
	}, {
		key: 'getMerchantName',
		value: function getMerchantName() {
			if ('merchantName' in this) {
				return this.merchantName;
			}
		}
	}, {
		key: 'setMerchantAddress',
		value: function setMerchantAddress(p_merchantAddress) {
			this.merchantAddress = p_merchantAddress;
		}
	}, {
		key: 'getMerchantAddress',
		value: function getMerchantAddress() {
			if ('merchantAddress' in this) {
				return this.merchantAddress;
			}
		}
	}, {
		key: 'setMerchantCity',
		value: function setMerchantCity(p_merchantCity) {
			this.merchantCity = p_merchantCity;
		}
	}, {
		key: 'getMerchantCity',
		value: function getMerchantCity() {
			if ('merchantCity' in this) {
				return this.merchantCity;
			}
		}
	}, {
		key: 'setMerchantState',
		value: function setMerchantState(p_merchantState) {
			this.merchantState = p_merchantState;
		}
	}, {
		key: 'getMerchantState',
		value: function getMerchantState() {
			if ('merchantState' in this) {
				return this.merchantState;
			}
		}
	}, {
		key: 'setMerchantZip',
		value: function setMerchantZip(p_merchantZip) {
			this.merchantZip = p_merchantZip;
		}
	}, {
		key: 'getMerchantZip',
		value: function getMerchantZip() {
			if ('merchantZip' in this) {
				return this.merchantZip;
			}
		}
	}, {
		key: 'setMerchantPhone',
		value: function setMerchantPhone(p_merchantPhone) {
			this.merchantPhone = p_merchantPhone;
		}
	}, {
		key: 'getMerchantPhone',
		value: function getMerchantPhone() {
			if ('merchantPhone' in this) {
				return this.merchantPhone;
			}
		}
	}]);

	return MerchantContactType;
}();

module.exports.MerchantContactType = MerchantContactType;

var MessagesType = function () {
	function MessagesType(obj) {
		_classCallCheck(this, MessagesType);

		logger.debug('Enter MessagesType constructor');
		if (arguments.length == 1) {
			if ('resultCode' in obj && obj.resultCode != null) {
				this.setResultCode(obj.resultCode);
			}
			if (obj.message != undefined && obj.message != null) {
				var messageList = [];
				obj.message.forEach(function (item) {
					messageList.push(new MessagesType.Message(item));
				});
				this.setMessage(messageList);
			}
		} else {
			this.setResultCode(null);
			this.setMessage(null);
		}
		logger.debug('Exit MessagesType constructor');
	}

	_createClass(MessagesType, [{
		key: 'setResultCode',
		value: function setResultCode(p_resultCode) {
			this.resultCode = p_resultCode;
		}
	}, {
		key: 'getResultCode',
		value: function getResultCode() {
			if ('resultCode' in this) {
				return this.resultCode;
			}
		}
	}, {
		key: 'setMessage',
		value: function setMessage(p_message) {
			this.message = p_message;
		}
	}, {
		key: 'getMessage',
		value: function getMessage() {
			if ('message' in this) {
				return this.message;
			}
		}
	}]);

	return MessagesType;
}();

module.exports.MessagesType = MessagesType;

var MobileDeviceType = function () {
	function MobileDeviceType(obj) {
		_classCallCheck(this, MobileDeviceType);

		logger.debug('Enter MobileDeviceType constructor');
		if (arguments.length == 1) {
			if ('mobileDeviceId' in obj && obj.mobileDeviceId != null) {
				this.setMobileDeviceId(obj.mobileDeviceId);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
			if ('phoneNumber' in obj && obj.phoneNumber != null) {
				this.setPhoneNumber(obj.phoneNumber);
			}
			if ('devicePlatform' in obj && obj.devicePlatform != null) {
				this.setDevicePlatform(obj.devicePlatform);
			}
			if ('deviceActivation' in obj && obj.deviceActivation != null) {
				this.setDeviceActivation(obj.deviceActivation);
			}
		} else {
			this.setMobileDeviceId(null);
			this.setDescription(null);
			this.setPhoneNumber(null);
			this.setDevicePlatform(null);
			this.setDeviceActivation(null);
		}
		logger.debug('Exit MobileDeviceType constructor');
	}

	_createClass(MobileDeviceType, [{
		key: 'setMobileDeviceId',
		value: function setMobileDeviceId(p_mobileDeviceId) {
			this.mobileDeviceId = p_mobileDeviceId;
		}
	}, {
		key: 'getMobileDeviceId',
		value: function getMobileDeviceId() {
			if ('mobileDeviceId' in this) {
				return this.mobileDeviceId;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}, {
		key: 'setPhoneNumber',
		value: function setPhoneNumber(p_phoneNumber) {
			this.phoneNumber = p_phoneNumber;
		}
	}, {
		key: 'getPhoneNumber',
		value: function getPhoneNumber() {
			if ('phoneNumber' in this) {
				return this.phoneNumber;
			}
		}
	}, {
		key: 'setDevicePlatform',
		value: function setDevicePlatform(p_devicePlatform) {
			this.devicePlatform = p_devicePlatform;
		}
	}, {
		key: 'getDevicePlatform',
		value: function getDevicePlatform() {
			if ('devicePlatform' in this) {
				return this.devicePlatform;
			}
		}
	}, {
		key: 'setDeviceActivation',
		value: function setDeviceActivation(p_deviceActivation) {
			this.deviceActivation = p_deviceActivation;
		}
	}, {
		key: 'getDeviceActivation',
		value: function getDeviceActivation() {
			if ('deviceActivation' in this) {
				return this.deviceActivation;
			}
		}
	}]);

	return MobileDeviceType;
}();

module.exports.MobileDeviceType = MobileDeviceType;

var NameAndAddressType = function () {
	function NameAndAddressType(obj) {
		_classCallCheck(this, NameAndAddressType);

		logger.debug('Enter NameAndAddressType constructor');
		if (arguments.length == 1) {
			if ('firstName' in obj && obj.firstName != null) {
				this.setFirstName(obj.firstName);
			}
			if ('lastName' in obj && obj.lastName != null) {
				this.setLastName(obj.lastName);
			}
			if ('company' in obj && obj.company != null) {
				this.setCompany(obj.company);
			}
			if ('address' in obj && obj.address != null) {
				this.setAddress(obj.address);
			}
			if ('city' in obj && obj.city != null) {
				this.setCity(obj.city);
			}
			if ('state' in obj && obj.state != null) {
				this.setState(obj.state);
			}
			if ('zip' in obj && obj.zip != null) {
				this.setZip(obj.zip);
			}
			if ('country' in obj && obj.country != null) {
				this.setCountry(obj.country);
			}
		} else {
			this.setFirstName(null);
			this.setLastName(null);
			this.setCompany(null);
			this.setAddress(null);
			this.setCity(null);
			this.setState(null);
			this.setZip(null);
			this.setCountry(null);
		}
		logger.debug('Exit NameAndAddressType constructor');
	}

	_createClass(NameAndAddressType, [{
		key: 'setFirstName',
		value: function setFirstName(p_firstName) {
			this.firstName = p_firstName;
		}
	}, {
		key: 'getFirstName',
		value: function getFirstName() {
			if ('firstName' in this) {
				return this.firstName;
			}
		}
	}, {
		key: 'setLastName',
		value: function setLastName(p_lastName) {
			this.lastName = p_lastName;
		}
	}, {
		key: 'getLastName',
		value: function getLastName() {
			if ('lastName' in this) {
				return this.lastName;
			}
		}
	}, {
		key: 'setCompany',
		value: function setCompany(p_company) {
			this.company = p_company;
		}
	}, {
		key: 'getCompany',
		value: function getCompany() {
			if ('company' in this) {
				return this.company;
			}
		}
	}, {
		key: 'setAddress',
		value: function setAddress(p_address) {
			this.address = p_address;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			if ('address' in this) {
				return this.address;
			}
		}
	}, {
		key: 'setCity',
		value: function setCity(p_city) {
			this.city = p_city;
		}
	}, {
		key: 'getCity',
		value: function getCity() {
			if ('city' in this) {
				return this.city;
			}
		}
	}, {
		key: 'setState',
		value: function setState(p_state) {
			this.state = p_state;
		}
	}, {
		key: 'getState',
		value: function getState() {
			if ('state' in this) {
				return this.state;
			}
		}
	}, {
		key: 'setZip',
		value: function setZip(p_zip) {
			this.zip = p_zip;
		}
	}, {
		key: 'getZip',
		value: function getZip() {
			if ('zip' in this) {
				return this.zip;
			}
		}
	}, {
		key: 'setCountry',
		value: function setCountry(p_country) {
			this.country = p_country;
		}
	}, {
		key: 'getCountry',
		value: function getCountry() {
			if ('country' in this) {
				return this.country;
			}
		}
	}]);

	return NameAndAddressType;
}();

module.exports.NameAndAddressType = NameAndAddressType;

var OpaqueDataType = function () {
	function OpaqueDataType(obj) {
		_classCallCheck(this, OpaqueDataType);

		logger.debug('Enter OpaqueDataType constructor');
		if (arguments.length == 1) {
			if ('dataDescriptor' in obj && obj.dataDescriptor != null) {
				this.setDataDescriptor(obj.dataDescriptor);
			}
			if ('dataValue' in obj && obj.dataValue != null) {
				this.setDataValue(obj.dataValue);
			}
			if ('dataKey' in obj && obj.dataKey != null) {
				this.setDataKey(obj.dataKey);
			}
		} else {
			this.setDataDescriptor(null);
			this.setDataValue(null);
			this.setDataKey(null);
		}
		logger.debug('Exit OpaqueDataType constructor');
	}

	_createClass(OpaqueDataType, [{
		key: 'setDataDescriptor',
		value: function setDataDescriptor(p_dataDescriptor) {
			this.dataDescriptor = p_dataDescriptor;
		}
	}, {
		key: 'getDataDescriptor',
		value: function getDataDescriptor() {
			if ('dataDescriptor' in this) {
				return this.dataDescriptor;
			}
		}
	}, {
		key: 'setDataValue',
		value: function setDataValue(p_dataValue) {
			this.dataValue = p_dataValue;
		}
	}, {
		key: 'getDataValue',
		value: function getDataValue() {
			if ('dataValue' in this) {
				return this.dataValue;
			}
		}
	}, {
		key: 'setDataKey',
		value: function setDataKey(p_dataKey) {
			this.dataKey = p_dataKey;
		}
	}, {
		key: 'getDataKey',
		value: function getDataKey() {
			if ('dataKey' in this) {
				return this.dataKey;
			}
		}
	}]);

	return OpaqueDataType;
}();

module.exports.OpaqueDataType = OpaqueDataType;

var OrderType = function () {
	function OrderType(obj) {
		_classCallCheck(this, OrderType);

		logger.debug('Enter OrderType constructor');
		if (arguments.length == 1) {
			if ('invoiceNumber' in obj && obj.invoiceNumber != null) {
				this.setInvoiceNumber(obj.invoiceNumber);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
		} else {
			this.setInvoiceNumber(null);
			this.setDescription(null);
		}
		logger.debug('Exit OrderType constructor');
	}

	_createClass(OrderType, [{
		key: 'setInvoiceNumber',
		value: function setInvoiceNumber(p_invoiceNumber) {
			this.invoiceNumber = p_invoiceNumber;
		}
	}, {
		key: 'getInvoiceNumber',
		value: function getInvoiceNumber() {
			if ('invoiceNumber' in this) {
				return this.invoiceNumber;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}]);

	return OrderType;
}();

module.exports.OrderType = OrderType;

var Paging = function () {
	function Paging(obj) {
		_classCallCheck(this, Paging);

		logger.debug('Enter Paging constructor');
		if (arguments.length == 1) {
			if ('limit' in obj && obj.limit != null) {
				this.setLimit(obj.limit);
			}
			if ('offset' in obj && obj.offset != null) {
				this.setOffset(obj.offset);
			}
		} else {
			this.setLimit(null);
			this.setOffset(null);
		}
		logger.debug('Exit Paging constructor');
	}

	_createClass(Paging, [{
		key: 'setLimit',
		value: function setLimit(p_limit) {
			this.limit = p_limit;
		}
	}, {
		key: 'getLimit',
		value: function getLimit() {
			if ('limit' in this) {
				return this.limit;
			}
		}
	}, {
		key: 'setOffset',
		value: function setOffset(p_offset) {
			this.offset = p_offset;
		}
	}, {
		key: 'getOffset',
		value: function getOffset() {
			if ('offset' in this) {
				return this.offset;
			}
		}
	}]);

	return Paging;
}();

module.exports.Paging = Paging;

var PayPalType = function () {
	function PayPalType(obj) {
		_classCallCheck(this, PayPalType);

		logger.debug('Enter PayPalType constructor');
		if (arguments.length == 1) {
			if ('successUrl' in obj && obj.successUrl != null) {
				this.setSuccessUrl(obj.successUrl);
			}
			if ('cancelUrl' in obj && obj.cancelUrl != null) {
				this.setCancelUrl(obj.cancelUrl);
			}
			if ('paypalLc' in obj && obj.paypalLc != null) {
				this.setPaypalLc(obj.paypalLc);
			}
			if ('paypalHdrImg' in obj && obj.paypalHdrImg != null) {
				this.setPaypalHdrImg(obj.paypalHdrImg);
			}
			if ('paypalPayflowcolor' in obj && obj.paypalPayflowcolor != null) {
				this.setPaypalPayflowcolor(obj.paypalPayflowcolor);
			}
			if ('payerID' in obj && obj.payerID != null) {
				this.setPayerID(obj.payerID);
			}
		} else {
			this.setSuccessUrl(null);
			this.setCancelUrl(null);
			this.setPaypalLc(null);
			this.setPaypalHdrImg(null);
			this.setPaypalPayflowcolor(null);
			this.setPayerID(null);
		}
		logger.debug('Exit PayPalType constructor');
	}

	_createClass(PayPalType, [{
		key: 'setSuccessUrl',
		value: function setSuccessUrl(p_successUrl) {
			this.successUrl = p_successUrl;
		}
	}, {
		key: 'getSuccessUrl',
		value: function getSuccessUrl() {
			if ('successUrl' in this) {
				return this.successUrl;
			}
		}
	}, {
		key: 'setCancelUrl',
		value: function setCancelUrl(p_cancelUrl) {
			this.cancelUrl = p_cancelUrl;
		}
	}, {
		key: 'getCancelUrl',
		value: function getCancelUrl() {
			if ('cancelUrl' in this) {
				return this.cancelUrl;
			}
		}
	}, {
		key: 'setPaypalLc',
		value: function setPaypalLc(p_paypalLc) {
			this.paypalLc = p_paypalLc;
		}
	}, {
		key: 'getPaypalLc',
		value: function getPaypalLc() {
			if ('paypalLc' in this) {
				return this.paypalLc;
			}
		}
	}, {
		key: 'setPaypalHdrImg',
		value: function setPaypalHdrImg(p_paypalHdrImg) {
			this.paypalHdrImg = p_paypalHdrImg;
		}
	}, {
		key: 'getPaypalHdrImg',
		value: function getPaypalHdrImg() {
			if ('paypalHdrImg' in this) {
				return this.paypalHdrImg;
			}
		}
	}, {
		key: 'setPaypalPayflowcolor',
		value: function setPaypalPayflowcolor(p_paypalPayflowcolor) {
			this.paypalPayflowcolor = p_paypalPayflowcolor;
		}
	}, {
		key: 'getPaypalPayflowcolor',
		value: function getPaypalPayflowcolor() {
			if ('paypalPayflowcolor' in this) {
				return this.paypalPayflowcolor;
			}
		}
	}, {
		key: 'setPayerID',
		value: function setPayerID(p_payerID) {
			this.payerID = p_payerID;
		}
	}, {
		key: 'getPayerID',
		value: function getPayerID() {
			if ('payerID' in this) {
				return this.payerID;
			}
		}
	}]);

	return PayPalType;
}();

module.exports.PayPalType = PayPalType;

var PaymentDetails = function () {
	function PaymentDetails(obj) {
		_classCallCheck(this, PaymentDetails);

		logger.debug('Enter PaymentDetails constructor');
		if (arguments.length == 1) {
			if ('currency' in obj && obj.currency != null) {
				this.setCurrency(obj.currency);
			}
			if ('promoCode' in obj && obj.promoCode != null) {
				this.setPromoCode(obj.promoCode);
			}
			if ('misc' in obj && obj.misc != null) {
				this.setMisc(obj.misc);
			}
			if ('giftWrap' in obj && obj.giftWrap != null) {
				this.setGiftWrap(obj.giftWrap);
			}
			if ('discount' in obj && obj.discount != null) {
				this.setDiscount(obj.discount);
			}
			if ('tax' in obj && obj.tax != null) {
				this.setTax(obj.tax);
			}
			if ('shippingHandling' in obj && obj.shippingHandling != null) {
				this.setShippingHandling(obj.shippingHandling);
			}
			if ('subTotal' in obj && obj.subTotal != null) {
				this.setSubTotal(obj.subTotal);
			}
			if ('orderID' in obj && obj.orderID != null) {
				this.setOrderID(obj.orderID);
			}
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
		} else {
			this.setCurrency(null);
			this.setPromoCode(null);
			this.setMisc(null);
			this.setGiftWrap(null);
			this.setDiscount(null);
			this.setTax(null);
			this.setShippingHandling(null);
			this.setSubTotal(null);
			this.setOrderID(null);
			this.setAmount(null);
		}
		logger.debug('Exit PaymentDetails constructor');
	}

	_createClass(PaymentDetails, [{
		key: 'setCurrency',
		value: function setCurrency(p_currency) {
			this.currency = p_currency;
		}
	}, {
		key: 'getCurrency',
		value: function getCurrency() {
			if ('currency' in this) {
				return this.currency;
			}
		}
	}, {
		key: 'setPromoCode',
		value: function setPromoCode(p_promoCode) {
			this.promoCode = p_promoCode;
		}
	}, {
		key: 'getPromoCode',
		value: function getPromoCode() {
			if ('promoCode' in this) {
				return this.promoCode;
			}
		}
	}, {
		key: 'setMisc',
		value: function setMisc(p_misc) {
			this.misc = p_misc;
		}
	}, {
		key: 'getMisc',
		value: function getMisc() {
			if ('misc' in this) {
				return this.misc;
			}
		}
	}, {
		key: 'setGiftWrap',
		value: function setGiftWrap(p_giftWrap) {
			this.giftWrap = p_giftWrap;
		}
	}, {
		key: 'getGiftWrap',
		value: function getGiftWrap() {
			if ('giftWrap' in this) {
				return this.giftWrap;
			}
		}
	}, {
		key: 'setDiscount',
		value: function setDiscount(p_discount) {
			this.discount = p_discount;
		}
	}, {
		key: 'getDiscount',
		value: function getDiscount() {
			if ('discount' in this) {
				return this.discount;
			}
		}
	}, {
		key: 'setTax',
		value: function setTax(p_tax) {
			this.tax = p_tax;
		}
	}, {
		key: 'getTax',
		value: function getTax() {
			if ('tax' in this) {
				return this.tax;
			}
		}
	}, {
		key: 'setShippingHandling',
		value: function setShippingHandling(p_shippingHandling) {
			this.shippingHandling = p_shippingHandling;
		}
	}, {
		key: 'getShippingHandling',
		value: function getShippingHandling() {
			if ('shippingHandling' in this) {
				return this.shippingHandling;
			}
		}
	}, {
		key: 'setSubTotal',
		value: function setSubTotal(p_subTotal) {
			this.subTotal = p_subTotal;
		}
	}, {
		key: 'getSubTotal',
		value: function getSubTotal() {
			if ('subTotal' in this) {
				return this.subTotal;
			}
		}
	}, {
		key: 'setOrderID',
		value: function setOrderID(p_orderID) {
			this.orderID = p_orderID;
		}
	}, {
		key: 'getOrderID',
		value: function getOrderID() {
			if ('orderID' in this) {
				return this.orderID;
			}
		}
	}, {
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}]);

	return PaymentDetails;
}();

module.exports.PaymentDetails = PaymentDetails;

var PaymentEmvType = function () {
	function PaymentEmvType(obj) {
		_classCallCheck(this, PaymentEmvType);

		logger.debug('Enter PaymentEmvType constructor');
		if (arguments.length == 1) {
			if ('emvData' in obj && obj.emvData != null) {
				this.setEmvData(obj.emvData);
			}
			if ('emvDescriptor' in obj && obj.emvDescriptor != null) {
				this.setEmvDescriptor(obj.emvDescriptor);
			}
			if ('emvVersion' in obj && obj.emvVersion != null) {
				this.setEmvVersion(obj.emvVersion);
			}
		} else {
			this.setEmvData(null);
			this.setEmvDescriptor(null);
			this.setEmvVersion(null);
		}
		logger.debug('Exit PaymentEmvType constructor');
	}

	_createClass(PaymentEmvType, [{
		key: 'setEmvData',
		value: function setEmvData(p_emvData) {
			this.emvData = p_emvData;
		}
	}, {
		key: 'getEmvData',
		value: function getEmvData() {
			if ('emvData' in this) {
				return this.emvData;
			}
		}
	}, {
		key: 'setEmvDescriptor',
		value: function setEmvDescriptor(p_emvDescriptor) {
			this.emvDescriptor = p_emvDescriptor;
		}
	}, {
		key: 'getEmvDescriptor',
		value: function getEmvDescriptor() {
			if ('emvDescriptor' in this) {
				return this.emvDescriptor;
			}
		}
	}, {
		key: 'setEmvVersion',
		value: function setEmvVersion(p_emvVersion) {
			this.emvVersion = p_emvVersion;
		}
	}, {
		key: 'getEmvVersion',
		value: function getEmvVersion() {
			if ('emvVersion' in this) {
				return this.emvVersion;
			}
		}
	}]);

	return PaymentEmvType;
}();

module.exports.PaymentEmvType = PaymentEmvType;

var PaymentMaskedType = function () {
	function PaymentMaskedType(obj) {
		_classCallCheck(this, PaymentMaskedType);

		logger.debug('Enter PaymentMaskedType constructor');
		if (arguments.length == 1) {
			if ('creditCard' in obj && obj.creditCard != null) {
				this.setCreditCard(new CreditCardMaskedType(obj.creditCard));
			}
			if ('bankAccount' in obj && obj.bankAccount != null) {
				this.setBankAccount(new BankAccountMaskedType(obj.bankAccount));
			}
			if ('tokenInformation' in obj && obj.tokenInformation != null) {
				this.setTokenInformation(new TokenMaskedType(obj.tokenInformation));
			}
		} else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTokenInformation(null);
		}
		logger.debug('Exit PaymentMaskedType constructor');
	}

	_createClass(PaymentMaskedType, [{
		key: 'setCreditCard',
		value: function setCreditCard(p_creditCard) {
			this.creditCard = p_creditCard;
		}
	}, {
		key: 'getCreditCard',
		value: function getCreditCard() {
			if ('creditCard' in this) {
				return this.creditCard;
			}
		}
	}, {
		key: 'setBankAccount',
		value: function setBankAccount(p_bankAccount) {
			this.bankAccount = p_bankAccount;
		}
	}, {
		key: 'getBankAccount',
		value: function getBankAccount() {
			if ('bankAccount' in this) {
				return this.bankAccount;
			}
		}
	}, {
		key: 'setTokenInformation',
		value: function setTokenInformation(p_tokenInformation) {
			this.tokenInformation = p_tokenInformation;
		}
	}, {
		key: 'getTokenInformation',
		value: function getTokenInformation() {
			if ('tokenInformation' in this) {
				return this.tokenInformation;
			}
		}
	}]);

	return PaymentMaskedType;
}();

module.exports.PaymentMaskedType = PaymentMaskedType;

var PaymentProfile = function () {
	function PaymentProfile(obj) {
		_classCallCheck(this, PaymentProfile);

		logger.debug('Enter PaymentProfile constructor');
		if (arguments.length == 1) {
			if ('paymentProfileId' in obj && obj.paymentProfileId != null) {
				this.setPaymentProfileId(obj.paymentProfileId);
			}
			if ('cardCode' in obj && obj.cardCode != null) {
				this.setCardCode(obj.cardCode);
			}
		} else {
			this.setPaymentProfileId(null);
			this.setCardCode(null);
		}
		logger.debug('Exit PaymentProfile constructor');
	}

	_createClass(PaymentProfile, [{
		key: 'setPaymentProfileId',
		value: function setPaymentProfileId(p_paymentProfileId) {
			this.paymentProfileId = p_paymentProfileId;
		}
	}, {
		key: 'getPaymentProfileId',
		value: function getPaymentProfileId() {
			if ('paymentProfileId' in this) {
				return this.paymentProfileId;
			}
		}
	}, {
		key: 'setCardCode',
		value: function setCardCode(p_cardCode) {
			this.cardCode = p_cardCode;
		}
	}, {
		key: 'getCardCode',
		value: function getCardCode() {
			if ('cardCode' in this) {
				return this.cardCode;
			}
		}
	}]);

	return PaymentProfile;
}();

module.exports.PaymentProfile = PaymentProfile;

var PaymentScheduleType = function () {
	function PaymentScheduleType(obj) {
		_classCallCheck(this, PaymentScheduleType);

		logger.debug('Enter PaymentScheduleType constructor');
		if (arguments.length == 1) {
			if ('interval' in obj && obj.interval != null) {
				this.setInterval(new PaymentScheduleType.Interval(obj.interval));
			}
			if ('startDate' in obj && obj.startDate != null) {
				this.setStartDate(obj.startDate);
			}
			if ('totalOccurrences' in obj && obj.totalOccurrences != null) {
				this.setTotalOccurrences(obj.totalOccurrences);
			}
			if ('trialOccurrences' in obj && obj.trialOccurrences != null) {
				this.setTrialOccurrences(obj.trialOccurrences);
			}
		} else {
			this.setInterval(null);
			this.setStartDate(null);
			this.setTotalOccurrences(null);
			this.setTrialOccurrences(null);
		}
		logger.debug('Exit PaymentScheduleType constructor');
	}

	_createClass(PaymentScheduleType, [{
		key: 'setInterval',
		value: function setInterval(p_interval) {
			this.interval = p_interval;
		}
	}, {
		key: 'getInterval',
		value: function getInterval() {
			if ('interval' in this) {
				return this.interval;
			}
		}
	}, {
		key: 'setStartDate',
		value: function setStartDate(p_startDate) {
			this.startDate = p_startDate;
		}
	}, {
		key: 'getStartDate',
		value: function getStartDate() {
			if ('startDate' in this) {
				return this.startDate;
			}
		}
	}, {
		key: 'setTotalOccurrences',
		value: function setTotalOccurrences(p_totalOccurrences) {
			this.totalOccurrences = p_totalOccurrences;
		}
	}, {
		key: 'getTotalOccurrences',
		value: function getTotalOccurrences() {
			if ('totalOccurrences' in this) {
				return this.totalOccurrences;
			}
		}
	}, {
		key: 'setTrialOccurrences',
		value: function setTrialOccurrences(p_trialOccurrences) {
			this.trialOccurrences = p_trialOccurrences;
		}
	}, {
		key: 'getTrialOccurrences',
		value: function getTrialOccurrences() {
			if ('trialOccurrences' in this) {
				return this.trialOccurrences;
			}
		}
	}]);

	return PaymentScheduleType;
}();

module.exports.PaymentScheduleType = PaymentScheduleType;

var PaymentSimpleType = function () {
	function PaymentSimpleType(obj) {
		_classCallCheck(this, PaymentSimpleType);

		logger.debug('Enter PaymentSimpleType constructor');
		if (arguments.length == 1) {
			if ('creditCard' in obj && obj.creditCard != null) {
				this.setCreditCard(new CreditCardSimpleType(obj.creditCard));
			}
			if ('bankAccount' in obj && obj.bankAccount != null) {
				this.setBankAccount(new BankAccountType(obj.bankAccount));
			}
		} else {
			this.setCreditCard(null);
			this.setBankAccount(null);
		}
		logger.debug('Exit PaymentSimpleType constructor');
	}

	_createClass(PaymentSimpleType, [{
		key: 'setCreditCard',
		value: function setCreditCard(p_creditCard) {
			this.creditCard = p_creditCard;
		}
	}, {
		key: 'getCreditCard',
		value: function getCreditCard() {
			if ('creditCard' in this) {
				return this.creditCard;
			}
		}
	}, {
		key: 'setBankAccount',
		value: function setBankAccount(p_bankAccount) {
			this.bankAccount = p_bankAccount;
		}
	}, {
		key: 'getBankAccount',
		value: function getBankAccount() {
			if ('bankAccount' in this) {
				return this.bankAccount;
			}
		}
	}]);

	return PaymentSimpleType;
}();

module.exports.PaymentSimpleType = PaymentSimpleType;

var PaymentType = function () {
	function PaymentType(obj) {
		_classCallCheck(this, PaymentType);

		logger.debug('Enter PaymentType constructor');
		if (arguments.length == 1) {
			if ('creditCard' in obj && obj.creditCard != null) {
				this.setCreditCard(new CreditCardType(obj.creditCard));
			}
			if ('bankAccount' in obj && obj.bankAccount != null) {
				this.setBankAccount(new BankAccountType(obj.bankAccount));
			}
			if ('trackData' in obj && obj.trackData != null) {
				this.setTrackData(new CreditCardTrackType(obj.trackData));
			}
			if ('encryptedTrackData' in obj && obj.encryptedTrackData != null) {
				this.setEncryptedTrackData(new EncryptedTrackDataType(obj.encryptedTrackData));
			}
			if ('payPal' in obj && obj.payPal != null) {
				this.setPayPal(new PayPalType(obj.payPal));
			}
			if ('opaqueData' in obj && obj.opaqueData != null) {
				this.setOpaqueData(new OpaqueDataType(obj.opaqueData));
			}
			if ('emv' in obj && obj.emv != null) {
				this.setEmv(new PaymentEmvType(obj.emv));
			}
		} else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTrackData(null);
			this.setEncryptedTrackData(null);
			this.setPayPal(null);
			this.setOpaqueData(null);
			this.setEmv(null);
		}
		logger.debug('Exit PaymentType constructor');
	}

	_createClass(PaymentType, [{
		key: 'setCreditCard',
		value: function setCreditCard(p_creditCard) {
			this.creditCard = p_creditCard;
		}
	}, {
		key: 'getCreditCard',
		value: function getCreditCard() {
			if ('creditCard' in this) {
				return this.creditCard;
			}
		}
	}, {
		key: 'setBankAccount',
		value: function setBankAccount(p_bankAccount) {
			this.bankAccount = p_bankAccount;
		}
	}, {
		key: 'getBankAccount',
		value: function getBankAccount() {
			if ('bankAccount' in this) {
				return this.bankAccount;
			}
		}
	}, {
		key: 'setTrackData',
		value: function setTrackData(p_trackData) {
			this.trackData = p_trackData;
		}
	}, {
		key: 'getTrackData',
		value: function getTrackData() {
			if ('trackData' in this) {
				return this.trackData;
			}
		}
	}, {
		key: 'setEncryptedTrackData',
		value: function setEncryptedTrackData(p_encryptedTrackData) {
			this.encryptedTrackData = p_encryptedTrackData;
		}
	}, {
		key: 'getEncryptedTrackData',
		value: function getEncryptedTrackData() {
			if ('encryptedTrackData' in this) {
				return this.encryptedTrackData;
			}
		}
	}, {
		key: 'setPayPal',
		value: function setPayPal(p_payPal) {
			this.payPal = p_payPal;
		}
	}, {
		key: 'getPayPal',
		value: function getPayPal() {
			if ('payPal' in this) {
				return this.payPal;
			}
		}
	}, {
		key: 'setOpaqueData',
		value: function setOpaqueData(p_opaqueData) {
			this.opaqueData = p_opaqueData;
		}
	}, {
		key: 'getOpaqueData',
		value: function getOpaqueData() {
			if ('opaqueData' in this) {
				return this.opaqueData;
			}
		}
	}, {
		key: 'setEmv',
		value: function setEmv(p_emv) {
			this.emv = p_emv;
		}
	}, {
		key: 'getEmv',
		value: function getEmv() {
			if ('emv' in this) {
				return this.emv;
			}
		}
	}]);

	return PaymentType;
}();

module.exports.PaymentType = PaymentType;

var PermissionType = function () {
	function PermissionType(obj) {
		_classCallCheck(this, PermissionType);

		logger.debug('Enter PermissionType constructor');
		if (arguments.length == 1) {
			if ('permissionName' in obj && obj.permissionName != null) {
				this.setPermissionName(obj.permissionName);
			}
		} else {
			this.setPermissionName(null);
		}
		logger.debug('Exit PermissionType constructor');
	}

	_createClass(PermissionType, [{
		key: 'setPermissionName',
		value: function setPermissionName(p_permissionName) {
			this.permissionName = p_permissionName;
		}
	}, {
		key: 'getPermissionName',
		value: function getPermissionName() {
			if ('permissionName' in this) {
				return this.permissionName;
			}
		}
	}]);

	return PermissionType;
}();

module.exports.PermissionType = PermissionType;

var ProcessorType = function () {
	function ProcessorType(obj) {
		_classCallCheck(this, ProcessorType);

		logger.debug('Enter ProcessorType constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('cardTypes' in obj && obj.cardTypes != null) {
				this.setCardTypes(new ArrayOfCardType(obj.cardTypes));
			}
		} else {
			this.setName(null);
			this.setId(null);
			this.setCardTypes(null);
		}
		logger.debug('Exit ProcessorType constructor');
	}

	_createClass(ProcessorType, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setCardTypes',
		value: function setCardTypes(p_cardTypes) {
			this.cardTypes = p_cardTypes;
		}
	}, {
		key: 'getCardTypes',
		value: function getCardTypes() {
			if ('cardTypes' in this) {
				return this.cardTypes;
			}
		}
	}]);

	return ProcessorType;
}();

module.exports.ProcessorType = ProcessorType;

var ProfileTransAmountType = function () {
	function ProfileTransAmountType(obj) {
		_classCallCheck(this, ProfileTransAmountType);

		logger.debug('Enter ProfileTransAmountType constructor');
		if (arguments.length == 1) {
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
			if ('tax' in obj && obj.tax != null) {
				this.setTax(new ExtendedAmountType(obj.tax));
			}
			if ('shipping' in obj && obj.shipping != null) {
				this.setShipping(new ExtendedAmountType(obj.shipping));
			}
			if ('duty' in obj && obj.duty != null) {
				this.setDuty(new ExtendedAmountType(obj.duty));
			}
			if (obj.lineItems != undefined && obj.lineItems != null) {
				var lineItemsList = [];
				obj.lineItems.forEach(function (item) {
					lineItemsList.push(new LineItemType(item));
				});
				this.setLineItems(lineItemsList);
			}
		} else {
			this.setAmount(null);
			this.setTax(null);
			this.setShipping(null);
			this.setDuty(null);
			this.setLineItems(null);
		}
		logger.debug('Exit ProfileTransAmountType constructor');
	}

	_createClass(ProfileTransAmountType, [{
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}, {
		key: 'setTax',
		value: function setTax(p_tax) {
			this.tax = p_tax;
		}
	}, {
		key: 'getTax',
		value: function getTax() {
			if ('tax' in this) {
				return this.tax;
			}
		}
	}, {
		key: 'setShipping',
		value: function setShipping(p_shipping) {
			this.shipping = p_shipping;
		}
	}, {
		key: 'getShipping',
		value: function getShipping() {
			if ('shipping' in this) {
				return this.shipping;
			}
		}
	}, {
		key: 'setDuty',
		value: function setDuty(p_duty) {
			this.duty = p_duty;
		}
	}, {
		key: 'getDuty',
		value: function getDuty() {
			if ('duty' in this) {
				return this.duty;
			}
		}
	}, {
		key: 'setLineItems',
		value: function setLineItems(p_lineItems) {
			this.lineItems = p_lineItems;
		}
	}, {
		key: 'getLineItems',
		value: function getLineItems() {
			if ('lineItems' in this) {
				return this.lineItems;
			}
		}
	}]);

	return ProfileTransAmountType;
}();

module.exports.ProfileTransAmountType = ProfileTransAmountType;

var ProfileTransVoidType = function () {
	function ProfileTransVoidType(obj) {
		_classCallCheck(this, ProfileTransVoidType);

		logger.debug('Enter ProfileTransVoidType constructor');
		if (arguments.length == 1) {
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				this.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerShippingAddressId' in obj && obj.customerShippingAddressId != null) {
				this.setCustomerShippingAddressId(obj.customerShippingAddressId);
			}
			if ('transId' in obj && obj.transId != null) {
				this.setTransId(obj.transId);
			}
		} else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
		logger.debug('Exit ProfileTransVoidType constructor');
	}

	_createClass(ProfileTransVoidType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerShippingAddressId',
		value: function setCustomerShippingAddressId(p_customerShippingAddressId) {
			this.customerShippingAddressId = p_customerShippingAddressId;
		}
	}, {
		key: 'getCustomerShippingAddressId',
		value: function getCustomerShippingAddressId() {
			if ('customerShippingAddressId' in this) {
				return this.customerShippingAddressId;
			}
		}
	}, {
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}]);

	return ProfileTransVoidType;
}();

module.exports.ProfileTransVoidType = ProfileTransVoidType;

var ProfileTransactionType = function () {
	function ProfileTransactionType(obj) {
		_classCallCheck(this, ProfileTransactionType);

		logger.debug('Enter ProfileTransactionType constructor');
		if (arguments.length == 1) {
			if ('profileTransAuthCapture' in obj && obj.profileTransAuthCapture != null) {
				this.setProfileTransAuthCapture(new ProfileTransAuthCaptureType(obj.profileTransAuthCapture));
			}
			if ('profileTransAuthOnly' in obj && obj.profileTransAuthOnly != null) {
				this.setProfileTransAuthOnly(new ProfileTransAuthOnlyType(obj.profileTransAuthOnly));
			}
			if ('profileTransPriorAuthCapture' in obj && obj.profileTransPriorAuthCapture != null) {
				this.setProfileTransPriorAuthCapture(new ProfileTransPriorAuthCaptureType(obj.profileTransPriorAuthCapture));
			}
			if ('profileTransCaptureOnly' in obj && obj.profileTransCaptureOnly != null) {
				this.setProfileTransCaptureOnly(new ProfileTransCaptureOnlyType(obj.profileTransCaptureOnly));
			}
			if ('profileTransRefund' in obj && obj.profileTransRefund != null) {
				this.setProfileTransRefund(new ProfileTransRefundType(obj.profileTransRefund));
			}
			if ('profileTransVoid' in obj && obj.profileTransVoid != null) {
				this.setProfileTransVoid(new ProfileTransVoidType(obj.profileTransVoid));
			}
		} else {
			this.setProfileTransAuthCapture(null);
			this.setProfileTransAuthOnly(null);
			this.setProfileTransPriorAuthCapture(null);
			this.setProfileTransCaptureOnly(null);
			this.setProfileTransRefund(null);
			this.setProfileTransVoid(null);
		}
		logger.debug('Exit ProfileTransactionType constructor');
	}

	_createClass(ProfileTransactionType, [{
		key: 'setProfileTransAuthCapture',
		value: function setProfileTransAuthCapture(p_profileTransAuthCapture) {
			this.profileTransAuthCapture = p_profileTransAuthCapture;
		}
	}, {
		key: 'getProfileTransAuthCapture',
		value: function getProfileTransAuthCapture() {
			if ('profileTransAuthCapture' in this) {
				return this.profileTransAuthCapture;
			}
		}
	}, {
		key: 'setProfileTransAuthOnly',
		value: function setProfileTransAuthOnly(p_profileTransAuthOnly) {
			this.profileTransAuthOnly = p_profileTransAuthOnly;
		}
	}, {
		key: 'getProfileTransAuthOnly',
		value: function getProfileTransAuthOnly() {
			if ('profileTransAuthOnly' in this) {
				return this.profileTransAuthOnly;
			}
		}
	}, {
		key: 'setProfileTransPriorAuthCapture',
		value: function setProfileTransPriorAuthCapture(p_profileTransPriorAuthCapture) {
			this.profileTransPriorAuthCapture = p_profileTransPriorAuthCapture;
		}
	}, {
		key: 'getProfileTransPriorAuthCapture',
		value: function getProfileTransPriorAuthCapture() {
			if ('profileTransPriorAuthCapture' in this) {
				return this.profileTransPriorAuthCapture;
			}
		}
	}, {
		key: 'setProfileTransCaptureOnly',
		value: function setProfileTransCaptureOnly(p_profileTransCaptureOnly) {
			this.profileTransCaptureOnly = p_profileTransCaptureOnly;
		}
	}, {
		key: 'getProfileTransCaptureOnly',
		value: function getProfileTransCaptureOnly() {
			if ('profileTransCaptureOnly' in this) {
				return this.profileTransCaptureOnly;
			}
		}
	}, {
		key: 'setProfileTransRefund',
		value: function setProfileTransRefund(p_profileTransRefund) {
			this.profileTransRefund = p_profileTransRefund;
		}
	}, {
		key: 'getProfileTransRefund',
		value: function getProfileTransRefund() {
			if ('profileTransRefund' in this) {
				return this.profileTransRefund;
			}
		}
	}, {
		key: 'setProfileTransVoid',
		value: function setProfileTransVoid(p_profileTransVoid) {
			this.profileTransVoid = p_profileTransVoid;
		}
	}, {
		key: 'getProfileTransVoid',
		value: function getProfileTransVoid() {
			if ('profileTransVoid' in this) {
				return this.profileTransVoid;
			}
		}
	}]);

	return ProfileTransactionType;
}();

module.exports.ProfileTransactionType = ProfileTransactionType;

var ReturnedItemType = function () {
	function ReturnedItemType(obj) {
		_classCallCheck(this, ReturnedItemType);

		logger.debug('Enter ReturnedItemType constructor');
		if (arguments.length == 1) {
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('dateUTC' in obj && obj.dateUTC != null) {
				this.setDateUTC(obj.dateUTC);
			}
			if ('dateLocal' in obj && obj.dateLocal != null) {
				this.setDateLocal(obj.dateLocal);
			}
			if ('code' in obj && obj.code != null) {
				this.setCode(obj.code);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
		} else {
			this.setId(null);
			this.setDateUTC(null);
			this.setDateLocal(null);
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit ReturnedItemType constructor');
	}

	_createClass(ReturnedItemType, [{
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setDateUTC',
		value: function setDateUTC(p_dateUTC) {
			this.dateUTC = p_dateUTC;
		}
	}, {
		key: 'getDateUTC',
		value: function getDateUTC() {
			if ('dateUTC' in this) {
				return this.dateUTC;
			}
		}
	}, {
		key: 'setDateLocal',
		value: function setDateLocal(p_dateLocal) {
			this.dateLocal = p_dateLocal;
		}
	}, {
		key: 'getDateLocal',
		value: function getDateLocal() {
			if ('dateLocal' in this) {
				return this.dateLocal;
			}
		}
	}, {
		key: 'setCode',
		value: function setCode(p_code) {
			this.code = p_code;
		}
	}, {
		key: 'getCode',
		value: function getCode() {
			if ('code' in this) {
				return this.code;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}]);

	return ReturnedItemType;
}();

module.exports.ReturnedItemType = ReturnedItemType;

var SecurePaymentContainerErrorType = function () {
	function SecurePaymentContainerErrorType(obj) {
		_classCallCheck(this, SecurePaymentContainerErrorType);

		logger.debug('Enter SecurePaymentContainerErrorType constructor');
		if (arguments.length == 1) {
			if ('code' in obj && obj.code != null) {
				this.setCode(obj.code);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
		} else {
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit SecurePaymentContainerErrorType constructor');
	}

	_createClass(SecurePaymentContainerErrorType, [{
		key: 'setCode',
		value: function setCode(p_code) {
			this.code = p_code;
		}
	}, {
		key: 'getCode',
		value: function getCode() {
			if ('code' in this) {
				return this.code;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}]);

	return SecurePaymentContainerErrorType;
}();

module.exports.SecurePaymentContainerErrorType = SecurePaymentContainerErrorType;

var SettingType = function () {
	function SettingType(obj) {
		_classCallCheck(this, SettingType);

		logger.debug('Enter SettingType constructor');
		if (arguments.length == 1) {
			if ('settingName' in obj && obj.settingName != null) {
				this.setSettingName(obj.settingName);
			}
			if ('settingValue' in obj && obj.settingValue != null) {
				this.setSettingValue(obj.settingValue);
			}
		} else {
			this.setSettingName(null);
			this.setSettingValue(null);
		}
		logger.debug('Exit SettingType constructor');
	}

	_createClass(SettingType, [{
		key: 'setSettingName',
		value: function setSettingName(p_settingName) {
			this.settingName = p_settingName;
		}
	}, {
		key: 'getSettingName',
		value: function getSettingName() {
			if ('settingName' in this) {
				return this.settingName;
			}
		}
	}, {
		key: 'setSettingValue',
		value: function setSettingValue(p_settingValue) {
			this.settingValue = p_settingValue;
		}
	}, {
		key: 'getSettingValue',
		value: function getSettingValue() {
			if ('settingValue' in this) {
				return this.settingValue;
			}
		}
	}]);

	return SettingType;
}();

module.exports.SettingType = SettingType;

var SolutionType = function () {
	function SolutionType(obj) {
		_classCallCheck(this, SolutionType);

		logger.debug('Enter SolutionType constructor');
		if (arguments.length == 1) {
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('vendorName' in obj && obj.vendorName != null) {
				this.setVendorName(obj.vendorName);
			}
		} else {
			this.setId(null);
			this.setName(null);
			this.setVendorName(null);
		}
		logger.debug('Exit SolutionType constructor');
	}

	_createClass(SolutionType, [{
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setVendorName',
		value: function setVendorName(p_vendorName) {
			this.vendorName = p_vendorName;
		}
	}, {
		key: 'getVendorName',
		value: function getVendorName() {
			if ('vendorName' in this) {
				return this.vendorName;
			}
		}
	}]);

	return SolutionType;
}();

module.exports.SolutionType = SolutionType;

var SubMerchantType = function () {
	function SubMerchantType(obj) {
		_classCallCheck(this, SubMerchantType);

		logger.debug('Enter SubMerchantType constructor');
		if (arguments.length == 1) {
			if ('identifier' in obj && obj.identifier != null) {
				this.setIdentifier(obj.identifier);
			}
			if ('doingBusinessAs' in obj && obj.doingBusinessAs != null) {
				this.setDoingBusinessAs(obj.doingBusinessAs);
			}
			if ('paymentServiceProviderName' in obj && obj.paymentServiceProviderName != null) {
				this.setPaymentServiceProviderName(obj.paymentServiceProviderName);
			}
			if ('paymentServiceFacilitator' in obj && obj.paymentServiceFacilitator != null) {
				this.setPaymentServiceFacilitator(obj.paymentServiceFacilitator);
			}
			if ('streetAddress' in obj && obj.streetAddress != null) {
				this.setStreetAddress(obj.streetAddress);
			}
			if ('phone' in obj && obj.phone != null) {
				this.setPhone(obj.phone);
			}
			if ('email' in obj && obj.email != null) {
				this.setEmail(obj.email);
			}
			if ('postalCode' in obj && obj.postalCode != null) {
				this.setPostalCode(obj.postalCode);
			}
			if ('city' in obj && obj.city != null) {
				this.setCity(obj.city);
			}
			if ('regionCode' in obj && obj.regionCode != null) {
				this.setRegionCode(obj.regionCode);
			}
			if ('countryCode' in obj && obj.countryCode != null) {
				this.setCountryCode(obj.countryCode);
			}
		} else {
			this.setIdentifier(null);
			this.setDoingBusinessAs(null);
			this.setPaymentServiceProviderName(null);
			this.setPaymentServiceFacilitator(null);
			this.setStreetAddress(null);
			this.setPhone(null);
			this.setEmail(null);
			this.setPostalCode(null);
			this.setCity(null);
			this.setRegionCode(null);
			this.setCountryCode(null);
		}
		logger.debug('Exit SubMerchantType constructor');
	}

	_createClass(SubMerchantType, [{
		key: 'setIdentifier',
		value: function setIdentifier(p_identifier) {
			this.identifier = p_identifier;
		}
	}, {
		key: 'getIdentifier',
		value: function getIdentifier() {
			if ('identifier' in this) {
				return this.identifier;
			}
		}
	}, {
		key: 'setDoingBusinessAs',
		value: function setDoingBusinessAs(p_doingBusinessAs) {
			this.doingBusinessAs = p_doingBusinessAs;
		}
	}, {
		key: 'getDoingBusinessAs',
		value: function getDoingBusinessAs() {
			if ('doingBusinessAs' in this) {
				return this.doingBusinessAs;
			}
		}
	}, {
		key: 'setPaymentServiceProviderName',
		value: function setPaymentServiceProviderName(p_paymentServiceProviderName) {
			this.paymentServiceProviderName = p_paymentServiceProviderName;
		}
	}, {
		key: 'getPaymentServiceProviderName',
		value: function getPaymentServiceProviderName() {
			if ('paymentServiceProviderName' in this) {
				return this.paymentServiceProviderName;
			}
		}
	}, {
		key: 'setPaymentServiceFacilitator',
		value: function setPaymentServiceFacilitator(p_paymentServiceFacilitator) {
			this.paymentServiceFacilitator = p_paymentServiceFacilitator;
		}
	}, {
		key: 'getPaymentServiceFacilitator',
		value: function getPaymentServiceFacilitator() {
			if ('paymentServiceFacilitator' in this) {
				return this.paymentServiceFacilitator;
			}
		}
	}, {
		key: 'setStreetAddress',
		value: function setStreetAddress(p_streetAddress) {
			this.streetAddress = p_streetAddress;
		}
	}, {
		key: 'getStreetAddress',
		value: function getStreetAddress() {
			if ('streetAddress' in this) {
				return this.streetAddress;
			}
		}
	}, {
		key: 'setPhone',
		value: function setPhone(p_phone) {
			this.phone = p_phone;
		}
	}, {
		key: 'getPhone',
		value: function getPhone() {
			if ('phone' in this) {
				return this.phone;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}, {
		key: 'setPostalCode',
		value: function setPostalCode(p_postalCode) {
			this.postalCode = p_postalCode;
		}
	}, {
		key: 'getPostalCode',
		value: function getPostalCode() {
			if ('postalCode' in this) {
				return this.postalCode;
			}
		}
	}, {
		key: 'setCity',
		value: function setCity(p_city) {
			this.city = p_city;
		}
	}, {
		key: 'getCity',
		value: function getCity() {
			if ('city' in this) {
				return this.city;
			}
		}
	}, {
		key: 'setRegionCode',
		value: function setRegionCode(p_regionCode) {
			this.regionCode = p_regionCode;
		}
	}, {
		key: 'getRegionCode',
		value: function getRegionCode() {
			if ('regionCode' in this) {
				return this.regionCode;
			}
		}
	}, {
		key: 'setCountryCode',
		value: function setCountryCode(p_countryCode) {
			this.countryCode = p_countryCode;
		}
	}, {
		key: 'getCountryCode',
		value: function getCountryCode() {
			if ('countryCode' in this) {
				return this.countryCode;
			}
		}
	}]);

	return SubMerchantType;
}();

module.exports.SubMerchantType = SubMerchantType;

var SubscriptionDetail = function () {
	function SubscriptionDetail(obj) {
		_classCallCheck(this, SubscriptionDetail);

		logger.debug('Enter SubscriptionDetail constructor');
		if (arguments.length == 1) {
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('status' in obj && obj.status != null) {
				this.setStatus(obj.status);
			}
			if ('createTimeStampUTC' in obj && obj.createTimeStampUTC != null) {
				this.setCreateTimeStampUTC(obj.createTimeStampUTC);
			}
			if ('firstName' in obj && obj.firstName != null) {
				this.setFirstName(obj.firstName);
			}
			if ('lastName' in obj && obj.lastName != null) {
				this.setLastName(obj.lastName);
			}
			if ('totalOccurrences' in obj && obj.totalOccurrences != null) {
				this.setTotalOccurrences(obj.totalOccurrences);
			}
			if ('pastOccurrences' in obj && obj.pastOccurrences != null) {
				this.setPastOccurrences(obj.pastOccurrences);
			}
			if ('paymentMethod' in obj && obj.paymentMethod != null) {
				this.setPaymentMethod(obj.paymentMethod);
			}
			if ('accountNumber' in obj && obj.accountNumber != null) {
				this.setAccountNumber(obj.accountNumber);
			}
			if ('invoice' in obj && obj.invoice != null) {
				this.setInvoice(obj.invoice);
			}
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
			if ('currencyCode' in obj && obj.currencyCode != null) {
				this.setCurrencyCode(obj.currencyCode);
			}
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				this.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				this.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerShippingProfileId' in obj && obj.customerShippingProfileId != null) {
				this.setCustomerShippingProfileId(obj.customerShippingProfileId);
			}
		} else {
			this.setId(null);
			this.setName(null);
			this.setStatus(null);
			this.setCreateTimeStampUTC(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setTotalOccurrences(null);
			this.setPastOccurrences(null);
			this.setPaymentMethod(null);
			this.setAccountNumber(null);
			this.setInvoice(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingProfileId(null);
		}
		logger.debug('Exit SubscriptionDetail constructor');
	}

	_createClass(SubscriptionDetail, [{
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setStatus',
		value: function setStatus(p_status) {
			this.status = p_status;
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			if ('status' in this) {
				return this.status;
			}
		}
	}, {
		key: 'setCreateTimeStampUTC',
		value: function setCreateTimeStampUTC(p_createTimeStampUTC) {
			this.createTimeStampUTC = p_createTimeStampUTC;
		}
	}, {
		key: 'getCreateTimeStampUTC',
		value: function getCreateTimeStampUTC() {
			if ('createTimeStampUTC' in this) {
				return this.createTimeStampUTC;
			}
		}
	}, {
		key: 'setFirstName',
		value: function setFirstName(p_firstName) {
			this.firstName = p_firstName;
		}
	}, {
		key: 'getFirstName',
		value: function getFirstName() {
			if ('firstName' in this) {
				return this.firstName;
			}
		}
	}, {
		key: 'setLastName',
		value: function setLastName(p_lastName) {
			this.lastName = p_lastName;
		}
	}, {
		key: 'getLastName',
		value: function getLastName() {
			if ('lastName' in this) {
				return this.lastName;
			}
		}
	}, {
		key: 'setTotalOccurrences',
		value: function setTotalOccurrences(p_totalOccurrences) {
			this.totalOccurrences = p_totalOccurrences;
		}
	}, {
		key: 'getTotalOccurrences',
		value: function getTotalOccurrences() {
			if ('totalOccurrences' in this) {
				return this.totalOccurrences;
			}
		}
	}, {
		key: 'setPastOccurrences',
		value: function setPastOccurrences(p_pastOccurrences) {
			this.pastOccurrences = p_pastOccurrences;
		}
	}, {
		key: 'getPastOccurrences',
		value: function getPastOccurrences() {
			if ('pastOccurrences' in this) {
				return this.pastOccurrences;
			}
		}
	}, {
		key: 'setPaymentMethod',
		value: function setPaymentMethod(p_paymentMethod) {
			this.paymentMethod = p_paymentMethod;
		}
	}, {
		key: 'getPaymentMethod',
		value: function getPaymentMethod() {
			if ('paymentMethod' in this) {
				return this.paymentMethod;
			}
		}
	}, {
		key: 'setAccountNumber',
		value: function setAccountNumber(p_accountNumber) {
			this.accountNumber = p_accountNumber;
		}
	}, {
		key: 'getAccountNumber',
		value: function getAccountNumber() {
			if ('accountNumber' in this) {
				return this.accountNumber;
			}
		}
	}, {
		key: 'setInvoice',
		value: function setInvoice(p_invoice) {
			this.invoice = p_invoice;
		}
	}, {
		key: 'getInvoice',
		value: function getInvoice() {
			if ('invoice' in this) {
				return this.invoice;
			}
		}
	}, {
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}, {
		key: 'setCurrencyCode',
		value: function setCurrencyCode(p_currencyCode) {
			this.currencyCode = p_currencyCode;
		}
	}, {
		key: 'getCurrencyCode',
		value: function getCurrencyCode() {
			if ('currencyCode' in this) {
				return this.currencyCode;
			}
		}
	}, {
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerShippingProfileId',
		value: function setCustomerShippingProfileId(p_customerShippingProfileId) {
			this.customerShippingProfileId = p_customerShippingProfileId;
		}
	}, {
		key: 'getCustomerShippingProfileId',
		value: function getCustomerShippingProfileId() {
			if ('customerShippingProfileId' in this) {
				return this.customerShippingProfileId;
			}
		}
	}]);

	return SubscriptionDetail;
}();

module.exports.SubscriptionDetail = SubscriptionDetail;

var SubscriptionIdList = function () {
	function SubscriptionIdList(obj) {
		_classCallCheck(this, SubscriptionIdList);

		logger.debug('Enter SubscriptionIdList constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var subscriptionIdList = [];
				obj.forEach(function (item) {
					subscriptionIdList.push(new String(item));
				});
				this.setSubscriptionId(subscriptionIdList);
			}
		} else {
			this.setSubscriptionId(null);
		}
		logger.debug('Exit SubscriptionIdList constructor');
	}

	_createClass(SubscriptionIdList, [{
		key: 'setSubscriptionId',
		value: function setSubscriptionId(p_subscriptionId) {
			this.subscriptionId = p_subscriptionId;
		}
	}, {
		key: 'getSubscriptionId',
		value: function getSubscriptionId() {
			if ('subscriptionId' in this) {
				return this.subscriptionId;
			}
		}
	}]);

	return SubscriptionIdList;
}();

module.exports.SubscriptionIdList = SubscriptionIdList;

var SubscriptionPaymentType = function () {
	function SubscriptionPaymentType(obj) {
		_classCallCheck(this, SubscriptionPaymentType);

		logger.debug('Enter SubscriptionPaymentType constructor');
		if (arguments.length == 1) {
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('payNum' in obj && obj.payNum != null) {
				this.setPayNum(obj.payNum);
			}
		} else {
			this.setId(null);
			this.setPayNum(null);
		}
		logger.debug('Exit SubscriptionPaymentType constructor');
	}

	_createClass(SubscriptionPaymentType, [{
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setPayNum',
		value: function setPayNum(p_payNum) {
			this.payNum = p_payNum;
		}
	}, {
		key: 'getPayNum',
		value: function getPayNum() {
			if ('payNum' in this) {
				return this.payNum;
			}
		}
	}]);

	return SubscriptionPaymentType;
}();

module.exports.SubscriptionPaymentType = SubscriptionPaymentType;

var TokenMaskedType = function () {
	function TokenMaskedType(obj) {
		_classCallCheck(this, TokenMaskedType);

		logger.debug('Enter TokenMaskedType constructor');
		if (arguments.length == 1) {
			if ('tokenSource' in obj && obj.tokenSource != null) {
				this.setTokenSource(obj.tokenSource);
			}
			if ('tokenNumber' in obj && obj.tokenNumber != null) {
				this.setTokenNumber(obj.tokenNumber);
			}
			if ('expirationDate' in obj && obj.expirationDate != null) {
				this.setExpirationDate(obj.expirationDate);
			}
		} else {
			this.setTokenSource(null);
			this.setTokenNumber(null);
			this.setExpirationDate(null);
		}
		logger.debug('Exit TokenMaskedType constructor');
	}

	_createClass(TokenMaskedType, [{
		key: 'setTokenSource',
		value: function setTokenSource(p_tokenSource) {
			this.tokenSource = p_tokenSource;
		}
	}, {
		key: 'getTokenSource',
		value: function getTokenSource() {
			if ('tokenSource' in this) {
				return this.tokenSource;
			}
		}
	}, {
		key: 'setTokenNumber',
		value: function setTokenNumber(p_tokenNumber) {
			this.tokenNumber = p_tokenNumber;
		}
	}, {
		key: 'getTokenNumber',
		value: function getTokenNumber() {
			if ('tokenNumber' in this) {
				return this.tokenNumber;
			}
		}
	}, {
		key: 'setExpirationDate',
		value: function setExpirationDate(p_expirationDate) {
			this.expirationDate = p_expirationDate;
		}
	}, {
		key: 'getExpirationDate',
		value: function getExpirationDate() {
			if ('expirationDate' in this) {
				return this.expirationDate;
			}
		}
	}]);

	return TokenMaskedType;
}();

module.exports.TokenMaskedType = TokenMaskedType;

var TransRetailInfoType = function () {
	function TransRetailInfoType(obj) {
		_classCallCheck(this, TransRetailInfoType);

		logger.debug('Enter TransRetailInfoType constructor');
		if (arguments.length == 1) {
			if ('marketType' in obj && obj.marketType != null) {
				this.setMarketType(obj.marketType);
			}
			if ('deviceType' in obj && obj.deviceType != null) {
				this.setDeviceType(obj.deviceType);
			}
			if ('customerSignature' in obj && obj.customerSignature != null) {
				this.setCustomerSignature(obj.customerSignature);
			}
			if ('terminalNumber' in obj && obj.terminalNumber != null) {
				this.setTerminalNumber(obj.terminalNumber);
			}
		} else {
			this.setMarketType(null);
			this.setDeviceType(null);
			this.setCustomerSignature(null);
			this.setTerminalNumber(null);
		}
		logger.debug('Exit TransRetailInfoType constructor');
	}

	_createClass(TransRetailInfoType, [{
		key: 'setMarketType',
		value: function setMarketType(p_marketType) {
			this.marketType = p_marketType;
		}
	}, {
		key: 'getMarketType',
		value: function getMarketType() {
			if ('marketType' in this) {
				return this.marketType;
			}
		}
	}, {
		key: 'setDeviceType',
		value: function setDeviceType(p_deviceType) {
			this.deviceType = p_deviceType;
		}
	}, {
		key: 'getDeviceType',
		value: function getDeviceType() {
			if ('deviceType' in this) {
				return this.deviceType;
			}
		}
	}, {
		key: 'setCustomerSignature',
		value: function setCustomerSignature(p_customerSignature) {
			this.customerSignature = p_customerSignature;
		}
	}, {
		key: 'getCustomerSignature',
		value: function getCustomerSignature() {
			if ('customerSignature' in this) {
				return this.customerSignature;
			}
		}
	}, {
		key: 'setTerminalNumber',
		value: function setTerminalNumber(p_terminalNumber) {
			this.terminalNumber = p_terminalNumber;
		}
	}, {
		key: 'getTerminalNumber',
		value: function getTerminalNumber() {
			if ('terminalNumber' in this) {
				return this.terminalNumber;
			}
		}
	}]);

	return TransRetailInfoType;
}();

module.exports.TransRetailInfoType = TransRetailInfoType;

var TransactionDetailsType = function () {
	function TransactionDetailsType(obj) {
		_classCallCheck(this, TransactionDetailsType);

		logger.debug('Enter TransactionDetailsType constructor');
		if (arguments.length == 1) {
			if ('transId' in obj && obj.transId != null) {
				this.setTransId(obj.transId);
			}
			if ('refTransId' in obj && obj.refTransId != null) {
				this.setRefTransId(obj.refTransId);
			}
			if ('splitTenderId' in obj && obj.splitTenderId != null) {
				this.setSplitTenderId(obj.splitTenderId);
			}
			if ('submitTimeUTC' in obj && obj.submitTimeUTC != null) {
				this.setSubmitTimeUTC(obj.submitTimeUTC);
			}
			if ('submitTimeLocal' in obj && obj.submitTimeLocal != null) {
				this.setSubmitTimeLocal(obj.submitTimeLocal);
			}
			if ('transactionType' in obj && obj.transactionType != null) {
				this.setTransactionType(obj.transactionType);
			}
			if ('transactionStatus' in obj && obj.transactionStatus != null) {
				this.setTransactionStatus(obj.transactionStatus);
			}
			if ('responseCode' in obj && obj.responseCode != null) {
				this.setResponseCode(obj.responseCode);
			}
			if ('responseReasonCode' in obj && obj.responseReasonCode != null) {
				this.setResponseReasonCode(obj.responseReasonCode);
			}
			if ('subscription' in obj && obj.subscription != null) {
				this.setSubscription(new SubscriptionPaymentType(obj.subscription));
			}
			if ('responseReasonDescription' in obj && obj.responseReasonDescription != null) {
				this.setResponseReasonDescription(obj.responseReasonDescription);
			}
			if ('authCode' in obj && obj.authCode != null) {
				this.setAuthCode(obj.authCode);
			}
			if ('AVSResponse' in obj && obj.AVSResponse != null) {
				this.setAVSResponse(obj.AVSResponse);
			}
			if ('cardCodeResponse' in obj && obj.cardCodeResponse != null) {
				this.setCardCodeResponse(obj.cardCodeResponse);
			}
			if ('CAVVResponse' in obj && obj.CAVVResponse != null) {
				this.setCAVVResponse(obj.CAVVResponse);
			}
			if ('FDSFilterAction' in obj && obj.FDSFilterAction != null) {
				this.setFDSFilterAction(obj.FDSFilterAction);
			}
			if ('FDSFilters' in obj && obj.FDSFilters != null) {
				this.setFDSFilters(new ArrayOfFDSFilter(obj.FDSFilters));
			}
			if ('batch' in obj && obj.batch != null) {
				this.setBatch(new BatchDetailsType(obj.batch));
			}
			if ('order' in obj && obj.order != null) {
				this.setOrder(new OrderExType(obj.order));
			}
			if ('requestedAmount' in obj && obj.requestedAmount != null) {
				this.setRequestedAmount(obj.requestedAmount);
			}
			if ('authAmount' in obj && obj.authAmount != null) {
				this.setAuthAmount(obj.authAmount);
			}
			if ('settleAmount' in obj && obj.settleAmount != null) {
				this.setSettleAmount(obj.settleAmount);
			}
			if ('tax' in obj && obj.tax != null) {
				this.setTax(new ExtendedAmountType(obj.tax));
			}
			if ('shipping' in obj && obj.shipping != null) {
				this.setShipping(new ExtendedAmountType(obj.shipping));
			}
			if ('duty' in obj && obj.duty != null) {
				this.setDuty(new ExtendedAmountType(obj.duty));
			}
			if ('lineItems' in obj && obj.lineItems != null) {
				this.setLineItems(new ArrayOfLineItem(obj.lineItems));
			}
			if ('prepaidBalanceRemaining' in obj && obj.prepaidBalanceRemaining != null) {
				this.setPrepaidBalanceRemaining(obj.prepaidBalanceRemaining);
			}
			if ('taxExempt' in obj && obj.taxExempt != null) {
				this.setTaxExempt(obj.taxExempt);
			}
			if ('payment' in obj && obj.payment != null) {
				this.setPayment(new PaymentMaskedType(obj.payment));
			}
			if ('customer' in obj && obj.customer != null) {
				this.setCustomer(new CustomerDataType(obj.customer));
			}
			if ('billTo' in obj && obj.billTo != null) {
				this.setBillTo(new CustomerAddressType(obj.billTo));
			}
			if ('shipTo' in obj && obj.shipTo != null) {
				this.setShipTo(new NameAndAddressType(obj.shipTo));
			}
			if ('recurringBilling' in obj && obj.recurringBilling != null) {
				this.setRecurringBilling(obj.recurringBilling);
			}
			if ('customerIP' in obj && obj.customerIP != null) {
				this.setCustomerIP(obj.customerIP);
			}
			if ('product' in obj && obj.product != null) {
				this.setProduct(obj.product);
			}
			if ('entryMode' in obj && obj.entryMode != null) {
				this.setEntryMode(obj.entryMode);
			}
			if ('marketType' in obj && obj.marketType != null) {
				this.setMarketType(obj.marketType);
			}
			if ('mobileDeviceId' in obj && obj.mobileDeviceId != null) {
				this.setMobileDeviceId(obj.mobileDeviceId);
			}
			if ('customerSignature' in obj && obj.customerSignature != null) {
				this.setCustomerSignature(obj.customerSignature);
			}
			if ('returnedItems' in obj && obj.returnedItems != null) {
				this.setReturnedItems(new ArrayOfReturnedItem(obj.returnedItems));
			}
			if ('solution' in obj && obj.solution != null) {
				this.setSolution(new SolutionType(obj.solution));
			}
			if ('emvDetails' in obj && obj.emvDetails != null) {
				this.setEmvDetails(new TransactionDetailsType.EmvDetails(obj.emvDetails));
			}
			if ('profile' in obj && obj.profile != null) {
				this.setProfile(new CustomerProfileIdType(obj.profile));
			}
			if ('surcharge' in obj && obj.surcharge != null) {
				this.setSurcharge(new ExtendedAmountType(obj.surcharge));
			}
			if ('employeeId' in obj && obj.employeeId != null) {
				this.setEmployeeId(obj.employeeId);
			}
			if ('tip' in obj && obj.tip != null) {
				this.setTip(new ExtendedAmountType(obj.tip));
			}
		} else {
			this.setTransId(null);
			this.setRefTransId(null);
			this.setSplitTenderId(null);
			this.setSubmitTimeUTC(null);
			this.setSubmitTimeLocal(null);
			this.setTransactionType(null);
			this.setTransactionStatus(null);
			this.setResponseCode(null);
			this.setResponseReasonCode(null);
			this.setSubscription(null);
			this.setResponseReasonDescription(null);
			this.setAuthCode(null);
			this.setAVSResponse(null);
			this.setCardCodeResponse(null);
			this.setCAVVResponse(null);
			this.setFDSFilterAction(null);
			this.setFDSFilters(null);
			this.setBatch(null);
			this.setOrder(null);
			this.setRequestedAmount(null);
			this.setAuthAmount(null);
			this.setSettleAmount(null);
			this.setTax(null);
			this.setShipping(null);
			this.setDuty(null);
			this.setLineItems(null);
			this.setPrepaidBalanceRemaining(null);
			this.setTaxExempt(null);
			this.setPayment(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setRecurringBilling(null);
			this.setCustomerIP(null);
			this.setProduct(null);
			this.setEntryMode(null);
			this.setMarketType(null);
			this.setMobileDeviceId(null);
			this.setCustomerSignature(null);
			this.setReturnedItems(null);
			this.setSolution(null);
			this.setEmvDetails(null);
			this.setProfile(null);
			this.setSurcharge(null);
			this.setEmployeeId(null);
			this.setTip(null);
		}
		logger.debug('Exit TransactionDetailsType constructor');
	}

	_createClass(TransactionDetailsType, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setRefTransId',
		value: function setRefTransId(p_refTransId) {
			this.refTransId = p_refTransId;
		}
	}, {
		key: 'getRefTransId',
		value: function getRefTransId() {
			if ('refTransId' in this) {
				return this.refTransId;
			}
		}
	}, {
		key: 'setSplitTenderId',
		value: function setSplitTenderId(p_splitTenderId) {
			this.splitTenderId = p_splitTenderId;
		}
	}, {
		key: 'getSplitTenderId',
		value: function getSplitTenderId() {
			if ('splitTenderId' in this) {
				return this.splitTenderId;
			}
		}
	}, {
		key: 'setSubmitTimeUTC',
		value: function setSubmitTimeUTC(p_submitTimeUTC) {
			this.submitTimeUTC = p_submitTimeUTC;
		}
	}, {
		key: 'getSubmitTimeUTC',
		value: function getSubmitTimeUTC() {
			if ('submitTimeUTC' in this) {
				return this.submitTimeUTC;
			}
		}
	}, {
		key: 'setSubmitTimeLocal',
		value: function setSubmitTimeLocal(p_submitTimeLocal) {
			this.submitTimeLocal = p_submitTimeLocal;
		}
	}, {
		key: 'getSubmitTimeLocal',
		value: function getSubmitTimeLocal() {
			if ('submitTimeLocal' in this) {
				return this.submitTimeLocal;
			}
		}
	}, {
		key: 'setTransactionType',
		value: function setTransactionType(p_transactionType) {
			this.transactionType = p_transactionType;
		}
	}, {
		key: 'getTransactionType',
		value: function getTransactionType() {
			if ('transactionType' in this) {
				return this.transactionType;
			}
		}
	}, {
		key: 'setTransactionStatus',
		value: function setTransactionStatus(p_transactionStatus) {
			this.transactionStatus = p_transactionStatus;
		}
	}, {
		key: 'getTransactionStatus',
		value: function getTransactionStatus() {
			if ('transactionStatus' in this) {
				return this.transactionStatus;
			}
		}
	}, {
		key: 'setResponseCode',
		value: function setResponseCode(p_responseCode) {
			this.responseCode = p_responseCode;
		}
	}, {
		key: 'getResponseCode',
		value: function getResponseCode() {
			if ('responseCode' in this) {
				return this.responseCode;
			}
		}
	}, {
		key: 'setResponseReasonCode',
		value: function setResponseReasonCode(p_responseReasonCode) {
			this.responseReasonCode = p_responseReasonCode;
		}
	}, {
		key: 'getResponseReasonCode',
		value: function getResponseReasonCode() {
			if ('responseReasonCode' in this) {
				return this.responseReasonCode;
			}
		}
	}, {
		key: 'setSubscription',
		value: function setSubscription(p_subscription) {
			this.subscription = p_subscription;
		}
	}, {
		key: 'getSubscription',
		value: function getSubscription() {
			if ('subscription' in this) {
				return this.subscription;
			}
		}
	}, {
		key: 'setResponseReasonDescription',
		value: function setResponseReasonDescription(p_responseReasonDescription) {
			this.responseReasonDescription = p_responseReasonDescription;
		}
	}, {
		key: 'getResponseReasonDescription',
		value: function getResponseReasonDescription() {
			if ('responseReasonDescription' in this) {
				return this.responseReasonDescription;
			}
		}
	}, {
		key: 'setAuthCode',
		value: function setAuthCode(p_authCode) {
			this.authCode = p_authCode;
		}
	}, {
		key: 'getAuthCode',
		value: function getAuthCode() {
			if ('authCode' in this) {
				return this.authCode;
			}
		}
	}, {
		key: 'setAVSResponse',
		value: function setAVSResponse(p_AVSResponse) {
			this.AVSResponse = p_AVSResponse;
		}
	}, {
		key: 'getAVSResponse',
		value: function getAVSResponse() {
			if ('AVSResponse' in this) {
				return this.AVSResponse;
			}
		}
	}, {
		key: 'setCardCodeResponse',
		value: function setCardCodeResponse(p_cardCodeResponse) {
			this.cardCodeResponse = p_cardCodeResponse;
		}
	}, {
		key: 'getCardCodeResponse',
		value: function getCardCodeResponse() {
			if ('cardCodeResponse' in this) {
				return this.cardCodeResponse;
			}
		}
	}, {
		key: 'setCAVVResponse',
		value: function setCAVVResponse(p_CAVVResponse) {
			this.CAVVResponse = p_CAVVResponse;
		}
	}, {
		key: 'getCAVVResponse',
		value: function getCAVVResponse() {
			if ('CAVVResponse' in this) {
				return this.CAVVResponse;
			}
		}
	}, {
		key: 'setFDSFilterAction',
		value: function setFDSFilterAction(p_FDSFilterAction) {
			this.FDSFilterAction = p_FDSFilterAction;
		}
	}, {
		key: 'getFDSFilterAction',
		value: function getFDSFilterAction() {
			if ('FDSFilterAction' in this) {
				return this.FDSFilterAction;
			}
		}
	}, {
		key: 'setFDSFilters',
		value: function setFDSFilters(p_FDSFilters) {
			this.FDSFilters = p_FDSFilters;
		}
	}, {
		key: 'getFDSFilters',
		value: function getFDSFilters() {
			if ('FDSFilters' in this) {
				return this.FDSFilters;
			}
		}
	}, {
		key: 'setBatch',
		value: function setBatch(p_batch) {
			this.batch = p_batch;
		}
	}, {
		key: 'getBatch',
		value: function getBatch() {
			if ('batch' in this) {
				return this.batch;
			}
		}
	}, {
		key: 'setOrder',
		value: function setOrder(p_order) {
			this.order = p_order;
		}
	}, {
		key: 'getOrder',
		value: function getOrder() {
			if ('order' in this) {
				return this.order;
			}
		}
	}, {
		key: 'setRequestedAmount',
		value: function setRequestedAmount(p_requestedAmount) {
			this.requestedAmount = p_requestedAmount;
		}
	}, {
		key: 'getRequestedAmount',
		value: function getRequestedAmount() {
			if ('requestedAmount' in this) {
				return this.requestedAmount;
			}
		}
	}, {
		key: 'setAuthAmount',
		value: function setAuthAmount(p_authAmount) {
			this.authAmount = p_authAmount;
		}
	}, {
		key: 'getAuthAmount',
		value: function getAuthAmount() {
			if ('authAmount' in this) {
				return this.authAmount;
			}
		}
	}, {
		key: 'setSettleAmount',
		value: function setSettleAmount(p_settleAmount) {
			this.settleAmount = p_settleAmount;
		}
	}, {
		key: 'getSettleAmount',
		value: function getSettleAmount() {
			if ('settleAmount' in this) {
				return this.settleAmount;
			}
		}
	}, {
		key: 'setTax',
		value: function setTax(p_tax) {
			this.tax = p_tax;
		}
	}, {
		key: 'getTax',
		value: function getTax() {
			if ('tax' in this) {
				return this.tax;
			}
		}
	}, {
		key: 'setShipping',
		value: function setShipping(p_shipping) {
			this.shipping = p_shipping;
		}
	}, {
		key: 'getShipping',
		value: function getShipping() {
			if ('shipping' in this) {
				return this.shipping;
			}
		}
	}, {
		key: 'setDuty',
		value: function setDuty(p_duty) {
			this.duty = p_duty;
		}
	}, {
		key: 'getDuty',
		value: function getDuty() {
			if ('duty' in this) {
				return this.duty;
			}
		}
	}, {
		key: 'setLineItems',
		value: function setLineItems(p_lineItems) {
			this.lineItems = p_lineItems;
		}
	}, {
		key: 'getLineItems',
		value: function getLineItems() {
			if ('lineItems' in this) {
				return this.lineItems;
			}
		}
	}, {
		key: 'setPrepaidBalanceRemaining',
		value: function setPrepaidBalanceRemaining(p_prepaidBalanceRemaining) {
			this.prepaidBalanceRemaining = p_prepaidBalanceRemaining;
		}
	}, {
		key: 'getPrepaidBalanceRemaining',
		value: function getPrepaidBalanceRemaining() {
			if ('prepaidBalanceRemaining' in this) {
				return this.prepaidBalanceRemaining;
			}
		}
	}, {
		key: 'setTaxExempt',
		value: function setTaxExempt(p_taxExempt) {
			this.taxExempt = p_taxExempt;
		}
	}, {
		key: 'getTaxExempt',
		value: function getTaxExempt() {
			if ('taxExempt' in this) {
				return this.taxExempt;
			}
		}
	}, {
		key: 'setPayment',
		value: function setPayment(p_payment) {
			this.payment = p_payment;
		}
	}, {
		key: 'getPayment',
		value: function getPayment() {
			if ('payment' in this) {
				return this.payment;
			}
		}
	}, {
		key: 'setCustomer',
		value: function setCustomer(p_customer) {
			this.customer = p_customer;
		}
	}, {
		key: 'getCustomer',
		value: function getCustomer() {
			if ('customer' in this) {
				return this.customer;
			}
		}
	}, {
		key: 'setBillTo',
		value: function setBillTo(p_billTo) {
			this.billTo = p_billTo;
		}
	}, {
		key: 'getBillTo',
		value: function getBillTo() {
			if ('billTo' in this) {
				return this.billTo;
			}
		}
	}, {
		key: 'setShipTo',
		value: function setShipTo(p_shipTo) {
			this.shipTo = p_shipTo;
		}
	}, {
		key: 'getShipTo',
		value: function getShipTo() {
			if ('shipTo' in this) {
				return this.shipTo;
			}
		}
	}, {
		key: 'setRecurringBilling',
		value: function setRecurringBilling(p_recurringBilling) {
			this.recurringBilling = p_recurringBilling;
		}
	}, {
		key: 'getRecurringBilling',
		value: function getRecurringBilling() {
			if ('recurringBilling' in this) {
				return this.recurringBilling;
			}
		}
	}, {
		key: 'setCustomerIP',
		value: function setCustomerIP(p_customerIP) {
			this.customerIP = p_customerIP;
		}
	}, {
		key: 'getCustomerIP',
		value: function getCustomerIP() {
			if ('customerIP' in this) {
				return this.customerIP;
			}
		}
	}, {
		key: 'setProduct',
		value: function setProduct(p_product) {
			this.product = p_product;
		}
	}, {
		key: 'getProduct',
		value: function getProduct() {
			if ('product' in this) {
				return this.product;
			}
		}
	}, {
		key: 'setEntryMode',
		value: function setEntryMode(p_entryMode) {
			this.entryMode = p_entryMode;
		}
	}, {
		key: 'getEntryMode',
		value: function getEntryMode() {
			if ('entryMode' in this) {
				return this.entryMode;
			}
		}
	}, {
		key: 'setMarketType',
		value: function setMarketType(p_marketType) {
			this.marketType = p_marketType;
		}
	}, {
		key: 'getMarketType',
		value: function getMarketType() {
			if ('marketType' in this) {
				return this.marketType;
			}
		}
	}, {
		key: 'setMobileDeviceId',
		value: function setMobileDeviceId(p_mobileDeviceId) {
			this.mobileDeviceId = p_mobileDeviceId;
		}
	}, {
		key: 'getMobileDeviceId',
		value: function getMobileDeviceId() {
			if ('mobileDeviceId' in this) {
				return this.mobileDeviceId;
			}
		}
	}, {
		key: 'setCustomerSignature',
		value: function setCustomerSignature(p_customerSignature) {
			this.customerSignature = p_customerSignature;
		}
	}, {
		key: 'getCustomerSignature',
		value: function getCustomerSignature() {
			if ('customerSignature' in this) {
				return this.customerSignature;
			}
		}
	}, {
		key: 'setReturnedItems',
		value: function setReturnedItems(p_returnedItems) {
			this.returnedItems = p_returnedItems;
		}
	}, {
		key: 'getReturnedItems',
		value: function getReturnedItems() {
			if ('returnedItems' in this) {
				return this.returnedItems;
			}
		}
	}, {
		key: 'setSolution',
		value: function setSolution(p_solution) {
			this.solution = p_solution;
		}
	}, {
		key: 'getSolution',
		value: function getSolution() {
			if ('solution' in this) {
				return this.solution;
			}
		}
	}, {
		key: 'setEmvDetails',
		value: function setEmvDetails(p_emvDetails) {
			this.emvDetails = p_emvDetails;
		}
	}, {
		key: 'getEmvDetails',
		value: function getEmvDetails() {
			if ('emvDetails' in this) {
				return this.emvDetails;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}, {
		key: 'setSurcharge',
		value: function setSurcharge(p_surcharge) {
			this.surcharge = p_surcharge;
		}
	}, {
		key: 'getSurcharge',
		value: function getSurcharge() {
			if ('surcharge' in this) {
				return this.surcharge;
			}
		}
	}, {
		key: 'setEmployeeId',
		value: function setEmployeeId(p_employeeId) {
			this.employeeId = p_employeeId;
		}
	}, {
		key: 'getEmployeeId',
		value: function getEmployeeId() {
			if ('employeeId' in this) {
				return this.employeeId;
			}
		}
	}, {
		key: 'setTip',
		value: function setTip(p_tip) {
			this.tip = p_tip;
		}
	}, {
		key: 'getTip',
		value: function getTip() {
			if ('tip' in this) {
				return this.tip;
			}
		}
	}]);

	return TransactionDetailsType;
}();

module.exports.TransactionDetailsType = TransactionDetailsType;

var TransactionListSorting = function () {
	function TransactionListSorting(obj) {
		_classCallCheck(this, TransactionListSorting);

		logger.debug('Enter TransactionListSorting constructor');
		if (arguments.length == 1) {
			if ('orderBy' in obj && obj.orderBy != null) {
				this.setOrderBy(obj.orderBy);
			}
			if ('orderDescending' in obj && obj.orderDescending != null) {
				this.setOrderDescending(obj.orderDescending);
			}
		} else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit TransactionListSorting constructor');
	}

	_createClass(TransactionListSorting, [{
		key: 'setOrderBy',
		value: function setOrderBy(p_orderBy) {
			this.orderBy = p_orderBy;
		}
	}, {
		key: 'getOrderBy',
		value: function getOrderBy() {
			if ('orderBy' in this) {
				return this.orderBy;
			}
		}
	}, {
		key: 'setOrderDescending',
		value: function setOrderDescending(p_orderDescending) {
			this.orderDescending = p_orderDescending;
		}
	}, {
		key: 'getOrderDescending',
		value: function getOrderDescending() {
			if ('orderDescending' in this) {
				return this.orderDescending;
			}
		}
	}]);

	return TransactionListSorting;
}();

module.exports.TransactionListSorting = TransactionListSorting;

var TransactionRequestType = function () {
	function TransactionRequestType(obj) {
		_classCallCheck(this, TransactionRequestType);

		logger.debug('Enter TransactionRequestType constructor');
		if (arguments.length == 1) {
			if ('transactionType' in obj && obj.transactionType != null) {
				this.setTransactionType(obj.transactionType);
			}
			if ('amount' in obj && obj.amount != null) {
				this.setAmount(obj.amount);
			}
			if ('currencyCode' in obj && obj.currencyCode != null) {
				this.setCurrencyCode(obj.currencyCode);
			}
			if ('payment' in obj && obj.payment != null) {
				this.setPayment(new PaymentType(obj.payment));
			}
			if ('profile' in obj && obj.profile != null) {
				this.setProfile(new CustomerProfilePaymentType(obj.profile));
			}
			if ('solution' in obj && obj.solution != null) {
				this.setSolution(new SolutionType(obj.solution));
			}
			if ('callId' in obj && obj.callId != null) {
				this.setCallId(obj.callId);
			}
			if ('terminalNumber' in obj && obj.terminalNumber != null) {
				this.setTerminalNumber(obj.terminalNumber);
			}
			if ('authCode' in obj && obj.authCode != null) {
				this.setAuthCode(obj.authCode);
			}
			if ('refTransId' in obj && obj.refTransId != null) {
				this.setRefTransId(obj.refTransId);
			}
			if ('splitTenderId' in obj && obj.splitTenderId != null) {
				this.setSplitTenderId(obj.splitTenderId);
			}
			if ('order' in obj && obj.order != null) {
				this.setOrder(new OrderType(obj.order));
			}
			if ('lineItems' in obj && obj.lineItems != null) {
				this.setLineItems(new ArrayOfLineItem(obj.lineItems));
			}
			if ('tax' in obj && obj.tax != null) {
				this.setTax(new ExtendedAmountType(obj.tax));
			}
			if ('duty' in obj && obj.duty != null) {
				this.setDuty(new ExtendedAmountType(obj.duty));
			}
			if ('shipping' in obj && obj.shipping != null) {
				this.setShipping(new ExtendedAmountType(obj.shipping));
			}
			if ('taxExempt' in obj && obj.taxExempt != null) {
				this.setTaxExempt(obj.taxExempt);
			}
			if ('poNumber' in obj && obj.poNumber != null) {
				this.setPoNumber(obj.poNumber);
			}
			if ('customer' in obj && obj.customer != null) {
				this.setCustomer(new CustomerDataType(obj.customer));
			}
			if ('billTo' in obj && obj.billTo != null) {
				this.setBillTo(new CustomerAddressType(obj.billTo));
			}
			if ('shipTo' in obj && obj.shipTo != null) {
				this.setShipTo(new NameAndAddressType(obj.shipTo));
			}
			if ('customerIP' in obj && obj.customerIP != null) {
				this.setCustomerIP(obj.customerIP);
			}
			if ('cardholderAuthentication' in obj && obj.cardholderAuthentication != null) {
				this.setCardholderAuthentication(new CcAuthenticationType(obj.cardholderAuthentication));
			}
			if ('retail' in obj && obj.retail != null) {
				this.setRetail(new TransRetailInfoType(obj.retail));
			}
			if ('employeeId' in obj && obj.employeeId != null) {
				this.setEmployeeId(obj.employeeId);
			}
			if ('transactionSettings' in obj && obj.transactionSettings != null) {
				this.setTransactionSettings(new ArrayOfSetting(obj.transactionSettings));
			}
			if ('userFields' in obj && obj.userFields != null) {
				this.setUserFields(new TransactionRequestType.UserFields(obj.userFields));
			}
			if ('surcharge' in obj && obj.surcharge != null) {
				this.setSurcharge(new ExtendedAmountType(obj.surcharge));
			}
			if ('merchantDescriptor' in obj && obj.merchantDescriptor != null) {
				this.setMerchantDescriptor(obj.merchantDescriptor);
			}
			if ('subMerchant' in obj && obj.subMerchant != null) {
				this.setSubMerchant(new SubMerchantType(obj.subMerchant));
			}
			if ('tip' in obj && obj.tip != null) {
				this.setTip(new ExtendedAmountType(obj.tip));
			}
		} else {
			this.setTransactionType(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setPayment(null);
			this.setProfile(null);
			this.setSolution(null);
			this.setCallId(null);
			this.setTerminalNumber(null);
			this.setAuthCode(null);
			this.setRefTransId(null);
			this.setSplitTenderId(null);
			this.setOrder(null);
			this.setLineItems(null);
			this.setTax(null);
			this.setDuty(null);
			this.setShipping(null);
			this.setTaxExempt(null);
			this.setPoNumber(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setCustomerIP(null);
			this.setCardholderAuthentication(null);
			this.setRetail(null);
			this.setEmployeeId(null);
			this.setTransactionSettings(null);
			this.setUserFields(null);
			this.setSurcharge(null);
			this.setMerchantDescriptor(null);
			this.setSubMerchant(null);
			this.setTip(null);
		}
		logger.debug('Exit TransactionRequestType constructor');
	}

	_createClass(TransactionRequestType, [{
		key: 'setTransactionType',
		value: function setTransactionType(p_transactionType) {
			this.transactionType = p_transactionType;
		}
	}, {
		key: 'getTransactionType',
		value: function getTransactionType() {
			if ('transactionType' in this) {
				return this.transactionType;
			}
		}
	}, {
		key: 'setAmount',
		value: function setAmount(p_amount) {
			this.amount = p_amount;
		}
	}, {
		key: 'getAmount',
		value: function getAmount() {
			if ('amount' in this) {
				return this.amount;
			}
		}
	}, {
		key: 'setCurrencyCode',
		value: function setCurrencyCode(p_currencyCode) {
			this.currencyCode = p_currencyCode;
		}
	}, {
		key: 'getCurrencyCode',
		value: function getCurrencyCode() {
			if ('currencyCode' in this) {
				return this.currencyCode;
			}
		}
	}, {
		key: 'setPayment',
		value: function setPayment(p_payment) {
			this.payment = p_payment;
		}
	}, {
		key: 'getPayment',
		value: function getPayment() {
			if ('payment' in this) {
				return this.payment;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}, {
		key: 'setSolution',
		value: function setSolution(p_solution) {
			this.solution = p_solution;
		}
	}, {
		key: 'getSolution',
		value: function getSolution() {
			if ('solution' in this) {
				return this.solution;
			}
		}
	}, {
		key: 'setCallId',
		value: function setCallId(p_callId) {
			this.callId = p_callId;
		}
	}, {
		key: 'getCallId',
		value: function getCallId() {
			if ('callId' in this) {
				return this.callId;
			}
		}
	}, {
		key: 'setTerminalNumber',
		value: function setTerminalNumber(p_terminalNumber) {
			this.terminalNumber = p_terminalNumber;
		}
	}, {
		key: 'getTerminalNumber',
		value: function getTerminalNumber() {
			if ('terminalNumber' in this) {
				return this.terminalNumber;
			}
		}
	}, {
		key: 'setAuthCode',
		value: function setAuthCode(p_authCode) {
			this.authCode = p_authCode;
		}
	}, {
		key: 'getAuthCode',
		value: function getAuthCode() {
			if ('authCode' in this) {
				return this.authCode;
			}
		}
	}, {
		key: 'setRefTransId',
		value: function setRefTransId(p_refTransId) {
			this.refTransId = p_refTransId;
		}
	}, {
		key: 'getRefTransId',
		value: function getRefTransId() {
			if ('refTransId' in this) {
				return this.refTransId;
			}
		}
	}, {
		key: 'setSplitTenderId',
		value: function setSplitTenderId(p_splitTenderId) {
			this.splitTenderId = p_splitTenderId;
		}
	}, {
		key: 'getSplitTenderId',
		value: function getSplitTenderId() {
			if ('splitTenderId' in this) {
				return this.splitTenderId;
			}
		}
	}, {
		key: 'setOrder',
		value: function setOrder(p_order) {
			this.order = p_order;
		}
	}, {
		key: 'getOrder',
		value: function getOrder() {
			if ('order' in this) {
				return this.order;
			}
		}
	}, {
		key: 'setLineItems',
		value: function setLineItems(p_lineItems) {
			this.lineItems = p_lineItems;
		}
	}, {
		key: 'getLineItems',
		value: function getLineItems() {
			if ('lineItems' in this) {
				return this.lineItems;
			}
		}
	}, {
		key: 'setTax',
		value: function setTax(p_tax) {
			this.tax = p_tax;
		}
	}, {
		key: 'getTax',
		value: function getTax() {
			if ('tax' in this) {
				return this.tax;
			}
		}
	}, {
		key: 'setDuty',
		value: function setDuty(p_duty) {
			this.duty = p_duty;
		}
	}, {
		key: 'getDuty',
		value: function getDuty() {
			if ('duty' in this) {
				return this.duty;
			}
		}
	}, {
		key: 'setShipping',
		value: function setShipping(p_shipping) {
			this.shipping = p_shipping;
		}
	}, {
		key: 'getShipping',
		value: function getShipping() {
			if ('shipping' in this) {
				return this.shipping;
			}
		}
	}, {
		key: 'setTaxExempt',
		value: function setTaxExempt(p_taxExempt) {
			this.taxExempt = p_taxExempt;
		}
	}, {
		key: 'getTaxExempt',
		value: function getTaxExempt() {
			if ('taxExempt' in this) {
				return this.taxExempt;
			}
		}
	}, {
		key: 'setPoNumber',
		value: function setPoNumber(p_poNumber) {
			this.poNumber = p_poNumber;
		}
	}, {
		key: 'getPoNumber',
		value: function getPoNumber() {
			if ('poNumber' in this) {
				return this.poNumber;
			}
		}
	}, {
		key: 'setCustomer',
		value: function setCustomer(p_customer) {
			this.customer = p_customer;
		}
	}, {
		key: 'getCustomer',
		value: function getCustomer() {
			if ('customer' in this) {
				return this.customer;
			}
		}
	}, {
		key: 'setBillTo',
		value: function setBillTo(p_billTo) {
			this.billTo = p_billTo;
		}
	}, {
		key: 'getBillTo',
		value: function getBillTo() {
			if ('billTo' in this) {
				return this.billTo;
			}
		}
	}, {
		key: 'setShipTo',
		value: function setShipTo(p_shipTo) {
			this.shipTo = p_shipTo;
		}
	}, {
		key: 'getShipTo',
		value: function getShipTo() {
			if ('shipTo' in this) {
				return this.shipTo;
			}
		}
	}, {
		key: 'setCustomerIP',
		value: function setCustomerIP(p_customerIP) {
			this.customerIP = p_customerIP;
		}
	}, {
		key: 'getCustomerIP',
		value: function getCustomerIP() {
			if ('customerIP' in this) {
				return this.customerIP;
			}
		}
	}, {
		key: 'setCardholderAuthentication',
		value: function setCardholderAuthentication(p_cardholderAuthentication) {
			this.cardholderAuthentication = p_cardholderAuthentication;
		}
	}, {
		key: 'getCardholderAuthentication',
		value: function getCardholderAuthentication() {
			if ('cardholderAuthentication' in this) {
				return this.cardholderAuthentication;
			}
		}
	}, {
		key: 'setRetail',
		value: function setRetail(p_retail) {
			this.retail = p_retail;
		}
	}, {
		key: 'getRetail',
		value: function getRetail() {
			if ('retail' in this) {
				return this.retail;
			}
		}
	}, {
		key: 'setEmployeeId',
		value: function setEmployeeId(p_employeeId) {
			this.employeeId = p_employeeId;
		}
	}, {
		key: 'getEmployeeId',
		value: function getEmployeeId() {
			if ('employeeId' in this) {
				return this.employeeId;
			}
		}
	}, {
		key: 'setTransactionSettings',
		value: function setTransactionSettings(p_transactionSettings) {
			this.transactionSettings = p_transactionSettings;
		}
	}, {
		key: 'getTransactionSettings',
		value: function getTransactionSettings() {
			if ('transactionSettings' in this) {
				return this.transactionSettings;
			}
		}
	}, {
		key: 'setUserFields',
		value: function setUserFields(p_userFields) {
			this.userFields = p_userFields;
		}
	}, {
		key: 'getUserFields',
		value: function getUserFields() {
			if ('userFields' in this) {
				return this.userFields;
			}
		}
	}, {
		key: 'setSurcharge',
		value: function setSurcharge(p_surcharge) {
			this.surcharge = p_surcharge;
		}
	}, {
		key: 'getSurcharge',
		value: function getSurcharge() {
			if ('surcharge' in this) {
				return this.surcharge;
			}
		}
	}, {
		key: 'setMerchantDescriptor',
		value: function setMerchantDescriptor(p_merchantDescriptor) {
			this.merchantDescriptor = p_merchantDescriptor;
		}
	}, {
		key: 'getMerchantDescriptor',
		value: function getMerchantDescriptor() {
			if ('merchantDescriptor' in this) {
				return this.merchantDescriptor;
			}
		}
	}, {
		key: 'setSubMerchant',
		value: function setSubMerchant(p_subMerchant) {
			this.subMerchant = p_subMerchant;
		}
	}, {
		key: 'getSubMerchant',
		value: function getSubMerchant() {
			if ('subMerchant' in this) {
				return this.subMerchant;
			}
		}
	}, {
		key: 'setTip',
		value: function setTip(p_tip) {
			this.tip = p_tip;
		}
	}, {
		key: 'getTip',
		value: function getTip() {
			if ('tip' in this) {
				return this.tip;
			}
		}
	}]);

	return TransactionRequestType;
}();

module.exports.TransactionRequestType = TransactionRequestType;

var TransactionResponse = function () {
	function TransactionResponse(obj) {
		_classCallCheck(this, TransactionResponse);

		logger.debug('Enter TransactionResponse constructor');
		if (arguments.length == 1) {
			if ('responseCode' in obj && obj.responseCode != null) {
				this.setResponseCode(obj.responseCode);
			}
			if ('rawResponseCode' in obj && obj.rawResponseCode != null) {
				this.setRawResponseCode(obj.rawResponseCode);
			}
			if ('authCode' in obj && obj.authCode != null) {
				this.setAuthCode(obj.authCode);
			}
			if ('avsResultCode' in obj && obj.avsResultCode != null) {
				this.setAvsResultCode(obj.avsResultCode);
			}
			if ('cvvResultCode' in obj && obj.cvvResultCode != null) {
				this.setCvvResultCode(obj.cvvResultCode);
			}
			if ('cavvResultCode' in obj && obj.cavvResultCode != null) {
				this.setCavvResultCode(obj.cavvResultCode);
			}
			if ('transId' in obj && obj.transId != null) {
				this.setTransId(obj.transId);
			}
			if ('refTransID' in obj && obj.refTransID != null) {
				this.setRefTransID(obj.refTransID);
			}
			if ('transHash' in obj && obj.transHash != null) {
				this.setTransHash(obj.transHash);
			}
			if ('testRequest' in obj && obj.testRequest != null) {
				this.setTestRequest(obj.testRequest);
			}
			if ('accountNumber' in obj && obj.accountNumber != null) {
				this.setAccountNumber(obj.accountNumber);
			}
			if ('entryMode' in obj && obj.entryMode != null) {
				this.setEntryMode(obj.entryMode);
			}
			if ('accountType' in obj && obj.accountType != null) {
				this.setAccountType(obj.accountType);
			}
			if ('splitTenderId' in obj && obj.splitTenderId != null) {
				this.setSplitTenderId(obj.splitTenderId);
			}
			if ('prePaidCard' in obj && obj.prePaidCard != null) {
				this.setPrePaidCard(new TransactionResponse.PrePaidCard(obj.prePaidCard));
			}
			if ('messages' in obj && obj.messages != null) {
				this.setMessages(new TransactionResponse.Messages(obj.messages));
			}
			if ('errors' in obj && obj.errors != null) {
				this.setErrors(new TransactionResponse.Errors(obj.errors));
			}
			if ('splitTenderPayments' in obj && obj.splitTenderPayments != null) {
				this.setSplitTenderPayments(new TransactionResponse.SplitTenderPayments(obj.splitTenderPayments));
			}
			if ('userFields' in obj && obj.userFields != null) {
				this.setUserFields(new TransactionResponse.UserFields(obj.userFields));
			}
			if ('shipTo' in obj && obj.shipTo != null) {
				this.setShipTo(new NameAndAddressType(obj.shipTo));
			}
			if ('secureAcceptance' in obj && obj.secureAcceptance != null) {
				this.setSecureAcceptance(new TransactionResponse.SecureAcceptance(obj.secureAcceptance));
			}
			if ('emvResponse' in obj && obj.emvResponse != null) {
				this.setEmvResponse(new TransactionResponse.EmvResponse(obj.emvResponse));
			}
			if ('transHashSha2' in obj && obj.transHashSha2 != null) {
				this.setTransHashSha2(obj.transHashSha2);
			}
			if ('profile' in obj && obj.profile != null) {
				this.setProfile(new CustomerProfileIdType(obj.profile));
			}
		} else {
			this.setResponseCode(null);
			this.setRawResponseCode(null);
			this.setAuthCode(null);
			this.setAvsResultCode(null);
			this.setCvvResultCode(null);
			this.setCavvResultCode(null);
			this.setTransId(null);
			this.setRefTransID(null);
			this.setTransHash(null);
			this.setTestRequest(null);
			this.setAccountNumber(null);
			this.setEntryMode(null);
			this.setAccountType(null);
			this.setSplitTenderId(null);
			this.setPrePaidCard(null);
			this.setMessages(null);
			this.setErrors(null);
			this.setSplitTenderPayments(null);
			this.setUserFields(null);
			this.setShipTo(null);
			this.setSecureAcceptance(null);
			this.setEmvResponse(null);
			this.setTransHashSha2(null);
			this.setProfile(null);
		}
		logger.debug('Exit TransactionResponse constructor');
	}

	_createClass(TransactionResponse, [{
		key: 'setResponseCode',
		value: function setResponseCode(p_responseCode) {
			this.responseCode = p_responseCode;
		}
	}, {
		key: 'getResponseCode',
		value: function getResponseCode() {
			if ('responseCode' in this) {
				return this.responseCode;
			}
		}
	}, {
		key: 'setRawResponseCode',
		value: function setRawResponseCode(p_rawResponseCode) {
			this.rawResponseCode = p_rawResponseCode;
		}
	}, {
		key: 'getRawResponseCode',
		value: function getRawResponseCode() {
			if ('rawResponseCode' in this) {
				return this.rawResponseCode;
			}
		}
	}, {
		key: 'setAuthCode',
		value: function setAuthCode(p_authCode) {
			this.authCode = p_authCode;
		}
	}, {
		key: 'getAuthCode',
		value: function getAuthCode() {
			if ('authCode' in this) {
				return this.authCode;
			}
		}
	}, {
		key: 'setAvsResultCode',
		value: function setAvsResultCode(p_avsResultCode) {
			this.avsResultCode = p_avsResultCode;
		}
	}, {
		key: 'getAvsResultCode',
		value: function getAvsResultCode() {
			if ('avsResultCode' in this) {
				return this.avsResultCode;
			}
		}
	}, {
		key: 'setCvvResultCode',
		value: function setCvvResultCode(p_cvvResultCode) {
			this.cvvResultCode = p_cvvResultCode;
		}
	}, {
		key: 'getCvvResultCode',
		value: function getCvvResultCode() {
			if ('cvvResultCode' in this) {
				return this.cvvResultCode;
			}
		}
	}, {
		key: 'setCavvResultCode',
		value: function setCavvResultCode(p_cavvResultCode) {
			this.cavvResultCode = p_cavvResultCode;
		}
	}, {
		key: 'getCavvResultCode',
		value: function getCavvResultCode() {
			if ('cavvResultCode' in this) {
				return this.cavvResultCode;
			}
		}
	}, {
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setRefTransID',
		value: function setRefTransID(p_refTransID) {
			this.refTransID = p_refTransID;
		}
	}, {
		key: 'getRefTransID',
		value: function getRefTransID() {
			if ('refTransID' in this) {
				return this.refTransID;
			}
		}
	}, {
		key: 'setTransHash',
		value: function setTransHash(p_transHash) {
			this.transHash = p_transHash;
		}
	}, {
		key: 'getTransHash',
		value: function getTransHash() {
			if ('transHash' in this) {
				return this.transHash;
			}
		}
	}, {
		key: 'setTestRequest',
		value: function setTestRequest(p_testRequest) {
			this.testRequest = p_testRequest;
		}
	}, {
		key: 'getTestRequest',
		value: function getTestRequest() {
			if ('testRequest' in this) {
				return this.testRequest;
			}
		}
	}, {
		key: 'setAccountNumber',
		value: function setAccountNumber(p_accountNumber) {
			this.accountNumber = p_accountNumber;
		}
	}, {
		key: 'getAccountNumber',
		value: function getAccountNumber() {
			if ('accountNumber' in this) {
				return this.accountNumber;
			}
		}
	}, {
		key: 'setEntryMode',
		value: function setEntryMode(p_entryMode) {
			this.entryMode = p_entryMode;
		}
	}, {
		key: 'getEntryMode',
		value: function getEntryMode() {
			if ('entryMode' in this) {
				return this.entryMode;
			}
		}
	}, {
		key: 'setAccountType',
		value: function setAccountType(p_accountType) {
			this.accountType = p_accountType;
		}
	}, {
		key: 'getAccountType',
		value: function getAccountType() {
			if ('accountType' in this) {
				return this.accountType;
			}
		}
	}, {
		key: 'setSplitTenderId',
		value: function setSplitTenderId(p_splitTenderId) {
			this.splitTenderId = p_splitTenderId;
		}
	}, {
		key: 'getSplitTenderId',
		value: function getSplitTenderId() {
			if ('splitTenderId' in this) {
				return this.splitTenderId;
			}
		}
	}, {
		key: 'setPrePaidCard',
		value: function setPrePaidCard(p_prePaidCard) {
			this.prePaidCard = p_prePaidCard;
		}
	}, {
		key: 'getPrePaidCard',
		value: function getPrePaidCard() {
			if ('prePaidCard' in this) {
				return this.prePaidCard;
			}
		}
	}, {
		key: 'setMessages',
		value: function setMessages(p_messages) {
			this.messages = p_messages;
		}
	}, {
		key: 'getMessages',
		value: function getMessages() {
			if ('messages' in this) {
				return this.messages;
			}
		}
	}, {
		key: 'setErrors',
		value: function setErrors(p_errors) {
			this.errors = p_errors;
		}
	}, {
		key: 'getErrors',
		value: function getErrors() {
			if ('errors' in this) {
				return this.errors;
			}
		}
	}, {
		key: 'setSplitTenderPayments',
		value: function setSplitTenderPayments(p_splitTenderPayments) {
			this.splitTenderPayments = p_splitTenderPayments;
		}
	}, {
		key: 'getSplitTenderPayments',
		value: function getSplitTenderPayments() {
			if ('splitTenderPayments' in this) {
				return this.splitTenderPayments;
			}
		}
	}, {
		key: 'setUserFields',
		value: function setUserFields(p_userFields) {
			this.userFields = p_userFields;
		}
	}, {
		key: 'getUserFields',
		value: function getUserFields() {
			if ('userFields' in this) {
				return this.userFields;
			}
		}
	}, {
		key: 'setShipTo',
		value: function setShipTo(p_shipTo) {
			this.shipTo = p_shipTo;
		}
	}, {
		key: 'getShipTo',
		value: function getShipTo() {
			if ('shipTo' in this) {
				return this.shipTo;
			}
		}
	}, {
		key: 'setSecureAcceptance',
		value: function setSecureAcceptance(p_secureAcceptance) {
			this.secureAcceptance = p_secureAcceptance;
		}
	}, {
		key: 'getSecureAcceptance',
		value: function getSecureAcceptance() {
			if ('secureAcceptance' in this) {
				return this.secureAcceptance;
			}
		}
	}, {
		key: 'setEmvResponse',
		value: function setEmvResponse(p_emvResponse) {
			this.emvResponse = p_emvResponse;
		}
	}, {
		key: 'getEmvResponse',
		value: function getEmvResponse() {
			if ('emvResponse' in this) {
				return this.emvResponse;
			}
		}
	}, {
		key: 'setTransHashSha2',
		value: function setTransHashSha2(p_transHashSha2) {
			this.transHashSha2 = p_transHashSha2;
		}
	}, {
		key: 'getTransHashSha2',
		value: function getTransHashSha2() {
			if ('transHashSha2' in this) {
				return this.transHashSha2;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}]);

	return TransactionResponse;
}();

module.exports.TransactionResponse = TransactionResponse;

var TransactionSummaryType = function () {
	function TransactionSummaryType(obj) {
		_classCallCheck(this, TransactionSummaryType);

		logger.debug('Enter TransactionSummaryType constructor');
		if (arguments.length == 1) {
			if ('transId' in obj && obj.transId != null) {
				this.setTransId(obj.transId);
			}
			if ('submitTimeUTC' in obj && obj.submitTimeUTC != null) {
				this.setSubmitTimeUTC(obj.submitTimeUTC);
			}
			if ('submitTimeLocal' in obj && obj.submitTimeLocal != null) {
				this.setSubmitTimeLocal(obj.submitTimeLocal);
			}
			if ('transactionStatus' in obj && obj.transactionStatus != null) {
				this.setTransactionStatus(obj.transactionStatus);
			}
			if ('invoiceNumber' in obj && obj.invoiceNumber != null) {
				this.setInvoiceNumber(obj.invoiceNumber);
			}
			if ('firstName' in obj && obj.firstName != null) {
				this.setFirstName(obj.firstName);
			}
			if ('lastName' in obj && obj.lastName != null) {
				this.setLastName(obj.lastName);
			}
			if ('accountType' in obj && obj.accountType != null) {
				this.setAccountType(obj.accountType);
			}
			if ('accountNumber' in obj && obj.accountNumber != null) {
				this.setAccountNumber(obj.accountNumber);
			}
			if ('settleAmount' in obj && obj.settleAmount != null) {
				this.setSettleAmount(obj.settleAmount);
			}
			if ('marketType' in obj && obj.marketType != null) {
				this.setMarketType(obj.marketType);
			}
			if ('product' in obj && obj.product != null) {
				this.setProduct(obj.product);
			}
			if ('mobileDeviceId' in obj && obj.mobileDeviceId != null) {
				this.setMobileDeviceId(obj.mobileDeviceId);
			}
			if ('subscription' in obj && obj.subscription != null) {
				this.setSubscription(new SubscriptionPaymentType(obj.subscription));
			}
			if ('hasReturnedItems' in obj && obj.hasReturnedItems != null) {
				this.setHasReturnedItems(obj.hasReturnedItems);
			}
			if ('fraudInformation' in obj && obj.fraudInformation != null) {
				this.setFraudInformation(new FraudInformationType(obj.fraudInformation));
			}
			if ('profile' in obj && obj.profile != null) {
				this.setProfile(new CustomerProfileIdType(obj.profile));
			}
		} else {
			this.setTransId(null);
			this.setSubmitTimeUTC(null);
			this.setSubmitTimeLocal(null);
			this.setTransactionStatus(null);
			this.setInvoiceNumber(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setAccountType(null);
			this.setAccountNumber(null);
			this.setSettleAmount(null);
			this.setMarketType(null);
			this.setProduct(null);
			this.setMobileDeviceId(null);
			this.setSubscription(null);
			this.setHasReturnedItems(null);
			this.setFraudInformation(null);
			this.setProfile(null);
		}
		logger.debug('Exit TransactionSummaryType constructor');
	}

	_createClass(TransactionSummaryType, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setSubmitTimeUTC',
		value: function setSubmitTimeUTC(p_submitTimeUTC) {
			this.submitTimeUTC = p_submitTimeUTC;
		}
	}, {
		key: 'getSubmitTimeUTC',
		value: function getSubmitTimeUTC() {
			if ('submitTimeUTC' in this) {
				return this.submitTimeUTC;
			}
		}
	}, {
		key: 'setSubmitTimeLocal',
		value: function setSubmitTimeLocal(p_submitTimeLocal) {
			this.submitTimeLocal = p_submitTimeLocal;
		}
	}, {
		key: 'getSubmitTimeLocal',
		value: function getSubmitTimeLocal() {
			if ('submitTimeLocal' in this) {
				return this.submitTimeLocal;
			}
		}
	}, {
		key: 'setTransactionStatus',
		value: function setTransactionStatus(p_transactionStatus) {
			this.transactionStatus = p_transactionStatus;
		}
	}, {
		key: 'getTransactionStatus',
		value: function getTransactionStatus() {
			if ('transactionStatus' in this) {
				return this.transactionStatus;
			}
		}
	}, {
		key: 'setInvoiceNumber',
		value: function setInvoiceNumber(p_invoiceNumber) {
			this.invoiceNumber = p_invoiceNumber;
		}
	}, {
		key: 'getInvoiceNumber',
		value: function getInvoiceNumber() {
			if ('invoiceNumber' in this) {
				return this.invoiceNumber;
			}
		}
	}, {
		key: 'setFirstName',
		value: function setFirstName(p_firstName) {
			this.firstName = p_firstName;
		}
	}, {
		key: 'getFirstName',
		value: function getFirstName() {
			if ('firstName' in this) {
				return this.firstName;
			}
		}
	}, {
		key: 'setLastName',
		value: function setLastName(p_lastName) {
			this.lastName = p_lastName;
		}
	}, {
		key: 'getLastName',
		value: function getLastName() {
			if ('lastName' in this) {
				return this.lastName;
			}
		}
	}, {
		key: 'setAccountType',
		value: function setAccountType(p_accountType) {
			this.accountType = p_accountType;
		}
	}, {
		key: 'getAccountType',
		value: function getAccountType() {
			if ('accountType' in this) {
				return this.accountType;
			}
		}
	}, {
		key: 'setAccountNumber',
		value: function setAccountNumber(p_accountNumber) {
			this.accountNumber = p_accountNumber;
		}
	}, {
		key: 'getAccountNumber',
		value: function getAccountNumber() {
			if ('accountNumber' in this) {
				return this.accountNumber;
			}
		}
	}, {
		key: 'setSettleAmount',
		value: function setSettleAmount(p_settleAmount) {
			this.settleAmount = p_settleAmount;
		}
	}, {
		key: 'getSettleAmount',
		value: function getSettleAmount() {
			if ('settleAmount' in this) {
				return this.settleAmount;
			}
		}
	}, {
		key: 'setMarketType',
		value: function setMarketType(p_marketType) {
			this.marketType = p_marketType;
		}
	}, {
		key: 'getMarketType',
		value: function getMarketType() {
			if ('marketType' in this) {
				return this.marketType;
			}
		}
	}, {
		key: 'setProduct',
		value: function setProduct(p_product) {
			this.product = p_product;
		}
	}, {
		key: 'getProduct',
		value: function getProduct() {
			if ('product' in this) {
				return this.product;
			}
		}
	}, {
		key: 'setMobileDeviceId',
		value: function setMobileDeviceId(p_mobileDeviceId) {
			this.mobileDeviceId = p_mobileDeviceId;
		}
	}, {
		key: 'getMobileDeviceId',
		value: function getMobileDeviceId() {
			if ('mobileDeviceId' in this) {
				return this.mobileDeviceId;
			}
		}
	}, {
		key: 'setSubscription',
		value: function setSubscription(p_subscription) {
			this.subscription = p_subscription;
		}
	}, {
		key: 'getSubscription',
		value: function getSubscription() {
			if ('subscription' in this) {
				return this.subscription;
			}
		}
	}, {
		key: 'setHasReturnedItems',
		value: function setHasReturnedItems(p_hasReturnedItems) {
			this.hasReturnedItems = p_hasReturnedItems;
		}
	}, {
		key: 'getHasReturnedItems',
		value: function getHasReturnedItems() {
			if ('hasReturnedItems' in this) {
				return this.hasReturnedItems;
			}
		}
	}, {
		key: 'setFraudInformation',
		value: function setFraudInformation(p_fraudInformation) {
			this.fraudInformation = p_fraudInformation;
		}
	}, {
		key: 'getFraudInformation',
		value: function getFraudInformation() {
			if ('fraudInformation' in this) {
				return this.fraudInformation;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}]);

	return TransactionSummaryType;
}();

module.exports.TransactionSummaryType = TransactionSummaryType;

var UserField = function () {
	function UserField(obj) {
		_classCallCheck(this, UserField);

		logger.debug('Enter UserField constructor');
		if (arguments.length == 1) {
			if ('name' in obj && obj.name != null) {
				this.setName(obj.name);
			}
			if ('value' in obj && obj.value != null) {
				this.setValue(obj.value);
			}
		} else {
			this.setName(null);
			this.setValue(null);
		}
		logger.debug('Exit UserField constructor');
	}

	_createClass(UserField, [{
		key: 'setName',
		value: function setName(p_name) {
			this.name = p_name;
		}
	}, {
		key: 'getName',
		value: function getName() {
			if ('name' in this) {
				return this.name;
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(p_value) {
			this.value = p_value;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			if ('value' in this) {
				return this.value;
			}
		}
	}]);

	return UserField;
}();

module.exports.UserField = UserField;

var WebCheckOutDataType = function () {
	function WebCheckOutDataType(obj) {
		_classCallCheck(this, WebCheckOutDataType);

		logger.debug('Enter WebCheckOutDataType constructor');
		if (arguments.length == 1) {
			if ('type' in obj && obj.type != null) {
				this.setType(obj.type);
			}
			if ('id' in obj && obj.id != null) {
				this.setId(obj.id);
			}
			if ('token' in obj && obj.token != null) {
				this.setToken(new WebCheckOutDataType.Token(obj.token));
			}
		} else {
			this.setType(null);
			this.setId(null);
			this.setToken(null);
		}
		logger.debug('Exit WebCheckOutDataType constructor');
	}

	_createClass(WebCheckOutDataType, [{
		key: 'setType',
		value: function setType(p_type) {
			this.type = p_type;
		}
	}, {
		key: 'getType',
		value: function getType() {
			if ('type' in this) {
				return this.type;
			}
		}
	}, {
		key: 'setId',
		value: function setId(p_id) {
			this.id = p_id;
		}
	}, {
		key: 'getId',
		value: function getId() {
			if ('id' in this) {
				return this.id;
			}
		}
	}, {
		key: 'setToken',
		value: function setToken(p_token) {
			this.token = p_token;
		}
	}, {
		key: 'getToken',
		value: function getToken() {
			if ('token' in this) {
				return this.token;
			}
		}
	}]);

	return WebCheckOutDataType;
}();

module.exports.WebCheckOutDataType = WebCheckOutDataType;

KeyManagementScheme.DUKPT = function () {
	function _class(obj) {
		_classCallCheck(this, _class);

		logger.debug('Enter KeyManagementScheme.DUKPT constructor');
		if (arguments.length == 1) {
			if ('Operation' in obj && obj.Operation != null) {
				this.setOperation(obj.Operation);
			}
			if ('Mode' in obj && obj.Mode != null) {
				this.setMode(new KeyManagementScheme.DUKPT.Mode(obj.Mode));
			}
			if ('DeviceInfo' in obj && obj.DeviceInfo != null) {
				this.setDeviceInfo(new KeyManagementScheme.DUKPT.DeviceInfo(obj.DeviceInfo));
			}
			if ('EncryptedData' in obj && obj.EncryptedData != null) {
				this.setEncryptedData(new KeyManagementScheme.DUKPT.EncryptedData(obj.EncryptedData));
			}
		} else {
			this.setOperation(null);
			this.setMode(null);
			this.setDeviceInfo(null);
			this.setEncryptedData(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT constructor');
	}

	_createClass(_class, [{
		key: 'setOperation',
		value: function setOperation(p_Operation) {
			this.Operation = p_Operation;
		}
	}, {
		key: 'getOperation',
		value: function getOperation() {
			if ('Operation' in this) {
				return this.Operation;
			}
		}
	}, {
		key: 'setMode',
		value: function setMode(p_Mode) {
			this.Mode = p_Mode;
		}
	}, {
		key: 'getMode',
		value: function getMode() {
			if ('Mode' in this) {
				return this.Mode;
			}
		}
	}, {
		key: 'setDeviceInfo',
		value: function setDeviceInfo(p_DeviceInfo) {
			this.DeviceInfo = p_DeviceInfo;
		}
	}, {
		key: 'getDeviceInfo',
		value: function getDeviceInfo() {
			if ('DeviceInfo' in this) {
				return this.DeviceInfo;
			}
		}
	}, {
		key: 'setEncryptedData',
		value: function setEncryptedData(p_EncryptedData) {
			this.EncryptedData = p_EncryptedData;
		}
	}, {
		key: 'getEncryptedData',
		value: function getEncryptedData() {
			if ('EncryptedData' in this) {
				return this.EncryptedData;
			}
		}
	}]);

	return _class;
}();

module.exports.KeyManagementScheme.DUKPT = KeyManagementScheme.DUKPT;

MessagesType.Message = function () {
	function _class2(obj) {
		_classCallCheck(this, _class2);

		logger.debug('Enter MessagesType.Message constructor');
		if (arguments.length == 1) {
			if ('code' in obj && obj.code != null) {
				this.setCode(obj.code);
			}
			if ('text' in obj && obj.text != null) {
				this.setText(obj.text);
			}
		} else {
			this.setCode(null);
			this.setText(null);
		}
		logger.debug('Exit MessagesType.Message constructor');
	}

	_createClass(_class2, [{
		key: 'setCode',
		value: function setCode(p_code) {
			this.code = p_code;
		}
	}, {
		key: 'getCode',
		value: function getCode() {
			if ('code' in this) {
				return this.code;
			}
		}
	}, {
		key: 'setText',
		value: function setText(p_text) {
			this.text = p_text;
		}
	}, {
		key: 'getText',
		value: function getText() {
			if ('text' in this) {
				return this.text;
			}
		}
	}]);

	return _class2;
}();

module.exports.MessagesType.Message = MessagesType.Message;

PaymentScheduleType.Interval = function () {
	function _class3(obj) {
		_classCallCheck(this, _class3);

		logger.debug('Enter PaymentScheduleType.Interval constructor');
		if (arguments.length == 1) {
			if ('length' in obj && obj.length != null) {
				this.setLength(obj.length);
			}
			if ('unit' in obj && obj.unit != null) {
				this.setUnit(obj.unit);
			}
		} else {
			this.setLength(null);
			this.setUnit(null);
		}
		logger.debug('Exit PaymentScheduleType.Interval constructor');
	}

	_createClass(_class3, [{
		key: 'setLength',
		value: function setLength(p_length) {
			this.length = p_length;
		}
	}, {
		key: 'getLength',
		value: function getLength() {
			if ('length' in this) {
				return this.length;
			}
		}
	}, {
		key: 'setUnit',
		value: function setUnit(p_unit) {
			this.unit = p_unit;
		}
	}, {
		key: 'getUnit',
		value: function getUnit() {
			if ('unit' in this) {
				return this.unit;
			}
		}
	}]);

	return _class3;
}();

module.exports.PaymentScheduleType.Interval = PaymentScheduleType.Interval;

TransactionDetailsType.EmvDetails = function () {
	function _class4(obj) {
		_classCallCheck(this, _class4);

		logger.debug('Enter TransactionDetailsType.EmvDetails constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var tagList = [];
				obj.forEach(function (item) {
					tagList.push(new TransactionDetailsType.EmvDetails.Tag(item));
				});
				this.setTag(tagList);
			}
		} else {
			this.setTag(null);
		}
		logger.debug('Exit TransactionDetailsType.EmvDetails constructor');
	}

	_createClass(_class4, [{
		key: 'setTag',
		value: function setTag(p_tag) {
			this.tag = p_tag;
		}
	}, {
		key: 'getTag',
		value: function getTag() {
			if ('tag' in this) {
				return this.tag;
			}
		}
	}]);

	return _class4;
}();

module.exports.TransactionDetailsType.EmvDetails = TransactionDetailsType.EmvDetails;

TransactionRequestType.UserFields = function () {
	function _class5(obj) {
		_classCallCheck(this, _class5);

		logger.debug('Enter TransactionRequestType.UserFields constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var userFieldList = [];
				obj.forEach(function (item) {
					userFieldList.push(new UserField(item));
				});
				this.setUserField(userFieldList);
			}
		} else {
			this.setUserField(null);
		}
		logger.debug('Exit TransactionRequestType.UserFields constructor');
	}

	_createClass(_class5, [{
		key: 'setUserField',
		value: function setUserField(p_userField) {
			this.userField = p_userField;
		}
	}, {
		key: 'getUserField',
		value: function getUserField() {
			if ('userField' in this) {
				return this.userField;
			}
		}
	}]);

	return _class5;
}();

module.exports.TransactionRequestType.UserFields = TransactionRequestType.UserFields;

TransactionResponse.EmvResponse = function () {
	function _class6(obj) {
		_classCallCheck(this, _class6);

		logger.debug('Enter TransactionResponse.EmvResponse constructor');
		if (arguments.length == 1) {
			if ('tlvData' in obj && obj.tlvData != null) {
				this.setTlvData(obj.tlvData);
			}
			if ('tags' in obj && obj.tags != null) {
				this.setTags(new TransactionResponse.EmvResponse.Tags(obj.tags));
			}
		} else {
			this.setTlvData(null);
			this.setTags(null);
		}
		logger.debug('Exit TransactionResponse.EmvResponse constructor');
	}

	_createClass(_class6, [{
		key: 'setTlvData',
		value: function setTlvData(p_tlvData) {
			this.tlvData = p_tlvData;
		}
	}, {
		key: 'getTlvData',
		value: function getTlvData() {
			if ('tlvData' in this) {
				return this.tlvData;
			}
		}
	}, {
		key: 'setTags',
		value: function setTags(p_tags) {
			this.tags = p_tags;
		}
	}, {
		key: 'getTags',
		value: function getTags() {
			if ('tags' in this) {
				return this.tags;
			}
		}
	}]);

	return _class6;
}();

module.exports.TransactionResponse.EmvResponse = TransactionResponse.EmvResponse;

TransactionResponse.Errors = function () {
	function _class7(obj) {
		_classCallCheck(this, _class7);

		logger.debug('Enter TransactionResponse.Errors constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var errorList = [];
				obj.forEach(function (item) {
					errorList.push(new TransactionResponse.Errors.Error(item));
				});
				this.setError(errorList);
			}
		} else {
			this.setError(null);
		}
		logger.debug('Exit TransactionResponse.Errors constructor');
	}

	_createClass(_class7, [{
		key: 'setError',
		value: function setError(p_error) {
			this.error = p_error;
		}
	}, {
		key: 'getError',
		value: function getError() {
			if ('error' in this) {
				return this.error;
			}
		}
	}]);

	return _class7;
}();

module.exports.TransactionResponse.Errors = TransactionResponse.Errors;

TransactionResponse.Messages = function () {
	function _class8(obj) {
		_classCallCheck(this, _class8);

		logger.debug('Enter TransactionResponse.Messages constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var messageList = [];
				obj.forEach(function (item) {
					messageList.push(new TransactionResponse.Messages.Message(item));
				});
				this.setMessage(messageList);
			}
		} else {
			this.setMessage(null);
		}
		logger.debug('Exit TransactionResponse.Messages constructor');
	}

	_createClass(_class8, [{
		key: 'setMessage',
		value: function setMessage(p_message) {
			this.message = p_message;
		}
	}, {
		key: 'getMessage',
		value: function getMessage() {
			if ('message' in this) {
				return this.message;
			}
		}
	}]);

	return _class8;
}();

module.exports.TransactionResponse.Messages = TransactionResponse.Messages;

TransactionResponse.PrePaidCard = function () {
	function _class9(obj) {
		_classCallCheck(this, _class9);

		logger.debug('Enter TransactionResponse.PrePaidCard constructor');
		if (arguments.length == 1) {
			if ('requestedAmount' in obj && obj.requestedAmount != null) {
				this.setRequestedAmount(obj.requestedAmount);
			}
			if ('approvedAmount' in obj && obj.approvedAmount != null) {
				this.setApprovedAmount(obj.approvedAmount);
			}
			if ('balanceOnCard' in obj && obj.balanceOnCard != null) {
				this.setBalanceOnCard(obj.balanceOnCard);
			}
		} else {
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
		logger.debug('Exit TransactionResponse.PrePaidCard constructor');
	}

	_createClass(_class9, [{
		key: 'setRequestedAmount',
		value: function setRequestedAmount(p_requestedAmount) {
			this.requestedAmount = p_requestedAmount;
		}
	}, {
		key: 'getRequestedAmount',
		value: function getRequestedAmount() {
			if ('requestedAmount' in this) {
				return this.requestedAmount;
			}
		}
	}, {
		key: 'setApprovedAmount',
		value: function setApprovedAmount(p_approvedAmount) {
			this.approvedAmount = p_approvedAmount;
		}
	}, {
		key: 'getApprovedAmount',
		value: function getApprovedAmount() {
			if ('approvedAmount' in this) {
				return this.approvedAmount;
			}
		}
	}, {
		key: 'setBalanceOnCard',
		value: function setBalanceOnCard(p_balanceOnCard) {
			this.balanceOnCard = p_balanceOnCard;
		}
	}, {
		key: 'getBalanceOnCard',
		value: function getBalanceOnCard() {
			if ('balanceOnCard' in this) {
				return this.balanceOnCard;
			}
		}
	}]);

	return _class9;
}();

module.exports.TransactionResponse.PrePaidCard = TransactionResponse.PrePaidCard;

TransactionResponse.SecureAcceptance = function () {
	function _class10(obj) {
		_classCallCheck(this, _class10);

		logger.debug('Enter TransactionResponse.SecureAcceptance constructor');
		if (arguments.length == 1) {
			if ('SecureAcceptanceUrl' in obj && obj.SecureAcceptanceUrl != null) {
				this.setSecureAcceptanceUrl(obj.SecureAcceptanceUrl);
			}
			if ('PayerID' in obj && obj.PayerID != null) {
				this.setPayerID(obj.PayerID);
			}
			if ('PayerEmail' in obj && obj.PayerEmail != null) {
				this.setPayerEmail(obj.PayerEmail);
			}
		} else {
			this.setSecureAcceptanceUrl(null);
			this.setPayerID(null);
			this.setPayerEmail(null);
		}
		logger.debug('Exit TransactionResponse.SecureAcceptance constructor');
	}

	_createClass(_class10, [{
		key: 'setSecureAcceptanceUrl',
		value: function setSecureAcceptanceUrl(p_SecureAcceptanceUrl) {
			this.SecureAcceptanceUrl = p_SecureAcceptanceUrl;
		}
	}, {
		key: 'getSecureAcceptanceUrl',
		value: function getSecureAcceptanceUrl() {
			if ('SecureAcceptanceUrl' in this) {
				return this.SecureAcceptanceUrl;
			}
		}
	}, {
		key: 'setPayerID',
		value: function setPayerID(p_PayerID) {
			this.PayerID = p_PayerID;
		}
	}, {
		key: 'getPayerID',
		value: function getPayerID() {
			if ('PayerID' in this) {
				return this.PayerID;
			}
		}
	}, {
		key: 'setPayerEmail',
		value: function setPayerEmail(p_PayerEmail) {
			this.PayerEmail = p_PayerEmail;
		}
	}, {
		key: 'getPayerEmail',
		value: function getPayerEmail() {
			if ('PayerEmail' in this) {
				return this.PayerEmail;
			}
		}
	}]);

	return _class10;
}();

module.exports.TransactionResponse.SecureAcceptance = TransactionResponse.SecureAcceptance;

TransactionResponse.SplitTenderPayments = function () {
	function _class11(obj) {
		_classCallCheck(this, _class11);

		logger.debug('Enter TransactionResponse.SplitTenderPayments constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var splitTenderPaymentList = [];
				obj.forEach(function (item) {
					splitTenderPaymentList.push(new TransactionResponse.SplitTenderPayments.SplitTenderPayment(item));
				});
				this.setSplitTenderPayment(splitTenderPaymentList);
			}
		} else {
			this.setSplitTenderPayment(null);
		}
		logger.debug('Exit TransactionResponse.SplitTenderPayments constructor');
	}

	_createClass(_class11, [{
		key: 'setSplitTenderPayment',
		value: function setSplitTenderPayment(p_splitTenderPayment) {
			this.splitTenderPayment = p_splitTenderPayment;
		}
	}, {
		key: 'getSplitTenderPayment',
		value: function getSplitTenderPayment() {
			if ('splitTenderPayment' in this) {
				return this.splitTenderPayment;
			}
		}
	}]);

	return _class11;
}();

module.exports.TransactionResponse.SplitTenderPayments = TransactionResponse.SplitTenderPayments;

TransactionResponse.UserFields = function () {
	function _class12(obj) {
		_classCallCheck(this, _class12);

		logger.debug('Enter TransactionResponse.UserFields constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var userFieldList = [];
				obj.forEach(function (item) {
					userFieldList.push(new UserField(item));
				});
				this.setUserField(userFieldList);
			}
		} else {
			this.setUserField(null);
		}
		logger.debug('Exit TransactionResponse.UserFields constructor');
	}

	_createClass(_class12, [{
		key: 'setUserField',
		value: function setUserField(p_userField) {
			this.userField = p_userField;
		}
	}, {
		key: 'getUserField',
		value: function getUserField() {
			if ('userField' in this) {
				return this.userField;
			}
		}
	}]);

	return _class12;
}();

module.exports.TransactionResponse.UserFields = TransactionResponse.UserFields;

WebCheckOutDataType.Token = function () {
	function _class13(obj) {
		_classCallCheck(this, _class13);

		logger.debug('Enter WebCheckOutDataType.Token constructor');
		if (arguments.length == 1) {
			if ('cardNumber' in obj && obj.cardNumber != null) {
				this.setCardNumber(obj.cardNumber);
			}
			if ('expirationDate' in obj && obj.expirationDate != null) {
				this.setExpirationDate(obj.expirationDate);
			}
			if ('cardCode' in obj && obj.cardCode != null) {
				this.setCardCode(obj.cardCode);
			}
			if ('zip' in obj && obj.zip != null) {
				this.setZip(obj.zip);
			}
			if ('fullName' in obj && obj.fullName != null) {
				this.setFullName(obj.fullName);
			}
		} else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardCode(null);
			this.setZip(null);
			this.setFullName(null);
		}
		logger.debug('Exit WebCheckOutDataType.Token constructor');
	}

	_createClass(_class13, [{
		key: 'setCardNumber',
		value: function setCardNumber(p_cardNumber) {
			this.cardNumber = p_cardNumber;
		}
	}, {
		key: 'getCardNumber',
		value: function getCardNumber() {
			if ('cardNumber' in this) {
				return this.cardNumber;
			}
		}
	}, {
		key: 'setExpirationDate',
		value: function setExpirationDate(p_expirationDate) {
			this.expirationDate = p_expirationDate;
		}
	}, {
		key: 'getExpirationDate',
		value: function getExpirationDate() {
			if ('expirationDate' in this) {
				return this.expirationDate;
			}
		}
	}, {
		key: 'setCardCode',
		value: function setCardCode(p_cardCode) {
			this.cardCode = p_cardCode;
		}
	}, {
		key: 'getCardCode',
		value: function getCardCode() {
			if ('cardCode' in this) {
				return this.cardCode;
			}
		}
	}, {
		key: 'setZip',
		value: function setZip(p_zip) {
			this.zip = p_zip;
		}
	}, {
		key: 'getZip',
		value: function getZip() {
			if ('zip' in this) {
				return this.zip;
			}
		}
	}, {
		key: 'setFullName',
		value: function setFullName(p_fullName) {
			this.fullName = p_fullName;
		}
	}, {
		key: 'getFullName',
		value: function getFullName() {
			if ('fullName' in this) {
				return this.fullName;
			}
		}
	}]);

	return _class13;
}();

module.exports.WebCheckOutDataType.Token = WebCheckOutDataType.Token;

KeyManagementScheme.DUKPT.DeviceInfo = function () {
	function _class14(obj) {
		_classCallCheck(this, _class14);

		logger.debug('Enter KeyManagementScheme.DUKPT.DeviceInfo constructor');
		if (arguments.length == 1) {
			if ('Description' in obj && obj.Description != null) {
				this.setDescription(obj.Description);
			}
		} else {
			this.setDescription(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.DeviceInfo constructor');
	}

	_createClass(_class14, [{
		key: 'setDescription',
		value: function setDescription(p_Description) {
			this.Description = p_Description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('Description' in this) {
				return this.Description;
			}
		}
	}]);

	return _class14;
}();

module.exports.KeyManagementScheme.DUKPT.DeviceInfo = KeyManagementScheme.DUKPT.DeviceInfo;

KeyManagementScheme.DUKPT.EncryptedData = function () {
	function _class15(obj) {
		_classCallCheck(this, _class15);

		logger.debug('Enter KeyManagementScheme.DUKPT.EncryptedData constructor');
		if (arguments.length == 1) {
			if ('Value' in obj && obj.Value != null) {
				this.setValue(obj.Value);
			}
		} else {
			this.setValue(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.EncryptedData constructor');
	}

	_createClass(_class15, [{
		key: 'setValue',
		value: function setValue(p_Value) {
			this.Value = p_Value;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			if ('Value' in this) {
				return this.Value;
			}
		}
	}]);

	return _class15;
}();

module.exports.KeyManagementScheme.DUKPT.EncryptedData = KeyManagementScheme.DUKPT.EncryptedData;

KeyManagementScheme.DUKPT.Mode = function () {
	function _class16(obj) {
		_classCallCheck(this, _class16);

		logger.debug('Enter KeyManagementScheme.DUKPT.Mode constructor');
		if (arguments.length == 1) {
			if ('PIN' in obj && obj.PIN != null) {
				this.setPIN(obj.PIN);
			}
			if ('Data' in obj && obj.Data != null) {
				this.setData(obj.Data);
			}
		} else {
			this.setPIN(null);
			this.setData(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.Mode constructor');
	}

	_createClass(_class16, [{
		key: 'setPIN',
		value: function setPIN(p_PIN) {
			this.PIN = p_PIN;
		}
	}, {
		key: 'getPIN',
		value: function getPIN() {
			if ('PIN' in this) {
				return this.PIN;
			}
		}
	}, {
		key: 'setData',
		value: function setData(p_Data) {
			this.Data = p_Data;
		}
	}, {
		key: 'getData',
		value: function getData() {
			if ('Data' in this) {
				return this.Data;
			}
		}
	}]);

	return _class16;
}();

module.exports.KeyManagementScheme.DUKPT.Mode = KeyManagementScheme.DUKPT.Mode;

TransactionDetailsType.EmvDetails.Tag = function () {
	function _class17(obj) {
		_classCallCheck(this, _class17);

		logger.debug('Enter TransactionDetailsType.EmvDetails.Tag constructor');
		if (arguments.length == 1) {
			if ('tagId' in obj && obj.tagId != null) {
				this.setTagId(obj.tagId);
			}
			if ('data' in obj && obj.data != null) {
				this.setData(obj.data);
			}
		} else {
			this.setTagId(null);
			this.setData(null);
		}
		logger.debug('Exit TransactionDetailsType.EmvDetails.Tag constructor');
	}

	_createClass(_class17, [{
		key: 'setTagId',
		value: function setTagId(p_tagId) {
			this.tagId = p_tagId;
		}
	}, {
		key: 'getTagId',
		value: function getTagId() {
			if ('tagId' in this) {
				return this.tagId;
			}
		}
	}, {
		key: 'setData',
		value: function setData(p_data) {
			this.data = p_data;
		}
	}, {
		key: 'getData',
		value: function getData() {
			if ('data' in this) {
				return this.data;
			}
		}
	}]);

	return _class17;
}();

module.exports.TransactionDetailsType.EmvDetails.Tag = TransactionDetailsType.EmvDetails.Tag;

TransactionResponse.EmvResponse.Tags = function () {
	function _class18(obj) {
		_classCallCheck(this, _class18);

		logger.debug('Enter TransactionResponse.EmvResponse.Tags constructor');
		if (arguments.length == 1) {
			if (obj != undefined && obj != null) {
				var tagList = [];
				obj.forEach(function (item) {
					tagList.push(new EmvTag(item));
				});
				this.setTag(tagList);
			}
		} else {
			this.setTag(null);
		}
		logger.debug('Exit TransactionResponse.EmvResponse.Tags constructor');
	}

	_createClass(_class18, [{
		key: 'setTag',
		value: function setTag(p_tag) {
			this.tag = p_tag;
		}
	}, {
		key: 'getTag',
		value: function getTag() {
			if ('tag' in this) {
				return this.tag;
			}
		}
	}]);

	return _class18;
}();

module.exports.TransactionResponse.EmvResponse.Tags = TransactionResponse.EmvResponse.Tags;

TransactionResponse.Errors.Error = function () {
	function _class19(obj) {
		_classCallCheck(this, _class19);

		logger.debug('Enter TransactionResponse.Errors.Error constructor');
		if (arguments.length == 1) {
			if ('errorCode' in obj && obj.errorCode != null) {
				this.setErrorCode(obj.errorCode);
			}
			if ('errorText' in obj && obj.errorText != null) {
				this.setErrorText(obj.errorText);
			}
		} else {
			this.setErrorCode(null);
			this.setErrorText(null);
		}
		logger.debug('Exit TransactionResponse.Errors.Error constructor');
	}

	_createClass(_class19, [{
		key: 'setErrorCode',
		value: function setErrorCode(p_errorCode) {
			this.errorCode = p_errorCode;
		}
	}, {
		key: 'getErrorCode',
		value: function getErrorCode() {
			if ('errorCode' in this) {
				return this.errorCode;
			}
		}
	}, {
		key: 'setErrorText',
		value: function setErrorText(p_errorText) {
			this.errorText = p_errorText;
		}
	}, {
		key: 'getErrorText',
		value: function getErrorText() {
			if ('errorText' in this) {
				return this.errorText;
			}
		}
	}]);

	return _class19;
}();

module.exports.TransactionResponse.Errors.Error = TransactionResponse.Errors.Error;

TransactionResponse.Messages.Message = function () {
	function _class20(obj) {
		_classCallCheck(this, _class20);

		logger.debug('Enter TransactionResponse.Messages.Message constructor');
		if (arguments.length == 1) {
			if ('code' in obj && obj.code != null) {
				this.setCode(obj.code);
			}
			if ('description' in obj && obj.description != null) {
				this.setDescription(obj.description);
			}
		} else {
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit TransactionResponse.Messages.Message constructor');
	}

	_createClass(_class20, [{
		key: 'setCode',
		value: function setCode(p_code) {
			this.code = p_code;
		}
	}, {
		key: 'getCode',
		value: function getCode() {
			if ('code' in this) {
				return this.code;
			}
		}
	}, {
		key: 'setDescription',
		value: function setDescription(p_description) {
			this.description = p_description;
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			if ('description' in this) {
				return this.description;
			}
		}
	}]);

	return _class20;
}();

module.exports.TransactionResponse.Messages.Message = TransactionResponse.Messages.Message;

TransactionResponse.SplitTenderPayments.SplitTenderPayment = function () {
	function _class21(obj) {
		_classCallCheck(this, _class21);

		logger.debug('Enter TransactionResponse.SplitTenderPayments.SplitTenderPayment constructor');
		if (arguments.length == 1) {
			if ('transId' in obj && obj.transId != null) {
				this.setTransId(obj.transId);
			}
			if ('responseCode' in obj && obj.responseCode != null) {
				this.setResponseCode(obj.responseCode);
			}
			if ('responseToCustomer' in obj && obj.responseToCustomer != null) {
				this.setResponseToCustomer(obj.responseToCustomer);
			}
			if ('authCode' in obj && obj.authCode != null) {
				this.setAuthCode(obj.authCode);
			}
			if ('accountNumber' in obj && obj.accountNumber != null) {
				this.setAccountNumber(obj.accountNumber);
			}
			if ('accountType' in obj && obj.accountType != null) {
				this.setAccountType(obj.accountType);
			}
			if ('requestedAmount' in obj && obj.requestedAmount != null) {
				this.setRequestedAmount(obj.requestedAmount);
			}
			if ('approvedAmount' in obj && obj.approvedAmount != null) {
				this.setApprovedAmount(obj.approvedAmount);
			}
			if ('balanceOnCard' in obj && obj.balanceOnCard != null) {
				this.setBalanceOnCard(obj.balanceOnCard);
			}
		} else {
			this.setTransId(null);
			this.setResponseCode(null);
			this.setResponseToCustomer(null);
			this.setAuthCode(null);
			this.setAccountNumber(null);
			this.setAccountType(null);
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
		logger.debug('Exit TransactionResponse.SplitTenderPayments.SplitTenderPayment constructor');
	}

	_createClass(_class21, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setResponseCode',
		value: function setResponseCode(p_responseCode) {
			this.responseCode = p_responseCode;
		}
	}, {
		key: 'getResponseCode',
		value: function getResponseCode() {
			if ('responseCode' in this) {
				return this.responseCode;
			}
		}
	}, {
		key: 'setResponseToCustomer',
		value: function setResponseToCustomer(p_responseToCustomer) {
			this.responseToCustomer = p_responseToCustomer;
		}
	}, {
		key: 'getResponseToCustomer',
		value: function getResponseToCustomer() {
			if ('responseToCustomer' in this) {
				return this.responseToCustomer;
			}
		}
	}, {
		key: 'setAuthCode',
		value: function setAuthCode(p_authCode) {
			this.authCode = p_authCode;
		}
	}, {
		key: 'getAuthCode',
		value: function getAuthCode() {
			if ('authCode' in this) {
				return this.authCode;
			}
		}
	}, {
		key: 'setAccountNumber',
		value: function setAccountNumber(p_accountNumber) {
			this.accountNumber = p_accountNumber;
		}
	}, {
		key: 'getAccountNumber',
		value: function getAccountNumber() {
			if ('accountNumber' in this) {
				return this.accountNumber;
			}
		}
	}, {
		key: 'setAccountType',
		value: function setAccountType(p_accountType) {
			this.accountType = p_accountType;
		}
	}, {
		key: 'getAccountType',
		value: function getAccountType() {
			if ('accountType' in this) {
				return this.accountType;
			}
		}
	}, {
		key: 'setRequestedAmount',
		value: function setRequestedAmount(p_requestedAmount) {
			this.requestedAmount = p_requestedAmount;
		}
	}, {
		key: 'getRequestedAmount',
		value: function getRequestedAmount() {
			if ('requestedAmount' in this) {
				return this.requestedAmount;
			}
		}
	}, {
		key: 'setApprovedAmount',
		value: function setApprovedAmount(p_approvedAmount) {
			this.approvedAmount = p_approvedAmount;
		}
	}, {
		key: 'getApprovedAmount',
		value: function getApprovedAmount() {
			if ('approvedAmount' in this) {
				return this.approvedAmount;
			}
		}
	}, {
		key: 'setBalanceOnCard',
		value: function setBalanceOnCard(p_balanceOnCard) {
			this.balanceOnCard = p_balanceOnCard;
		}
	}, {
		key: 'getBalanceOnCard',
		value: function getBalanceOnCard() {
			if ('balanceOnCard' in this) {
				return this.balanceOnCard;
			}
		}
	}]);

	return _class21;
}();

module.exports.TransactionResponse.SplitTenderPayments.SplitTenderPayment = TransactionResponse.SplitTenderPayments.SplitTenderPayment;

var ARBCancelSubscriptionRequest = function (_ANetApiRequest) {
	_inherits(ARBCancelSubscriptionRequest, _ANetApiRequest);

	_createClass(ARBCancelSubscriptionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBCancelSubscriptionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBCancelSubscriptionRequest': this };
			logger.debug('Exit ARBCancelSubscriptionRequest getJSON');
			return obj;
		}
	}]);

	function ARBCancelSubscriptionRequest(obj) {
		_classCallCheck(this, ARBCancelSubscriptionRequest);

		logger.debug('Enter ARBCancelSubscriptionRequest constructor');
		if (arguments.length == 1) {
			var _this = _possibleConstructorReturn(this, (ARBCancelSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBCancelSubscriptionRequest)).call(this, obj));

			if ('subscriptionId' in obj && obj.subscriptionId != null) {
				_this.setSubscriptionId(obj.subscriptionId);
			}
		} else {
			var _this = _possibleConstructorReturn(this, (ARBCancelSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBCancelSubscriptionRequest)).call(this));

			_this.setSubscriptionId(null);
		}
		logger.debug('Exit ARBCancelSubscriptionRequest constructor');
		return _possibleConstructorReturn(_this);
	}

	_createClass(ARBCancelSubscriptionRequest, [{
		key: 'setSubscriptionId',
		value: function setSubscriptionId(p_subscriptionId) {
			this.subscriptionId = p_subscriptionId;
		}
	}, {
		key: 'getSubscriptionId',
		value: function getSubscriptionId() {
			if ('subscriptionId' in this) {
				return this.subscriptionId;
			}
		}
	}]);

	return ARBCancelSubscriptionRequest;
}(ANetApiRequest);

module.exports.ARBCancelSubscriptionRequest = ARBCancelSubscriptionRequest;

var ARBCancelSubscriptionResponse = function (_ANetApiResponse) {
	_inherits(ARBCancelSubscriptionResponse, _ANetApiResponse);

	_createClass(ARBCancelSubscriptionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBCancelSubscriptionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBCancelSubscriptionResponse': this };
			logger.debug('Exit ARBCancelSubscriptionResponse getJSON');
			return obj;
		}
	}]);

	function ARBCancelSubscriptionResponse(obj) {
		_classCallCheck(this, ARBCancelSubscriptionResponse);

		if (arguments.length == 1) {
			var _this2 = _possibleConstructorReturn(this, (ARBCancelSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBCancelSubscriptionResponse)).call(this, obj));
		} else {
			var _this2 = _possibleConstructorReturn(this, (ARBCancelSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBCancelSubscriptionResponse)).call(this));
		}return _possibleConstructorReturn(_this2);
	}

	return ARBCancelSubscriptionResponse;
}(ANetApiResponse);

module.exports.ARBCancelSubscriptionResponse = ARBCancelSubscriptionResponse;

var ARBCreateSubscriptionRequest = function (_ANetApiRequest2) {
	_inherits(ARBCreateSubscriptionRequest, _ANetApiRequest2);

	_createClass(ARBCreateSubscriptionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBCreateSubscriptionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBCreateSubscriptionRequest': this };
			logger.debug('Exit ARBCreateSubscriptionRequest getJSON');
			return obj;
		}
	}]);

	function ARBCreateSubscriptionRequest(obj) {
		_classCallCheck(this, ARBCreateSubscriptionRequest);

		logger.debug('Enter ARBCreateSubscriptionRequest constructor');
		if (arguments.length == 1) {
			var _this3 = _possibleConstructorReturn(this, (ARBCreateSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBCreateSubscriptionRequest)).call(this, obj));

			if ('subscription' in obj && obj.subscription != null) {
				_this3.setSubscription(new ARBSubscriptionType(obj.subscription));
			}
		} else {
			var _this3 = _possibleConstructorReturn(this, (ARBCreateSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBCreateSubscriptionRequest)).call(this));

			_this3.setSubscription(null);
		}
		logger.debug('Exit ARBCreateSubscriptionRequest constructor');
		return _possibleConstructorReturn(_this3);
	}

	_createClass(ARBCreateSubscriptionRequest, [{
		key: 'setSubscription',
		value: function setSubscription(p_subscription) {
			this.subscription = p_subscription;
		}
	}, {
		key: 'getSubscription',
		value: function getSubscription() {
			if ('subscription' in this) {
				return this.subscription;
			}
		}
	}]);

	return ARBCreateSubscriptionRequest;
}(ANetApiRequest);

module.exports.ARBCreateSubscriptionRequest = ARBCreateSubscriptionRequest;

var ARBCreateSubscriptionResponse = function (_ANetApiResponse2) {
	_inherits(ARBCreateSubscriptionResponse, _ANetApiResponse2);

	_createClass(ARBCreateSubscriptionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBCreateSubscriptionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBCreateSubscriptionResponse': this };
			logger.debug('Exit ARBCreateSubscriptionResponse getJSON');
			return obj;
		}
	}]);

	function ARBCreateSubscriptionResponse(obj) {
		_classCallCheck(this, ARBCreateSubscriptionResponse);

		logger.debug('Enter ARBCreateSubscriptionResponse constructor');
		if (arguments.length == 1) {
			var _this4 = _possibleConstructorReturn(this, (ARBCreateSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBCreateSubscriptionResponse)).call(this, obj));

			if ('subscriptionId' in obj && obj.subscriptionId != null) {
				_this4.setSubscriptionId(obj.subscriptionId);
			}
			if ('profile' in obj && obj.profile != null) {
				_this4.setProfile(new CustomerProfileIdType(obj.profile));
			}
		} else {
			var _this4 = _possibleConstructorReturn(this, (ARBCreateSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBCreateSubscriptionResponse)).call(this));

			_this4.setSubscriptionId(null);
			_this4.setProfile(null);
		}
		logger.debug('Exit ARBCreateSubscriptionResponse constructor');
		return _possibleConstructorReturn(_this4);
	}

	_createClass(ARBCreateSubscriptionResponse, [{
		key: 'setSubscriptionId',
		value: function setSubscriptionId(p_subscriptionId) {
			this.subscriptionId = p_subscriptionId;
		}
	}, {
		key: 'getSubscriptionId',
		value: function getSubscriptionId() {
			if ('subscriptionId' in this) {
				return this.subscriptionId;
			}
		}
	}, {
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}]);

	return ARBCreateSubscriptionResponse;
}(ANetApiResponse);

module.exports.ARBCreateSubscriptionResponse = ARBCreateSubscriptionResponse;

var ARBGetSubscriptionListRequest = function (_ANetApiRequest3) {
	_inherits(ARBGetSubscriptionListRequest, _ANetApiRequest3);

	_createClass(ARBGetSubscriptionListRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBGetSubscriptionListRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBGetSubscriptionListRequest': this };
			logger.debug('Exit ARBGetSubscriptionListRequest getJSON');
			return obj;
		}
	}]);

	function ARBGetSubscriptionListRequest(obj) {
		_classCallCheck(this, ARBGetSubscriptionListRequest);

		logger.debug('Enter ARBGetSubscriptionListRequest constructor');
		if (arguments.length == 1) {
			var _this5 = _possibleConstructorReturn(this, (ARBGetSubscriptionListRequest.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionListRequest)).call(this, obj));

			if ('searchType' in obj && obj.searchType != null) {
				_this5.setSearchType(obj.searchType);
			}
			if ('sorting' in obj && obj.sorting != null) {
				_this5.setSorting(new ARBGetSubscriptionListSorting(obj.sorting));
			}
			if ('paging' in obj && obj.paging != null) {
				_this5.setPaging(new Paging(obj.paging));
			}
		} else {
			var _this5 = _possibleConstructorReturn(this, (ARBGetSubscriptionListRequest.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionListRequest)).call(this));

			_this5.setSearchType(null);
			_this5.setSorting(null);
			_this5.setPaging(null);
		}
		logger.debug('Exit ARBGetSubscriptionListRequest constructor');
		return _possibleConstructorReturn(_this5);
	}

	_createClass(ARBGetSubscriptionListRequest, [{
		key: 'setSearchType',
		value: function setSearchType(p_searchType) {
			this.searchType = p_searchType;
		}
	}, {
		key: 'getSearchType',
		value: function getSearchType() {
			if ('searchType' in this) {
				return this.searchType;
			}
		}
	}, {
		key: 'setSorting',
		value: function setSorting(p_sorting) {
			this.sorting = p_sorting;
		}
	}, {
		key: 'getSorting',
		value: function getSorting() {
			if ('sorting' in this) {
				return this.sorting;
			}
		}
	}, {
		key: 'setPaging',
		value: function setPaging(p_paging) {
			this.paging = p_paging;
		}
	}, {
		key: 'getPaging',
		value: function getPaging() {
			if ('paging' in this) {
				return this.paging;
			}
		}
	}]);

	return ARBGetSubscriptionListRequest;
}(ANetApiRequest);

module.exports.ARBGetSubscriptionListRequest = ARBGetSubscriptionListRequest;

var ARBGetSubscriptionListResponse = function (_ANetApiResponse3) {
	_inherits(ARBGetSubscriptionListResponse, _ANetApiResponse3);

	_createClass(ARBGetSubscriptionListResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBGetSubscriptionListResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBGetSubscriptionListResponse': this };
			logger.debug('Exit ARBGetSubscriptionListResponse getJSON');
			return obj;
		}
	}]);

	function ARBGetSubscriptionListResponse(obj) {
		_classCallCheck(this, ARBGetSubscriptionListResponse);

		logger.debug('Enter ARBGetSubscriptionListResponse constructor');
		if (arguments.length == 1) {
			var _this6 = _possibleConstructorReturn(this, (ARBGetSubscriptionListResponse.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionListResponse)).call(this, obj));

			if ('totalNumInResultSet' in obj && obj.totalNumInResultSet != null) {
				_this6.setTotalNumInResultSet(obj.totalNumInResultSet);
			}
			if ('subscriptionDetails' in obj && obj.subscriptionDetails != null) {
				_this6.setSubscriptionDetails(new ArrayOfSubscription(obj.subscriptionDetails));
			}
		} else {
			var _this6 = _possibleConstructorReturn(this, (ARBGetSubscriptionListResponse.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionListResponse)).call(this));

			_this6.setTotalNumInResultSet(null);
			_this6.setSubscriptionDetails(null);
		}
		logger.debug('Exit ARBGetSubscriptionListResponse constructor');
		return _possibleConstructorReturn(_this6);
	}

	_createClass(ARBGetSubscriptionListResponse, [{
		key: 'setTotalNumInResultSet',
		value: function setTotalNumInResultSet(p_totalNumInResultSet) {
			this.totalNumInResultSet = p_totalNumInResultSet;
		}
	}, {
		key: 'getTotalNumInResultSet',
		value: function getTotalNumInResultSet() {
			if ('totalNumInResultSet' in this) {
				return this.totalNumInResultSet;
			}
		}
	}, {
		key: 'setSubscriptionDetails',
		value: function setSubscriptionDetails(p_subscriptionDetails) {
			this.subscriptionDetails = p_subscriptionDetails;
		}
	}, {
		key: 'getSubscriptionDetails',
		value: function getSubscriptionDetails() {
			if ('subscriptionDetails' in this) {
				return this.subscriptionDetails;
			}
		}
	}]);

	return ARBGetSubscriptionListResponse;
}(ANetApiResponse);

module.exports.ARBGetSubscriptionListResponse = ARBGetSubscriptionListResponse;

var ARBGetSubscriptionRequest = function (_ANetApiRequest4) {
	_inherits(ARBGetSubscriptionRequest, _ANetApiRequest4);

	_createClass(ARBGetSubscriptionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBGetSubscriptionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBGetSubscriptionRequest': this };
			logger.debug('Exit ARBGetSubscriptionRequest getJSON');
			return obj;
		}
	}]);

	function ARBGetSubscriptionRequest(obj) {
		_classCallCheck(this, ARBGetSubscriptionRequest);

		logger.debug('Enter ARBGetSubscriptionRequest constructor');
		if (arguments.length == 1) {
			var _this7 = _possibleConstructorReturn(this, (ARBGetSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionRequest)).call(this, obj));

			if ('subscriptionId' in obj && obj.subscriptionId != null) {
				_this7.setSubscriptionId(obj.subscriptionId);
			}
			if ('includeTransactions' in obj && obj.includeTransactions != null) {
				_this7.setIncludeTransactions(obj.includeTransactions);
			}
		} else {
			var _this7 = _possibleConstructorReturn(this, (ARBGetSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionRequest)).call(this));

			_this7.setSubscriptionId(null);
			_this7.setIncludeTransactions(null);
		}
		logger.debug('Exit ARBGetSubscriptionRequest constructor');
		return _possibleConstructorReturn(_this7);
	}

	_createClass(ARBGetSubscriptionRequest, [{
		key: 'setSubscriptionId',
		value: function setSubscriptionId(p_subscriptionId) {
			this.subscriptionId = p_subscriptionId;
		}
	}, {
		key: 'getSubscriptionId',
		value: function getSubscriptionId() {
			if ('subscriptionId' in this) {
				return this.subscriptionId;
			}
		}
	}, {
		key: 'setIncludeTransactions',
		value: function setIncludeTransactions(p_includeTransactions) {
			this.includeTransactions = p_includeTransactions;
		}
	}, {
		key: 'getIncludeTransactions',
		value: function getIncludeTransactions() {
			if ('includeTransactions' in this) {
				return this.includeTransactions;
			}
		}
	}]);

	return ARBGetSubscriptionRequest;
}(ANetApiRequest);

module.exports.ARBGetSubscriptionRequest = ARBGetSubscriptionRequest;

var ARBGetSubscriptionResponse = function (_ANetApiResponse4) {
	_inherits(ARBGetSubscriptionResponse, _ANetApiResponse4);

	_createClass(ARBGetSubscriptionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBGetSubscriptionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBGetSubscriptionResponse': this };
			logger.debug('Exit ARBGetSubscriptionResponse getJSON');
			return obj;
		}
	}]);

	function ARBGetSubscriptionResponse(obj) {
		_classCallCheck(this, ARBGetSubscriptionResponse);

		logger.debug('Enter ARBGetSubscriptionResponse constructor');
		if (arguments.length == 1) {
			var _this8 = _possibleConstructorReturn(this, (ARBGetSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionResponse)).call(this, obj));

			if ('subscription' in obj && obj.subscription != null) {
				_this8.setSubscription(new ARBSubscriptionMaskedType(obj.subscription));
			}
		} else {
			var _this8 = _possibleConstructorReturn(this, (ARBGetSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionResponse)).call(this));

			_this8.setSubscription(null);
		}
		logger.debug('Exit ARBGetSubscriptionResponse constructor');
		return _possibleConstructorReturn(_this8);
	}

	_createClass(ARBGetSubscriptionResponse, [{
		key: 'setSubscription',
		value: function setSubscription(p_subscription) {
			this.subscription = p_subscription;
		}
	}, {
		key: 'getSubscription',
		value: function getSubscription() {
			if ('subscription' in this) {
				return this.subscription;
			}
		}
	}]);

	return ARBGetSubscriptionResponse;
}(ANetApiResponse);

module.exports.ARBGetSubscriptionResponse = ARBGetSubscriptionResponse;

var ARBGetSubscriptionStatusRequest = function (_ANetApiRequest5) {
	_inherits(ARBGetSubscriptionStatusRequest, _ANetApiRequest5);

	_createClass(ARBGetSubscriptionStatusRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBGetSubscriptionStatusRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBGetSubscriptionStatusRequest': this };
			logger.debug('Exit ARBGetSubscriptionStatusRequest getJSON');
			return obj;
		}
	}]);

	function ARBGetSubscriptionStatusRequest(obj) {
		_classCallCheck(this, ARBGetSubscriptionStatusRequest);

		logger.debug('Enter ARBGetSubscriptionStatusRequest constructor');
		if (arguments.length == 1) {
			var _this9 = _possibleConstructorReturn(this, (ARBGetSubscriptionStatusRequest.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionStatusRequest)).call(this, obj));

			if ('subscriptionId' in obj && obj.subscriptionId != null) {
				_this9.setSubscriptionId(obj.subscriptionId);
			}
		} else {
			var _this9 = _possibleConstructorReturn(this, (ARBGetSubscriptionStatusRequest.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionStatusRequest)).call(this));

			_this9.setSubscriptionId(null);
		}
		logger.debug('Exit ARBGetSubscriptionStatusRequest constructor');
		return _possibleConstructorReturn(_this9);
	}

	_createClass(ARBGetSubscriptionStatusRequest, [{
		key: 'setSubscriptionId',
		value: function setSubscriptionId(p_subscriptionId) {
			this.subscriptionId = p_subscriptionId;
		}
	}, {
		key: 'getSubscriptionId',
		value: function getSubscriptionId() {
			if ('subscriptionId' in this) {
				return this.subscriptionId;
			}
		}
	}]);

	return ARBGetSubscriptionStatusRequest;
}(ANetApiRequest);

module.exports.ARBGetSubscriptionStatusRequest = ARBGetSubscriptionStatusRequest;

var ARBGetSubscriptionStatusResponse = function (_ANetApiResponse5) {
	_inherits(ARBGetSubscriptionStatusResponse, _ANetApiResponse5);

	_createClass(ARBGetSubscriptionStatusResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBGetSubscriptionStatusResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBGetSubscriptionStatusResponse': this };
			logger.debug('Exit ARBGetSubscriptionStatusResponse getJSON');
			return obj;
		}
	}]);

	function ARBGetSubscriptionStatusResponse(obj) {
		_classCallCheck(this, ARBGetSubscriptionStatusResponse);

		logger.debug('Enter ARBGetSubscriptionStatusResponse constructor');
		if (arguments.length == 1) {
			var _this10 = _possibleConstructorReturn(this, (ARBGetSubscriptionStatusResponse.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionStatusResponse)).call(this, obj));

			if ('status' in obj && obj.status != null) {
				_this10.setStatus(obj.status);
			}
		} else {
			var _this10 = _possibleConstructorReturn(this, (ARBGetSubscriptionStatusResponse.__proto__ || Object.getPrototypeOf(ARBGetSubscriptionStatusResponse)).call(this));

			_this10.setStatus(null);
		}
		logger.debug('Exit ARBGetSubscriptionStatusResponse constructor');
		return _possibleConstructorReturn(_this10);
	}

	_createClass(ARBGetSubscriptionStatusResponse, [{
		key: 'setStatus',
		value: function setStatus(p_status) {
			this.status = p_status;
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			if ('status' in this) {
				return this.status;
			}
		}
	}]);

	return ARBGetSubscriptionStatusResponse;
}(ANetApiResponse);

module.exports.ARBGetSubscriptionStatusResponse = ARBGetSubscriptionStatusResponse;

var ARBUpdateSubscriptionRequest = function (_ANetApiRequest6) {
	_inherits(ARBUpdateSubscriptionRequest, _ANetApiRequest6);

	_createClass(ARBUpdateSubscriptionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBUpdateSubscriptionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBUpdateSubscriptionRequest': this };
			logger.debug('Exit ARBUpdateSubscriptionRequest getJSON');
			return obj;
		}
	}]);

	function ARBUpdateSubscriptionRequest(obj) {
		_classCallCheck(this, ARBUpdateSubscriptionRequest);

		logger.debug('Enter ARBUpdateSubscriptionRequest constructor');
		if (arguments.length == 1) {
			var _this11 = _possibleConstructorReturn(this, (ARBUpdateSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBUpdateSubscriptionRequest)).call(this, obj));

			if ('subscriptionId' in obj && obj.subscriptionId != null) {
				_this11.setSubscriptionId(obj.subscriptionId);
			}
			if ('subscription' in obj && obj.subscription != null) {
				_this11.setSubscription(new ARBSubscriptionType(obj.subscription));
			}
		} else {
			var _this11 = _possibleConstructorReturn(this, (ARBUpdateSubscriptionRequest.__proto__ || Object.getPrototypeOf(ARBUpdateSubscriptionRequest)).call(this));

			_this11.setSubscriptionId(null);
			_this11.setSubscription(null);
		}
		logger.debug('Exit ARBUpdateSubscriptionRequest constructor');
		return _possibleConstructorReturn(_this11);
	}

	_createClass(ARBUpdateSubscriptionRequest, [{
		key: 'setSubscriptionId',
		value: function setSubscriptionId(p_subscriptionId) {
			this.subscriptionId = p_subscriptionId;
		}
	}, {
		key: 'getSubscriptionId',
		value: function getSubscriptionId() {
			if ('subscriptionId' in this) {
				return this.subscriptionId;
			}
		}
	}, {
		key: 'setSubscription',
		value: function setSubscription(p_subscription) {
			this.subscription = p_subscription;
		}
	}, {
		key: 'getSubscription',
		value: function getSubscription() {
			if ('subscription' in this) {
				return this.subscription;
			}
		}
	}]);

	return ARBUpdateSubscriptionRequest;
}(ANetApiRequest);

module.exports.ARBUpdateSubscriptionRequest = ARBUpdateSubscriptionRequest;

var ARBUpdateSubscriptionResponse = function (_ANetApiResponse6) {
	_inherits(ARBUpdateSubscriptionResponse, _ANetApiResponse6);

	_createClass(ARBUpdateSubscriptionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ARBUpdateSubscriptionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'ARBUpdateSubscriptionResponse': this };
			logger.debug('Exit ARBUpdateSubscriptionResponse getJSON');
			return obj;
		}
	}]);

	function ARBUpdateSubscriptionResponse(obj) {
		_classCallCheck(this, ARBUpdateSubscriptionResponse);

		logger.debug('Enter ARBUpdateSubscriptionResponse constructor');
		if (arguments.length == 1) {
			var _this12 = _possibleConstructorReturn(this, (ARBUpdateSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBUpdateSubscriptionResponse)).call(this, obj));

			if ('profile' in obj && obj.profile != null) {
				_this12.setProfile(new CustomerProfileIdType(obj.profile));
			}
		} else {
			var _this12 = _possibleConstructorReturn(this, (ARBUpdateSubscriptionResponse.__proto__ || Object.getPrototypeOf(ARBUpdateSubscriptionResponse)).call(this));

			_this12.setProfile(null);
		}
		logger.debug('Exit ARBUpdateSubscriptionResponse constructor');
		return _possibleConstructorReturn(_this12);
	}

	_createClass(ARBUpdateSubscriptionResponse, [{
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}]);

	return ARBUpdateSubscriptionResponse;
}(ANetApiResponse);

module.exports.ARBUpdateSubscriptionResponse = ARBUpdateSubscriptionResponse;

var AuDeleteType = function (_AuDetailsType) {
	_inherits(AuDeleteType, _AuDetailsType);

	function AuDeleteType(obj) {
		_classCallCheck(this, AuDeleteType);

		logger.debug('Enter AuDeleteType constructor');
		if (arguments.length == 1) {
			var _this13 = _possibleConstructorReturn(this, (AuDeleteType.__proto__ || Object.getPrototypeOf(AuDeleteType)).call(this, obj));

			if ('creditCard' in obj && obj.creditCard != null) {
				_this13.setCreditCard(new CreditCardMaskedType(obj.creditCard));
			}
		} else {
			var _this13 = _possibleConstructorReturn(this, (AuDeleteType.__proto__ || Object.getPrototypeOf(AuDeleteType)).call(this));

			_this13.setCreditCard(null);
		}
		logger.debug('Exit AuDeleteType constructor');
		return _possibleConstructorReturn(_this13);
	}

	_createClass(AuDeleteType, [{
		key: 'setCreditCard',
		value: function setCreditCard(p_creditCard) {
			this.creditCard = p_creditCard;
		}
	}, {
		key: 'getCreditCard',
		value: function getCreditCard() {
			if ('creditCard' in this) {
				return this.creditCard;
			}
		}
	}]);

	return AuDeleteType;
}(AuDetailsType);

module.exports.AuDeleteType = AuDeleteType;

var AuUpdateType = function (_AuDetailsType2) {
	_inherits(AuUpdateType, _AuDetailsType2);

	function AuUpdateType(obj) {
		_classCallCheck(this, AuUpdateType);

		logger.debug('Enter AuUpdateType constructor');
		if (arguments.length == 1) {
			var _this14 = _possibleConstructorReturn(this, (AuUpdateType.__proto__ || Object.getPrototypeOf(AuUpdateType)).call(this, obj));

			if ('newCreditCard' in obj && obj.newCreditCard != null) {
				_this14.setNewCreditCard(new CreditCardMaskedType(obj.newCreditCard));
			}
			if ('oldCreditCard' in obj && obj.oldCreditCard != null) {
				_this14.setOldCreditCard(new CreditCardMaskedType(obj.oldCreditCard));
			}
		} else {
			var _this14 = _possibleConstructorReturn(this, (AuUpdateType.__proto__ || Object.getPrototypeOf(AuUpdateType)).call(this));

			_this14.setNewCreditCard(null);
			_this14.setOldCreditCard(null);
		}
		logger.debug('Exit AuUpdateType constructor');
		return _possibleConstructorReturn(_this14);
	}

	_createClass(AuUpdateType, [{
		key: 'setNewCreditCard',
		value: function setNewCreditCard(p_newCreditCard) {
			this.newCreditCard = p_newCreditCard;
		}
	}, {
		key: 'getNewCreditCard',
		value: function getNewCreditCard() {
			if ('newCreditCard' in this) {
				return this.newCreditCard;
			}
		}
	}, {
		key: 'setOldCreditCard',
		value: function setOldCreditCard(p_oldCreditCard) {
			this.oldCreditCard = p_oldCreditCard;
		}
	}, {
		key: 'getOldCreditCard',
		value: function getOldCreditCard() {
			if ('oldCreditCard' in this) {
				return this.oldCreditCard;
			}
		}
	}]);

	return AuUpdateType;
}(AuDetailsType);

module.exports.AuUpdateType = AuUpdateType;

var AuthenticateTestRequest = function (_ANetApiRequest7) {
	_inherits(AuthenticateTestRequest, _ANetApiRequest7);

	_createClass(AuthenticateTestRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter AuthenticateTestRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'authenticateTestRequest': this };
			logger.debug('Exit AuthenticateTestRequest getJSON');
			return obj;
		}
	}]);

	function AuthenticateTestRequest(obj) {
		_classCallCheck(this, AuthenticateTestRequest);

		if (arguments.length == 1) {
			var _this15 = _possibleConstructorReturn(this, (AuthenticateTestRequest.__proto__ || Object.getPrototypeOf(AuthenticateTestRequest)).call(this, obj));
		} else {
			var _this15 = _possibleConstructorReturn(this, (AuthenticateTestRequest.__proto__ || Object.getPrototypeOf(AuthenticateTestRequest)).call(this));
		}return _possibleConstructorReturn(_this15);
	}

	return AuthenticateTestRequest;
}(ANetApiRequest);

module.exports.AuthenticateTestRequest = AuthenticateTestRequest;

var AuthenticateTestResponse = function (_ANetApiResponse7) {
	_inherits(AuthenticateTestResponse, _ANetApiResponse7);

	_createClass(AuthenticateTestResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter AuthenticateTestResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'authenticateTestResponse': this };
			logger.debug('Exit AuthenticateTestResponse getJSON');
			return obj;
		}
	}]);

	function AuthenticateTestResponse(obj) {
		_classCallCheck(this, AuthenticateTestResponse);

		if (arguments.length == 1) {
			var _this16 = _possibleConstructorReturn(this, (AuthenticateTestResponse.__proto__ || Object.getPrototypeOf(AuthenticateTestResponse)).call(this, obj));
		} else {
			var _this16 = _possibleConstructorReturn(this, (AuthenticateTestResponse.__proto__ || Object.getPrototypeOf(AuthenticateTestResponse)).call(this));
		}return _possibleConstructorReturn(_this16);
	}

	return AuthenticateTestResponse;
}(ANetApiResponse);

module.exports.AuthenticateTestResponse = AuthenticateTestResponse;

var CreateCustomerPaymentProfileRequest = function (_ANetApiRequest8) {
	_inherits(CreateCustomerPaymentProfileRequest, _ANetApiRequest8);

	_createClass(CreateCustomerPaymentProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerPaymentProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerPaymentProfileRequest': this };
			logger.debug('Exit CreateCustomerPaymentProfileRequest getJSON');
			return obj;
		}
	}]);

	function CreateCustomerPaymentProfileRequest(obj) {
		_classCallCheck(this, CreateCustomerPaymentProfileRequest);

		logger.debug('Enter CreateCustomerPaymentProfileRequest constructor');
		if (arguments.length == 1) {
			var _this17 = _possibleConstructorReturn(this, (CreateCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(CreateCustomerPaymentProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this17.setCustomerProfileId(obj.customerProfileId);
			}
			if ('paymentProfile' in obj && obj.paymentProfile != null) {
				_this17.setPaymentProfile(new CustomerPaymentProfileType(obj.paymentProfile));
			}
			if ('validationMode' in obj && obj.validationMode != null) {
				_this17.setValidationMode(obj.validationMode);
			}
		} else {
			var _this17 = _possibleConstructorReturn(this, (CreateCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(CreateCustomerPaymentProfileRequest)).call(this));

			_this17.setCustomerProfileId(null);
			_this17.setPaymentProfile(null);
			_this17.setValidationMode(null);
		}
		logger.debug('Exit CreateCustomerPaymentProfileRequest constructor');
		return _possibleConstructorReturn(_this17);
	}

	_createClass(CreateCustomerPaymentProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setPaymentProfile',
		value: function setPaymentProfile(p_paymentProfile) {
			this.paymentProfile = p_paymentProfile;
		}
	}, {
		key: 'getPaymentProfile',
		value: function getPaymentProfile() {
			if ('paymentProfile' in this) {
				return this.paymentProfile;
			}
		}
	}, {
		key: 'setValidationMode',
		value: function setValidationMode(p_validationMode) {
			this.validationMode = p_validationMode;
		}
	}, {
		key: 'getValidationMode',
		value: function getValidationMode() {
			if ('validationMode' in this) {
				return this.validationMode;
			}
		}
	}]);

	return CreateCustomerPaymentProfileRequest;
}(ANetApiRequest);

module.exports.CreateCustomerPaymentProfileRequest = CreateCustomerPaymentProfileRequest;

var CreateCustomerPaymentProfileResponse = function (_ANetApiResponse8) {
	_inherits(CreateCustomerPaymentProfileResponse, _ANetApiResponse8);

	_createClass(CreateCustomerPaymentProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerPaymentProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerPaymentProfileResponse': this };
			logger.debug('Exit CreateCustomerPaymentProfileResponse getJSON');
			return obj;
		}
	}]);

	function CreateCustomerPaymentProfileResponse(obj) {
		_classCallCheck(this, CreateCustomerPaymentProfileResponse);

		logger.debug('Enter CreateCustomerPaymentProfileResponse constructor');
		if (arguments.length == 1) {
			var _this18 = _possibleConstructorReturn(this, (CreateCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(CreateCustomerPaymentProfileResponse)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this18.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this18.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('validationDirectResponse' in obj && obj.validationDirectResponse != null) {
				_this18.setValidationDirectResponse(obj.validationDirectResponse);
			}
		} else {
			var _this18 = _possibleConstructorReturn(this, (CreateCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(CreateCustomerPaymentProfileResponse)).call(this));

			_this18.setCustomerProfileId(null);
			_this18.setCustomerPaymentProfileId(null);
			_this18.setValidationDirectResponse(null);
		}
		logger.debug('Exit CreateCustomerPaymentProfileResponse constructor');
		return _possibleConstructorReturn(_this18);
	}

	_createClass(CreateCustomerPaymentProfileResponse, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setValidationDirectResponse',
		value: function setValidationDirectResponse(p_validationDirectResponse) {
			this.validationDirectResponse = p_validationDirectResponse;
		}
	}, {
		key: 'getValidationDirectResponse',
		value: function getValidationDirectResponse() {
			if ('validationDirectResponse' in this) {
				return this.validationDirectResponse;
			}
		}
	}]);

	return CreateCustomerPaymentProfileResponse;
}(ANetApiResponse);

module.exports.CreateCustomerPaymentProfileResponse = CreateCustomerPaymentProfileResponse;

var CreateCustomerProfileFromTransactionRequest = function (_ANetApiRequest9) {
	_inherits(CreateCustomerProfileFromTransactionRequest, _ANetApiRequest9);

	_createClass(CreateCustomerProfileFromTransactionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerProfileFromTransactionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerProfileFromTransactionRequest': this };
			logger.debug('Exit CreateCustomerProfileFromTransactionRequest getJSON');
			return obj;
		}
	}]);

	function CreateCustomerProfileFromTransactionRequest(obj) {
		_classCallCheck(this, CreateCustomerProfileFromTransactionRequest);

		logger.debug('Enter CreateCustomerProfileFromTransactionRequest constructor');
		if (arguments.length == 1) {
			var _this19 = _possibleConstructorReturn(this, (CreateCustomerProfileFromTransactionRequest.__proto__ || Object.getPrototypeOf(CreateCustomerProfileFromTransactionRequest)).call(this, obj));

			if ('transId' in obj && obj.transId != null) {
				_this19.setTransId(obj.transId);
			}
			if ('customer' in obj && obj.customer != null) {
				_this19.setCustomer(new CustomerProfileBaseType(obj.customer));
			}
			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this19.setCustomerProfileId(obj.customerProfileId);
			}
			if ('defaultPaymentProfile' in obj && obj.defaultPaymentProfile != null) {
				_this19.setDefaultPaymentProfile(obj.defaultPaymentProfile);
			}
			if ('defaultShippingAddress' in obj && obj.defaultShippingAddress != null) {
				_this19.setDefaultShippingAddress(obj.defaultShippingAddress);
			}
		} else {
			var _this19 = _possibleConstructorReturn(this, (CreateCustomerProfileFromTransactionRequest.__proto__ || Object.getPrototypeOf(CreateCustomerProfileFromTransactionRequest)).call(this));

			_this19.setTransId(null);
			_this19.setCustomer(null);
			_this19.setCustomerProfileId(null);
			_this19.setDefaultPaymentProfile(null);
			_this19.setDefaultShippingAddress(null);
		}
		logger.debug('Exit CreateCustomerProfileFromTransactionRequest constructor');
		return _possibleConstructorReturn(_this19);
	}

	_createClass(CreateCustomerProfileFromTransactionRequest, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setCustomer',
		value: function setCustomer(p_customer) {
			this.customer = p_customer;
		}
	}, {
		key: 'getCustomer',
		value: function getCustomer() {
			if ('customer' in this) {
				return this.customer;
			}
		}
	}, {
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setDefaultPaymentProfile',
		value: function setDefaultPaymentProfile(p_defaultPaymentProfile) {
			this.defaultPaymentProfile = p_defaultPaymentProfile;
		}
	}, {
		key: 'getDefaultPaymentProfile',
		value: function getDefaultPaymentProfile() {
			if ('defaultPaymentProfile' in this) {
				return this.defaultPaymentProfile;
			}
		}
	}, {
		key: 'setDefaultShippingAddress',
		value: function setDefaultShippingAddress(p_defaultShippingAddress) {
			this.defaultShippingAddress = p_defaultShippingAddress;
		}
	}, {
		key: 'getDefaultShippingAddress',
		value: function getDefaultShippingAddress() {
			if ('defaultShippingAddress' in this) {
				return this.defaultShippingAddress;
			}
		}
	}]);

	return CreateCustomerProfileFromTransactionRequest;
}(ANetApiRequest);

module.exports.CreateCustomerProfileFromTransactionRequest = CreateCustomerProfileFromTransactionRequest;

var CreateCustomerProfileRequest = function (_ANetApiRequest10) {
	_inherits(CreateCustomerProfileRequest, _ANetApiRequest10);

	_createClass(CreateCustomerProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerProfileRequest': this };
			logger.debug('Exit CreateCustomerProfileRequest getJSON');
			return obj;
		}
	}]);

	function CreateCustomerProfileRequest(obj) {
		_classCallCheck(this, CreateCustomerProfileRequest);

		logger.debug('Enter CreateCustomerProfileRequest constructor');
		if (arguments.length == 1) {
			var _this20 = _possibleConstructorReturn(this, (CreateCustomerProfileRequest.__proto__ || Object.getPrototypeOf(CreateCustomerProfileRequest)).call(this, obj));

			if ('profile' in obj && obj.profile != null) {
				_this20.setProfile(new CustomerProfileType(obj.profile));
			}
			if ('validationMode' in obj && obj.validationMode != null) {
				_this20.setValidationMode(obj.validationMode);
			}
		} else {
			var _this20 = _possibleConstructorReturn(this, (CreateCustomerProfileRequest.__proto__ || Object.getPrototypeOf(CreateCustomerProfileRequest)).call(this));

			_this20.setProfile(null);
			_this20.setValidationMode(null);
		}
		logger.debug('Exit CreateCustomerProfileRequest constructor');
		return _possibleConstructorReturn(_this20);
	}

	_createClass(CreateCustomerProfileRequest, [{
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}, {
		key: 'setValidationMode',
		value: function setValidationMode(p_validationMode) {
			this.validationMode = p_validationMode;
		}
	}, {
		key: 'getValidationMode',
		value: function getValidationMode() {
			if ('validationMode' in this) {
				return this.validationMode;
			}
		}
	}]);

	return CreateCustomerProfileRequest;
}(ANetApiRequest);

module.exports.CreateCustomerProfileRequest = CreateCustomerProfileRequest;

var CreateCustomerProfileResponse = function (_ANetApiResponse9) {
	_inherits(CreateCustomerProfileResponse, _ANetApiResponse9);

	_createClass(CreateCustomerProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerProfileResponse': this };
			logger.debug('Exit CreateCustomerProfileResponse getJSON');
			return obj;
		}
	}]);

	function CreateCustomerProfileResponse(obj) {
		_classCallCheck(this, CreateCustomerProfileResponse);

		logger.debug('Enter CreateCustomerProfileResponse constructor');
		if (arguments.length == 1) {
			var _this21 = _possibleConstructorReturn(this, (CreateCustomerProfileResponse.__proto__ || Object.getPrototypeOf(CreateCustomerProfileResponse)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this21.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileIdList' in obj && obj.customerPaymentProfileIdList != null) {
				_this21.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList));
			}
			if ('customerShippingAddressIdList' in obj && obj.customerShippingAddressIdList != null) {
				_this21.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList));
			}
			if ('validationDirectResponseList' in obj && obj.validationDirectResponseList != null) {
				_this21.setValidationDirectResponseList(new ArrayOfString(obj.validationDirectResponseList));
			}
		} else {
			var _this21 = _possibleConstructorReturn(this, (CreateCustomerProfileResponse.__proto__ || Object.getPrototypeOf(CreateCustomerProfileResponse)).call(this));

			_this21.setCustomerProfileId(null);
			_this21.setCustomerPaymentProfileIdList(null);
			_this21.setCustomerShippingAddressIdList(null);
			_this21.setValidationDirectResponseList(null);
		}
		logger.debug('Exit CreateCustomerProfileResponse constructor');
		return _possibleConstructorReturn(_this21);
	}

	_createClass(CreateCustomerProfileResponse, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileIdList',
		value: function setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) {
			this.customerPaymentProfileIdList = p_customerPaymentProfileIdList;
		}
	}, {
		key: 'getCustomerPaymentProfileIdList',
		value: function getCustomerPaymentProfileIdList() {
			if ('customerPaymentProfileIdList' in this) {
				return this.customerPaymentProfileIdList;
			}
		}
	}, {
		key: 'setCustomerShippingAddressIdList',
		value: function setCustomerShippingAddressIdList(p_customerShippingAddressIdList) {
			this.customerShippingAddressIdList = p_customerShippingAddressIdList;
		}
	}, {
		key: 'getCustomerShippingAddressIdList',
		value: function getCustomerShippingAddressIdList() {
			if ('customerShippingAddressIdList' in this) {
				return this.customerShippingAddressIdList;
			}
		}
	}, {
		key: 'setValidationDirectResponseList',
		value: function setValidationDirectResponseList(p_validationDirectResponseList) {
			this.validationDirectResponseList = p_validationDirectResponseList;
		}
	}, {
		key: 'getValidationDirectResponseList',
		value: function getValidationDirectResponseList() {
			if ('validationDirectResponseList' in this) {
				return this.validationDirectResponseList;
			}
		}
	}]);

	return CreateCustomerProfileResponse;
}(ANetApiResponse);

module.exports.CreateCustomerProfileResponse = CreateCustomerProfileResponse;

var CreateCustomerProfileTransactionRequest = function (_ANetApiRequest11) {
	_inherits(CreateCustomerProfileTransactionRequest, _ANetApiRequest11);

	_createClass(CreateCustomerProfileTransactionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerProfileTransactionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerProfileTransactionRequest': this };
			logger.debug('Exit CreateCustomerProfileTransactionRequest getJSON');
			return obj;
		}
	}]);

	function CreateCustomerProfileTransactionRequest(obj) {
		_classCallCheck(this, CreateCustomerProfileTransactionRequest);

		logger.debug('Enter CreateCustomerProfileTransactionRequest constructor');
		if (arguments.length == 1) {
			var _this22 = _possibleConstructorReturn(this, (CreateCustomerProfileTransactionRequest.__proto__ || Object.getPrototypeOf(CreateCustomerProfileTransactionRequest)).call(this, obj));

			if ('transaction' in obj && obj.transaction != null) {
				_this22.setTransaction(new ProfileTransactionType(obj.transaction));
			}
			if ('extraOptions' in obj && obj.extraOptions != null) {
				_this22.setExtraOptions(obj.extraOptions);
			}
		} else {
			var _this22 = _possibleConstructorReturn(this, (CreateCustomerProfileTransactionRequest.__proto__ || Object.getPrototypeOf(CreateCustomerProfileTransactionRequest)).call(this));

			_this22.setTransaction(null);
			_this22.setExtraOptions(null);
		}
		logger.debug('Exit CreateCustomerProfileTransactionRequest constructor');
		return _possibleConstructorReturn(_this22);
	}

	_createClass(CreateCustomerProfileTransactionRequest, [{
		key: 'setTransaction',
		value: function setTransaction(p_transaction) {
			this.transaction = p_transaction;
		}
	}, {
		key: 'getTransaction',
		value: function getTransaction() {
			if ('transaction' in this) {
				return this.transaction;
			}
		}
	}, {
		key: 'setExtraOptions',
		value: function setExtraOptions(p_extraOptions) {
			this.extraOptions = p_extraOptions;
		}
	}, {
		key: 'getExtraOptions',
		value: function getExtraOptions() {
			if ('extraOptions' in this) {
				return this.extraOptions;
			}
		}
	}]);

	return CreateCustomerProfileTransactionRequest;
}(ANetApiRequest);

module.exports.CreateCustomerProfileTransactionRequest = CreateCustomerProfileTransactionRequest;

var CreateCustomerProfileTransactionResponse = function (_ANetApiResponse10) {
	_inherits(CreateCustomerProfileTransactionResponse, _ANetApiResponse10);

	_createClass(CreateCustomerProfileTransactionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerProfileTransactionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerProfileTransactionResponse': this };
			logger.debug('Exit CreateCustomerProfileTransactionResponse getJSON');
			return obj;
		}
	}]);

	function CreateCustomerProfileTransactionResponse(obj) {
		_classCallCheck(this, CreateCustomerProfileTransactionResponse);

		logger.debug('Enter CreateCustomerProfileTransactionResponse constructor');
		if (arguments.length == 1) {
			var _this23 = _possibleConstructorReturn(this, (CreateCustomerProfileTransactionResponse.__proto__ || Object.getPrototypeOf(CreateCustomerProfileTransactionResponse)).call(this, obj));

			if ('transactionResponse' in obj && obj.transactionResponse != null) {
				_this23.setTransactionResponse(new TransactionResponse(obj.transactionResponse));
			}
			if ('directResponse' in obj && obj.directResponse != null) {
				_this23.setDirectResponse(obj.directResponse);
			}
		} else {
			var _this23 = _possibleConstructorReturn(this, (CreateCustomerProfileTransactionResponse.__proto__ || Object.getPrototypeOf(CreateCustomerProfileTransactionResponse)).call(this));

			_this23.setTransactionResponse(null);
			_this23.setDirectResponse(null);
		}
		logger.debug('Exit CreateCustomerProfileTransactionResponse constructor');
		return _possibleConstructorReturn(_this23);
	}

	_createClass(CreateCustomerProfileTransactionResponse, [{
		key: 'setTransactionResponse',
		value: function setTransactionResponse(p_transactionResponse) {
			this.transactionResponse = p_transactionResponse;
		}
	}, {
		key: 'getTransactionResponse',
		value: function getTransactionResponse() {
			if ('transactionResponse' in this) {
				return this.transactionResponse;
			}
		}
	}, {
		key: 'setDirectResponse',
		value: function setDirectResponse(p_directResponse) {
			this.directResponse = p_directResponse;
		}
	}, {
		key: 'getDirectResponse',
		value: function getDirectResponse() {
			if ('directResponse' in this) {
				return this.directResponse;
			}
		}
	}]);

	return CreateCustomerProfileTransactionResponse;
}(ANetApiResponse);

module.exports.CreateCustomerProfileTransactionResponse = CreateCustomerProfileTransactionResponse;

var CreateCustomerShippingAddressRequest = function (_ANetApiRequest12) {
	_inherits(CreateCustomerShippingAddressRequest, _ANetApiRequest12);

	_createClass(CreateCustomerShippingAddressRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerShippingAddressRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerShippingAddressRequest': this };
			logger.debug('Exit CreateCustomerShippingAddressRequest getJSON');
			return obj;
		}
	}]);

	function CreateCustomerShippingAddressRequest(obj) {
		_classCallCheck(this, CreateCustomerShippingAddressRequest);

		logger.debug('Enter CreateCustomerShippingAddressRequest constructor');
		if (arguments.length == 1) {
			var _this24 = _possibleConstructorReturn(this, (CreateCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(CreateCustomerShippingAddressRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this24.setCustomerProfileId(obj.customerProfileId);
			}
			if ('address' in obj && obj.address != null) {
				_this24.setAddress(new CustomerAddressType(obj.address));
			}
			if ('defaultShippingAddress' in obj && obj.defaultShippingAddress != null) {
				_this24.setDefaultShippingAddress(obj.defaultShippingAddress);
			}
		} else {
			var _this24 = _possibleConstructorReturn(this, (CreateCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(CreateCustomerShippingAddressRequest)).call(this));

			_this24.setCustomerProfileId(null);
			_this24.setAddress(null);
			_this24.setDefaultShippingAddress(null);
		}
		logger.debug('Exit CreateCustomerShippingAddressRequest constructor');
		return _possibleConstructorReturn(_this24);
	}

	_createClass(CreateCustomerShippingAddressRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setAddress',
		value: function setAddress(p_address) {
			this.address = p_address;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			if ('address' in this) {
				return this.address;
			}
		}
	}, {
		key: 'setDefaultShippingAddress',
		value: function setDefaultShippingAddress(p_defaultShippingAddress) {
			this.defaultShippingAddress = p_defaultShippingAddress;
		}
	}, {
		key: 'getDefaultShippingAddress',
		value: function getDefaultShippingAddress() {
			if ('defaultShippingAddress' in this) {
				return this.defaultShippingAddress;
			}
		}
	}]);

	return CreateCustomerShippingAddressRequest;
}(ANetApiRequest);

module.exports.CreateCustomerShippingAddressRequest = CreateCustomerShippingAddressRequest;

var CreateCustomerShippingAddressResponse = function (_ANetApiResponse11) {
	_inherits(CreateCustomerShippingAddressResponse, _ANetApiResponse11);

	_createClass(CreateCustomerShippingAddressResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateCustomerShippingAddressResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createCustomerShippingAddressResponse': this };
			logger.debug('Exit CreateCustomerShippingAddressResponse getJSON');
			return obj;
		}
	}]);

	function CreateCustomerShippingAddressResponse(obj) {
		_classCallCheck(this, CreateCustomerShippingAddressResponse);

		logger.debug('Enter CreateCustomerShippingAddressResponse constructor');
		if (arguments.length == 1) {
			var _this25 = _possibleConstructorReturn(this, (CreateCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(CreateCustomerShippingAddressResponse)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this25.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerAddressId' in obj && obj.customerAddressId != null) {
				_this25.setCustomerAddressId(obj.customerAddressId);
			}
		} else {
			var _this25 = _possibleConstructorReturn(this, (CreateCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(CreateCustomerShippingAddressResponse)).call(this));

			_this25.setCustomerProfileId(null);
			_this25.setCustomerAddressId(null);
		}
		logger.debug('Exit CreateCustomerShippingAddressResponse constructor');
		return _possibleConstructorReturn(_this25);
	}

	_createClass(CreateCustomerShippingAddressResponse, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerAddressId',
		value: function setCustomerAddressId(p_customerAddressId) {
			this.customerAddressId = p_customerAddressId;
		}
	}, {
		key: 'getCustomerAddressId',
		value: function getCustomerAddressId() {
			if ('customerAddressId' in this) {
				return this.customerAddressId;
			}
		}
	}]);

	return CreateCustomerShippingAddressResponse;
}(ANetApiResponse);

module.exports.CreateCustomerShippingAddressResponse = CreateCustomerShippingAddressResponse;

var CreateTransactionRequest = function (_ANetApiRequest13) {
	_inherits(CreateTransactionRequest, _ANetApiRequest13);

	_createClass(CreateTransactionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateTransactionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createTransactionRequest': this };
			logger.debug('Exit CreateTransactionRequest getJSON');
			return obj;
		}
	}]);

	function CreateTransactionRequest(obj) {
		_classCallCheck(this, CreateTransactionRequest);

		logger.debug('Enter CreateTransactionRequest constructor');
		if (arguments.length == 1) {
			var _this26 = _possibleConstructorReturn(this, (CreateTransactionRequest.__proto__ || Object.getPrototypeOf(CreateTransactionRequest)).call(this, obj));

			if ('transactionRequest' in obj && obj.transactionRequest != null) {
				_this26.setTransactionRequest(new TransactionRequestType(obj.transactionRequest));
			}
		} else {
			var _this26 = _possibleConstructorReturn(this, (CreateTransactionRequest.__proto__ || Object.getPrototypeOf(CreateTransactionRequest)).call(this));

			_this26.setTransactionRequest(null);
		}
		logger.debug('Exit CreateTransactionRequest constructor');
		return _possibleConstructorReturn(_this26);
	}

	_createClass(CreateTransactionRequest, [{
		key: 'setTransactionRequest',
		value: function setTransactionRequest(p_transactionRequest) {
			this.transactionRequest = p_transactionRequest;
		}
	}, {
		key: 'getTransactionRequest',
		value: function getTransactionRequest() {
			if ('transactionRequest' in this) {
				return this.transactionRequest;
			}
		}
	}]);

	return CreateTransactionRequest;
}(ANetApiRequest);

module.exports.CreateTransactionRequest = CreateTransactionRequest;

var CreateTransactionResponse = function (_ANetApiResponse12) {
	_inherits(CreateTransactionResponse, _ANetApiResponse12);

	_createClass(CreateTransactionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter CreateTransactionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'createTransactionResponse': this };
			logger.debug('Exit CreateTransactionResponse getJSON');
			return obj;
		}
	}]);

	function CreateTransactionResponse(obj) {
		_classCallCheck(this, CreateTransactionResponse);

		logger.debug('Enter CreateTransactionResponse constructor');
		if (arguments.length == 1) {
			var _this27 = _possibleConstructorReturn(this, (CreateTransactionResponse.__proto__ || Object.getPrototypeOf(CreateTransactionResponse)).call(this, obj));

			if ('transactionResponse' in obj && obj.transactionResponse != null) {
				_this27.setTransactionResponse(new TransactionResponse(obj.transactionResponse));
			}
			if ('profileResponse' in obj && obj.profileResponse != null) {
				_this27.setProfileResponse(new CreateProfileResponse(obj.profileResponse));
			}
		} else {
			var _this27 = _possibleConstructorReturn(this, (CreateTransactionResponse.__proto__ || Object.getPrototypeOf(CreateTransactionResponse)).call(this));

			_this27.setTransactionResponse(null);
			_this27.setProfileResponse(null);
		}
		logger.debug('Exit CreateTransactionResponse constructor');
		return _possibleConstructorReturn(_this27);
	}

	_createClass(CreateTransactionResponse, [{
		key: 'setTransactionResponse',
		value: function setTransactionResponse(p_transactionResponse) {
			this.transactionResponse = p_transactionResponse;
		}
	}, {
		key: 'getTransactionResponse',
		value: function getTransactionResponse() {
			if ('transactionResponse' in this) {
				return this.transactionResponse;
			}
		}
	}, {
		key: 'setProfileResponse',
		value: function setProfileResponse(p_profileResponse) {
			this.profileResponse = p_profileResponse;
		}
	}, {
		key: 'getProfileResponse',
		value: function getProfileResponse() {
			if ('profileResponse' in this) {
				return this.profileResponse;
			}
		}
	}]);

	return CreateTransactionResponse;
}(ANetApiResponse);

module.exports.CreateTransactionResponse = CreateTransactionResponse;

var CreditCardType = function (_CreditCardSimpleType) {
	_inherits(CreditCardType, _CreditCardSimpleType);

	function CreditCardType(obj) {
		_classCallCheck(this, CreditCardType);

		logger.debug('Enter CreditCardType constructor');
		if (arguments.length == 1) {
			var _this28 = _possibleConstructorReturn(this, (CreditCardType.__proto__ || Object.getPrototypeOf(CreditCardType)).call(this, obj));

			if ('cardCode' in obj && obj.cardCode != null) {
				_this28.setCardCode(obj.cardCode);
			}
			if ('isPaymentToken' in obj && obj.isPaymentToken != null) {
				_this28.setIsPaymentToken(obj.isPaymentToken);
			}
			if ('cryptogram' in obj && obj.cryptogram != null) {
				_this28.setCryptogram(obj.cryptogram);
			}
		} else {
			var _this28 = _possibleConstructorReturn(this, (CreditCardType.__proto__ || Object.getPrototypeOf(CreditCardType)).call(this));

			_this28.setCardCode(null);
			_this28.setIsPaymentToken(null);
			_this28.setCryptogram(null);
		}
		logger.debug('Exit CreditCardType constructor');
		return _possibleConstructorReturn(_this28);
	}

	_createClass(CreditCardType, [{
		key: 'setCardCode',
		value: function setCardCode(p_cardCode) {
			this.cardCode = p_cardCode;
		}
	}, {
		key: 'getCardCode',
		value: function getCardCode() {
			if ('cardCode' in this) {
				return this.cardCode;
			}
		}
	}, {
		key: 'setIsPaymentToken',
		value: function setIsPaymentToken(p_isPaymentToken) {
			this.isPaymentToken = p_isPaymentToken;
		}
	}, {
		key: 'getIsPaymentToken',
		value: function getIsPaymentToken() {
			if ('isPaymentToken' in this) {
				return this.isPaymentToken;
			}
		}
	}, {
		key: 'setCryptogram',
		value: function setCryptogram(p_cryptogram) {
			this.cryptogram = p_cryptogram;
		}
	}, {
		key: 'getCryptogram',
		value: function getCryptogram() {
			if ('cryptogram' in this) {
				return this.cryptogram;
			}
		}
	}]);

	return CreditCardType;
}(CreditCardSimpleType);

module.exports.CreditCardType = CreditCardType;

var CustomerAddressType = function (_NameAndAddressType) {
	_inherits(CustomerAddressType, _NameAndAddressType);

	function CustomerAddressType(obj) {
		_classCallCheck(this, CustomerAddressType);

		logger.debug('Enter CustomerAddressType constructor');
		if (arguments.length == 1) {
			var _this29 = _possibleConstructorReturn(this, (CustomerAddressType.__proto__ || Object.getPrototypeOf(CustomerAddressType)).call(this, obj));

			if ('phoneNumber' in obj && obj.phoneNumber != null) {
				_this29.setPhoneNumber(obj.phoneNumber);
			}
			if ('faxNumber' in obj && obj.faxNumber != null) {
				_this29.setFaxNumber(obj.faxNumber);
			}
			if ('email' in obj && obj.email != null) {
				_this29.setEmail(obj.email);
			}
		} else {
			var _this29 = _possibleConstructorReturn(this, (CustomerAddressType.__proto__ || Object.getPrototypeOf(CustomerAddressType)).call(this));

			_this29.setPhoneNumber(null);
			_this29.setFaxNumber(null);
			_this29.setEmail(null);
		}
		logger.debug('Exit CustomerAddressType constructor');
		return _possibleConstructorReturn(_this29);
	}

	_createClass(CustomerAddressType, [{
		key: 'setPhoneNumber',
		value: function setPhoneNumber(p_phoneNumber) {
			this.phoneNumber = p_phoneNumber;
		}
	}, {
		key: 'getPhoneNumber',
		value: function getPhoneNumber() {
			if ('phoneNumber' in this) {
				return this.phoneNumber;
			}
		}
	}, {
		key: 'setFaxNumber',
		value: function setFaxNumber(p_faxNumber) {
			this.faxNumber = p_faxNumber;
		}
	}, {
		key: 'getFaxNumber',
		value: function getFaxNumber() {
			if ('faxNumber' in this) {
				return this.faxNumber;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}]);

	return CustomerAddressType;
}(NameAndAddressType);

module.exports.CustomerAddressType = CustomerAddressType;

var CustomerPaymentProfileMaskedType = function (_CustomerPaymentProfi) {
	_inherits(CustomerPaymentProfileMaskedType, _CustomerPaymentProfi);

	function CustomerPaymentProfileMaskedType(obj) {
		_classCallCheck(this, CustomerPaymentProfileMaskedType);

		logger.debug('Enter CustomerPaymentProfileMaskedType constructor');
		if (arguments.length == 1) {
			var _this30 = _possibleConstructorReturn(this, (CustomerPaymentProfileMaskedType.__proto__ || Object.getPrototypeOf(CustomerPaymentProfileMaskedType)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this30.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this30.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('defaultPaymentProfile' in obj && obj.defaultPaymentProfile != null) {
				_this30.setDefaultPaymentProfile(obj.defaultPaymentProfile);
			}
			if ('payment' in obj && obj.payment != null) {
				_this30.setPayment(new PaymentMaskedType(obj.payment));
			}
			if ('driversLicense' in obj && obj.driversLicense != null) {
				_this30.setDriversLicense(new DriversLicenseMaskedType(obj.driversLicense));
			}
			if ('taxId' in obj && obj.taxId != null) {
				_this30.setTaxId(obj.taxId);
			}
			if ('subscriptionIds' in obj && obj.subscriptionIds != null) {
				_this30.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds));
			}
		} else {
			var _this30 = _possibleConstructorReturn(this, (CustomerPaymentProfileMaskedType.__proto__ || Object.getPrototypeOf(CustomerPaymentProfileMaskedType)).call(this));

			_this30.setCustomerProfileId(null);
			_this30.setCustomerPaymentProfileId(null);
			_this30.setDefaultPaymentProfile(null);
			_this30.setPayment(null);
			_this30.setDriversLicense(null);
			_this30.setTaxId(null);
			_this30.setSubscriptionIds(null);
		}
		logger.debug('Exit CustomerPaymentProfileMaskedType constructor');
		return _possibleConstructorReturn(_this30);
	}

	_createClass(CustomerPaymentProfileMaskedType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setDefaultPaymentProfile',
		value: function setDefaultPaymentProfile(p_defaultPaymentProfile) {
			this.defaultPaymentProfile = p_defaultPaymentProfile;
		}
	}, {
		key: 'getDefaultPaymentProfile',
		value: function getDefaultPaymentProfile() {
			if ('defaultPaymentProfile' in this) {
				return this.defaultPaymentProfile;
			}
		}
	}, {
		key: 'setPayment',
		value: function setPayment(p_payment) {
			this.payment = p_payment;
		}
	}, {
		key: 'getPayment',
		value: function getPayment() {
			if ('payment' in this) {
				return this.payment;
			}
		}
	}, {
		key: 'setDriversLicense',
		value: function setDriversLicense(p_driversLicense) {
			this.driversLicense = p_driversLicense;
		}
	}, {
		key: 'getDriversLicense',
		value: function getDriversLicense() {
			if ('driversLicense' in this) {
				return this.driversLicense;
			}
		}
	}, {
		key: 'setTaxId',
		value: function setTaxId(p_taxId) {
			this.taxId = p_taxId;
		}
	}, {
		key: 'getTaxId',
		value: function getTaxId() {
			if ('taxId' in this) {
				return this.taxId;
			}
		}
	}, {
		key: 'setSubscriptionIds',
		value: function setSubscriptionIds(p_subscriptionIds) {
			this.subscriptionIds = p_subscriptionIds;
		}
	}, {
		key: 'getSubscriptionIds',
		value: function getSubscriptionIds() {
			if ('subscriptionIds' in this) {
				return this.subscriptionIds;
			}
		}
	}]);

	return CustomerPaymentProfileMaskedType;
}(CustomerPaymentProfileBaseType);

module.exports.CustomerPaymentProfileMaskedType = CustomerPaymentProfileMaskedType;

var CustomerPaymentProfileType = function (_CustomerPaymentProfi2) {
	_inherits(CustomerPaymentProfileType, _CustomerPaymentProfi2);

	function CustomerPaymentProfileType(obj) {
		_classCallCheck(this, CustomerPaymentProfileType);

		logger.debug('Enter CustomerPaymentProfileType constructor');
		if (arguments.length == 1) {
			var _this31 = _possibleConstructorReturn(this, (CustomerPaymentProfileType.__proto__ || Object.getPrototypeOf(CustomerPaymentProfileType)).call(this, obj));

			if ('payment' in obj && obj.payment != null) {
				_this31.setPayment(new PaymentType(obj.payment));
			}
			if ('driversLicense' in obj && obj.driversLicense != null) {
				_this31.setDriversLicense(new DriversLicenseType(obj.driversLicense));
			}
			if ('taxId' in obj && obj.taxId != null) {
				_this31.setTaxId(obj.taxId);
			}
			if ('defaultPaymentProfile' in obj && obj.defaultPaymentProfile != null) {
				_this31.setDefaultPaymentProfile(obj.defaultPaymentProfile);
			}
		} else {
			var _this31 = _possibleConstructorReturn(this, (CustomerPaymentProfileType.__proto__ || Object.getPrototypeOf(CustomerPaymentProfileType)).call(this));

			_this31.setPayment(null);
			_this31.setDriversLicense(null);
			_this31.setTaxId(null);
			_this31.setDefaultPaymentProfile(null);
		}
		logger.debug('Exit CustomerPaymentProfileType constructor');
		return _possibleConstructorReturn(_this31);
	}

	_createClass(CustomerPaymentProfileType, [{
		key: 'setPayment',
		value: function setPayment(p_payment) {
			this.payment = p_payment;
		}
	}, {
		key: 'getPayment',
		value: function getPayment() {
			if ('payment' in this) {
				return this.payment;
			}
		}
	}, {
		key: 'setDriversLicense',
		value: function setDriversLicense(p_driversLicense) {
			this.driversLicense = p_driversLicense;
		}
	}, {
		key: 'getDriversLicense',
		value: function getDriversLicense() {
			if ('driversLicense' in this) {
				return this.driversLicense;
			}
		}
	}, {
		key: 'setTaxId',
		value: function setTaxId(p_taxId) {
			this.taxId = p_taxId;
		}
	}, {
		key: 'getTaxId',
		value: function getTaxId() {
			if ('taxId' in this) {
				return this.taxId;
			}
		}
	}, {
		key: 'setDefaultPaymentProfile',
		value: function setDefaultPaymentProfile(p_defaultPaymentProfile) {
			this.defaultPaymentProfile = p_defaultPaymentProfile;
		}
	}, {
		key: 'getDefaultPaymentProfile',
		value: function getDefaultPaymentProfile() {
			if ('defaultPaymentProfile' in this) {
				return this.defaultPaymentProfile;
			}
		}
	}]);

	return CustomerPaymentProfileType;
}(CustomerPaymentProfileBaseType);

module.exports.CustomerPaymentProfileType = CustomerPaymentProfileType;

var CustomerProfileExType = function (_CustomerProfileBaseT) {
	_inherits(CustomerProfileExType, _CustomerProfileBaseT);

	function CustomerProfileExType(obj) {
		_classCallCheck(this, CustomerProfileExType);

		logger.debug('Enter CustomerProfileExType constructor');
		if (arguments.length == 1) {
			var _this32 = _possibleConstructorReturn(this, (CustomerProfileExType.__proto__ || Object.getPrototypeOf(CustomerProfileExType)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this32.setCustomerProfileId(obj.customerProfileId);
			}
		} else {
			var _this32 = _possibleConstructorReturn(this, (CustomerProfileExType.__proto__ || Object.getPrototypeOf(CustomerProfileExType)).call(this));

			_this32.setCustomerProfileId(null);
		}
		logger.debug('Exit CustomerProfileExType constructor');
		return _possibleConstructorReturn(_this32);
	}

	_createClass(CustomerProfileExType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}]);

	return CustomerProfileExType;
}(CustomerProfileBaseType);

module.exports.CustomerProfileExType = CustomerProfileExType;

var CustomerProfileType = function (_CustomerProfileBaseT2) {
	_inherits(CustomerProfileType, _CustomerProfileBaseT2);

	function CustomerProfileType(obj) {
		_classCallCheck(this, CustomerProfileType);

		logger.debug('Enter CustomerProfileType constructor');
		if (arguments.length == 1) {
			var _this33 = _possibleConstructorReturn(this, (CustomerProfileType.__proto__ || Object.getPrototypeOf(CustomerProfileType)).call(this, obj));

			if (obj.paymentProfiles != undefined && obj.paymentProfiles != null) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function (item) {
					paymentProfilesList.push(new CustomerPaymentProfileType(item));
				});
				_this33.setPaymentProfiles(paymentProfilesList);
			}
			if (obj.shipToList != undefined && obj.shipToList != null) {
				var shipToListList = [];
				obj.shipToList.forEach(function (item) {
					shipToListList.push(new CustomerAddressType(item));
				});
				_this33.setShipToList(shipToListList);
			}
		} else {
			var _this33 = _possibleConstructorReturn(this, (CustomerProfileType.__proto__ || Object.getPrototypeOf(CustomerProfileType)).call(this));

			_this33.setPaymentProfiles(null);
			_this33.setShipToList(null);
		}
		logger.debug('Exit CustomerProfileType constructor');
		return _possibleConstructorReturn(_this33);
	}

	_createClass(CustomerProfileType, [{
		key: 'setPaymentProfiles',
		value: function setPaymentProfiles(p_paymentProfiles) {
			this.paymentProfiles = p_paymentProfiles;
		}
	}, {
		key: 'getPaymentProfiles',
		value: function getPaymentProfiles() {
			if ('paymentProfiles' in this) {
				return this.paymentProfiles;
			}
		}
	}, {
		key: 'setShipToList',
		value: function setShipToList(p_shipToList) {
			this.shipToList = p_shipToList;
		}
	}, {
		key: 'getShipToList',
		value: function getShipToList() {
			if ('shipToList' in this) {
				return this.shipToList;
			}
		}
	}]);

	return CustomerProfileType;
}(CustomerProfileBaseType);

module.exports.CustomerProfileType = CustomerProfileType;

var DecryptPaymentDataRequest = function (_ANetApiRequest14) {
	_inherits(DecryptPaymentDataRequest, _ANetApiRequest14);

	_createClass(DecryptPaymentDataRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DecryptPaymentDataRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'decryptPaymentDataRequest': this };
			logger.debug('Exit DecryptPaymentDataRequest getJSON');
			return obj;
		}
	}]);

	function DecryptPaymentDataRequest(obj) {
		_classCallCheck(this, DecryptPaymentDataRequest);

		logger.debug('Enter DecryptPaymentDataRequest constructor');
		if (arguments.length == 1) {
			var _this34 = _possibleConstructorReturn(this, (DecryptPaymentDataRequest.__proto__ || Object.getPrototypeOf(DecryptPaymentDataRequest)).call(this, obj));

			if ('opaqueData' in obj && obj.opaqueData != null) {
				_this34.setOpaqueData(new OpaqueDataType(obj.opaqueData));
			}
			if ('callId' in obj && obj.callId != null) {
				_this34.setCallId(obj.callId);
			}
		} else {
			var _this34 = _possibleConstructorReturn(this, (DecryptPaymentDataRequest.__proto__ || Object.getPrototypeOf(DecryptPaymentDataRequest)).call(this));

			_this34.setOpaqueData(null);
			_this34.setCallId(null);
		}
		logger.debug('Exit DecryptPaymentDataRequest constructor');
		return _possibleConstructorReturn(_this34);
	}

	_createClass(DecryptPaymentDataRequest, [{
		key: 'setOpaqueData',
		value: function setOpaqueData(p_opaqueData) {
			this.opaqueData = p_opaqueData;
		}
	}, {
		key: 'getOpaqueData',
		value: function getOpaqueData() {
			if ('opaqueData' in this) {
				return this.opaqueData;
			}
		}
	}, {
		key: 'setCallId',
		value: function setCallId(p_callId) {
			this.callId = p_callId;
		}
	}, {
		key: 'getCallId',
		value: function getCallId() {
			if ('callId' in this) {
				return this.callId;
			}
		}
	}]);

	return DecryptPaymentDataRequest;
}(ANetApiRequest);

module.exports.DecryptPaymentDataRequest = DecryptPaymentDataRequest;

var DecryptPaymentDataResponse = function (_ANetApiResponse13) {
	_inherits(DecryptPaymentDataResponse, _ANetApiResponse13);

	_createClass(DecryptPaymentDataResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DecryptPaymentDataResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'decryptPaymentDataResponse': this };
			logger.debug('Exit DecryptPaymentDataResponse getJSON');
			return obj;
		}
	}]);

	function DecryptPaymentDataResponse(obj) {
		_classCallCheck(this, DecryptPaymentDataResponse);

		logger.debug('Enter DecryptPaymentDataResponse constructor');
		if (arguments.length == 1) {
			var _this35 = _possibleConstructorReturn(this, (DecryptPaymentDataResponse.__proto__ || Object.getPrototypeOf(DecryptPaymentDataResponse)).call(this, obj));

			if ('shippingInfo' in obj && obj.shippingInfo != null) {
				_this35.setShippingInfo(new CustomerAddressType(obj.shippingInfo));
			}
			if ('billingInfo' in obj && obj.billingInfo != null) {
				_this35.setBillingInfo(new CustomerAddressType(obj.billingInfo));
			}
			if ('cardInfo' in obj && obj.cardInfo != null) {
				_this35.setCardInfo(new CreditCardMaskedType(obj.cardInfo));
			}
			if ('paymentDetails' in obj && obj.paymentDetails != null) {
				_this35.setPaymentDetails(new PaymentDetails(obj.paymentDetails));
			}
		} else {
			var _this35 = _possibleConstructorReturn(this, (DecryptPaymentDataResponse.__proto__ || Object.getPrototypeOf(DecryptPaymentDataResponse)).call(this));

			_this35.setShippingInfo(null);
			_this35.setBillingInfo(null);
			_this35.setCardInfo(null);
			_this35.setPaymentDetails(null);
		}
		logger.debug('Exit DecryptPaymentDataResponse constructor');
		return _possibleConstructorReturn(_this35);
	}

	_createClass(DecryptPaymentDataResponse, [{
		key: 'setShippingInfo',
		value: function setShippingInfo(p_shippingInfo) {
			this.shippingInfo = p_shippingInfo;
		}
	}, {
		key: 'getShippingInfo',
		value: function getShippingInfo() {
			if ('shippingInfo' in this) {
				return this.shippingInfo;
			}
		}
	}, {
		key: 'setBillingInfo',
		value: function setBillingInfo(p_billingInfo) {
			this.billingInfo = p_billingInfo;
		}
	}, {
		key: 'getBillingInfo',
		value: function getBillingInfo() {
			if ('billingInfo' in this) {
				return this.billingInfo;
			}
		}
	}, {
		key: 'setCardInfo',
		value: function setCardInfo(p_cardInfo) {
			this.cardInfo = p_cardInfo;
		}
	}, {
		key: 'getCardInfo',
		value: function getCardInfo() {
			if ('cardInfo' in this) {
				return this.cardInfo;
			}
		}
	}, {
		key: 'setPaymentDetails',
		value: function setPaymentDetails(p_paymentDetails) {
			this.paymentDetails = p_paymentDetails;
		}
	}, {
		key: 'getPaymentDetails',
		value: function getPaymentDetails() {
			if ('paymentDetails' in this) {
				return this.paymentDetails;
			}
		}
	}]);

	return DecryptPaymentDataResponse;
}(ANetApiResponse);

module.exports.DecryptPaymentDataResponse = DecryptPaymentDataResponse;

var DeleteCustomerPaymentProfileRequest = function (_ANetApiRequest15) {
	_inherits(DeleteCustomerPaymentProfileRequest, _ANetApiRequest15);

	_createClass(DeleteCustomerPaymentProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DeleteCustomerPaymentProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'deleteCustomerPaymentProfileRequest': this };
			logger.debug('Exit DeleteCustomerPaymentProfileRequest getJSON');
			return obj;
		}
	}]);

	function DeleteCustomerPaymentProfileRequest(obj) {
		_classCallCheck(this, DeleteCustomerPaymentProfileRequest);

		logger.debug('Enter DeleteCustomerPaymentProfileRequest constructor');
		if (arguments.length == 1) {
			var _this36 = _possibleConstructorReturn(this, (DeleteCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(DeleteCustomerPaymentProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this36.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this36.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
		} else {
			var _this36 = _possibleConstructorReturn(this, (DeleteCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(DeleteCustomerPaymentProfileRequest)).call(this));

			_this36.setCustomerProfileId(null);
			_this36.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit DeleteCustomerPaymentProfileRequest constructor');
		return _possibleConstructorReturn(_this36);
	}

	_createClass(DeleteCustomerPaymentProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}]);

	return DeleteCustomerPaymentProfileRequest;
}(ANetApiRequest);

module.exports.DeleteCustomerPaymentProfileRequest = DeleteCustomerPaymentProfileRequest;

var DeleteCustomerPaymentProfileResponse = function (_ANetApiResponse14) {
	_inherits(DeleteCustomerPaymentProfileResponse, _ANetApiResponse14);

	_createClass(DeleteCustomerPaymentProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DeleteCustomerPaymentProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'deleteCustomerPaymentProfileResponse': this };
			logger.debug('Exit DeleteCustomerPaymentProfileResponse getJSON');
			return obj;
		}
	}]);

	function DeleteCustomerPaymentProfileResponse(obj) {
		_classCallCheck(this, DeleteCustomerPaymentProfileResponse);

		if (arguments.length == 1) {
			var _this37 = _possibleConstructorReturn(this, (DeleteCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(DeleteCustomerPaymentProfileResponse)).call(this, obj));
		} else {
			var _this37 = _possibleConstructorReturn(this, (DeleteCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(DeleteCustomerPaymentProfileResponse)).call(this));
		}return _possibleConstructorReturn(_this37);
	}

	return DeleteCustomerPaymentProfileResponse;
}(ANetApiResponse);

module.exports.DeleteCustomerPaymentProfileResponse = DeleteCustomerPaymentProfileResponse;

var DeleteCustomerProfileRequest = function (_ANetApiRequest16) {
	_inherits(DeleteCustomerProfileRequest, _ANetApiRequest16);

	_createClass(DeleteCustomerProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DeleteCustomerProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'deleteCustomerProfileRequest': this };
			logger.debug('Exit DeleteCustomerProfileRequest getJSON');
			return obj;
		}
	}]);

	function DeleteCustomerProfileRequest(obj) {
		_classCallCheck(this, DeleteCustomerProfileRequest);

		logger.debug('Enter DeleteCustomerProfileRequest constructor');
		if (arguments.length == 1) {
			var _this38 = _possibleConstructorReturn(this, (DeleteCustomerProfileRequest.__proto__ || Object.getPrototypeOf(DeleteCustomerProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this38.setCustomerProfileId(obj.customerProfileId);
			}
		} else {
			var _this38 = _possibleConstructorReturn(this, (DeleteCustomerProfileRequest.__proto__ || Object.getPrototypeOf(DeleteCustomerProfileRequest)).call(this));

			_this38.setCustomerProfileId(null);
		}
		logger.debug('Exit DeleteCustomerProfileRequest constructor');
		return _possibleConstructorReturn(_this38);
	}

	_createClass(DeleteCustomerProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}]);

	return DeleteCustomerProfileRequest;
}(ANetApiRequest);

module.exports.DeleteCustomerProfileRequest = DeleteCustomerProfileRequest;

var DeleteCustomerProfileResponse = function (_ANetApiResponse15) {
	_inherits(DeleteCustomerProfileResponse, _ANetApiResponse15);

	_createClass(DeleteCustomerProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DeleteCustomerProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'deleteCustomerProfileResponse': this };
			logger.debug('Exit DeleteCustomerProfileResponse getJSON');
			return obj;
		}
	}]);

	function DeleteCustomerProfileResponse(obj) {
		_classCallCheck(this, DeleteCustomerProfileResponse);

		if (arguments.length == 1) {
			var _this39 = _possibleConstructorReturn(this, (DeleteCustomerProfileResponse.__proto__ || Object.getPrototypeOf(DeleteCustomerProfileResponse)).call(this, obj));
		} else {
			var _this39 = _possibleConstructorReturn(this, (DeleteCustomerProfileResponse.__proto__ || Object.getPrototypeOf(DeleteCustomerProfileResponse)).call(this));
		}return _possibleConstructorReturn(_this39);
	}

	return DeleteCustomerProfileResponse;
}(ANetApiResponse);

module.exports.DeleteCustomerProfileResponse = DeleteCustomerProfileResponse;

var DeleteCustomerShippingAddressRequest = function (_ANetApiRequest17) {
	_inherits(DeleteCustomerShippingAddressRequest, _ANetApiRequest17);

	_createClass(DeleteCustomerShippingAddressRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DeleteCustomerShippingAddressRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'deleteCustomerShippingAddressRequest': this };
			logger.debug('Exit DeleteCustomerShippingAddressRequest getJSON');
			return obj;
		}
	}]);

	function DeleteCustomerShippingAddressRequest(obj) {
		_classCallCheck(this, DeleteCustomerShippingAddressRequest);

		logger.debug('Enter DeleteCustomerShippingAddressRequest constructor');
		if (arguments.length == 1) {
			var _this40 = _possibleConstructorReturn(this, (DeleteCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(DeleteCustomerShippingAddressRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this40.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerAddressId' in obj && obj.customerAddressId != null) {
				_this40.setCustomerAddressId(obj.customerAddressId);
			}
		} else {
			var _this40 = _possibleConstructorReturn(this, (DeleteCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(DeleteCustomerShippingAddressRequest)).call(this));

			_this40.setCustomerProfileId(null);
			_this40.setCustomerAddressId(null);
		}
		logger.debug('Exit DeleteCustomerShippingAddressRequest constructor');
		return _possibleConstructorReturn(_this40);
	}

	_createClass(DeleteCustomerShippingAddressRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerAddressId',
		value: function setCustomerAddressId(p_customerAddressId) {
			this.customerAddressId = p_customerAddressId;
		}
	}, {
		key: 'getCustomerAddressId',
		value: function getCustomerAddressId() {
			if ('customerAddressId' in this) {
				return this.customerAddressId;
			}
		}
	}]);

	return DeleteCustomerShippingAddressRequest;
}(ANetApiRequest);

module.exports.DeleteCustomerShippingAddressRequest = DeleteCustomerShippingAddressRequest;

var DeleteCustomerShippingAddressResponse = function (_ANetApiResponse16) {
	_inherits(DeleteCustomerShippingAddressResponse, _ANetApiResponse16);

	_createClass(DeleteCustomerShippingAddressResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter DeleteCustomerShippingAddressResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'deleteCustomerShippingAddressResponse': this };
			logger.debug('Exit DeleteCustomerShippingAddressResponse getJSON');
			return obj;
		}
	}]);

	function DeleteCustomerShippingAddressResponse(obj) {
		_classCallCheck(this, DeleteCustomerShippingAddressResponse);

		if (arguments.length == 1) {
			var _this41 = _possibleConstructorReturn(this, (DeleteCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(DeleteCustomerShippingAddressResponse)).call(this, obj));
		} else {
			var _this41 = _possibleConstructorReturn(this, (DeleteCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(DeleteCustomerShippingAddressResponse)).call(this));
		}return _possibleConstructorReturn(_this41);
	}

	return DeleteCustomerShippingAddressResponse;
}(ANetApiResponse);

module.exports.DeleteCustomerShippingAddressResponse = DeleteCustomerShippingAddressResponse;

var EmailSettingsType = function (_ArrayOfSetting) {
	_inherits(EmailSettingsType, _ArrayOfSetting);

	function EmailSettingsType(obj) {
		_classCallCheck(this, EmailSettingsType);

		logger.debug('Enter EmailSettingsType constructor');
		if (arguments.length == 1) {
			var _this42 = _possibleConstructorReturn(this, (EmailSettingsType.__proto__ || Object.getPrototypeOf(EmailSettingsType)).call(this, obj));

			if ('version' in obj && obj.version != null) {
				_this42.setVersion(obj.version);
			}
		} else {
			var _this42 = _possibleConstructorReturn(this, (EmailSettingsType.__proto__ || Object.getPrototypeOf(EmailSettingsType)).call(this));

			_this42.setVersion(null);
		}
		logger.debug('Exit EmailSettingsType constructor');
		return _possibleConstructorReturn(_this42);
	}

	_createClass(EmailSettingsType, [{
		key: 'setVersion',
		value: function setVersion(p_version) {
			this.version = p_version;
		}
	}, {
		key: 'getVersion',
		value: function getVersion() {
			if ('version' in this) {
				return this.version;
			}
		}
	}]);

	return EmailSettingsType;
}(ArrayOfSetting);

module.exports.EmailSettingsType = EmailSettingsType;

var GetAUJobDetailsRequest = function (_ANetApiRequest18) {
	_inherits(GetAUJobDetailsRequest, _ANetApiRequest18);

	_createClass(GetAUJobDetailsRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetAUJobDetailsRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getAUJobDetailsRequest': this };
			logger.debug('Exit GetAUJobDetailsRequest getJSON');
			return obj;
		}
	}]);

	function GetAUJobDetailsRequest(obj) {
		_classCallCheck(this, GetAUJobDetailsRequest);

		logger.debug('Enter GetAUJobDetailsRequest constructor');
		if (arguments.length == 1) {
			var _this43 = _possibleConstructorReturn(this, (GetAUJobDetailsRequest.__proto__ || Object.getPrototypeOf(GetAUJobDetailsRequest)).call(this, obj));

			if ('month' in obj && obj.month != null) {
				_this43.setMonth(obj.month);
			}
			if ('modifiedTypeFilter' in obj && obj.modifiedTypeFilter != null) {
				_this43.setModifiedTypeFilter(obj.modifiedTypeFilter);
			}
			if ('paging' in obj && obj.paging != null) {
				_this43.setPaging(new Paging(obj.paging));
			}
		} else {
			var _this43 = _possibleConstructorReturn(this, (GetAUJobDetailsRequest.__proto__ || Object.getPrototypeOf(GetAUJobDetailsRequest)).call(this));

			_this43.setMonth(null);
			_this43.setModifiedTypeFilter(null);
			_this43.setPaging(null);
		}
		logger.debug('Exit GetAUJobDetailsRequest constructor');
		return _possibleConstructorReturn(_this43);
	}

	_createClass(GetAUJobDetailsRequest, [{
		key: 'setMonth',
		value: function setMonth(p_month) {
			this.month = p_month;
		}
	}, {
		key: 'getMonth',
		value: function getMonth() {
			if ('month' in this) {
				return this.month;
			}
		}
	}, {
		key: 'setModifiedTypeFilter',
		value: function setModifiedTypeFilter(p_modifiedTypeFilter) {
			this.modifiedTypeFilter = p_modifiedTypeFilter;
		}
	}, {
		key: 'getModifiedTypeFilter',
		value: function getModifiedTypeFilter() {
			if ('modifiedTypeFilter' in this) {
				return this.modifiedTypeFilter;
			}
		}
	}, {
		key: 'setPaging',
		value: function setPaging(p_paging) {
			this.paging = p_paging;
		}
	}, {
		key: 'getPaging',
		value: function getPaging() {
			if ('paging' in this) {
				return this.paging;
			}
		}
	}]);

	return GetAUJobDetailsRequest;
}(ANetApiRequest);

module.exports.GetAUJobDetailsRequest = GetAUJobDetailsRequest;

var GetAUJobDetailsResponse = function (_ANetApiResponse17) {
	_inherits(GetAUJobDetailsResponse, _ANetApiResponse17);

	_createClass(GetAUJobDetailsResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetAUJobDetailsResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getAUJobDetailsResponse': this };
			logger.debug('Exit GetAUJobDetailsResponse getJSON');
			return obj;
		}
	}]);

	function GetAUJobDetailsResponse(obj) {
		_classCallCheck(this, GetAUJobDetailsResponse);

		logger.debug('Enter GetAUJobDetailsResponse constructor');
		if (arguments.length == 1) {
			var _this44 = _possibleConstructorReturn(this, (GetAUJobDetailsResponse.__proto__ || Object.getPrototypeOf(GetAUJobDetailsResponse)).call(this, obj));

			if ('totalNumInResultSet' in obj && obj.totalNumInResultSet != null) {
				_this44.setTotalNumInResultSet(obj.totalNumInResultSet);
			}
			if ('auDetails' in obj && obj.auDetails != null) {
				_this44.setAuDetails(new ListOfAUDetailsType(obj.auDetails));
			}
		} else {
			var _this44 = _possibleConstructorReturn(this, (GetAUJobDetailsResponse.__proto__ || Object.getPrototypeOf(GetAUJobDetailsResponse)).call(this));

			_this44.setTotalNumInResultSet(null);
			_this44.setAuDetails(null);
		}
		logger.debug('Exit GetAUJobDetailsResponse constructor');
		return _possibleConstructorReturn(_this44);
	}

	_createClass(GetAUJobDetailsResponse, [{
		key: 'setTotalNumInResultSet',
		value: function setTotalNumInResultSet(p_totalNumInResultSet) {
			this.totalNumInResultSet = p_totalNumInResultSet;
		}
	}, {
		key: 'getTotalNumInResultSet',
		value: function getTotalNumInResultSet() {
			if ('totalNumInResultSet' in this) {
				return this.totalNumInResultSet;
			}
		}
	}, {
		key: 'setAuDetails',
		value: function setAuDetails(p_auDetails) {
			this.auDetails = p_auDetails;
		}
	}, {
		key: 'getAuDetails',
		value: function getAuDetails() {
			if ('auDetails' in this) {
				return this.auDetails;
			}
		}
	}]);

	return GetAUJobDetailsResponse;
}(ANetApiResponse);

module.exports.GetAUJobDetailsResponse = GetAUJobDetailsResponse;

var GetAUJobSummaryRequest = function (_ANetApiRequest19) {
	_inherits(GetAUJobSummaryRequest, _ANetApiRequest19);

	_createClass(GetAUJobSummaryRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetAUJobSummaryRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getAUJobSummaryRequest': this };
			logger.debug('Exit GetAUJobSummaryRequest getJSON');
			return obj;
		}
	}]);

	function GetAUJobSummaryRequest(obj) {
		_classCallCheck(this, GetAUJobSummaryRequest);

		logger.debug('Enter GetAUJobSummaryRequest constructor');
		if (arguments.length == 1) {
			var _this45 = _possibleConstructorReturn(this, (GetAUJobSummaryRequest.__proto__ || Object.getPrototypeOf(GetAUJobSummaryRequest)).call(this, obj));

			if ('month' in obj && obj.month != null) {
				_this45.setMonth(obj.month);
			}
		} else {
			var _this45 = _possibleConstructorReturn(this, (GetAUJobSummaryRequest.__proto__ || Object.getPrototypeOf(GetAUJobSummaryRequest)).call(this));

			_this45.setMonth(null);
		}
		logger.debug('Exit GetAUJobSummaryRequest constructor');
		return _possibleConstructorReturn(_this45);
	}

	_createClass(GetAUJobSummaryRequest, [{
		key: 'setMonth',
		value: function setMonth(p_month) {
			this.month = p_month;
		}
	}, {
		key: 'getMonth',
		value: function getMonth() {
			if ('month' in this) {
				return this.month;
			}
		}
	}]);

	return GetAUJobSummaryRequest;
}(ANetApiRequest);

module.exports.GetAUJobSummaryRequest = GetAUJobSummaryRequest;

var GetAUJobSummaryResponse = function (_ANetApiResponse18) {
	_inherits(GetAUJobSummaryResponse, _ANetApiResponse18);

	_createClass(GetAUJobSummaryResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetAUJobSummaryResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getAUJobSummaryResponse': this };
			logger.debug('Exit GetAUJobSummaryResponse getJSON');
			return obj;
		}
	}]);

	function GetAUJobSummaryResponse(obj) {
		_classCallCheck(this, GetAUJobSummaryResponse);

		logger.debug('Enter GetAUJobSummaryResponse constructor');
		if (arguments.length == 1) {
			var _this46 = _possibleConstructorReturn(this, (GetAUJobSummaryResponse.__proto__ || Object.getPrototypeOf(GetAUJobSummaryResponse)).call(this, obj));

			if ('auSummary' in obj && obj.auSummary != null) {
				_this46.setAuSummary(new ArrayOfAUResponseType(obj.auSummary));
			}
		} else {
			var _this46 = _possibleConstructorReturn(this, (GetAUJobSummaryResponse.__proto__ || Object.getPrototypeOf(GetAUJobSummaryResponse)).call(this));

			_this46.setAuSummary(null);
		}
		logger.debug('Exit GetAUJobSummaryResponse constructor');
		return _possibleConstructorReturn(_this46);
	}

	_createClass(GetAUJobSummaryResponse, [{
		key: 'setAuSummary',
		value: function setAuSummary(p_auSummary) {
			this.auSummary = p_auSummary;
		}
	}, {
		key: 'getAuSummary',
		value: function getAuSummary() {
			if ('auSummary' in this) {
				return this.auSummary;
			}
		}
	}]);

	return GetAUJobSummaryResponse;
}(ANetApiResponse);

module.exports.GetAUJobSummaryResponse = GetAUJobSummaryResponse;

var GetBatchStatisticsRequest = function (_ANetApiRequest20) {
	_inherits(GetBatchStatisticsRequest, _ANetApiRequest20);

	_createClass(GetBatchStatisticsRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetBatchStatisticsRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getBatchStatisticsRequest': this };
			logger.debug('Exit GetBatchStatisticsRequest getJSON');
			return obj;
		}
	}]);

	function GetBatchStatisticsRequest(obj) {
		_classCallCheck(this, GetBatchStatisticsRequest);

		logger.debug('Enter GetBatchStatisticsRequest constructor');
		if (arguments.length == 1) {
			var _this47 = _possibleConstructorReturn(this, (GetBatchStatisticsRequest.__proto__ || Object.getPrototypeOf(GetBatchStatisticsRequest)).call(this, obj));

			if ('batchId' in obj && obj.batchId != null) {
				_this47.setBatchId(obj.batchId);
			}
		} else {
			var _this47 = _possibleConstructorReturn(this, (GetBatchStatisticsRequest.__proto__ || Object.getPrototypeOf(GetBatchStatisticsRequest)).call(this));

			_this47.setBatchId(null);
		}
		logger.debug('Exit GetBatchStatisticsRequest constructor');
		return _possibleConstructorReturn(_this47);
	}

	_createClass(GetBatchStatisticsRequest, [{
		key: 'setBatchId',
		value: function setBatchId(p_batchId) {
			this.batchId = p_batchId;
		}
	}, {
		key: 'getBatchId',
		value: function getBatchId() {
			if ('batchId' in this) {
				return this.batchId;
			}
		}
	}]);

	return GetBatchStatisticsRequest;
}(ANetApiRequest);

module.exports.GetBatchStatisticsRequest = GetBatchStatisticsRequest;

var GetBatchStatisticsResponse = function (_ANetApiResponse19) {
	_inherits(GetBatchStatisticsResponse, _ANetApiResponse19);

	_createClass(GetBatchStatisticsResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetBatchStatisticsResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getBatchStatisticsResponse': this };
			logger.debug('Exit GetBatchStatisticsResponse getJSON');
			return obj;
		}
	}]);

	function GetBatchStatisticsResponse(obj) {
		_classCallCheck(this, GetBatchStatisticsResponse);

		logger.debug('Enter GetBatchStatisticsResponse constructor');
		if (arguments.length == 1) {
			var _this48 = _possibleConstructorReturn(this, (GetBatchStatisticsResponse.__proto__ || Object.getPrototypeOf(GetBatchStatisticsResponse)).call(this, obj));

			if ('batch' in obj && obj.batch != null) {
				_this48.setBatch(new BatchDetailsType(obj.batch));
			}
		} else {
			var _this48 = _possibleConstructorReturn(this, (GetBatchStatisticsResponse.__proto__ || Object.getPrototypeOf(GetBatchStatisticsResponse)).call(this));

			_this48.setBatch(null);
		}
		logger.debug('Exit GetBatchStatisticsResponse constructor');
		return _possibleConstructorReturn(_this48);
	}

	_createClass(GetBatchStatisticsResponse, [{
		key: 'setBatch',
		value: function setBatch(p_batch) {
			this.batch = p_batch;
		}
	}, {
		key: 'getBatch',
		value: function getBatch() {
			if ('batch' in this) {
				return this.batch;
			}
		}
	}]);

	return GetBatchStatisticsResponse;
}(ANetApiResponse);

module.exports.GetBatchStatisticsResponse = GetBatchStatisticsResponse;

var GetCustomerPaymentProfileListRequest = function (_ANetApiRequest21) {
	_inherits(GetCustomerPaymentProfileListRequest, _ANetApiRequest21);

	_createClass(GetCustomerPaymentProfileListRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerPaymentProfileListRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerPaymentProfileListRequest': this };
			logger.debug('Exit GetCustomerPaymentProfileListRequest getJSON');
			return obj;
		}
	}]);

	function GetCustomerPaymentProfileListRequest(obj) {
		_classCallCheck(this, GetCustomerPaymentProfileListRequest);

		logger.debug('Enter GetCustomerPaymentProfileListRequest constructor');
		if (arguments.length == 1) {
			var _this49 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileListRequest.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileListRequest)).call(this, obj));

			if ('searchType' in obj && obj.searchType != null) {
				_this49.setSearchType(obj.searchType);
			}
			if ('month' in obj && obj.month != null) {
				_this49.setMonth(obj.month);
			}
			if ('sorting' in obj && obj.sorting != null) {
				_this49.setSorting(new CustomerPaymentProfileSorting(obj.sorting));
			}
			if ('paging' in obj && obj.paging != null) {
				_this49.setPaging(new Paging(obj.paging));
			}
		} else {
			var _this49 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileListRequest.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileListRequest)).call(this));

			_this49.setSearchType(null);
			_this49.setMonth(null);
			_this49.setSorting(null);
			_this49.setPaging(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileListRequest constructor');
		return _possibleConstructorReturn(_this49);
	}

	_createClass(GetCustomerPaymentProfileListRequest, [{
		key: 'setSearchType',
		value: function setSearchType(p_searchType) {
			this.searchType = p_searchType;
		}
	}, {
		key: 'getSearchType',
		value: function getSearchType() {
			if ('searchType' in this) {
				return this.searchType;
			}
		}
	}, {
		key: 'setMonth',
		value: function setMonth(p_month) {
			this.month = p_month;
		}
	}, {
		key: 'getMonth',
		value: function getMonth() {
			if ('month' in this) {
				return this.month;
			}
		}
	}, {
		key: 'setSorting',
		value: function setSorting(p_sorting) {
			this.sorting = p_sorting;
		}
	}, {
		key: 'getSorting',
		value: function getSorting() {
			if ('sorting' in this) {
				return this.sorting;
			}
		}
	}, {
		key: 'setPaging',
		value: function setPaging(p_paging) {
			this.paging = p_paging;
		}
	}, {
		key: 'getPaging',
		value: function getPaging() {
			if ('paging' in this) {
				return this.paging;
			}
		}
	}]);

	return GetCustomerPaymentProfileListRequest;
}(ANetApiRequest);

module.exports.GetCustomerPaymentProfileListRequest = GetCustomerPaymentProfileListRequest;

var GetCustomerPaymentProfileListResponse = function (_ANetApiResponse20) {
	_inherits(GetCustomerPaymentProfileListResponse, _ANetApiResponse20);

	_createClass(GetCustomerPaymentProfileListResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerPaymentProfileListResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerPaymentProfileListResponse': this };
			logger.debug('Exit GetCustomerPaymentProfileListResponse getJSON');
			return obj;
		}
	}]);

	function GetCustomerPaymentProfileListResponse(obj) {
		_classCallCheck(this, GetCustomerPaymentProfileListResponse);

		logger.debug('Enter GetCustomerPaymentProfileListResponse constructor');
		if (arguments.length == 1) {
			var _this50 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileListResponse.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileListResponse)).call(this, obj));

			if ('totalNumInResultSet' in obj && obj.totalNumInResultSet != null) {
				_this50.setTotalNumInResultSet(obj.totalNumInResultSet);
			}
			if ('paymentProfiles' in obj && obj.paymentProfiles != null) {
				_this50.setPaymentProfiles(new ArrayOfCustomerPaymentProfileListItemType(obj.paymentProfiles));
			}
		} else {
			var _this50 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileListResponse.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileListResponse)).call(this));

			_this50.setTotalNumInResultSet(null);
			_this50.setPaymentProfiles(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileListResponse constructor');
		return _possibleConstructorReturn(_this50);
	}

	_createClass(GetCustomerPaymentProfileListResponse, [{
		key: 'setTotalNumInResultSet',
		value: function setTotalNumInResultSet(p_totalNumInResultSet) {
			this.totalNumInResultSet = p_totalNumInResultSet;
		}
	}, {
		key: 'getTotalNumInResultSet',
		value: function getTotalNumInResultSet() {
			if ('totalNumInResultSet' in this) {
				return this.totalNumInResultSet;
			}
		}
	}, {
		key: 'setPaymentProfiles',
		value: function setPaymentProfiles(p_paymentProfiles) {
			this.paymentProfiles = p_paymentProfiles;
		}
	}, {
		key: 'getPaymentProfiles',
		value: function getPaymentProfiles() {
			if ('paymentProfiles' in this) {
				return this.paymentProfiles;
			}
		}
	}]);

	return GetCustomerPaymentProfileListResponse;
}(ANetApiResponse);

module.exports.GetCustomerPaymentProfileListResponse = GetCustomerPaymentProfileListResponse;

var GetCustomerPaymentProfileRequest = function (_ANetApiRequest22) {
	_inherits(GetCustomerPaymentProfileRequest, _ANetApiRequest22);

	_createClass(GetCustomerPaymentProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerPaymentProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerPaymentProfileRequest': this };
			logger.debug('Exit GetCustomerPaymentProfileRequest getJSON');
			return obj;
		}
	}]);

	function GetCustomerPaymentProfileRequest(obj) {
		_classCallCheck(this, GetCustomerPaymentProfileRequest);

		logger.debug('Enter GetCustomerPaymentProfileRequest constructor');
		if (arguments.length == 1) {
			var _this51 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this51.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this51.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('unmaskExpirationDate' in obj && obj.unmaskExpirationDate != null) {
				_this51.setUnmaskExpirationDate(obj.unmaskExpirationDate);
			}
			if ('includeIssuerInfo' in obj && obj.includeIssuerInfo != null) {
				_this51.setIncludeIssuerInfo(obj.includeIssuerInfo);
			}
		} else {
			var _this51 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileRequest)).call(this));

			_this51.setCustomerProfileId(null);
			_this51.setCustomerPaymentProfileId(null);
			_this51.setUnmaskExpirationDate(null);
			_this51.setIncludeIssuerInfo(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileRequest constructor');
		return _possibleConstructorReturn(_this51);
	}

	_createClass(GetCustomerPaymentProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setUnmaskExpirationDate',
		value: function setUnmaskExpirationDate(p_unmaskExpirationDate) {
			this.unmaskExpirationDate = p_unmaskExpirationDate;
		}
	}, {
		key: 'getUnmaskExpirationDate',
		value: function getUnmaskExpirationDate() {
			if ('unmaskExpirationDate' in this) {
				return this.unmaskExpirationDate;
			}
		}
	}, {
		key: 'setIncludeIssuerInfo',
		value: function setIncludeIssuerInfo(p_includeIssuerInfo) {
			this.includeIssuerInfo = p_includeIssuerInfo;
		}
	}, {
		key: 'getIncludeIssuerInfo',
		value: function getIncludeIssuerInfo() {
			if ('includeIssuerInfo' in this) {
				return this.includeIssuerInfo;
			}
		}
	}]);

	return GetCustomerPaymentProfileRequest;
}(ANetApiRequest);

module.exports.GetCustomerPaymentProfileRequest = GetCustomerPaymentProfileRequest;

var GetCustomerPaymentProfileResponse = function (_ANetApiResponse21) {
	_inherits(GetCustomerPaymentProfileResponse, _ANetApiResponse21);

	_createClass(GetCustomerPaymentProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerPaymentProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerPaymentProfileResponse': this };
			logger.debug('Exit GetCustomerPaymentProfileResponse getJSON');
			return obj;
		}
	}]);

	function GetCustomerPaymentProfileResponse(obj) {
		_classCallCheck(this, GetCustomerPaymentProfileResponse);

		logger.debug('Enter GetCustomerPaymentProfileResponse constructor');
		if (arguments.length == 1) {
			var _this52 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileResponse)).call(this, obj));

			if ('paymentProfile' in obj && obj.paymentProfile != null) {
				_this52.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile));
			}
		} else {
			var _this52 = _possibleConstructorReturn(this, (GetCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(GetCustomerPaymentProfileResponse)).call(this));

			_this52.setPaymentProfile(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileResponse constructor');
		return _possibleConstructorReturn(_this52);
	}

	_createClass(GetCustomerPaymentProfileResponse, [{
		key: 'setPaymentProfile',
		value: function setPaymentProfile(p_paymentProfile) {
			this.paymentProfile = p_paymentProfile;
		}
	}, {
		key: 'getPaymentProfile',
		value: function getPaymentProfile() {
			if ('paymentProfile' in this) {
				return this.paymentProfile;
			}
		}
	}]);

	return GetCustomerPaymentProfileResponse;
}(ANetApiResponse);

module.exports.GetCustomerPaymentProfileResponse = GetCustomerPaymentProfileResponse;

var GetCustomerProfileIdsRequest = function (_ANetApiRequest23) {
	_inherits(GetCustomerProfileIdsRequest, _ANetApiRequest23);

	_createClass(GetCustomerProfileIdsRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerProfileIdsRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerProfileIdsRequest': this };
			logger.debug('Exit GetCustomerProfileIdsRequest getJSON');
			return obj;
		}
	}]);

	function GetCustomerProfileIdsRequest(obj) {
		_classCallCheck(this, GetCustomerProfileIdsRequest);

		if (arguments.length == 1) {
			var _this53 = _possibleConstructorReturn(this, (GetCustomerProfileIdsRequest.__proto__ || Object.getPrototypeOf(GetCustomerProfileIdsRequest)).call(this, obj));
		} else {
			var _this53 = _possibleConstructorReturn(this, (GetCustomerProfileIdsRequest.__proto__ || Object.getPrototypeOf(GetCustomerProfileIdsRequest)).call(this));
		}return _possibleConstructorReturn(_this53);
	}

	return GetCustomerProfileIdsRequest;
}(ANetApiRequest);

module.exports.GetCustomerProfileIdsRequest = GetCustomerProfileIdsRequest;

var GetCustomerProfileIdsResponse = function (_ANetApiResponse22) {
	_inherits(GetCustomerProfileIdsResponse, _ANetApiResponse22);

	_createClass(GetCustomerProfileIdsResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerProfileIdsResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerProfileIdsResponse': this };
			logger.debug('Exit GetCustomerProfileIdsResponse getJSON');
			return obj;
		}
	}]);

	function GetCustomerProfileIdsResponse(obj) {
		_classCallCheck(this, GetCustomerProfileIdsResponse);

		logger.debug('Enter GetCustomerProfileIdsResponse constructor');
		if (arguments.length == 1) {
			var _this54 = _possibleConstructorReturn(this, (GetCustomerProfileIdsResponse.__proto__ || Object.getPrototypeOf(GetCustomerProfileIdsResponse)).call(this, obj));

			if ('ids' in obj && obj.ids != null) {
				_this54.setIds(new ArrayOfNumericString(obj.ids));
			}
		} else {
			var _this54 = _possibleConstructorReturn(this, (GetCustomerProfileIdsResponse.__proto__ || Object.getPrototypeOf(GetCustomerProfileIdsResponse)).call(this));

			_this54.setIds(null);
		}
		logger.debug('Exit GetCustomerProfileIdsResponse constructor');
		return _possibleConstructorReturn(_this54);
	}

	_createClass(GetCustomerProfileIdsResponse, [{
		key: 'setIds',
		value: function setIds(p_ids) {
			this.ids = p_ids;
		}
	}, {
		key: 'getIds',
		value: function getIds() {
			if ('ids' in this) {
				return this.ids;
			}
		}
	}]);

	return GetCustomerProfileIdsResponse;
}(ANetApiResponse);

module.exports.GetCustomerProfileIdsResponse = GetCustomerProfileIdsResponse;

var GetCustomerProfileRequest = function (_ANetApiRequest24) {
	_inherits(GetCustomerProfileRequest, _ANetApiRequest24);

	_createClass(GetCustomerProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerProfileRequest': this };
			logger.debug('Exit GetCustomerProfileRequest getJSON');
			return obj;
		}
	}]);

	function GetCustomerProfileRequest(obj) {
		_classCallCheck(this, GetCustomerProfileRequest);

		logger.debug('Enter GetCustomerProfileRequest constructor');
		if (arguments.length == 1) {
			var _this55 = _possibleConstructorReturn(this, (GetCustomerProfileRequest.__proto__ || Object.getPrototypeOf(GetCustomerProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this55.setCustomerProfileId(obj.customerProfileId);
			}
			if ('merchantCustomerId' in obj && obj.merchantCustomerId != null) {
				_this55.setMerchantCustomerId(obj.merchantCustomerId);
			}
			if ('email' in obj && obj.email != null) {
				_this55.setEmail(obj.email);
			}
			if ('unmaskExpirationDate' in obj && obj.unmaskExpirationDate != null) {
				_this55.setUnmaskExpirationDate(obj.unmaskExpirationDate);
			}
			if ('includeIssuerInfo' in obj && obj.includeIssuerInfo != null) {
				_this55.setIncludeIssuerInfo(obj.includeIssuerInfo);
			}
		} else {
			var _this55 = _possibleConstructorReturn(this, (GetCustomerProfileRequest.__proto__ || Object.getPrototypeOf(GetCustomerProfileRequest)).call(this));

			_this55.setCustomerProfileId(null);
			_this55.setMerchantCustomerId(null);
			_this55.setEmail(null);
			_this55.setUnmaskExpirationDate(null);
			_this55.setIncludeIssuerInfo(null);
		}
		logger.debug('Exit GetCustomerProfileRequest constructor');
		return _possibleConstructorReturn(_this55);
	}

	_createClass(GetCustomerProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setMerchantCustomerId',
		value: function setMerchantCustomerId(p_merchantCustomerId) {
			this.merchantCustomerId = p_merchantCustomerId;
		}
	}, {
		key: 'getMerchantCustomerId',
		value: function getMerchantCustomerId() {
			if ('merchantCustomerId' in this) {
				return this.merchantCustomerId;
			}
		}
	}, {
		key: 'setEmail',
		value: function setEmail(p_email) {
			this.email = p_email;
		}
	}, {
		key: 'getEmail',
		value: function getEmail() {
			if ('email' in this) {
				return this.email;
			}
		}
	}, {
		key: 'setUnmaskExpirationDate',
		value: function setUnmaskExpirationDate(p_unmaskExpirationDate) {
			this.unmaskExpirationDate = p_unmaskExpirationDate;
		}
	}, {
		key: 'getUnmaskExpirationDate',
		value: function getUnmaskExpirationDate() {
			if ('unmaskExpirationDate' in this) {
				return this.unmaskExpirationDate;
			}
		}
	}, {
		key: 'setIncludeIssuerInfo',
		value: function setIncludeIssuerInfo(p_includeIssuerInfo) {
			this.includeIssuerInfo = p_includeIssuerInfo;
		}
	}, {
		key: 'getIncludeIssuerInfo',
		value: function getIncludeIssuerInfo() {
			if ('includeIssuerInfo' in this) {
				return this.includeIssuerInfo;
			}
		}
	}]);

	return GetCustomerProfileRequest;
}(ANetApiRequest);

module.exports.GetCustomerProfileRequest = GetCustomerProfileRequest;

var GetCustomerProfileResponse = function (_ANetApiResponse23) {
	_inherits(GetCustomerProfileResponse, _ANetApiResponse23);

	_createClass(GetCustomerProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerProfileResponse': this };
			logger.debug('Exit GetCustomerProfileResponse getJSON');
			return obj;
		}
	}]);

	function GetCustomerProfileResponse(obj) {
		_classCallCheck(this, GetCustomerProfileResponse);

		logger.debug('Enter GetCustomerProfileResponse constructor');
		if (arguments.length == 1) {
			var _this56 = _possibleConstructorReturn(this, (GetCustomerProfileResponse.__proto__ || Object.getPrototypeOf(GetCustomerProfileResponse)).call(this, obj));

			if ('profile' in obj && obj.profile != null) {
				_this56.setProfile(new CustomerProfileMaskedType(obj.profile));
			}
			if ('subscriptionIds' in obj && obj.subscriptionIds != null) {
				_this56.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds));
			}
		} else {
			var _this56 = _possibleConstructorReturn(this, (GetCustomerProfileResponse.__proto__ || Object.getPrototypeOf(GetCustomerProfileResponse)).call(this));

			_this56.setProfile(null);
			_this56.setSubscriptionIds(null);
		}
		logger.debug('Exit GetCustomerProfileResponse constructor');
		return _possibleConstructorReturn(_this56);
	}

	_createClass(GetCustomerProfileResponse, [{
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}, {
		key: 'setSubscriptionIds',
		value: function setSubscriptionIds(p_subscriptionIds) {
			this.subscriptionIds = p_subscriptionIds;
		}
	}, {
		key: 'getSubscriptionIds',
		value: function getSubscriptionIds() {
			if ('subscriptionIds' in this) {
				return this.subscriptionIds;
			}
		}
	}]);

	return GetCustomerProfileResponse;
}(ANetApiResponse);

module.exports.GetCustomerProfileResponse = GetCustomerProfileResponse;

var GetCustomerShippingAddressRequest = function (_ANetApiRequest25) {
	_inherits(GetCustomerShippingAddressRequest, _ANetApiRequest25);

	_createClass(GetCustomerShippingAddressRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerShippingAddressRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerShippingAddressRequest': this };
			logger.debug('Exit GetCustomerShippingAddressRequest getJSON');
			return obj;
		}
	}]);

	function GetCustomerShippingAddressRequest(obj) {
		_classCallCheck(this, GetCustomerShippingAddressRequest);

		logger.debug('Enter GetCustomerShippingAddressRequest constructor');
		if (arguments.length == 1) {
			var _this57 = _possibleConstructorReturn(this, (GetCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(GetCustomerShippingAddressRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this57.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerAddressId' in obj && obj.customerAddressId != null) {
				_this57.setCustomerAddressId(obj.customerAddressId);
			}
		} else {
			var _this57 = _possibleConstructorReturn(this, (GetCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(GetCustomerShippingAddressRequest)).call(this));

			_this57.setCustomerProfileId(null);
			_this57.setCustomerAddressId(null);
		}
		logger.debug('Exit GetCustomerShippingAddressRequest constructor');
		return _possibleConstructorReturn(_this57);
	}

	_createClass(GetCustomerShippingAddressRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerAddressId',
		value: function setCustomerAddressId(p_customerAddressId) {
			this.customerAddressId = p_customerAddressId;
		}
	}, {
		key: 'getCustomerAddressId',
		value: function getCustomerAddressId() {
			if ('customerAddressId' in this) {
				return this.customerAddressId;
			}
		}
	}]);

	return GetCustomerShippingAddressRequest;
}(ANetApiRequest);

module.exports.GetCustomerShippingAddressRequest = GetCustomerShippingAddressRequest;

var GetCustomerShippingAddressResponse = function (_ANetApiResponse24) {
	_inherits(GetCustomerShippingAddressResponse, _ANetApiResponse24);

	_createClass(GetCustomerShippingAddressResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetCustomerShippingAddressResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getCustomerShippingAddressResponse': this };
			logger.debug('Exit GetCustomerShippingAddressResponse getJSON');
			return obj;
		}
	}]);

	function GetCustomerShippingAddressResponse(obj) {
		_classCallCheck(this, GetCustomerShippingAddressResponse);

		logger.debug('Enter GetCustomerShippingAddressResponse constructor');
		if (arguments.length == 1) {
			var _this58 = _possibleConstructorReturn(this, (GetCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(GetCustomerShippingAddressResponse)).call(this, obj));

			if ('defaultShippingAddress' in obj && obj.defaultShippingAddress != null) {
				_this58.setDefaultShippingAddress(obj.defaultShippingAddress);
			}
			if ('address' in obj && obj.address != null) {
				_this58.setAddress(new CustomerAddressExType(obj.address));
			}
			if ('subscriptionIds' in obj && obj.subscriptionIds != null) {
				_this58.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds));
			}
		} else {
			var _this58 = _possibleConstructorReturn(this, (GetCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(GetCustomerShippingAddressResponse)).call(this));

			_this58.setDefaultShippingAddress(null);
			_this58.setAddress(null);
			_this58.setSubscriptionIds(null);
		}
		logger.debug('Exit GetCustomerShippingAddressResponse constructor');
		return _possibleConstructorReturn(_this58);
	}

	_createClass(GetCustomerShippingAddressResponse, [{
		key: 'setDefaultShippingAddress',
		value: function setDefaultShippingAddress(p_defaultShippingAddress) {
			this.defaultShippingAddress = p_defaultShippingAddress;
		}
	}, {
		key: 'getDefaultShippingAddress',
		value: function getDefaultShippingAddress() {
			if ('defaultShippingAddress' in this) {
				return this.defaultShippingAddress;
			}
		}
	}, {
		key: 'setAddress',
		value: function setAddress(p_address) {
			this.address = p_address;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			if ('address' in this) {
				return this.address;
			}
		}
	}, {
		key: 'setSubscriptionIds',
		value: function setSubscriptionIds(p_subscriptionIds) {
			this.subscriptionIds = p_subscriptionIds;
		}
	}, {
		key: 'getSubscriptionIds',
		value: function getSubscriptionIds() {
			if ('subscriptionIds' in this) {
				return this.subscriptionIds;
			}
		}
	}]);

	return GetCustomerShippingAddressResponse;
}(ANetApiResponse);

module.exports.GetCustomerShippingAddressResponse = GetCustomerShippingAddressResponse;

var GetHostedPaymentPageRequest = function (_ANetApiRequest26) {
	_inherits(GetHostedPaymentPageRequest, _ANetApiRequest26);

	_createClass(GetHostedPaymentPageRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetHostedPaymentPageRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getHostedPaymentPageRequest': this };
			logger.debug('Exit GetHostedPaymentPageRequest getJSON');
			return obj;
		}
	}]);

	function GetHostedPaymentPageRequest(obj) {
		_classCallCheck(this, GetHostedPaymentPageRequest);

		logger.debug('Enter GetHostedPaymentPageRequest constructor');
		if (arguments.length == 1) {
			var _this59 = _possibleConstructorReturn(this, (GetHostedPaymentPageRequest.__proto__ || Object.getPrototypeOf(GetHostedPaymentPageRequest)).call(this, obj));

			if ('transactionRequest' in obj && obj.transactionRequest != null) {
				_this59.setTransactionRequest(new TransactionRequestType(obj.transactionRequest));
			}
			if ('hostedPaymentSettings' in obj && obj.hostedPaymentSettings != null) {
				_this59.setHostedPaymentSettings(new ArrayOfSetting(obj.hostedPaymentSettings));
			}
		} else {
			var _this59 = _possibleConstructorReturn(this, (GetHostedPaymentPageRequest.__proto__ || Object.getPrototypeOf(GetHostedPaymentPageRequest)).call(this));

			_this59.setTransactionRequest(null);
			_this59.setHostedPaymentSettings(null);
		}
		logger.debug('Exit GetHostedPaymentPageRequest constructor');
		return _possibleConstructorReturn(_this59);
	}

	_createClass(GetHostedPaymentPageRequest, [{
		key: 'setTransactionRequest',
		value: function setTransactionRequest(p_transactionRequest) {
			this.transactionRequest = p_transactionRequest;
		}
	}, {
		key: 'getTransactionRequest',
		value: function getTransactionRequest() {
			if ('transactionRequest' in this) {
				return this.transactionRequest;
			}
		}
	}, {
		key: 'setHostedPaymentSettings',
		value: function setHostedPaymentSettings(p_hostedPaymentSettings) {
			this.hostedPaymentSettings = p_hostedPaymentSettings;
		}
	}, {
		key: 'getHostedPaymentSettings',
		value: function getHostedPaymentSettings() {
			if ('hostedPaymentSettings' in this) {
				return this.hostedPaymentSettings;
			}
		}
	}]);

	return GetHostedPaymentPageRequest;
}(ANetApiRequest);

module.exports.GetHostedPaymentPageRequest = GetHostedPaymentPageRequest;

var GetHostedPaymentPageResponse = function (_ANetApiResponse25) {
	_inherits(GetHostedPaymentPageResponse, _ANetApiResponse25);

	_createClass(GetHostedPaymentPageResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetHostedPaymentPageResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getHostedPaymentPageResponse': this };
			logger.debug('Exit GetHostedPaymentPageResponse getJSON');
			return obj;
		}
	}]);

	function GetHostedPaymentPageResponse(obj) {
		_classCallCheck(this, GetHostedPaymentPageResponse);

		logger.debug('Enter GetHostedPaymentPageResponse constructor');
		if (arguments.length == 1) {
			var _this60 = _possibleConstructorReturn(this, (GetHostedPaymentPageResponse.__proto__ || Object.getPrototypeOf(GetHostedPaymentPageResponse)).call(this, obj));

			if ('token' in obj && obj.token != null) {
				_this60.setToken(obj.token);
			}
		} else {
			var _this60 = _possibleConstructorReturn(this, (GetHostedPaymentPageResponse.__proto__ || Object.getPrototypeOf(GetHostedPaymentPageResponse)).call(this));

			_this60.setToken(null);
		}
		logger.debug('Exit GetHostedPaymentPageResponse constructor');
		return _possibleConstructorReturn(_this60);
	}

	_createClass(GetHostedPaymentPageResponse, [{
		key: 'setToken',
		value: function setToken(p_token) {
			this.token = p_token;
		}
	}, {
		key: 'getToken',
		value: function getToken() {
			if ('token' in this) {
				return this.token;
			}
		}
	}]);

	return GetHostedPaymentPageResponse;
}(ANetApiResponse);

module.exports.GetHostedPaymentPageResponse = GetHostedPaymentPageResponse;

var GetHostedProfilePageRequest = function (_ANetApiRequest27) {
	_inherits(GetHostedProfilePageRequest, _ANetApiRequest27);

	_createClass(GetHostedProfilePageRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetHostedProfilePageRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getHostedProfilePageRequest': this };
			logger.debug('Exit GetHostedProfilePageRequest getJSON');
			return obj;
		}
	}]);

	function GetHostedProfilePageRequest(obj) {
		_classCallCheck(this, GetHostedProfilePageRequest);

		logger.debug('Enter GetHostedProfilePageRequest constructor');
		if (arguments.length == 1) {
			var _this61 = _possibleConstructorReturn(this, (GetHostedProfilePageRequest.__proto__ || Object.getPrototypeOf(GetHostedProfilePageRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this61.setCustomerProfileId(obj.customerProfileId);
			}
			if ('hostedProfileSettings' in obj && obj.hostedProfileSettings != null) {
				_this61.setHostedProfileSettings(new ArrayOfSetting(obj.hostedProfileSettings));
			}
		} else {
			var _this61 = _possibleConstructorReturn(this, (GetHostedProfilePageRequest.__proto__ || Object.getPrototypeOf(GetHostedProfilePageRequest)).call(this));

			_this61.setCustomerProfileId(null);
			_this61.setHostedProfileSettings(null);
		}
		logger.debug('Exit GetHostedProfilePageRequest constructor');
		return _possibleConstructorReturn(_this61);
	}

	_createClass(GetHostedProfilePageRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setHostedProfileSettings',
		value: function setHostedProfileSettings(p_hostedProfileSettings) {
			this.hostedProfileSettings = p_hostedProfileSettings;
		}
	}, {
		key: 'getHostedProfileSettings',
		value: function getHostedProfileSettings() {
			if ('hostedProfileSettings' in this) {
				return this.hostedProfileSettings;
			}
		}
	}]);

	return GetHostedProfilePageRequest;
}(ANetApiRequest);

module.exports.GetHostedProfilePageRequest = GetHostedProfilePageRequest;

var GetHostedProfilePageResponse = function (_ANetApiResponse26) {
	_inherits(GetHostedProfilePageResponse, _ANetApiResponse26);

	_createClass(GetHostedProfilePageResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetHostedProfilePageResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getHostedProfilePageResponse': this };
			logger.debug('Exit GetHostedProfilePageResponse getJSON');
			return obj;
		}
	}]);

	function GetHostedProfilePageResponse(obj) {
		_classCallCheck(this, GetHostedProfilePageResponse);

		logger.debug('Enter GetHostedProfilePageResponse constructor');
		if (arguments.length == 1) {
			var _this62 = _possibleConstructorReturn(this, (GetHostedProfilePageResponse.__proto__ || Object.getPrototypeOf(GetHostedProfilePageResponse)).call(this, obj));

			if ('token' in obj && obj.token != null) {
				_this62.setToken(obj.token);
			}
		} else {
			var _this62 = _possibleConstructorReturn(this, (GetHostedProfilePageResponse.__proto__ || Object.getPrototypeOf(GetHostedProfilePageResponse)).call(this));

			_this62.setToken(null);
		}
		logger.debug('Exit GetHostedProfilePageResponse constructor');
		return _possibleConstructorReturn(_this62);
	}

	_createClass(GetHostedProfilePageResponse, [{
		key: 'setToken',
		value: function setToken(p_token) {
			this.token = p_token;
		}
	}, {
		key: 'getToken',
		value: function getToken() {
			if ('token' in this) {
				return this.token;
			}
		}
	}]);

	return GetHostedProfilePageResponse;
}(ANetApiResponse);

module.exports.GetHostedProfilePageResponse = GetHostedProfilePageResponse;

var GetMerchantDetailsRequest = function (_ANetApiRequest28) {
	_inherits(GetMerchantDetailsRequest, _ANetApiRequest28);

	_createClass(GetMerchantDetailsRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetMerchantDetailsRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getMerchantDetailsRequest': this };
			logger.debug('Exit GetMerchantDetailsRequest getJSON');
			return obj;
		}
	}]);

	function GetMerchantDetailsRequest(obj) {
		_classCallCheck(this, GetMerchantDetailsRequest);

		if (arguments.length == 1) {
			var _this63 = _possibleConstructorReturn(this, (GetMerchantDetailsRequest.__proto__ || Object.getPrototypeOf(GetMerchantDetailsRequest)).call(this, obj));
		} else {
			var _this63 = _possibleConstructorReturn(this, (GetMerchantDetailsRequest.__proto__ || Object.getPrototypeOf(GetMerchantDetailsRequest)).call(this));
		}return _possibleConstructorReturn(_this63);
	}

	return GetMerchantDetailsRequest;
}(ANetApiRequest);

module.exports.GetMerchantDetailsRequest = GetMerchantDetailsRequest;

var GetMerchantDetailsResponse = function (_ANetApiResponse27) {
	_inherits(GetMerchantDetailsResponse, _ANetApiResponse27);

	_createClass(GetMerchantDetailsResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetMerchantDetailsResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getMerchantDetailsResponse': this };
			logger.debug('Exit GetMerchantDetailsResponse getJSON');
			return obj;
		}
	}]);

	function GetMerchantDetailsResponse(obj) {
		_classCallCheck(this, GetMerchantDetailsResponse);

		logger.debug('Enter GetMerchantDetailsResponse constructor');
		if (arguments.length == 1) {
			var _this64 = _possibleConstructorReturn(this, (GetMerchantDetailsResponse.__proto__ || Object.getPrototypeOf(GetMerchantDetailsResponse)).call(this, obj));

			if ('isTestMode' in obj && obj.isTestMode != null) {
				_this64.setIsTestMode(obj.isTestMode);
			}
			if ('processors' in obj && obj.processors != null) {
				_this64.setProcessors(new ArrayOfProcessorType(obj.processors));
			}
			if ('merchantName' in obj && obj.merchantName != null) {
				_this64.setMerchantName(obj.merchantName);
			}
			if ('gatewayId' in obj && obj.gatewayId != null) {
				_this64.setGatewayId(obj.gatewayId);
			}
			if ('marketTypes' in obj && obj.marketTypes != null) {
				_this64.setMarketTypes(new ArrayOfMarketType(obj.marketTypes));
			}
			if ('productCodes' in obj && obj.productCodes != null) {
				_this64.setProductCodes(new ArrayOfProductCode(obj.productCodes));
			}
			if ('paymentMethods' in obj && obj.paymentMethods != null) {
				_this64.setPaymentMethods(new ArrayOfPaymentMethod(obj.paymentMethods));
			}
			if ('currencies' in obj && obj.currencies != null) {
				_this64.setCurrencies(new ArrayOfCurrencyCode(obj.currencies));
			}
			if ('publicClientKey' in obj && obj.publicClientKey != null) {
				_this64.setPublicClientKey(obj.publicClientKey);
			}
		} else {
			var _this64 = _possibleConstructorReturn(this, (GetMerchantDetailsResponse.__proto__ || Object.getPrototypeOf(GetMerchantDetailsResponse)).call(this));

			_this64.setIsTestMode(null);
			_this64.setProcessors(null);
			_this64.setMerchantName(null);
			_this64.setGatewayId(null);
			_this64.setMarketTypes(null);
			_this64.setProductCodes(null);
			_this64.setPaymentMethods(null);
			_this64.setCurrencies(null);
			_this64.setPublicClientKey(null);
		}
		logger.debug('Exit GetMerchantDetailsResponse constructor');
		return _possibleConstructorReturn(_this64);
	}

	_createClass(GetMerchantDetailsResponse, [{
		key: 'setIsTestMode',
		value: function setIsTestMode(p_isTestMode) {
			this.isTestMode = p_isTestMode;
		}
	}, {
		key: 'getIsTestMode',
		value: function getIsTestMode() {
			if ('isTestMode' in this) {
				return this.isTestMode;
			}
		}
	}, {
		key: 'setProcessors',
		value: function setProcessors(p_processors) {
			this.processors = p_processors;
		}
	}, {
		key: 'getProcessors',
		value: function getProcessors() {
			if ('processors' in this) {
				return this.processors;
			}
		}
	}, {
		key: 'setMerchantName',
		value: function setMerchantName(p_merchantName) {
			this.merchantName = p_merchantName;
		}
	}, {
		key: 'getMerchantName',
		value: function getMerchantName() {
			if ('merchantName' in this) {
				return this.merchantName;
			}
		}
	}, {
		key: 'setGatewayId',
		value: function setGatewayId(p_gatewayId) {
			this.gatewayId = p_gatewayId;
		}
	}, {
		key: 'getGatewayId',
		value: function getGatewayId() {
			if ('gatewayId' in this) {
				return this.gatewayId;
			}
		}
	}, {
		key: 'setMarketTypes',
		value: function setMarketTypes(p_marketTypes) {
			this.marketTypes = p_marketTypes;
		}
	}, {
		key: 'getMarketTypes',
		value: function getMarketTypes() {
			if ('marketTypes' in this) {
				return this.marketTypes;
			}
		}
	}, {
		key: 'setProductCodes',
		value: function setProductCodes(p_productCodes) {
			this.productCodes = p_productCodes;
		}
	}, {
		key: 'getProductCodes',
		value: function getProductCodes() {
			if ('productCodes' in this) {
				return this.productCodes;
			}
		}
	}, {
		key: 'setPaymentMethods',
		value: function setPaymentMethods(p_paymentMethods) {
			this.paymentMethods = p_paymentMethods;
		}
	}, {
		key: 'getPaymentMethods',
		value: function getPaymentMethods() {
			if ('paymentMethods' in this) {
				return this.paymentMethods;
			}
		}
	}, {
		key: 'setCurrencies',
		value: function setCurrencies(p_currencies) {
			this.currencies = p_currencies;
		}
	}, {
		key: 'getCurrencies',
		value: function getCurrencies() {
			if ('currencies' in this) {
				return this.currencies;
			}
		}
	}, {
		key: 'setPublicClientKey',
		value: function setPublicClientKey(p_publicClientKey) {
			this.publicClientKey = p_publicClientKey;
		}
	}, {
		key: 'getPublicClientKey',
		value: function getPublicClientKey() {
			if ('publicClientKey' in this) {
				return this.publicClientKey;
			}
		}
	}]);

	return GetMerchantDetailsResponse;
}(ANetApiResponse);

module.exports.GetMerchantDetailsResponse = GetMerchantDetailsResponse;

var GetSettledBatchListRequest = function (_ANetApiRequest29) {
	_inherits(GetSettledBatchListRequest, _ANetApiRequest29);

	_createClass(GetSettledBatchListRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetSettledBatchListRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getSettledBatchListRequest': this };
			logger.debug('Exit GetSettledBatchListRequest getJSON');
			return obj;
		}
	}]);

	function GetSettledBatchListRequest(obj) {
		_classCallCheck(this, GetSettledBatchListRequest);

		logger.debug('Enter GetSettledBatchListRequest constructor');
		if (arguments.length == 1) {
			var _this65 = _possibleConstructorReturn(this, (GetSettledBatchListRequest.__proto__ || Object.getPrototypeOf(GetSettledBatchListRequest)).call(this, obj));

			if ('includeStatistics' in obj && obj.includeStatistics != null) {
				_this65.setIncludeStatistics(obj.includeStatistics);
			}
			if ('firstSettlementDate' in obj && obj.firstSettlementDate != null) {
				_this65.setFirstSettlementDate(obj.firstSettlementDate);
			}
			if ('lastSettlementDate' in obj && obj.lastSettlementDate != null) {
				_this65.setLastSettlementDate(obj.lastSettlementDate);
			}
		} else {
			var _this65 = _possibleConstructorReturn(this, (GetSettledBatchListRequest.__proto__ || Object.getPrototypeOf(GetSettledBatchListRequest)).call(this));

			_this65.setIncludeStatistics(null);
			_this65.setFirstSettlementDate(null);
			_this65.setLastSettlementDate(null);
		}
		logger.debug('Exit GetSettledBatchListRequest constructor');
		return _possibleConstructorReturn(_this65);
	}

	_createClass(GetSettledBatchListRequest, [{
		key: 'setIncludeStatistics',
		value: function setIncludeStatistics(p_includeStatistics) {
			this.includeStatistics = p_includeStatistics;
		}
	}, {
		key: 'getIncludeStatistics',
		value: function getIncludeStatistics() {
			if ('includeStatistics' in this) {
				return this.includeStatistics;
			}
		}
	}, {
		key: 'setFirstSettlementDate',
		value: function setFirstSettlementDate(p_firstSettlementDate) {
			this.firstSettlementDate = p_firstSettlementDate;
		}
	}, {
		key: 'getFirstSettlementDate',
		value: function getFirstSettlementDate() {
			if ('firstSettlementDate' in this) {
				return this.firstSettlementDate;
			}
		}
	}, {
		key: 'setLastSettlementDate',
		value: function setLastSettlementDate(p_lastSettlementDate) {
			this.lastSettlementDate = p_lastSettlementDate;
		}
	}, {
		key: 'getLastSettlementDate',
		value: function getLastSettlementDate() {
			if ('lastSettlementDate' in this) {
				return this.lastSettlementDate;
			}
		}
	}]);

	return GetSettledBatchListRequest;
}(ANetApiRequest);

module.exports.GetSettledBatchListRequest = GetSettledBatchListRequest;

var GetSettledBatchListResponse = function (_ANetApiResponse28) {
	_inherits(GetSettledBatchListResponse, _ANetApiResponse28);

	_createClass(GetSettledBatchListResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetSettledBatchListResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getSettledBatchListResponse': this };
			logger.debug('Exit GetSettledBatchListResponse getJSON');
			return obj;
		}
	}]);

	function GetSettledBatchListResponse(obj) {
		_classCallCheck(this, GetSettledBatchListResponse);

		logger.debug('Enter GetSettledBatchListResponse constructor');
		if (arguments.length == 1) {
			var _this66 = _possibleConstructorReturn(this, (GetSettledBatchListResponse.__proto__ || Object.getPrototypeOf(GetSettledBatchListResponse)).call(this, obj));

			if ('batchList' in obj && obj.batchList != null) {
				_this66.setBatchList(new ArrayOfBatchDetailsType(obj.batchList));
			}
		} else {
			var _this66 = _possibleConstructorReturn(this, (GetSettledBatchListResponse.__proto__ || Object.getPrototypeOf(GetSettledBatchListResponse)).call(this));

			_this66.setBatchList(null);
		}
		logger.debug('Exit GetSettledBatchListResponse constructor');
		return _possibleConstructorReturn(_this66);
	}

	_createClass(GetSettledBatchListResponse, [{
		key: 'setBatchList',
		value: function setBatchList(p_batchList) {
			this.batchList = p_batchList;
		}
	}, {
		key: 'getBatchList',
		value: function getBatchList() {
			if ('batchList' in this) {
				return this.batchList;
			}
		}
	}]);

	return GetSettledBatchListResponse;
}(ANetApiResponse);

module.exports.GetSettledBatchListResponse = GetSettledBatchListResponse;

var GetTransactionDetailsRequest = function (_ANetApiRequest30) {
	_inherits(GetTransactionDetailsRequest, _ANetApiRequest30);

	_createClass(GetTransactionDetailsRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetTransactionDetailsRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getTransactionDetailsRequest': this };
			logger.debug('Exit GetTransactionDetailsRequest getJSON');
			return obj;
		}
	}]);

	function GetTransactionDetailsRequest(obj) {
		_classCallCheck(this, GetTransactionDetailsRequest);

		logger.debug('Enter GetTransactionDetailsRequest constructor');
		if (arguments.length == 1) {
			var _this67 = _possibleConstructorReturn(this, (GetTransactionDetailsRequest.__proto__ || Object.getPrototypeOf(GetTransactionDetailsRequest)).call(this, obj));

			if ('transId' in obj && obj.transId != null) {
				_this67.setTransId(obj.transId);
			}
		} else {
			var _this67 = _possibleConstructorReturn(this, (GetTransactionDetailsRequest.__proto__ || Object.getPrototypeOf(GetTransactionDetailsRequest)).call(this));

			_this67.setTransId(null);
		}
		logger.debug('Exit GetTransactionDetailsRequest constructor');
		return _possibleConstructorReturn(_this67);
	}

	_createClass(GetTransactionDetailsRequest, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}]);

	return GetTransactionDetailsRequest;
}(ANetApiRequest);

module.exports.GetTransactionDetailsRequest = GetTransactionDetailsRequest;

var GetTransactionDetailsResponse = function (_ANetApiResponse29) {
	_inherits(GetTransactionDetailsResponse, _ANetApiResponse29);

	_createClass(GetTransactionDetailsResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetTransactionDetailsResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getTransactionDetailsResponse': this };
			logger.debug('Exit GetTransactionDetailsResponse getJSON');
			return obj;
		}
	}]);

	function GetTransactionDetailsResponse(obj) {
		_classCallCheck(this, GetTransactionDetailsResponse);

		logger.debug('Enter GetTransactionDetailsResponse constructor');
		if (arguments.length == 1) {
			var _this68 = _possibleConstructorReturn(this, (GetTransactionDetailsResponse.__proto__ || Object.getPrototypeOf(GetTransactionDetailsResponse)).call(this, obj));

			if ('transaction' in obj && obj.transaction != null) {
				_this68.setTransaction(new TransactionDetailsType(obj.transaction));
			}
			if ('clientId' in obj && obj.clientId != null) {
				_this68.setClientId(obj.clientId);
			}
			if ('transrefId' in obj && obj.transrefId != null) {
				_this68.setTransrefId(obj.transrefId);
			}
		} else {
			var _this68 = _possibleConstructorReturn(this, (GetTransactionDetailsResponse.__proto__ || Object.getPrototypeOf(GetTransactionDetailsResponse)).call(this));

			_this68.setTransaction(null);
			_this68.setClientId(null);
			_this68.setTransrefId(null);
		}
		logger.debug('Exit GetTransactionDetailsResponse constructor');
		return _possibleConstructorReturn(_this68);
	}

	_createClass(GetTransactionDetailsResponse, [{
		key: 'setTransaction',
		value: function setTransaction(p_transaction) {
			this.transaction = p_transaction;
		}
	}, {
		key: 'getTransaction',
		value: function getTransaction() {
			if ('transaction' in this) {
				return this.transaction;
			}
		}
	}, {
		key: 'setClientId',
		value: function setClientId(p_clientId) {
			this.clientId = p_clientId;
		}
	}, {
		key: 'getClientId',
		value: function getClientId() {
			if ('clientId' in this) {
				return this.clientId;
			}
		}
	}, {
		key: 'setTransrefId',
		value: function setTransrefId(p_transrefId) {
			this.transrefId = p_transrefId;
		}
	}, {
		key: 'getTransrefId',
		value: function getTransrefId() {
			if ('transrefId' in this) {
				return this.transrefId;
			}
		}
	}]);

	return GetTransactionDetailsResponse;
}(ANetApiResponse);

module.exports.GetTransactionDetailsResponse = GetTransactionDetailsResponse;

var GetTransactionListForCustomerRequest = function (_ANetApiRequest31) {
	_inherits(GetTransactionListForCustomerRequest, _ANetApiRequest31);

	_createClass(GetTransactionListForCustomerRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetTransactionListForCustomerRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getTransactionListForCustomerRequest': this };
			logger.debug('Exit GetTransactionListForCustomerRequest getJSON');
			return obj;
		}
	}]);

	function GetTransactionListForCustomerRequest(obj) {
		_classCallCheck(this, GetTransactionListForCustomerRequest);

		logger.debug('Enter GetTransactionListForCustomerRequest constructor');
		if (arguments.length == 1) {
			var _this69 = _possibleConstructorReturn(this, (GetTransactionListForCustomerRequest.__proto__ || Object.getPrototypeOf(GetTransactionListForCustomerRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this69.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this69.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('sorting' in obj && obj.sorting != null) {
				_this69.setSorting(new TransactionListSorting(obj.sorting));
			}
			if ('paging' in obj && obj.paging != null) {
				_this69.setPaging(new Paging(obj.paging));
			}
		} else {
			var _this69 = _possibleConstructorReturn(this, (GetTransactionListForCustomerRequest.__proto__ || Object.getPrototypeOf(GetTransactionListForCustomerRequest)).call(this));

			_this69.setCustomerProfileId(null);
			_this69.setCustomerPaymentProfileId(null);
			_this69.setSorting(null);
			_this69.setPaging(null);
		}
		logger.debug('Exit GetTransactionListForCustomerRequest constructor');
		return _possibleConstructorReturn(_this69);
	}

	_createClass(GetTransactionListForCustomerRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setSorting',
		value: function setSorting(p_sorting) {
			this.sorting = p_sorting;
		}
	}, {
		key: 'getSorting',
		value: function getSorting() {
			if ('sorting' in this) {
				return this.sorting;
			}
		}
	}, {
		key: 'setPaging',
		value: function setPaging(p_paging) {
			this.paging = p_paging;
		}
	}, {
		key: 'getPaging',
		value: function getPaging() {
			if ('paging' in this) {
				return this.paging;
			}
		}
	}]);

	return GetTransactionListForCustomerRequest;
}(ANetApiRequest);

module.exports.GetTransactionListForCustomerRequest = GetTransactionListForCustomerRequest;

var GetTransactionListRequest = function (_ANetApiRequest32) {
	_inherits(GetTransactionListRequest, _ANetApiRequest32);

	_createClass(GetTransactionListRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetTransactionListRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getTransactionListRequest': this };
			logger.debug('Exit GetTransactionListRequest getJSON');
			return obj;
		}
	}]);

	function GetTransactionListRequest(obj) {
		_classCallCheck(this, GetTransactionListRequest);

		logger.debug('Enter GetTransactionListRequest constructor');
		if (arguments.length == 1) {
			var _this70 = _possibleConstructorReturn(this, (GetTransactionListRequest.__proto__ || Object.getPrototypeOf(GetTransactionListRequest)).call(this, obj));

			if ('batchId' in obj && obj.batchId != null) {
				_this70.setBatchId(obj.batchId);
			}
			if ('sorting' in obj && obj.sorting != null) {
				_this70.setSorting(new TransactionListSorting(obj.sorting));
			}
			if ('paging' in obj && obj.paging != null) {
				_this70.setPaging(new Paging(obj.paging));
			}
		} else {
			var _this70 = _possibleConstructorReturn(this, (GetTransactionListRequest.__proto__ || Object.getPrototypeOf(GetTransactionListRequest)).call(this));

			_this70.setBatchId(null);
			_this70.setSorting(null);
			_this70.setPaging(null);
		}
		logger.debug('Exit GetTransactionListRequest constructor');
		return _possibleConstructorReturn(_this70);
	}

	_createClass(GetTransactionListRequest, [{
		key: 'setBatchId',
		value: function setBatchId(p_batchId) {
			this.batchId = p_batchId;
		}
	}, {
		key: 'getBatchId',
		value: function getBatchId() {
			if ('batchId' in this) {
				return this.batchId;
			}
		}
	}, {
		key: 'setSorting',
		value: function setSorting(p_sorting) {
			this.sorting = p_sorting;
		}
	}, {
		key: 'getSorting',
		value: function getSorting() {
			if ('sorting' in this) {
				return this.sorting;
			}
		}
	}, {
		key: 'setPaging',
		value: function setPaging(p_paging) {
			this.paging = p_paging;
		}
	}, {
		key: 'getPaging',
		value: function getPaging() {
			if ('paging' in this) {
				return this.paging;
			}
		}
	}]);

	return GetTransactionListRequest;
}(ANetApiRequest);

module.exports.GetTransactionListRequest = GetTransactionListRequest;

var GetTransactionListResponse = function (_ANetApiResponse30) {
	_inherits(GetTransactionListResponse, _ANetApiResponse30);

	_createClass(GetTransactionListResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetTransactionListResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getTransactionListResponse': this };
			logger.debug('Exit GetTransactionListResponse getJSON');
			return obj;
		}
	}]);

	function GetTransactionListResponse(obj) {
		_classCallCheck(this, GetTransactionListResponse);

		logger.debug('Enter GetTransactionListResponse constructor');
		if (arguments.length == 1) {
			var _this71 = _possibleConstructorReturn(this, (GetTransactionListResponse.__proto__ || Object.getPrototypeOf(GetTransactionListResponse)).call(this, obj));

			if ('transactions' in obj && obj.transactions != null) {
				_this71.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions));
			}
			if ('totalNumInResultSet' in obj && obj.totalNumInResultSet != null) {
				_this71.setTotalNumInResultSet(obj.totalNumInResultSet);
			}
		} else {
			var _this71 = _possibleConstructorReturn(this, (GetTransactionListResponse.__proto__ || Object.getPrototypeOf(GetTransactionListResponse)).call(this));

			_this71.setTransactions(null);
			_this71.setTotalNumInResultSet(null);
		}
		logger.debug('Exit GetTransactionListResponse constructor');
		return _possibleConstructorReturn(_this71);
	}

	_createClass(GetTransactionListResponse, [{
		key: 'setTransactions',
		value: function setTransactions(p_transactions) {
			this.transactions = p_transactions;
		}
	}, {
		key: 'getTransactions',
		value: function getTransactions() {
			if ('transactions' in this) {
				return this.transactions;
			}
		}
	}, {
		key: 'setTotalNumInResultSet',
		value: function setTotalNumInResultSet(p_totalNumInResultSet) {
			this.totalNumInResultSet = p_totalNumInResultSet;
		}
	}, {
		key: 'getTotalNumInResultSet',
		value: function getTotalNumInResultSet() {
			if ('totalNumInResultSet' in this) {
				return this.totalNumInResultSet;
			}
		}
	}]);

	return GetTransactionListResponse;
}(ANetApiResponse);

module.exports.GetTransactionListResponse = GetTransactionListResponse;

var GetUnsettledTransactionListRequest = function (_ANetApiRequest33) {
	_inherits(GetUnsettledTransactionListRequest, _ANetApiRequest33);

	_createClass(GetUnsettledTransactionListRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetUnsettledTransactionListRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getUnsettledTransactionListRequest': this };
			logger.debug('Exit GetUnsettledTransactionListRequest getJSON');
			return obj;
		}
	}]);

	function GetUnsettledTransactionListRequest(obj) {
		_classCallCheck(this, GetUnsettledTransactionListRequest);

		logger.debug('Enter GetUnsettledTransactionListRequest constructor');
		if (arguments.length == 1) {
			var _this72 = _possibleConstructorReturn(this, (GetUnsettledTransactionListRequest.__proto__ || Object.getPrototypeOf(GetUnsettledTransactionListRequest)).call(this, obj));

			if ('status' in obj && obj.status != null) {
				_this72.setStatus(obj.status);
			}
			if ('sorting' in obj && obj.sorting != null) {
				_this72.setSorting(new TransactionListSorting(obj.sorting));
			}
			if ('paging' in obj && obj.paging != null) {
				_this72.setPaging(new Paging(obj.paging));
			}
		} else {
			var _this72 = _possibleConstructorReturn(this, (GetUnsettledTransactionListRequest.__proto__ || Object.getPrototypeOf(GetUnsettledTransactionListRequest)).call(this));

			_this72.setStatus(null);
			_this72.setSorting(null);
			_this72.setPaging(null);
		}
		logger.debug('Exit GetUnsettledTransactionListRequest constructor');
		return _possibleConstructorReturn(_this72);
	}

	_createClass(GetUnsettledTransactionListRequest, [{
		key: 'setStatus',
		value: function setStatus(p_status) {
			this.status = p_status;
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			if ('status' in this) {
				return this.status;
			}
		}
	}, {
		key: 'setSorting',
		value: function setSorting(p_sorting) {
			this.sorting = p_sorting;
		}
	}, {
		key: 'getSorting',
		value: function getSorting() {
			if ('sorting' in this) {
				return this.sorting;
			}
		}
	}, {
		key: 'setPaging',
		value: function setPaging(p_paging) {
			this.paging = p_paging;
		}
	}, {
		key: 'getPaging',
		value: function getPaging() {
			if ('paging' in this) {
				return this.paging;
			}
		}
	}]);

	return GetUnsettledTransactionListRequest;
}(ANetApiRequest);

module.exports.GetUnsettledTransactionListRequest = GetUnsettledTransactionListRequest;

var GetUnsettledTransactionListResponse = function (_ANetApiResponse31) {
	_inherits(GetUnsettledTransactionListResponse, _ANetApiResponse31);

	_createClass(GetUnsettledTransactionListResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter GetUnsettledTransactionListResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'getUnsettledTransactionListResponse': this };
			logger.debug('Exit GetUnsettledTransactionListResponse getJSON');
			return obj;
		}
	}]);

	function GetUnsettledTransactionListResponse(obj) {
		_classCallCheck(this, GetUnsettledTransactionListResponse);

		logger.debug('Enter GetUnsettledTransactionListResponse constructor');
		if (arguments.length == 1) {
			var _this73 = _possibleConstructorReturn(this, (GetUnsettledTransactionListResponse.__proto__ || Object.getPrototypeOf(GetUnsettledTransactionListResponse)).call(this, obj));

			if ('transactions' in obj && obj.transactions != null) {
				_this73.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions));
			}
			if ('totalNumInResultSet' in obj && obj.totalNumInResultSet != null) {
				_this73.setTotalNumInResultSet(obj.totalNumInResultSet);
			}
		} else {
			var _this73 = _possibleConstructorReturn(this, (GetUnsettledTransactionListResponse.__proto__ || Object.getPrototypeOf(GetUnsettledTransactionListResponse)).call(this));

			_this73.setTransactions(null);
			_this73.setTotalNumInResultSet(null);
		}
		logger.debug('Exit GetUnsettledTransactionListResponse constructor');
		return _possibleConstructorReturn(_this73);
	}

	_createClass(GetUnsettledTransactionListResponse, [{
		key: 'setTransactions',
		value: function setTransactions(p_transactions) {
			this.transactions = p_transactions;
		}
	}, {
		key: 'getTransactions',
		value: function getTransactions() {
			if ('transactions' in this) {
				return this.transactions;
			}
		}
	}, {
		key: 'setTotalNumInResultSet',
		value: function setTotalNumInResultSet(p_totalNumInResultSet) {
			this.totalNumInResultSet = p_totalNumInResultSet;
		}
	}, {
		key: 'getTotalNumInResultSet',
		value: function getTotalNumInResultSet() {
			if ('totalNumInResultSet' in this) {
				return this.totalNumInResultSet;
			}
		}
	}]);

	return GetUnsettledTransactionListResponse;
}(ANetApiResponse);

module.exports.GetUnsettledTransactionListResponse = GetUnsettledTransactionListResponse;

var IsAliveResponse = function (_ANetApiResponse32) {
	_inherits(IsAliveResponse, _ANetApiResponse32);

	_createClass(IsAliveResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter IsAliveResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'isAliveResponse': this };
			logger.debug('Exit IsAliveResponse getJSON');
			return obj;
		}
	}]);

	function IsAliveResponse(obj) {
		_classCallCheck(this, IsAliveResponse);

		if (arguments.length == 1) {
			var _this74 = _possibleConstructorReturn(this, (IsAliveResponse.__proto__ || Object.getPrototypeOf(IsAliveResponse)).call(this, obj));
		} else {
			var _this74 = _possibleConstructorReturn(this, (IsAliveResponse.__proto__ || Object.getPrototypeOf(IsAliveResponse)).call(this));
		}return _possibleConstructorReturn(_this74);
	}

	return IsAliveResponse;
}(ANetApiResponse);

module.exports.IsAliveResponse = IsAliveResponse;

var LogoutRequest = function (_ANetApiRequest34) {
	_inherits(LogoutRequest, _ANetApiRequest34);

	_createClass(LogoutRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter LogoutRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'logoutRequest': this };
			logger.debug('Exit LogoutRequest getJSON');
			return obj;
		}
	}]);

	function LogoutRequest(obj) {
		_classCallCheck(this, LogoutRequest);

		if (arguments.length == 1) {
			var _this75 = _possibleConstructorReturn(this, (LogoutRequest.__proto__ || Object.getPrototypeOf(LogoutRequest)).call(this, obj));
		} else {
			var _this75 = _possibleConstructorReturn(this, (LogoutRequest.__proto__ || Object.getPrototypeOf(LogoutRequest)).call(this));
		}return _possibleConstructorReturn(_this75);
	}

	return LogoutRequest;
}(ANetApiRequest);

module.exports.LogoutRequest = LogoutRequest;

var LogoutResponse = function (_ANetApiResponse33) {
	_inherits(LogoutResponse, _ANetApiResponse33);

	_createClass(LogoutResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter LogoutResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'logoutResponse': this };
			logger.debug('Exit LogoutResponse getJSON');
			return obj;
		}
	}]);

	function LogoutResponse(obj) {
		_classCallCheck(this, LogoutResponse);

		if (arguments.length == 1) {
			var _this76 = _possibleConstructorReturn(this, (LogoutResponse.__proto__ || Object.getPrototypeOf(LogoutResponse)).call(this, obj));
		} else {
			var _this76 = _possibleConstructorReturn(this, (LogoutResponse.__proto__ || Object.getPrototypeOf(LogoutResponse)).call(this));
		}return _possibleConstructorReturn(_this76);
	}

	return LogoutResponse;
}(ANetApiResponse);

module.exports.LogoutResponse = LogoutResponse;

var MobileDeviceLoginRequest = function (_ANetApiRequest35) {
	_inherits(MobileDeviceLoginRequest, _ANetApiRequest35);

	_createClass(MobileDeviceLoginRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter MobileDeviceLoginRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'mobileDeviceLoginRequest': this };
			logger.debug('Exit MobileDeviceLoginRequest getJSON');
			return obj;
		}
	}]);

	function MobileDeviceLoginRequest(obj) {
		_classCallCheck(this, MobileDeviceLoginRequest);

		if (arguments.length == 1) {
			var _this77 = _possibleConstructorReturn(this, (MobileDeviceLoginRequest.__proto__ || Object.getPrototypeOf(MobileDeviceLoginRequest)).call(this, obj));
		} else {
			var _this77 = _possibleConstructorReturn(this, (MobileDeviceLoginRequest.__proto__ || Object.getPrototypeOf(MobileDeviceLoginRequest)).call(this));
		}return _possibleConstructorReturn(_this77);
	}

	return MobileDeviceLoginRequest;
}(ANetApiRequest);

module.exports.MobileDeviceLoginRequest = MobileDeviceLoginRequest;

var MobileDeviceLoginResponse = function (_ANetApiResponse34) {
	_inherits(MobileDeviceLoginResponse, _ANetApiResponse34);

	_createClass(MobileDeviceLoginResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter MobileDeviceLoginResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'mobileDeviceLoginResponse': this };
			logger.debug('Exit MobileDeviceLoginResponse getJSON');
			return obj;
		}
	}]);

	function MobileDeviceLoginResponse(obj) {
		_classCallCheck(this, MobileDeviceLoginResponse);

		logger.debug('Enter MobileDeviceLoginResponse constructor');
		if (arguments.length == 1) {
			var _this78 = _possibleConstructorReturn(this, (MobileDeviceLoginResponse.__proto__ || Object.getPrototypeOf(MobileDeviceLoginResponse)).call(this, obj));

			if ('merchantContact' in obj && obj.merchantContact != null) {
				_this78.setMerchantContact(new MerchantContactType(obj.merchantContact));
			}
			if ('userPermissions' in obj && obj.userPermissions != null) {
				_this78.setUserPermissions(new ArrayOfPermissionType(obj.userPermissions));
			}
			if ('merchantAccount' in obj && obj.merchantAccount != null) {
				_this78.setMerchantAccount(new TransRetailInfoType(obj.merchantAccount));
			}
		} else {
			var _this78 = _possibleConstructorReturn(this, (MobileDeviceLoginResponse.__proto__ || Object.getPrototypeOf(MobileDeviceLoginResponse)).call(this));

			_this78.setMerchantContact(null);
			_this78.setUserPermissions(null);
			_this78.setMerchantAccount(null);
		}
		logger.debug('Exit MobileDeviceLoginResponse constructor');
		return _possibleConstructorReturn(_this78);
	}

	_createClass(MobileDeviceLoginResponse, [{
		key: 'setMerchantContact',
		value: function setMerchantContact(p_merchantContact) {
			this.merchantContact = p_merchantContact;
		}
	}, {
		key: 'getMerchantContact',
		value: function getMerchantContact() {
			if ('merchantContact' in this) {
				return this.merchantContact;
			}
		}
	}, {
		key: 'setUserPermissions',
		value: function setUserPermissions(p_userPermissions) {
			this.userPermissions = p_userPermissions;
		}
	}, {
		key: 'getUserPermissions',
		value: function getUserPermissions() {
			if ('userPermissions' in this) {
				return this.userPermissions;
			}
		}
	}, {
		key: 'setMerchantAccount',
		value: function setMerchantAccount(p_merchantAccount) {
			this.merchantAccount = p_merchantAccount;
		}
	}, {
		key: 'getMerchantAccount',
		value: function getMerchantAccount() {
			if ('merchantAccount' in this) {
				return this.merchantAccount;
			}
		}
	}]);

	return MobileDeviceLoginResponse;
}(ANetApiResponse);

module.exports.MobileDeviceLoginResponse = MobileDeviceLoginResponse;

var MobileDeviceRegistrationRequest = function (_ANetApiRequest36) {
	_inherits(MobileDeviceRegistrationRequest, _ANetApiRequest36);

	_createClass(MobileDeviceRegistrationRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter MobileDeviceRegistrationRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'mobileDeviceRegistrationRequest': this };
			logger.debug('Exit MobileDeviceRegistrationRequest getJSON');
			return obj;
		}
	}]);

	function MobileDeviceRegistrationRequest(obj) {
		_classCallCheck(this, MobileDeviceRegistrationRequest);

		logger.debug('Enter MobileDeviceRegistrationRequest constructor');
		if (arguments.length == 1) {
			var _this79 = _possibleConstructorReturn(this, (MobileDeviceRegistrationRequest.__proto__ || Object.getPrototypeOf(MobileDeviceRegistrationRequest)).call(this, obj));

			if ('mobileDevice' in obj && obj.mobileDevice != null) {
				_this79.setMobileDevice(new MobileDeviceType(obj.mobileDevice));
			}
		} else {
			var _this79 = _possibleConstructorReturn(this, (MobileDeviceRegistrationRequest.__proto__ || Object.getPrototypeOf(MobileDeviceRegistrationRequest)).call(this));

			_this79.setMobileDevice(null);
		}
		logger.debug('Exit MobileDeviceRegistrationRequest constructor');
		return _possibleConstructorReturn(_this79);
	}

	_createClass(MobileDeviceRegistrationRequest, [{
		key: 'setMobileDevice',
		value: function setMobileDevice(p_mobileDevice) {
			this.mobileDevice = p_mobileDevice;
		}
	}, {
		key: 'getMobileDevice',
		value: function getMobileDevice() {
			if ('mobileDevice' in this) {
				return this.mobileDevice;
			}
		}
	}]);

	return MobileDeviceRegistrationRequest;
}(ANetApiRequest);

module.exports.MobileDeviceRegistrationRequest = MobileDeviceRegistrationRequest;

var MobileDeviceRegistrationResponse = function (_ANetApiResponse35) {
	_inherits(MobileDeviceRegistrationResponse, _ANetApiResponse35);

	_createClass(MobileDeviceRegistrationResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter MobileDeviceRegistrationResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'mobileDeviceRegistrationResponse': this };
			logger.debug('Exit MobileDeviceRegistrationResponse getJSON');
			return obj;
		}
	}]);

	function MobileDeviceRegistrationResponse(obj) {
		_classCallCheck(this, MobileDeviceRegistrationResponse);

		if (arguments.length == 1) {
			var _this80 = _possibleConstructorReturn(this, (MobileDeviceRegistrationResponse.__proto__ || Object.getPrototypeOf(MobileDeviceRegistrationResponse)).call(this, obj));
		} else {
			var _this80 = _possibleConstructorReturn(this, (MobileDeviceRegistrationResponse.__proto__ || Object.getPrototypeOf(MobileDeviceRegistrationResponse)).call(this));
		}return _possibleConstructorReturn(_this80);
	}

	return MobileDeviceRegistrationResponse;
}(ANetApiResponse);

module.exports.MobileDeviceRegistrationResponse = MobileDeviceRegistrationResponse;

var OrderExType = function (_OrderType) {
	_inherits(OrderExType, _OrderType);

	function OrderExType(obj) {
		_classCallCheck(this, OrderExType);

		logger.debug('Enter OrderExType constructor');
		if (arguments.length == 1) {
			var _this81 = _possibleConstructorReturn(this, (OrderExType.__proto__ || Object.getPrototypeOf(OrderExType)).call(this, obj));

			if ('purchaseOrderNumber' in obj && obj.purchaseOrderNumber != null) {
				_this81.setPurchaseOrderNumber(obj.purchaseOrderNumber);
			}
		} else {
			var _this81 = _possibleConstructorReturn(this, (OrderExType.__proto__ || Object.getPrototypeOf(OrderExType)).call(this));

			_this81.setPurchaseOrderNumber(null);
		}
		logger.debug('Exit OrderExType constructor');
		return _possibleConstructorReturn(_this81);
	}

	_createClass(OrderExType, [{
		key: 'setPurchaseOrderNumber',
		value: function setPurchaseOrderNumber(p_purchaseOrderNumber) {
			this.purchaseOrderNumber = p_purchaseOrderNumber;
		}
	}, {
		key: 'getPurchaseOrderNumber',
		value: function getPurchaseOrderNumber() {
			if ('purchaseOrderNumber' in this) {
				return this.purchaseOrderNumber;
			}
		}
	}]);

	return OrderExType;
}(OrderType);

module.exports.OrderExType = OrderExType;

var ProfileTransOrderType = function (_ProfileTransAmountTy) {
	_inherits(ProfileTransOrderType, _ProfileTransAmountTy);

	function ProfileTransOrderType(obj) {
		_classCallCheck(this, ProfileTransOrderType);

		logger.debug('Enter ProfileTransOrderType constructor');
		if (arguments.length == 1) {
			var _this82 = _possibleConstructorReturn(this, (ProfileTransOrderType.__proto__ || Object.getPrototypeOf(ProfileTransOrderType)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this82.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this82.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerShippingAddressId' in obj && obj.customerShippingAddressId != null) {
				_this82.setCustomerShippingAddressId(obj.customerShippingAddressId);
			}
			if ('order' in obj && obj.order != null) {
				_this82.setOrder(new OrderExType(obj.order));
			}
			if ('taxExempt' in obj && obj.taxExempt != null) {
				_this82.setTaxExempt(obj.taxExempt);
			}
			if ('recurringBilling' in obj && obj.recurringBilling != null) {
				_this82.setRecurringBilling(obj.recurringBilling);
			}
			if ('cardCode' in obj && obj.cardCode != null) {
				_this82.setCardCode(obj.cardCode);
			}
			if ('splitTenderId' in obj && obj.splitTenderId != null) {
				_this82.setSplitTenderId(obj.splitTenderId);
			}
		} else {
			var _this82 = _possibleConstructorReturn(this, (ProfileTransOrderType.__proto__ || Object.getPrototypeOf(ProfileTransOrderType)).call(this));

			_this82.setCustomerProfileId(null);
			_this82.setCustomerPaymentProfileId(null);
			_this82.setCustomerShippingAddressId(null);
			_this82.setOrder(null);
			_this82.setTaxExempt(null);
			_this82.setRecurringBilling(null);
			_this82.setCardCode(null);
			_this82.setSplitTenderId(null);
		}
		logger.debug('Exit ProfileTransOrderType constructor');
		return _possibleConstructorReturn(_this82);
	}

	_createClass(ProfileTransOrderType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerShippingAddressId',
		value: function setCustomerShippingAddressId(p_customerShippingAddressId) {
			this.customerShippingAddressId = p_customerShippingAddressId;
		}
	}, {
		key: 'getCustomerShippingAddressId',
		value: function getCustomerShippingAddressId() {
			if ('customerShippingAddressId' in this) {
				return this.customerShippingAddressId;
			}
		}
	}, {
		key: 'setOrder',
		value: function setOrder(p_order) {
			this.order = p_order;
		}
	}, {
		key: 'getOrder',
		value: function getOrder() {
			if ('order' in this) {
				return this.order;
			}
		}
	}, {
		key: 'setTaxExempt',
		value: function setTaxExempt(p_taxExempt) {
			this.taxExempt = p_taxExempt;
		}
	}, {
		key: 'getTaxExempt',
		value: function getTaxExempt() {
			if ('taxExempt' in this) {
				return this.taxExempt;
			}
		}
	}, {
		key: 'setRecurringBilling',
		value: function setRecurringBilling(p_recurringBilling) {
			this.recurringBilling = p_recurringBilling;
		}
	}, {
		key: 'getRecurringBilling',
		value: function getRecurringBilling() {
			if ('recurringBilling' in this) {
				return this.recurringBilling;
			}
		}
	}, {
		key: 'setCardCode',
		value: function setCardCode(p_cardCode) {
			this.cardCode = p_cardCode;
		}
	}, {
		key: 'getCardCode',
		value: function getCardCode() {
			if ('cardCode' in this) {
				return this.cardCode;
			}
		}
	}, {
		key: 'setSplitTenderId',
		value: function setSplitTenderId(p_splitTenderId) {
			this.splitTenderId = p_splitTenderId;
		}
	}, {
		key: 'getSplitTenderId',
		value: function getSplitTenderId() {
			if ('splitTenderId' in this) {
				return this.splitTenderId;
			}
		}
	}]);

	return ProfileTransOrderType;
}(ProfileTransAmountType);

module.exports.ProfileTransOrderType = ProfileTransOrderType;

var ProfileTransPriorAuthCaptureType = function (_ProfileTransAmountTy2) {
	_inherits(ProfileTransPriorAuthCaptureType, _ProfileTransAmountTy2);

	function ProfileTransPriorAuthCaptureType(obj) {
		_classCallCheck(this, ProfileTransPriorAuthCaptureType);

		logger.debug('Enter ProfileTransPriorAuthCaptureType constructor');
		if (arguments.length == 1) {
			var _this83 = _possibleConstructorReturn(this, (ProfileTransPriorAuthCaptureType.__proto__ || Object.getPrototypeOf(ProfileTransPriorAuthCaptureType)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this83.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this83.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerShippingAddressId' in obj && obj.customerShippingAddressId != null) {
				_this83.setCustomerShippingAddressId(obj.customerShippingAddressId);
			}
			if ('transId' in obj && obj.transId != null) {
				_this83.setTransId(obj.transId);
			}
		} else {
			var _this83 = _possibleConstructorReturn(this, (ProfileTransPriorAuthCaptureType.__proto__ || Object.getPrototypeOf(ProfileTransPriorAuthCaptureType)).call(this));

			_this83.setCustomerProfileId(null);
			_this83.setCustomerPaymentProfileId(null);
			_this83.setCustomerShippingAddressId(null);
			_this83.setTransId(null);
		}
		logger.debug('Exit ProfileTransPriorAuthCaptureType constructor');
		return _possibleConstructorReturn(_this83);
	}

	_createClass(ProfileTransPriorAuthCaptureType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerShippingAddressId',
		value: function setCustomerShippingAddressId(p_customerShippingAddressId) {
			this.customerShippingAddressId = p_customerShippingAddressId;
		}
	}, {
		key: 'getCustomerShippingAddressId',
		value: function getCustomerShippingAddressId() {
			if ('customerShippingAddressId' in this) {
				return this.customerShippingAddressId;
			}
		}
	}, {
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}]);

	return ProfileTransPriorAuthCaptureType;
}(ProfileTransAmountType);

module.exports.ProfileTransPriorAuthCaptureType = ProfileTransPriorAuthCaptureType;

var ProfileTransRefundType = function (_ProfileTransAmountTy3) {
	_inherits(ProfileTransRefundType, _ProfileTransAmountTy3);

	function ProfileTransRefundType(obj) {
		_classCallCheck(this, ProfileTransRefundType);

		logger.debug('Enter ProfileTransRefundType constructor');
		if (arguments.length == 1) {
			var _this84 = _possibleConstructorReturn(this, (ProfileTransRefundType.__proto__ || Object.getPrototypeOf(ProfileTransRefundType)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this84.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this84.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerShippingAddressId' in obj && obj.customerShippingAddressId != null) {
				_this84.setCustomerShippingAddressId(obj.customerShippingAddressId);
			}
			if ('creditCardNumberMasked' in obj && obj.creditCardNumberMasked != null) {
				_this84.setCreditCardNumberMasked(obj.creditCardNumberMasked);
			}
			if ('bankRoutingNumberMasked' in obj && obj.bankRoutingNumberMasked != null) {
				_this84.setBankRoutingNumberMasked(obj.bankRoutingNumberMasked);
			}
			if ('bankAccountNumberMasked' in obj && obj.bankAccountNumberMasked != null) {
				_this84.setBankAccountNumberMasked(obj.bankAccountNumberMasked);
			}
			if ('order' in obj && obj.order != null) {
				_this84.setOrder(new OrderExType(obj.order));
			}
			if ('transId' in obj && obj.transId != null) {
				_this84.setTransId(obj.transId);
			}
		} else {
			var _this84 = _possibleConstructorReturn(this, (ProfileTransRefundType.__proto__ || Object.getPrototypeOf(ProfileTransRefundType)).call(this));

			_this84.setCustomerProfileId(null);
			_this84.setCustomerPaymentProfileId(null);
			_this84.setCustomerShippingAddressId(null);
			_this84.setCreditCardNumberMasked(null);
			_this84.setBankRoutingNumberMasked(null);
			_this84.setBankAccountNumberMasked(null);
			_this84.setOrder(null);
			_this84.setTransId(null);
		}
		logger.debug('Exit ProfileTransRefundType constructor');
		return _possibleConstructorReturn(_this84);
	}

	_createClass(ProfileTransRefundType, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerShippingAddressId',
		value: function setCustomerShippingAddressId(p_customerShippingAddressId) {
			this.customerShippingAddressId = p_customerShippingAddressId;
		}
	}, {
		key: 'getCustomerShippingAddressId',
		value: function getCustomerShippingAddressId() {
			if ('customerShippingAddressId' in this) {
				return this.customerShippingAddressId;
			}
		}
	}, {
		key: 'setCreditCardNumberMasked',
		value: function setCreditCardNumberMasked(p_creditCardNumberMasked) {
			this.creditCardNumberMasked = p_creditCardNumberMasked;
		}
	}, {
		key: 'getCreditCardNumberMasked',
		value: function getCreditCardNumberMasked() {
			if ('creditCardNumberMasked' in this) {
				return this.creditCardNumberMasked;
			}
		}
	}, {
		key: 'setBankRoutingNumberMasked',
		value: function setBankRoutingNumberMasked(p_bankRoutingNumberMasked) {
			this.bankRoutingNumberMasked = p_bankRoutingNumberMasked;
		}
	}, {
		key: 'getBankRoutingNumberMasked',
		value: function getBankRoutingNumberMasked() {
			if ('bankRoutingNumberMasked' in this) {
				return this.bankRoutingNumberMasked;
			}
		}
	}, {
		key: 'setBankAccountNumberMasked',
		value: function setBankAccountNumberMasked(p_bankAccountNumberMasked) {
			this.bankAccountNumberMasked = p_bankAccountNumberMasked;
		}
	}, {
		key: 'getBankAccountNumberMasked',
		value: function getBankAccountNumberMasked() {
			if ('bankAccountNumberMasked' in this) {
				return this.bankAccountNumberMasked;
			}
		}
	}, {
		key: 'setOrder',
		value: function setOrder(p_order) {
			this.order = p_order;
		}
	}, {
		key: 'getOrder',
		value: function getOrder() {
			if ('order' in this) {
				return this.order;
			}
		}
	}, {
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}]);

	return ProfileTransRefundType;
}(ProfileTransAmountType);

module.exports.ProfileTransRefundType = ProfileTransRefundType;

var SecurePaymentContainerRequest = function (_ANetApiRequest37) {
	_inherits(SecurePaymentContainerRequest, _ANetApiRequest37);

	_createClass(SecurePaymentContainerRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter SecurePaymentContainerRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'securePaymentContainerRequest': this };
			logger.debug('Exit SecurePaymentContainerRequest getJSON');
			return obj;
		}
	}]);

	function SecurePaymentContainerRequest(obj) {
		_classCallCheck(this, SecurePaymentContainerRequest);

		logger.debug('Enter SecurePaymentContainerRequest constructor');
		if (arguments.length == 1) {
			var _this85 = _possibleConstructorReturn(this, (SecurePaymentContainerRequest.__proto__ || Object.getPrototypeOf(SecurePaymentContainerRequest)).call(this, obj));

			if ('data' in obj && obj.data != null) {
				_this85.setData(new WebCheckOutDataType(obj.data));
			}
		} else {
			var _this85 = _possibleConstructorReturn(this, (SecurePaymentContainerRequest.__proto__ || Object.getPrototypeOf(SecurePaymentContainerRequest)).call(this));

			_this85.setData(null);
		}
		logger.debug('Exit SecurePaymentContainerRequest constructor');
		return _possibleConstructorReturn(_this85);
	}

	_createClass(SecurePaymentContainerRequest, [{
		key: 'setData',
		value: function setData(p_data) {
			this.data = p_data;
		}
	}, {
		key: 'getData',
		value: function getData() {
			if ('data' in this) {
				return this.data;
			}
		}
	}]);

	return SecurePaymentContainerRequest;
}(ANetApiRequest);

module.exports.SecurePaymentContainerRequest = SecurePaymentContainerRequest;

var SecurePaymentContainerResponse = function (_ANetApiResponse36) {
	_inherits(SecurePaymentContainerResponse, _ANetApiResponse36);

	_createClass(SecurePaymentContainerResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter SecurePaymentContainerResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'securePaymentContainerResponse': this };
			logger.debug('Exit SecurePaymentContainerResponse getJSON');
			return obj;
		}
	}]);

	function SecurePaymentContainerResponse(obj) {
		_classCallCheck(this, SecurePaymentContainerResponse);

		logger.debug('Enter SecurePaymentContainerResponse constructor');
		if (arguments.length == 1) {
			var _this86 = _possibleConstructorReturn(this, (SecurePaymentContainerResponse.__proto__ || Object.getPrototypeOf(SecurePaymentContainerResponse)).call(this, obj));

			if ('opaqueData' in obj && obj.opaqueData != null) {
				_this86.setOpaqueData(new OpaqueDataType(obj.opaqueData));
			}
		} else {
			var _this86 = _possibleConstructorReturn(this, (SecurePaymentContainerResponse.__proto__ || Object.getPrototypeOf(SecurePaymentContainerResponse)).call(this));

			_this86.setOpaqueData(null);
		}
		logger.debug('Exit SecurePaymentContainerResponse constructor');
		return _possibleConstructorReturn(_this86);
	}

	_createClass(SecurePaymentContainerResponse, [{
		key: 'setOpaqueData',
		value: function setOpaqueData(p_opaqueData) {
			this.opaqueData = p_opaqueData;
		}
	}, {
		key: 'getOpaqueData',
		value: function getOpaqueData() {
			if ('opaqueData' in this) {
				return this.opaqueData;
			}
		}
	}]);

	return SecurePaymentContainerResponse;
}(ANetApiResponse);

module.exports.SecurePaymentContainerResponse = SecurePaymentContainerResponse;

var SendCustomerTransactionReceiptRequest = function (_ANetApiRequest38) {
	_inherits(SendCustomerTransactionReceiptRequest, _ANetApiRequest38);

	_createClass(SendCustomerTransactionReceiptRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter SendCustomerTransactionReceiptRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'sendCustomerTransactionReceiptRequest': this };
			logger.debug('Exit SendCustomerTransactionReceiptRequest getJSON');
			return obj;
		}
	}]);

	function SendCustomerTransactionReceiptRequest(obj) {
		_classCallCheck(this, SendCustomerTransactionReceiptRequest);

		logger.debug('Enter SendCustomerTransactionReceiptRequest constructor');
		if (arguments.length == 1) {
			var _this87 = _possibleConstructorReturn(this, (SendCustomerTransactionReceiptRequest.__proto__ || Object.getPrototypeOf(SendCustomerTransactionReceiptRequest)).call(this, obj));

			if ('transId' in obj && obj.transId != null) {
				_this87.setTransId(obj.transId);
			}
			if ('customerEmail' in obj && obj.customerEmail != null) {
				_this87.setCustomerEmail(obj.customerEmail);
			}
			if ('emailSettings' in obj && obj.emailSettings != null) {
				_this87.setEmailSettings(new EmailSettingsType(obj.emailSettings));
			}
		} else {
			var _this87 = _possibleConstructorReturn(this, (SendCustomerTransactionReceiptRequest.__proto__ || Object.getPrototypeOf(SendCustomerTransactionReceiptRequest)).call(this));

			_this87.setTransId(null);
			_this87.setCustomerEmail(null);
			_this87.setEmailSettings(null);
		}
		logger.debug('Exit SendCustomerTransactionReceiptRequest constructor');
		return _possibleConstructorReturn(_this87);
	}

	_createClass(SendCustomerTransactionReceiptRequest, [{
		key: 'setTransId',
		value: function setTransId(p_transId) {
			this.transId = p_transId;
		}
	}, {
		key: 'getTransId',
		value: function getTransId() {
			if ('transId' in this) {
				return this.transId;
			}
		}
	}, {
		key: 'setCustomerEmail',
		value: function setCustomerEmail(p_customerEmail) {
			this.customerEmail = p_customerEmail;
		}
	}, {
		key: 'getCustomerEmail',
		value: function getCustomerEmail() {
			if ('customerEmail' in this) {
				return this.customerEmail;
			}
		}
	}, {
		key: 'setEmailSettings',
		value: function setEmailSettings(p_emailSettings) {
			this.emailSettings = p_emailSettings;
		}
	}, {
		key: 'getEmailSettings',
		value: function getEmailSettings() {
			if ('emailSettings' in this) {
				return this.emailSettings;
			}
		}
	}]);

	return SendCustomerTransactionReceiptRequest;
}(ANetApiRequest);

module.exports.SendCustomerTransactionReceiptRequest = SendCustomerTransactionReceiptRequest;

var SendCustomerTransactionReceiptResponse = function (_ANetApiResponse37) {
	_inherits(SendCustomerTransactionReceiptResponse, _ANetApiResponse37);

	_createClass(SendCustomerTransactionReceiptResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter SendCustomerTransactionReceiptResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'sendCustomerTransactionReceiptResponse': this };
			logger.debug('Exit SendCustomerTransactionReceiptResponse getJSON');
			return obj;
		}
	}]);

	function SendCustomerTransactionReceiptResponse(obj) {
		_classCallCheck(this, SendCustomerTransactionReceiptResponse);

		if (arguments.length == 1) {
			var _this88 = _possibleConstructorReturn(this, (SendCustomerTransactionReceiptResponse.__proto__ || Object.getPrototypeOf(SendCustomerTransactionReceiptResponse)).call(this, obj));
		} else {
			var _this88 = _possibleConstructorReturn(this, (SendCustomerTransactionReceiptResponse.__proto__ || Object.getPrototypeOf(SendCustomerTransactionReceiptResponse)).call(this));
		}return _possibleConstructorReturn(_this88);
	}

	return SendCustomerTransactionReceiptResponse;
}(ANetApiResponse);

module.exports.SendCustomerTransactionReceiptResponse = SendCustomerTransactionReceiptResponse;

var UpdateCustomerPaymentProfileRequest = function (_ANetApiRequest39) {
	_inherits(UpdateCustomerPaymentProfileRequest, _ANetApiRequest39);

	_createClass(UpdateCustomerPaymentProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateCustomerPaymentProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateCustomerPaymentProfileRequest': this };
			logger.debug('Exit UpdateCustomerPaymentProfileRequest getJSON');
			return obj;
		}
	}]);

	function UpdateCustomerPaymentProfileRequest(obj) {
		_classCallCheck(this, UpdateCustomerPaymentProfileRequest);

		logger.debug('Enter UpdateCustomerPaymentProfileRequest constructor');
		if (arguments.length == 1) {
			var _this89 = _possibleConstructorReturn(this, (UpdateCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(UpdateCustomerPaymentProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this89.setCustomerProfileId(obj.customerProfileId);
			}
			if ('paymentProfile' in obj && obj.paymentProfile != null) {
				_this89.setPaymentProfile(new CustomerPaymentProfileExType(obj.paymentProfile));
			}
			if ('validationMode' in obj && obj.validationMode != null) {
				_this89.setValidationMode(obj.validationMode);
			}
		} else {
			var _this89 = _possibleConstructorReturn(this, (UpdateCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(UpdateCustomerPaymentProfileRequest)).call(this));

			_this89.setCustomerProfileId(null);
			_this89.setPaymentProfile(null);
			_this89.setValidationMode(null);
		}
		logger.debug('Exit UpdateCustomerPaymentProfileRequest constructor');
		return _possibleConstructorReturn(_this89);
	}

	_createClass(UpdateCustomerPaymentProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setPaymentProfile',
		value: function setPaymentProfile(p_paymentProfile) {
			this.paymentProfile = p_paymentProfile;
		}
	}, {
		key: 'getPaymentProfile',
		value: function getPaymentProfile() {
			if ('paymentProfile' in this) {
				return this.paymentProfile;
			}
		}
	}, {
		key: 'setValidationMode',
		value: function setValidationMode(p_validationMode) {
			this.validationMode = p_validationMode;
		}
	}, {
		key: 'getValidationMode',
		value: function getValidationMode() {
			if ('validationMode' in this) {
				return this.validationMode;
			}
		}
	}]);

	return UpdateCustomerPaymentProfileRequest;
}(ANetApiRequest);

module.exports.UpdateCustomerPaymentProfileRequest = UpdateCustomerPaymentProfileRequest;

var UpdateCustomerPaymentProfileResponse = function (_ANetApiResponse38) {
	_inherits(UpdateCustomerPaymentProfileResponse, _ANetApiResponse38);

	_createClass(UpdateCustomerPaymentProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateCustomerPaymentProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateCustomerPaymentProfileResponse': this };
			logger.debug('Exit UpdateCustomerPaymentProfileResponse getJSON');
			return obj;
		}
	}]);

	function UpdateCustomerPaymentProfileResponse(obj) {
		_classCallCheck(this, UpdateCustomerPaymentProfileResponse);

		logger.debug('Enter UpdateCustomerPaymentProfileResponse constructor');
		if (arguments.length == 1) {
			var _this90 = _possibleConstructorReturn(this, (UpdateCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(UpdateCustomerPaymentProfileResponse)).call(this, obj));

			if ('validationDirectResponse' in obj && obj.validationDirectResponse != null) {
				_this90.setValidationDirectResponse(obj.validationDirectResponse);
			}
		} else {
			var _this90 = _possibleConstructorReturn(this, (UpdateCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(UpdateCustomerPaymentProfileResponse)).call(this));

			_this90.setValidationDirectResponse(null);
		}
		logger.debug('Exit UpdateCustomerPaymentProfileResponse constructor');
		return _possibleConstructorReturn(_this90);
	}

	_createClass(UpdateCustomerPaymentProfileResponse, [{
		key: 'setValidationDirectResponse',
		value: function setValidationDirectResponse(p_validationDirectResponse) {
			this.validationDirectResponse = p_validationDirectResponse;
		}
	}, {
		key: 'getValidationDirectResponse',
		value: function getValidationDirectResponse() {
			if ('validationDirectResponse' in this) {
				return this.validationDirectResponse;
			}
		}
	}]);

	return UpdateCustomerPaymentProfileResponse;
}(ANetApiResponse);

module.exports.UpdateCustomerPaymentProfileResponse = UpdateCustomerPaymentProfileResponse;

var UpdateCustomerProfileRequest = function (_ANetApiRequest40) {
	_inherits(UpdateCustomerProfileRequest, _ANetApiRequest40);

	_createClass(UpdateCustomerProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateCustomerProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateCustomerProfileRequest': this };
			logger.debug('Exit UpdateCustomerProfileRequest getJSON');
			return obj;
		}
	}]);

	function UpdateCustomerProfileRequest(obj) {
		_classCallCheck(this, UpdateCustomerProfileRequest);

		logger.debug('Enter UpdateCustomerProfileRequest constructor');
		if (arguments.length == 1) {
			var _this91 = _possibleConstructorReturn(this, (UpdateCustomerProfileRequest.__proto__ || Object.getPrototypeOf(UpdateCustomerProfileRequest)).call(this, obj));

			if ('profile' in obj && obj.profile != null) {
				_this91.setProfile(new CustomerProfileExType(obj.profile));
			}
		} else {
			var _this91 = _possibleConstructorReturn(this, (UpdateCustomerProfileRequest.__proto__ || Object.getPrototypeOf(UpdateCustomerProfileRequest)).call(this));

			_this91.setProfile(null);
		}
		logger.debug('Exit UpdateCustomerProfileRequest constructor');
		return _possibleConstructorReturn(_this91);
	}

	_createClass(UpdateCustomerProfileRequest, [{
		key: 'setProfile',
		value: function setProfile(p_profile) {
			this.profile = p_profile;
		}
	}, {
		key: 'getProfile',
		value: function getProfile() {
			if ('profile' in this) {
				return this.profile;
			}
		}
	}]);

	return UpdateCustomerProfileRequest;
}(ANetApiRequest);

module.exports.UpdateCustomerProfileRequest = UpdateCustomerProfileRequest;

var UpdateCustomerProfileResponse = function (_ANetApiResponse39) {
	_inherits(UpdateCustomerProfileResponse, _ANetApiResponse39);

	_createClass(UpdateCustomerProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateCustomerProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateCustomerProfileResponse': this };
			logger.debug('Exit UpdateCustomerProfileResponse getJSON');
			return obj;
		}
	}]);

	function UpdateCustomerProfileResponse(obj) {
		_classCallCheck(this, UpdateCustomerProfileResponse);

		if (arguments.length == 1) {
			var _this92 = _possibleConstructorReturn(this, (UpdateCustomerProfileResponse.__proto__ || Object.getPrototypeOf(UpdateCustomerProfileResponse)).call(this, obj));
		} else {
			var _this92 = _possibleConstructorReturn(this, (UpdateCustomerProfileResponse.__proto__ || Object.getPrototypeOf(UpdateCustomerProfileResponse)).call(this));
		}return _possibleConstructorReturn(_this92);
	}

	return UpdateCustomerProfileResponse;
}(ANetApiResponse);

module.exports.UpdateCustomerProfileResponse = UpdateCustomerProfileResponse;

var UpdateCustomerShippingAddressRequest = function (_ANetApiRequest41) {
	_inherits(UpdateCustomerShippingAddressRequest, _ANetApiRequest41);

	_createClass(UpdateCustomerShippingAddressRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateCustomerShippingAddressRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateCustomerShippingAddressRequest': this };
			logger.debug('Exit UpdateCustomerShippingAddressRequest getJSON');
			return obj;
		}
	}]);

	function UpdateCustomerShippingAddressRequest(obj) {
		_classCallCheck(this, UpdateCustomerShippingAddressRequest);

		logger.debug('Enter UpdateCustomerShippingAddressRequest constructor');
		if (arguments.length == 1) {
			var _this93 = _possibleConstructorReturn(this, (UpdateCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(UpdateCustomerShippingAddressRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this93.setCustomerProfileId(obj.customerProfileId);
			}
			if ('address' in obj && obj.address != null) {
				_this93.setAddress(new CustomerAddressExType(obj.address));
			}
			if ('defaultShippingAddress' in obj && obj.defaultShippingAddress != null) {
				_this93.setDefaultShippingAddress(obj.defaultShippingAddress);
			}
		} else {
			var _this93 = _possibleConstructorReturn(this, (UpdateCustomerShippingAddressRequest.__proto__ || Object.getPrototypeOf(UpdateCustomerShippingAddressRequest)).call(this));

			_this93.setCustomerProfileId(null);
			_this93.setAddress(null);
			_this93.setDefaultShippingAddress(null);
		}
		logger.debug('Exit UpdateCustomerShippingAddressRequest constructor');
		return _possibleConstructorReturn(_this93);
	}

	_createClass(UpdateCustomerShippingAddressRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setAddress',
		value: function setAddress(p_address) {
			this.address = p_address;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			if ('address' in this) {
				return this.address;
			}
		}
	}, {
		key: 'setDefaultShippingAddress',
		value: function setDefaultShippingAddress(p_defaultShippingAddress) {
			this.defaultShippingAddress = p_defaultShippingAddress;
		}
	}, {
		key: 'getDefaultShippingAddress',
		value: function getDefaultShippingAddress() {
			if ('defaultShippingAddress' in this) {
				return this.defaultShippingAddress;
			}
		}
	}]);

	return UpdateCustomerShippingAddressRequest;
}(ANetApiRequest);

module.exports.UpdateCustomerShippingAddressRequest = UpdateCustomerShippingAddressRequest;

var UpdateCustomerShippingAddressResponse = function (_ANetApiResponse40) {
	_inherits(UpdateCustomerShippingAddressResponse, _ANetApiResponse40);

	_createClass(UpdateCustomerShippingAddressResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateCustomerShippingAddressResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateCustomerShippingAddressResponse': this };
			logger.debug('Exit UpdateCustomerShippingAddressResponse getJSON');
			return obj;
		}
	}]);

	function UpdateCustomerShippingAddressResponse(obj) {
		_classCallCheck(this, UpdateCustomerShippingAddressResponse);

		if (arguments.length == 1) {
			var _this94 = _possibleConstructorReturn(this, (UpdateCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(UpdateCustomerShippingAddressResponse)).call(this, obj));
		} else {
			var _this94 = _possibleConstructorReturn(this, (UpdateCustomerShippingAddressResponse.__proto__ || Object.getPrototypeOf(UpdateCustomerShippingAddressResponse)).call(this));
		}return _possibleConstructorReturn(_this94);
	}

	return UpdateCustomerShippingAddressResponse;
}(ANetApiResponse);

module.exports.UpdateCustomerShippingAddressResponse = UpdateCustomerShippingAddressResponse;

var UpdateHeldTransactionRequest = function (_ANetApiRequest42) {
	_inherits(UpdateHeldTransactionRequest, _ANetApiRequest42);

	_createClass(UpdateHeldTransactionRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateHeldTransactionRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateHeldTransactionRequest': this };
			logger.debug('Exit UpdateHeldTransactionRequest getJSON');
			return obj;
		}
	}]);

	function UpdateHeldTransactionRequest(obj) {
		_classCallCheck(this, UpdateHeldTransactionRequest);

		logger.debug('Enter UpdateHeldTransactionRequest constructor');
		if (arguments.length == 1) {
			var _this95 = _possibleConstructorReturn(this, (UpdateHeldTransactionRequest.__proto__ || Object.getPrototypeOf(UpdateHeldTransactionRequest)).call(this, obj));

			if ('heldTransactionRequest' in obj && obj.heldTransactionRequest != null) {
				_this95.setHeldTransactionRequest(new HeldTransactionRequestType(obj.heldTransactionRequest));
			}
		} else {
			var _this95 = _possibleConstructorReturn(this, (UpdateHeldTransactionRequest.__proto__ || Object.getPrototypeOf(UpdateHeldTransactionRequest)).call(this));

			_this95.setHeldTransactionRequest(null);
		}
		logger.debug('Exit UpdateHeldTransactionRequest constructor');
		return _possibleConstructorReturn(_this95);
	}

	_createClass(UpdateHeldTransactionRequest, [{
		key: 'setHeldTransactionRequest',
		value: function setHeldTransactionRequest(p_heldTransactionRequest) {
			this.heldTransactionRequest = p_heldTransactionRequest;
		}
	}, {
		key: 'getHeldTransactionRequest',
		value: function getHeldTransactionRequest() {
			if ('heldTransactionRequest' in this) {
				return this.heldTransactionRequest;
			}
		}
	}]);

	return UpdateHeldTransactionRequest;
}(ANetApiRequest);

module.exports.UpdateHeldTransactionRequest = UpdateHeldTransactionRequest;

var UpdateHeldTransactionResponse = function (_ANetApiResponse41) {
	_inherits(UpdateHeldTransactionResponse, _ANetApiResponse41);

	_createClass(UpdateHeldTransactionResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateHeldTransactionResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateHeldTransactionResponse': this };
			logger.debug('Exit UpdateHeldTransactionResponse getJSON');
			return obj;
		}
	}]);

	function UpdateHeldTransactionResponse(obj) {
		_classCallCheck(this, UpdateHeldTransactionResponse);

		logger.debug('Enter UpdateHeldTransactionResponse constructor');
		if (arguments.length == 1) {
			var _this96 = _possibleConstructorReturn(this, (UpdateHeldTransactionResponse.__proto__ || Object.getPrototypeOf(UpdateHeldTransactionResponse)).call(this, obj));

			if ('transactionResponse' in obj && obj.transactionResponse != null) {
				_this96.setTransactionResponse(new TransactionResponse(obj.transactionResponse));
			}
		} else {
			var _this96 = _possibleConstructorReturn(this, (UpdateHeldTransactionResponse.__proto__ || Object.getPrototypeOf(UpdateHeldTransactionResponse)).call(this));

			_this96.setTransactionResponse(null);
		}
		logger.debug('Exit UpdateHeldTransactionResponse constructor');
		return _possibleConstructorReturn(_this96);
	}

	_createClass(UpdateHeldTransactionResponse, [{
		key: 'setTransactionResponse',
		value: function setTransactionResponse(p_transactionResponse) {
			this.transactionResponse = p_transactionResponse;
		}
	}, {
		key: 'getTransactionResponse',
		value: function getTransactionResponse() {
			if ('transactionResponse' in this) {
				return this.transactionResponse;
			}
		}
	}]);

	return UpdateHeldTransactionResponse;
}(ANetApiResponse);

module.exports.UpdateHeldTransactionResponse = UpdateHeldTransactionResponse;

var UpdateMerchantDetailsRequest = function (_ANetApiRequest43) {
	_inherits(UpdateMerchantDetailsRequest, _ANetApiRequest43);

	_createClass(UpdateMerchantDetailsRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateMerchantDetailsRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateMerchantDetailsRequest': this };
			logger.debug('Exit UpdateMerchantDetailsRequest getJSON');
			return obj;
		}
	}]);

	function UpdateMerchantDetailsRequest(obj) {
		_classCallCheck(this, UpdateMerchantDetailsRequest);

		logger.debug('Enter UpdateMerchantDetailsRequest constructor');
		if (arguments.length == 1) {
			var _this97 = _possibleConstructorReturn(this, (UpdateMerchantDetailsRequest.__proto__ || Object.getPrototypeOf(UpdateMerchantDetailsRequest)).call(this, obj));

			if ('isTestMode' in obj && obj.isTestMode != null) {
				_this97.setIsTestMode(obj.isTestMode);
			}
		} else {
			var _this97 = _possibleConstructorReturn(this, (UpdateMerchantDetailsRequest.__proto__ || Object.getPrototypeOf(UpdateMerchantDetailsRequest)).call(this));

			_this97.setIsTestMode(null);
		}
		logger.debug('Exit UpdateMerchantDetailsRequest constructor');
		return _possibleConstructorReturn(_this97);
	}

	_createClass(UpdateMerchantDetailsRequest, [{
		key: 'setIsTestMode',
		value: function setIsTestMode(p_isTestMode) {
			this.isTestMode = p_isTestMode;
		}
	}, {
		key: 'getIsTestMode',
		value: function getIsTestMode() {
			if ('isTestMode' in this) {
				return this.isTestMode;
			}
		}
	}]);

	return UpdateMerchantDetailsRequest;
}(ANetApiRequest);

module.exports.UpdateMerchantDetailsRequest = UpdateMerchantDetailsRequest;

var UpdateMerchantDetailsResponse = function (_ANetApiResponse42) {
	_inherits(UpdateMerchantDetailsResponse, _ANetApiResponse42);

	_createClass(UpdateMerchantDetailsResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateMerchantDetailsResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateMerchantDetailsResponse': this };
			logger.debug('Exit UpdateMerchantDetailsResponse getJSON');
			return obj;
		}
	}]);

	function UpdateMerchantDetailsResponse(obj) {
		_classCallCheck(this, UpdateMerchantDetailsResponse);

		if (arguments.length == 1) {
			var _this98 = _possibleConstructorReturn(this, (UpdateMerchantDetailsResponse.__proto__ || Object.getPrototypeOf(UpdateMerchantDetailsResponse)).call(this, obj));
		} else {
			var _this98 = _possibleConstructorReturn(this, (UpdateMerchantDetailsResponse.__proto__ || Object.getPrototypeOf(UpdateMerchantDetailsResponse)).call(this));
		}return _possibleConstructorReturn(_this98);
	}

	return UpdateMerchantDetailsResponse;
}(ANetApiResponse);

module.exports.UpdateMerchantDetailsResponse = UpdateMerchantDetailsResponse;

var UpdateSplitTenderGroupRequest = function (_ANetApiRequest44) {
	_inherits(UpdateSplitTenderGroupRequest, _ANetApiRequest44);

	_createClass(UpdateSplitTenderGroupRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateSplitTenderGroupRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateSplitTenderGroupRequest': this };
			logger.debug('Exit UpdateSplitTenderGroupRequest getJSON');
			return obj;
		}
	}]);

	function UpdateSplitTenderGroupRequest(obj) {
		_classCallCheck(this, UpdateSplitTenderGroupRequest);

		logger.debug('Enter UpdateSplitTenderGroupRequest constructor');
		if (arguments.length == 1) {
			var _this99 = _possibleConstructorReturn(this, (UpdateSplitTenderGroupRequest.__proto__ || Object.getPrototypeOf(UpdateSplitTenderGroupRequest)).call(this, obj));

			if ('splitTenderId' in obj && obj.splitTenderId != null) {
				_this99.setSplitTenderId(obj.splitTenderId);
			}
			if ('splitTenderStatus' in obj && obj.splitTenderStatus != null) {
				_this99.setSplitTenderStatus(obj.splitTenderStatus);
			}
		} else {
			var _this99 = _possibleConstructorReturn(this, (UpdateSplitTenderGroupRequest.__proto__ || Object.getPrototypeOf(UpdateSplitTenderGroupRequest)).call(this));

			_this99.setSplitTenderId(null);
			_this99.setSplitTenderStatus(null);
		}
		logger.debug('Exit UpdateSplitTenderGroupRequest constructor');
		return _possibleConstructorReturn(_this99);
	}

	_createClass(UpdateSplitTenderGroupRequest, [{
		key: 'setSplitTenderId',
		value: function setSplitTenderId(p_splitTenderId) {
			this.splitTenderId = p_splitTenderId;
		}
	}, {
		key: 'getSplitTenderId',
		value: function getSplitTenderId() {
			if ('splitTenderId' in this) {
				return this.splitTenderId;
			}
		}
	}, {
		key: 'setSplitTenderStatus',
		value: function setSplitTenderStatus(p_splitTenderStatus) {
			this.splitTenderStatus = p_splitTenderStatus;
		}
	}, {
		key: 'getSplitTenderStatus',
		value: function getSplitTenderStatus() {
			if ('splitTenderStatus' in this) {
				return this.splitTenderStatus;
			}
		}
	}]);

	return UpdateSplitTenderGroupRequest;
}(ANetApiRequest);

module.exports.UpdateSplitTenderGroupRequest = UpdateSplitTenderGroupRequest;

var UpdateSplitTenderGroupResponse = function (_ANetApiResponse43) {
	_inherits(UpdateSplitTenderGroupResponse, _ANetApiResponse43);

	_createClass(UpdateSplitTenderGroupResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter UpdateSplitTenderGroupResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'updateSplitTenderGroupResponse': this };
			logger.debug('Exit UpdateSplitTenderGroupResponse getJSON');
			return obj;
		}
	}]);

	function UpdateSplitTenderGroupResponse(obj) {
		_classCallCheck(this, UpdateSplitTenderGroupResponse);

		if (arguments.length == 1) {
			var _this100 = _possibleConstructorReturn(this, (UpdateSplitTenderGroupResponse.__proto__ || Object.getPrototypeOf(UpdateSplitTenderGroupResponse)).call(this, obj));
		} else {
			var _this100 = _possibleConstructorReturn(this, (UpdateSplitTenderGroupResponse.__proto__ || Object.getPrototypeOf(UpdateSplitTenderGroupResponse)).call(this));
		}return _possibleConstructorReturn(_this100);
	}

	return UpdateSplitTenderGroupResponse;
}(ANetApiResponse);

module.exports.UpdateSplitTenderGroupResponse = UpdateSplitTenderGroupResponse;

var ValidateCustomerPaymentProfileRequest = function (_ANetApiRequest45) {
	_inherits(ValidateCustomerPaymentProfileRequest, _ANetApiRequest45);

	_createClass(ValidateCustomerPaymentProfileRequest, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ValidateCustomerPaymentProfileRequest getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'validateCustomerPaymentProfileRequest': this };
			logger.debug('Exit ValidateCustomerPaymentProfileRequest getJSON');
			return obj;
		}
	}]);

	function ValidateCustomerPaymentProfileRequest(obj) {
		_classCallCheck(this, ValidateCustomerPaymentProfileRequest);

		logger.debug('Enter ValidateCustomerPaymentProfileRequest constructor');
		if (arguments.length == 1) {
			var _this101 = _possibleConstructorReturn(this, (ValidateCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(ValidateCustomerPaymentProfileRequest)).call(this, obj));

			if ('customerProfileId' in obj && obj.customerProfileId != null) {
				_this101.setCustomerProfileId(obj.customerProfileId);
			}
			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this101.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
			if ('customerShippingAddressId' in obj && obj.customerShippingAddressId != null) {
				_this101.setCustomerShippingAddressId(obj.customerShippingAddressId);
			}
			if ('cardCode' in obj && obj.cardCode != null) {
				_this101.setCardCode(obj.cardCode);
			}
			if ('validationMode' in obj && obj.validationMode != null) {
				_this101.setValidationMode(obj.validationMode);
			}
		} else {
			var _this101 = _possibleConstructorReturn(this, (ValidateCustomerPaymentProfileRequest.__proto__ || Object.getPrototypeOf(ValidateCustomerPaymentProfileRequest)).call(this));

			_this101.setCustomerProfileId(null);
			_this101.setCustomerPaymentProfileId(null);
			_this101.setCustomerShippingAddressId(null);
			_this101.setCardCode(null);
			_this101.setValidationMode(null);
		}
		logger.debug('Exit ValidateCustomerPaymentProfileRequest constructor');
		return _possibleConstructorReturn(_this101);
	}

	_createClass(ValidateCustomerPaymentProfileRequest, [{
		key: 'setCustomerProfileId',
		value: function setCustomerProfileId(p_customerProfileId) {
			this.customerProfileId = p_customerProfileId;
		}
	}, {
		key: 'getCustomerProfileId',
		value: function getCustomerProfileId() {
			if ('customerProfileId' in this) {
				return this.customerProfileId;
			}
		}
	}, {
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}, {
		key: 'setCustomerShippingAddressId',
		value: function setCustomerShippingAddressId(p_customerShippingAddressId) {
			this.customerShippingAddressId = p_customerShippingAddressId;
		}
	}, {
		key: 'getCustomerShippingAddressId',
		value: function getCustomerShippingAddressId() {
			if ('customerShippingAddressId' in this) {
				return this.customerShippingAddressId;
			}
		}
	}, {
		key: 'setCardCode',
		value: function setCardCode(p_cardCode) {
			this.cardCode = p_cardCode;
		}
	}, {
		key: 'getCardCode',
		value: function getCardCode() {
			if ('cardCode' in this) {
				return this.cardCode;
			}
		}
	}, {
		key: 'setValidationMode',
		value: function setValidationMode(p_validationMode) {
			this.validationMode = p_validationMode;
		}
	}, {
		key: 'getValidationMode',
		value: function getValidationMode() {
			if ('validationMode' in this) {
				return this.validationMode;
			}
		}
	}]);

	return ValidateCustomerPaymentProfileRequest;
}(ANetApiRequest);

module.exports.ValidateCustomerPaymentProfileRequest = ValidateCustomerPaymentProfileRequest;

var ValidateCustomerPaymentProfileResponse = function (_ANetApiResponse44) {
	_inherits(ValidateCustomerPaymentProfileResponse, _ANetApiResponse44);

	_createClass(ValidateCustomerPaymentProfileResponse, [{
		key: 'getJSON',
		value: function getJSON() {
			logger.debug('Enter ValidateCustomerPaymentProfileResponse getJSON');
			utils.delete_null_properties(this, true);
			var obj = { 'validateCustomerPaymentProfileResponse': this };
			logger.debug('Exit ValidateCustomerPaymentProfileResponse getJSON');
			return obj;
		}
	}]);

	function ValidateCustomerPaymentProfileResponse(obj) {
		_classCallCheck(this, ValidateCustomerPaymentProfileResponse);

		logger.debug('Enter ValidateCustomerPaymentProfileResponse constructor');
		if (arguments.length == 1) {
			var _this102 = _possibleConstructorReturn(this, (ValidateCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(ValidateCustomerPaymentProfileResponse)).call(this, obj));

			if ('directResponse' in obj && obj.directResponse != null) {
				_this102.setDirectResponse(obj.directResponse);
			}
		} else {
			var _this102 = _possibleConstructorReturn(this, (ValidateCustomerPaymentProfileResponse.__proto__ || Object.getPrototypeOf(ValidateCustomerPaymentProfileResponse)).call(this));

			_this102.setDirectResponse(null);
		}
		logger.debug('Exit ValidateCustomerPaymentProfileResponse constructor');
		return _possibleConstructorReturn(_this102);
	}

	_createClass(ValidateCustomerPaymentProfileResponse, [{
		key: 'setDirectResponse',
		value: function setDirectResponse(p_directResponse) {
			this.directResponse = p_directResponse;
		}
	}, {
		key: 'getDirectResponse',
		value: function getDirectResponse() {
			if ('directResponse' in this) {
				return this.directResponse;
			}
		}
	}]);

	return ValidateCustomerPaymentProfileResponse;
}(ANetApiResponse);

module.exports.ValidateCustomerPaymentProfileResponse = ValidateCustomerPaymentProfileResponse;

var CustomerAddressExType = function (_CustomerAddressType) {
	_inherits(CustomerAddressExType, _CustomerAddressType);

	function CustomerAddressExType(obj) {
		_classCallCheck(this, CustomerAddressExType);

		logger.debug('Enter CustomerAddressExType constructor');
		if (arguments.length == 1) {
			var _this103 = _possibleConstructorReturn(this, (CustomerAddressExType.__proto__ || Object.getPrototypeOf(CustomerAddressExType)).call(this, obj));

			if ('customerAddressId' in obj && obj.customerAddressId != null) {
				_this103.setCustomerAddressId(obj.customerAddressId);
			}
		} else {
			var _this103 = _possibleConstructorReturn(this, (CustomerAddressExType.__proto__ || Object.getPrototypeOf(CustomerAddressExType)).call(this));

			_this103.setCustomerAddressId(null);
		}
		logger.debug('Exit CustomerAddressExType constructor');
		return _possibleConstructorReturn(_this103);
	}

	_createClass(CustomerAddressExType, [{
		key: 'setCustomerAddressId',
		value: function setCustomerAddressId(p_customerAddressId) {
			this.customerAddressId = p_customerAddressId;
		}
	}, {
		key: 'getCustomerAddressId',
		value: function getCustomerAddressId() {
			if ('customerAddressId' in this) {
				return this.customerAddressId;
			}
		}
	}]);

	return CustomerAddressExType;
}(CustomerAddressType);

module.exports.CustomerAddressExType = CustomerAddressExType;

var CustomerPaymentProfileExType = function (_CustomerPaymentProfi3) {
	_inherits(CustomerPaymentProfileExType, _CustomerPaymentProfi3);

	function CustomerPaymentProfileExType(obj) {
		_classCallCheck(this, CustomerPaymentProfileExType);

		logger.debug('Enter CustomerPaymentProfileExType constructor');
		if (arguments.length == 1) {
			var _this104 = _possibleConstructorReturn(this, (CustomerPaymentProfileExType.__proto__ || Object.getPrototypeOf(CustomerPaymentProfileExType)).call(this, obj));

			if ('customerPaymentProfileId' in obj && obj.customerPaymentProfileId != null) {
				_this104.setCustomerPaymentProfileId(obj.customerPaymentProfileId);
			}
		} else {
			var _this104 = _possibleConstructorReturn(this, (CustomerPaymentProfileExType.__proto__ || Object.getPrototypeOf(CustomerPaymentProfileExType)).call(this));

			_this104.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit CustomerPaymentProfileExType constructor');
		return _possibleConstructorReturn(_this104);
	}

	_createClass(CustomerPaymentProfileExType, [{
		key: 'setCustomerPaymentProfileId',
		value: function setCustomerPaymentProfileId(p_customerPaymentProfileId) {
			this.customerPaymentProfileId = p_customerPaymentProfileId;
		}
	}, {
		key: 'getCustomerPaymentProfileId',
		value: function getCustomerPaymentProfileId() {
			if ('customerPaymentProfileId' in this) {
				return this.customerPaymentProfileId;
			}
		}
	}]);

	return CustomerPaymentProfileExType;
}(CustomerPaymentProfileType);

module.exports.CustomerPaymentProfileExType = CustomerPaymentProfileExType;

var CustomerProfileMaskedType = function (_CustomerProfileExTyp) {
	_inherits(CustomerProfileMaskedType, _CustomerProfileExTyp);

	function CustomerProfileMaskedType(obj) {
		_classCallCheck(this, CustomerProfileMaskedType);

		logger.debug('Enter CustomerProfileMaskedType constructor');
		if (arguments.length == 1) {
			var _this105 = _possibleConstructorReturn(this, (CustomerProfileMaskedType.__proto__ || Object.getPrototypeOf(CustomerProfileMaskedType)).call(this, obj));

			if (obj.paymentProfiles != undefined && obj.paymentProfiles != null) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function (item) {
					paymentProfilesList.push(new CustomerPaymentProfileMaskedType(item));
				});
				_this105.setPaymentProfiles(paymentProfilesList);
			}
			if (obj.shipToList != undefined && obj.shipToList != null) {
				var shipToListList = [];
				obj.shipToList.forEach(function (item) {
					shipToListList.push(new CustomerAddressExType(item));
				});
				_this105.setShipToList(shipToListList);
			}
		} else {
			var _this105 = _possibleConstructorReturn(this, (CustomerProfileMaskedType.__proto__ || Object.getPrototypeOf(CustomerProfileMaskedType)).call(this));

			_this105.setPaymentProfiles(null);
			_this105.setShipToList(null);
		}
		logger.debug('Exit CustomerProfileMaskedType constructor');
		return _possibleConstructorReturn(_this105);
	}

	_createClass(CustomerProfileMaskedType, [{
		key: 'setPaymentProfiles',
		value: function setPaymentProfiles(p_paymentProfiles) {
			this.paymentProfiles = p_paymentProfiles;
		}
	}, {
		key: 'getPaymentProfiles',
		value: function getPaymentProfiles() {
			if ('paymentProfiles' in this) {
				return this.paymentProfiles;
			}
		}
	}, {
		key: 'setShipToList',
		value: function setShipToList(p_shipToList) {
			this.shipToList = p_shipToList;
		}
	}, {
		key: 'getShipToList',
		value: function getShipToList() {
			if ('shipToList' in this) {
				return this.shipToList;
			}
		}
	}]);

	return CustomerProfileMaskedType;
}(CustomerProfileExType);

module.exports.CustomerProfileMaskedType = CustomerProfileMaskedType;

var ProfileTransAuthCaptureType = function (_ProfileTransOrderTyp) {
	_inherits(ProfileTransAuthCaptureType, _ProfileTransOrderTyp);

	function ProfileTransAuthCaptureType(obj) {
		_classCallCheck(this, ProfileTransAuthCaptureType);

		if (arguments.length == 1) {
			var _this106 = _possibleConstructorReturn(this, (ProfileTransAuthCaptureType.__proto__ || Object.getPrototypeOf(ProfileTransAuthCaptureType)).call(this, obj));
		} else {
			var _this106 = _possibleConstructorReturn(this, (ProfileTransAuthCaptureType.__proto__ || Object.getPrototypeOf(ProfileTransAuthCaptureType)).call(this));
		}return _possibleConstructorReturn(_this106);
	}

	return ProfileTransAuthCaptureType;
}(ProfileTransOrderType);

module.exports.ProfileTransAuthCaptureType = ProfileTransAuthCaptureType;

var ProfileTransAuthOnlyType = function (_ProfileTransOrderTyp2) {
	_inherits(ProfileTransAuthOnlyType, _ProfileTransOrderTyp2);

	function ProfileTransAuthOnlyType(obj) {
		_classCallCheck(this, ProfileTransAuthOnlyType);

		if (arguments.length == 1) {
			var _this107 = _possibleConstructorReturn(this, (ProfileTransAuthOnlyType.__proto__ || Object.getPrototypeOf(ProfileTransAuthOnlyType)).call(this, obj));
		} else {
			var _this107 = _possibleConstructorReturn(this, (ProfileTransAuthOnlyType.__proto__ || Object.getPrototypeOf(ProfileTransAuthOnlyType)).call(this));
		}return _possibleConstructorReturn(_this107);
	}

	return ProfileTransAuthOnlyType;
}(ProfileTransOrderType);

module.exports.ProfileTransAuthOnlyType = ProfileTransAuthOnlyType;

var ProfileTransCaptureOnlyType = function (_ProfileTransOrderTyp3) {
	_inherits(ProfileTransCaptureOnlyType, _ProfileTransOrderTyp3);

	function ProfileTransCaptureOnlyType(obj) {
		_classCallCheck(this, ProfileTransCaptureOnlyType);

		logger.debug('Enter ProfileTransCaptureOnlyType constructor');
		if (arguments.length == 1) {
			var _this108 = _possibleConstructorReturn(this, (ProfileTransCaptureOnlyType.__proto__ || Object.getPrototypeOf(ProfileTransCaptureOnlyType)).call(this, obj));

			if ('approvalCode' in obj && obj.approvalCode != null) {
				_this108.setApprovalCode(obj.approvalCode);
			}
		} else {
			var _this108 = _possibleConstructorReturn(this, (ProfileTransCaptureOnlyType.__proto__ || Object.getPrototypeOf(ProfileTransCaptureOnlyType)).call(this));

			_this108.setApprovalCode(null);
		}
		logger.debug('Exit ProfileTransCaptureOnlyType constructor');
		return _possibleConstructorReturn(_this108);
	}

	_createClass(ProfileTransCaptureOnlyType, [{
		key: 'setApprovalCode',
		value: function setApprovalCode(p_approvalCode) {
			this.approvalCode = p_approvalCode;
		}
	}, {
		key: 'getApprovalCode',
		value: function getApprovalCode() {
			if ('approvalCode' in this) {
				return this.approvalCode;
			}
		}
	}]);

	return ProfileTransCaptureOnlyType;
}(ProfileTransOrderType);

module.exports.ProfileTransCaptureOnlyType = ProfileTransCaptureOnlyType;

var SubscriptionCustomerProfileType = function (_CustomerProfileExTyp2) {
	_inherits(SubscriptionCustomerProfileType, _CustomerProfileExTyp2);

	function SubscriptionCustomerProfileType(obj) {
		_classCallCheck(this, SubscriptionCustomerProfileType);

		logger.debug('Enter SubscriptionCustomerProfileType constructor');
		if (arguments.length == 1) {
			var _this109 = _possibleConstructorReturn(this, (SubscriptionCustomerProfileType.__proto__ || Object.getPrototypeOf(SubscriptionCustomerProfileType)).call(this, obj));

			if ('paymentProfile' in obj && obj.paymentProfile != null) {
				_this109.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile));
			}
			if ('shippingProfile' in obj && obj.shippingProfile != null) {
				_this109.setShippingProfile(new CustomerAddressExType(obj.shippingProfile));
			}
		} else {
			var _this109 = _possibleConstructorReturn(this, (SubscriptionCustomerProfileType.__proto__ || Object.getPrototypeOf(SubscriptionCustomerProfileType)).call(this));

			_this109.setPaymentProfile(null);
			_this109.setShippingProfile(null);
		}
		logger.debug('Exit SubscriptionCustomerProfileType constructor');
		return _possibleConstructorReturn(_this109);
	}

	_createClass(SubscriptionCustomerProfileType, [{
		key: 'setPaymentProfile',
		value: function setPaymentProfile(p_paymentProfile) {
			this.paymentProfile = p_paymentProfile;
		}
	}, {
		key: 'getPaymentProfile',
		value: function getPaymentProfile() {
			if ('paymentProfile' in this) {
				return this.paymentProfile;
			}
		}
	}, {
		key: 'setShippingProfile',
		value: function setShippingProfile(p_shippingProfile) {
			this.shippingProfile = p_shippingProfile;
		}
	}, {
		key: 'getShippingProfile',
		value: function getShippingProfile() {
			if ('shippingProfile' in this) {
				return this.shippingProfile;
			}
		}
	}]);

	return SubscriptionCustomerProfileType;
}(CustomerProfileExType);

module.exports.SubscriptionCustomerProfileType = SubscriptionCustomerProfileType;

var ARBGetSubscriptionListOrderFieldEnum = {
	ID: 'id',
	NAME: 'name',
	STATUS: 'status',
	CREATETIMESTAMPUTC: 'createTimeStampUTC',
	LASTNAME: 'lastName',
	FIRSTNAME: 'firstName',
	ACCOUNTNUMBER: 'accountNumber',
	AMOUNT: 'amount',
	PASTOCCURRENCES: 'pastOccurrences'
};
module.exports.ARBGetSubscriptionListOrderFieldEnum = ARBGetSubscriptionListOrderFieldEnum;

var ARBGetSubscriptionListSearchTypeEnum = {
	CARDEXPIRINGTHISMONTH: 'cardExpiringThisMonth',
	SUBSCRIPTIONACTIVE: 'subscriptionActive',
	SUBSCRIPTIONEXPIRINGTHISMONTH: 'subscriptionExpiringThisMonth',
	SUBSCRIPTIONINACTIVE: 'subscriptionInactive'
};
module.exports.ARBGetSubscriptionListSearchTypeEnum = ARBGetSubscriptionListSearchTypeEnum;

var ARBSubscriptionStatusEnum = {
	ACTIVE: 'active',
	EXPIRED: 'expired',
	SUSPENDED: 'suspended',
	CANCELED: 'canceled',
	TERMINATED: 'terminated'
};
module.exports.ARBSubscriptionStatusEnum = ARBSubscriptionStatusEnum;

var ARBSubscriptionUnitEnum = {
	DAYS: 'days',
	MONTHS: 'months'
};
module.exports.ARBSubscriptionUnitEnum = ARBSubscriptionUnitEnum;

var AUJobTypeEnum = {
	ALL: 'all',
	UPDATES: 'updates',
	DELETES: 'deletes'
};
module.exports.AUJobTypeEnum = AUJobTypeEnum;

var AccountTypeEnum = {
	VISA: 'Visa',
	MASTERCARD: 'MasterCard',
	AMERICANEXPRESS: 'AmericanExpress',
	DISCOVER: 'Discover',
	JCB: 'JCB',
	DINERSCLUB: 'DinersClub',
	ECHECK: 'eCheck'
};
module.exports.AccountTypeEnum = AccountTypeEnum;

var AfdsTransactionEnum = {
	APPROVE: 'approve',
	DECLINE: 'decline'
};
module.exports.AfdsTransactionEnum = AfdsTransactionEnum;

var BankAccountTypeEnum = {
	CHECKING: 'checking',
	SAVINGS: 'savings',
	BUSINESSCHECKING: 'businessChecking'
};
module.exports.BankAccountTypeEnum = BankAccountTypeEnum;

var CardTypeEnum = {
	VISA: 'Visa',
	MASTERCARD: 'MasterCard',
	AMERICANEXPRESS: 'AmericanExpress',
	DISCOVER: 'Discover',
	JCB: 'JCB',
	DINERSCLUB: 'DinersClub'
};
module.exports.CardTypeEnum = CardTypeEnum;

var CustomerPaymentProfileOrderFieldEnum = {
	ID: 'id'
};
module.exports.CustomerPaymentProfileOrderFieldEnum = CustomerPaymentProfileOrderFieldEnum;

var CustomerPaymentProfileSearchTypeEnum = {
	CARDSEXPIRINGINMONTH: 'cardsExpiringInMonth'
};
module.exports.CustomerPaymentProfileSearchTypeEnum = CustomerPaymentProfileSearchTypeEnum;

var CustomerTypeEnum = {
	INDIVIDUAL: 'individual',
	BUSINESS: 'business'
};
module.exports.CustomerTypeEnum = CustomerTypeEnum;

var DeviceActivationEnum = {
	ACTIVATE: 'Activate',
	DISABLE: 'Disable'
};
module.exports.DeviceActivationEnum = DeviceActivationEnum;

var EcheckTypeEnum = {
	PPD: 'PPD',
	WEB: 'WEB',
	CCD: 'CCD',
	TEL: 'TEL',
	ARC: 'ARC',
	BOC: 'BOC'
};
module.exports.EcheckTypeEnum = EcheckTypeEnum;

var EncodingType = {
	BASE64: 'Base64',
	HEX: 'Hex'
};
module.exports.EncodingType = EncodingType;

var EncryptionAlgorithmType = {
	TDES: 'TDES',
	AES: 'AES',
	RSA: 'RSA'
};
module.exports.EncryptionAlgorithmType = EncryptionAlgorithmType;

var FDSFilterActionEnum = {
	REJECT: 'reject',
	DECLINE: 'decline',
	HOLD: 'hold',
	AUTHANDHOLD: 'authAndHold',
	REPORT: 'report'
};
module.exports.FDSFilterActionEnum = FDSFilterActionEnum;

var MessageTypeEnum = {
	OK: 'Ok',
	ERROR: 'Error'
};
module.exports.MessageTypeEnum = MessageTypeEnum;

var OperationType = {
	DECRYPT: 'DECRYPT'
};
module.exports.OperationType = OperationType;

var PaymentMethodEnum = {
	CREDITCARD: 'creditCard',
	ECHECK: 'eCheck',
	PAYPAL: 'payPal'
};
module.exports.PaymentMethodEnum = PaymentMethodEnum;

var PaymentMethodsTypeEnum = {
	VISA: 'Visa',
	MASTERCARD: 'MasterCard',
	DISCOVER: 'Discover',
	AMERICANEXPRESS: 'AmericanExpress',
	DINERSCLUB: 'DinersClub',
	JCB: 'JCB',
	ENROUTE: 'EnRoute',
	ECHECK: 'Echeck',
	PAYPAL: 'Paypal',
	VISACHECKOUT: 'VisaCheckout',
	APPLEPAY: 'ApplePay',
	ANDROIDPAY: 'AndroidPay'
};
module.exports.PaymentMethodsTypeEnum = PaymentMethodsTypeEnum;

var PermissionsEnum = {
	API_MERCHANT_BASICREPORTING: 'API_Merchant_BasicReporting',
	SUBMIT_CHARGE: 'Submit_Charge',
	SUBMIT_REFUND: 'Submit_Refund',
	SUBMIT_UPDATE: 'Submit_Update',
	MOBILE_ADMIN: 'Mobile_Admin'
};
module.exports.PermissionsEnum = PermissionsEnum;

var SettingNameEnum = {
	EMAILCUSTOMER: 'emailCustomer',
	MERCHANTEMAIL: 'merchantEmail',
	ALLOWPARTIALAUTH: 'allowPartialAuth',
	HEADEREMAILRECEIPT: 'headerEmailReceipt',
	FOOTEREMAILRECEIPT: 'footerEmailReceipt',
	RECURRINGBILLING: 'recurringBilling',
	DUPLICATEWINDOW: 'duplicateWindow',
	TESTREQUEST: 'testRequest',
	HOSTEDPROFILERETURNURL: 'hostedProfileReturnUrl',
	HOSTEDPROFILERETURNURLTEXT: 'hostedProfileReturnUrlText',
	HOSTEDPROFILEPAGEBORDERVISIBLE: 'hostedProfilePageBorderVisible',
	HOSTEDPROFILEIFRAMECOMMUNICATORURL: 'hostedProfileIFrameCommunicatorUrl',
	HOSTEDPROFILEHEADINGBGCOLOR: 'hostedProfileHeadingBgColor',
	HOSTEDPROFILEVALIDATIONMODE: 'hostedProfileValidationMode',
	HOSTEDPROFILEBILLINGADDRESSREQUIRED: 'hostedProfileBillingAddressRequired',
	HOSTEDPROFILECARDCODEREQUIRED: 'hostedProfileCardCodeRequired',
	HOSTEDPROFILEBILLINGADDRESSOPTIONS: 'hostedProfileBillingAddressOptions',
	HOSTEDPROFILEMANAGEOPTIONS: 'hostedProfileManageOptions',
	HOSTEDPAYMENTIFRAMECOMMUNICATORURL: 'hostedPaymentIFrameCommunicatorUrl',
	HOSTEDPAYMENTBUTTONOPTIONS: 'hostedPaymentButtonOptions',
	HOSTEDPAYMENTRETURNOPTIONS: 'hostedPaymentReturnOptions',
	HOSTEDPAYMENTORDEROPTIONS: 'hostedPaymentOrderOptions',
	HOSTEDPAYMENTPAYMENTOPTIONS: 'hostedPaymentPaymentOptions',
	HOSTEDPAYMENTBILLINGADDRESSOPTIONS: 'hostedPaymentBillingAddressOptions',
	HOSTEDPAYMENTSHIPPINGADDRESSOPTIONS: 'hostedPaymentShippingAddressOptions',
	HOSTEDPAYMENTSECURITYOPTIONS: 'hostedPaymentSecurityOptions',
	HOSTEDPAYMENTCUSTOMEROPTIONS: 'hostedPaymentCustomerOptions',
	HOSTEDPAYMENTSTYLEOPTIONS: 'hostedPaymentStyleOptions',
	TYPEEMAILRECEIPT: 'typeEmailReceipt',
	HOSTEDPROFILEPAYMENTOPTIONS: 'hostedProfilePaymentOptions'
};
module.exports.SettingNameEnum = SettingNameEnum;

var SettlementStateEnum = {
	SETTLEDSUCCESSFULLY: 'settledSuccessfully',
	SETTLEMENTERROR: 'settlementError',
	PENDINGSETTLEMENT: 'pendingSettlement'
};
module.exports.SettlementStateEnum = SettlementStateEnum;

var SplitTenderStatusEnum = {
	COMPLETED: 'completed',
	HELD: 'held',
	VOIDED: 'voided'
};
module.exports.SplitTenderStatusEnum = SplitTenderStatusEnum;

var TransactionGroupStatusEnum = {
	ANY: 'any',
	PENDINGAPPROVAL: 'pendingApproval'
};
module.exports.TransactionGroupStatusEnum = TransactionGroupStatusEnum;

var TransactionListOrderFieldEnum = {
	ID: 'id',
	SUBMITTIMEUTC: 'submitTimeUTC'
};
module.exports.TransactionListOrderFieldEnum = TransactionListOrderFieldEnum;

var TransactionStatusEnum = {
	AUTHORIZEDPENDINGCAPTURE: 'authorizedPendingCapture',
	CAPTUREDPENDINGSETTLEMENT: 'capturedPendingSettlement',
	COMMUNICATIONERROR: 'communicationError',
	REFUNDSETTLEDSUCCESSFULLY: 'refundSettledSuccessfully',
	REFUNDPENDINGSETTLEMENT: 'refundPendingSettlement',
	APPROVEDREVIEW: 'approvedReview',
	DECLINED: 'declined',
	COULDNOTVOID: 'couldNotVoid',
	EXPIRED: 'expired',
	GENERALERROR: 'generalError',
	PENDINGFINALSETTLEMENT: 'pendingFinalSettlement',
	PENDINGSETTLEMENT: 'pendingSettlement',
	FAILEDREVIEW: 'failedReview',
	SETTLEDSUCCESSFULLY: 'settledSuccessfully',
	SETTLEMENTERROR: 'settlementError',
	UNDERREVIEW: 'underReview',
	UPDATINGSETTLEMENT: 'updatingSettlement',
	VOIDED: 'voided',
	FDSPENDINGREVIEW: 'FDSPendingReview',
	FDSAUTHORIZEDPENDINGREVIEW: 'FDSAuthorizedPendingReview',
	RETURNEDITEM: 'returnedItem',
	CHARGEBACK: 'chargeback',
	CHARGEBACKREVERSAL: 'chargebackReversal',
	AUTHORIZEDPENDINGRELEASE: 'authorizedPendingRelease'
};
module.exports.TransactionStatusEnum = TransactionStatusEnum;

var TransactionTypeEnum = {
	AUTHONLYTRANSACTION: 'authOnlyTransaction',
	AUTHCAPTURETRANSACTION: 'authCaptureTransaction',
	CAPTUREONLYTRANSACTION: 'captureOnlyTransaction',
	REFUNDTRANSACTION: 'refundTransaction',
	PRIORAUTHCAPTURETRANSACTION: 'priorAuthCaptureTransaction',
	VOIDTRANSACTION: 'voidTransaction',
	GETDETAILSTRANSACTION: 'getDetailsTransaction',
	AUTHONLYCONTINUETRANSACTION: 'authOnlyContinueTransaction',
	AUTHCAPTURECONTINUETRANSACTION: 'authCaptureContinueTransaction'
};
module.exports.TransactionTypeEnum = TransactionTypeEnum;

var ValidationModeEnum = {
	NONE: 'none',
	TESTMODE: 'testMode',
	LIVEMODE: 'liveMode',
	OLDLIVEMODE: 'oldLiveMode'
};
module.exports.ValidationModeEnum = ValidationModeEnum;

var WebCheckOutTypeEnum = {
	PAN: 'PAN',
	TOKEN: 'TOKEN'
};
module.exports.WebCheckOutTypeEnum = WebCheckOutTypeEnum;