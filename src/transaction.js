/**
 * Created by vrlc92 on 5/5/16.
 */

var request = require('request');
var options = require('./options.js');

var Transaction = {};

Transaction.getTransactionsList = function(qs, callback) {
    request({
            url: options.url + '/api/transactions',
            qs: qs,
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

Transaction.sendTransaction = function(secretKey, secondSecretKey, publicKey, amount, recipientId, callback) {
    var data = {
        secret: secretKey,
        amount: amount,
        recipientId: recipientId
    };

    if (secondSecretKey != null) {
        data['secondSecret'] = secondSecretKey;
    }

    if (publicKey != null) {
        data['publicKey'] = publicKey;
    }

    request({
            url: options.url + '/api/transactions',
            method: 'PUT',
            json: data
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

Transaction.getTransaction = function(transactionId, callback) {
    request({
            url: options.url + '/api/transactions/get',
            qs: {
                id: transactionId
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

Transaction.getUnconfirmedTransaction = function(transactionId, callback) {
    request({
            url: options.url + '/api/transactions/unconfirmed/get',
            qs: {
                id: transactionId
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

Transaction.getUnconfirmedTransactions = function(callback) {
    request({
            url: options.url + '/api/transactions/unconfirmed',
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

module.exports = Transaction;
