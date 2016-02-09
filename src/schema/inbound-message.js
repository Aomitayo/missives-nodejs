'use strict';

var joi = require('joi');
var TransportType = require('./transport-types');

module.exports.MessageType = joi.string().only('SMS').default('SMS');

module.exports = joi.object().keys({
	toAddr: joi.string(),
	fromAddr: joi.string(),
	content: joi.string(),
	timeReceived: joi.number(),
	transport: TransportType,
	exData: joi.object()
})
.requiredKeys('messageId', 'toAddr', 'fromAddr', 'content');
