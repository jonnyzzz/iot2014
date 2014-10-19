// We need this to build our post string
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');
var board = "j-" + (function () {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        return require('crypto').createHash('sha1').update(current_date + random).digest('hex');
    })();

var running = false;
var resetRunning = function() { running = false;};

exports.reportSensors = function (sensor, type, value) {
    if (running) return;
    setTimeout(function() {
        reportSensorsInternal(sensor, type, value, resetRunning);
    }, 1);
};

var reportSensorsInternal = function (sensor, type, value, callback) {
    if (running) return;
    running = true;

    // Build the post string from an object
    var post_data = querystring.stringify({
        board: board,
        sensor: sensor,
        type: type,
        value: value
    });

    console.log("post-data " + post_data);

    // An object of options to indicate where to post to
    var post_options = {
        host: 'jonnyzzz-edison.local',
        port: '3000',
        path: '/sensor?' + post_data,
        method: 'GET',
        timeout: 1000,
        keepAlive: false
    };

    try {
        // Set up the request
        http
            .request(post_options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) { });
                callback();
            }).on("error", function () {
                callback();
            }).end();
    } catch (e) {
        //Git it up
    }
};
