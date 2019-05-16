'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.WEB_LEDGER_CONTEXT_V1_URL,
  require('../contexts/webledger-v1.jsonld'));
