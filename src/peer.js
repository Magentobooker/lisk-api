/**
 * Created by vrlc92 on 5/5/16.
 */

var request = require('request');
var options = require('./options.js');

var Peer = {};

Peer.getPeersList = function(qs, callback) {
    request({
            url: options.url + '/api/peers',
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

Peer.getPeer = function(ip, port, callback) {
    request({
            url: options.url + '/api/peers/get',
            qs: {
                ip: ip,
                port: port
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

Peer.getPeerVersion = function(callback) {
    request({
            url: options.url + '/api/peers/version',
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

module.exports = Peer;
