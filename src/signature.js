/**
 * Created by vrlc92 on 5/5/16.
 */

var request = require('request');
var options = require('./options.js');

var Signature = {};

Signature.addSecondSignature = function(secret, secondSecret, callback) {
    request.put({
            url: options.url + '/api/signatures',
            form: {
                secret: secret,
                secondSecret: secondSecret
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

module.exports = Signature;
