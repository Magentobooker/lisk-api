/**
 * Created by vrlc92 on 5/4/16.
 */

var request = require('request');
var options = require('./options.js');

var Delegate = {};

Delegate.enableDelegateOnAccount = function(secretKey, secondSecretKey, username, callback) {
    var data = {
        secret: secretKey,
        username: username
    };

    if (secondSecretKey != null) {
        data['secondSecret'] = secondSecretKey;
    }

    request.put({
            url: options.url + '/api/delegates',
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

Delegate.getDelegates = function(qs, callback) {
    request({
            url: options.url + '/api/delegates',
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

Delegate.getDelegate = function(username, callback) {
    request({
            url: options.url + '/api/delegates/get',
            qs: {
                username: username
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

Delegate.getVoters = function(publicKey, callback) {
    request({
            url: options.url + '/api/delegates/voters',
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

Delegate.enableForging = function(secretKey, callback) {
    request.post({
            url: options.url + '/api/delegates/forging/enable',
            form: {
                secret: secretKey
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

Delegate.disableForging = function(secretKey, callback) {
    request.post({
            url: options.url + '/api/delegates/forging/disable',
            form: {
                secret: secretKey
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

module.exports = Delegate;
