var DB = [];
var version = 0;

var beautify = require('js-beautify').js_beautify;

exports.save = function (board, sensor, type, value) {
    console.log("Reported data: " + board + ":" + sensor + " [" + type + "] --> " + value);
    version++;

    DB.push({
        board : board,
        sensor : sensor,
        type : type,
        value : value
    });
};

exports.version = function () {
    return "" + version;
};

exports.dump = function () {
    return beautify(JSON.stringify(DB), { indent_size: 2 });
};

