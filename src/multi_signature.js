/**
 * Created by vrlc92 on 5/4/16.
 */

var request = require('request');
var options = require('./options.js');
var Delegate = require('./delegate.js');

var MultiSignature = {};

MultiSignature.getPendingMultiSignatureTransactions = function(publicKey, callback) {
    request({
            url: options.url + '/api/multisignatures/pending',
            qs: {
                publicKey: publicKey
            },
            json: true
        },
        function(error, response, body) {
            if (error) {
                if (callback) {
                    callback(error, false, null);
                }
            } else if (callback) {
                callback(null, body['success'], body);
            }
        });
};

MultiSignature.createMultiSignatureAccount = function(secret, lifetime,
    min, keysgroup, callback) {
    request({
            url: options.url + '/api/multisignatures',
            method: 'PUT',
            json: {
                secret: secret,
                lifetime: lifetime,
                min: min,
                keysgroup: keysgroup
            },
            json: true
        },
        function(error, response, body) {
            if (error) {
                if (callback) {
                    callback(error, false, null);
                }
            } else if (callback) {
                callback(null, body['success'], body);
            }
        });
};

MultiSignature.signTransaction = function(secretKey, publicKey, transactionId, callback) {
    var data = {
        secret: secretKey,
        transactionId: transactionId
    };

    if (publicKey != null) {
        data['publicKey'] = publicKey;
    }

    request.post({
            url: options.url + '/api/multisignatures/sign',
            form: data,
            json: true
        },
        function(error, response, body) {
            if (error) {
                if (callback) {
                    callback(error, false, null);
                }
            } else if (callback) {
                callback(null, body['success'], body);
            }
        });
};

MultiSignature.getAccountsOfMultisignature = function(publicKey, callback) {
    request({
            url: options.url + '/api/multisignatures/accounts',
            qs: {
                publicKey: publicKey
            },
            json: true
        },
        function(error, response, body) {
            if (error) {
                if (callback) {
                    callback(error, false, null);
                }
            } else if (callback) {
                callback(null, body['success'], body);
            }
        });
};

module.exports = MultiSignature;
