
'use strict';

var joi = require('joi');

module.exports = joi.string().only('SMS').default('SMS');

