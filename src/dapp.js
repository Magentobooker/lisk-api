/**
 * Created by vrlc92 on 5/4/16.
 */

var request = require('request');
var options = require('./options.js');
var Delegate = require('./delegate.js');

var Dapp = {};

Dapp.registerDapp = function(data, callback) {

    request.put({
            url: options.url + '/api/dapps',
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

Dapp.getDapps = function(qs, callback) {
    request({
            url: options.url + '/api/dapps',
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

Dapp.getDaap = function(daapId, callback) {
    request({
            url: options.url + '/api/dapps/get',
            qs: {
                id: daapId
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

Dapp.searchDappStore = function(q, category, installed, callback) {
    request({
            url: options.url + '/api/dapps/search',
            qs: {
                q: q,
                category: category,
                installed: installed
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

Dapp.installDapp = function(dappId, callback) {
    request.post({
            url: options.url + '/api/dapps/install',
            form: {
                id: dappId
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

Dapp.installedDapps = function(callback) {
    request({
            url: options.url + '/api/dapps/installed',
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

Dapp.installedDappsIds = function(callback) {
    request({
            url: options.url + '/api/dapps/installedIds',
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

Dapp.uninstallDapp = function(dappId, callback) {
    request.post({
            url: options.url + '/api/dapps/uninstall',
            form: {
                id: dappId
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

Dapp.launchDapp = function(dappId, callback) {
    request.post({
            url: options.url + '/api/dapps/launch',
            form: {
                id: dappId
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

Dapp.installing = function(callback) {
    request({
            url: options.url + '/api/dapps/installing',
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

Dapp.launched = function(callback) {
    request({
            url: options.url + '/api/dapps/launched',
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

Dapp.categories = function(callback) {
    request({
            url: options.url + '/api/dapps/categories',
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

Dapp.stopDapp = function(dappId, callback) {
    request.post({
            url: options.url + '/api/dapps/stop',
            form: {
                id: dappId
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

module.exports = Dapp;
