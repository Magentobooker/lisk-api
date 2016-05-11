/**
 * Created by vrlc92 on 5/4/16.
 */

var request = require('request');
var options = require('./options.js');
var Delegate = require('./delegate.js');

var Account = {};

Account.openAccount = function(secretKey, callback) {
    request.post({
            url: options.url + '/api/accounts/open',
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

Account.getBalance = function(address, callback) {
    request({
            url: options.url + '/api/accounts/getBalance',
            qs: {
                'address': address
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

Account.getPublicKey = function(address, callback) {
    request({
            url: options.url + '/api/accounts/getPublicKey',
            qs: {
                'address': address
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

Account.generatePublicKey = function(secretKey, callback) {
    request.post({
            url: options.url + '/api/accounts/generatePublicKey',
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

Account.getAccount = function(address, callback) {
    request({
            url: options.url + '/api/accounts',
            qs: {
                'address': address
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

Account.getVotes = function(address, callback) {
    request({
            url: options.url + '/api/accounts/delegates',
            qs: {
                address: address
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

Account.vote = function(secretKey, secondSecretKey, publicKey, delegates, callback) {
    var data = {
        secret: secretKey,
        delegates: delegates
    };

    if (secondSecretKey != null) {
        data['secondSecret'] = secondSecretKey;
    }

    if (publicKey != null) {
        data['publicKey'] = publicKey;
    }

    request.put({
            url: options.url + '/api/accounts/delegates',
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

module.exports = Account;
