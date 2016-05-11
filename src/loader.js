/**
 * Created by vrlc92 on 5/5/16.
 */

var request = require('request');
var options = require('./options.js');

var Loader = {};

Loader.getLoadingStatus = function(callback) {
    request({
            url: options.url + '/api/loader/status',
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

Loader.getSynchronisationStatus = function(callback) {
    request({
            url: options.url + '/api/loader/status/sync',
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

module.exports = Loader;
