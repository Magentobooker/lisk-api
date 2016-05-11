/**
 * Created by vrlc92 on 5/5/16.
 */

var request = require('request');
var options = require('./options.js');

var Block = {};

Block.getBlock = function(blockId, callback) {
    request({
            url: options.url + '/api/blocks/get',
            qs: {
                id: blockId
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

Block.getBlocks = function(qs, callback) {
    request({
            url: options.url + '/api/blocks',
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

Block.getBlockchainFeePercent = function(callback) {
    request({
            url: options.url + '/api/blocks/getFee',
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

Block.getBlockchainHeight = function(callback) {
    request({
            url: options.url + '/api/blocks/getHeight',
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

Block.getForgedByAccount = function(generatorPublicKey, callback) {
    request({
            url: options.url + '/api/delegates/forging/getForgedByAccount',
            qs: {
                generatorPublicKey: generatorPublicKey
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

module.exports = Block;
