var DB = [];
var version = 0;

var beautify = require('js-beautify').js_beautify;

exports.save = function (board, sensor, type, value) {
    console.log("Reported data: " + board + ":" + sensor + " [" + type + "] --> " + value);
    version++;

    DB.push({
        date: Date.now(),
        board: board,
        sensor: sensor,
        type: type,
        value: value
    });
};

exports.version = function () {
    return "" + version;
};

exports.drop = function () {
    DB = [];
};

exports.dump = function () {
    return beautify(JSON.stringify(DB), {indent_size: 2});
};


var filter = function (getIt) {
    var r = [];
    for (var j = DB.length - 1, i = j; i >= j - 100 && i >= 0; i--) {
        var it = getIt(DB[j]);
        if (it != null) r.push({key: DB[j].date, type:DB[j].type, sensor:DB[j].type, value: it});
    }

    return beautify(JSON.stringify(r), {indent_size: 2});
};

exports.power = function() {
    return filter(function(x) {
        if (x.type == "power") return x.value;
        return null;
    })
};

exports.color = function() {
    return filter(function(x) {
        if (x.type == "colour") return x.value === "red" ? -1 : 1;
        return null;
    })
};

exports.temp = function() {
    return filter(function(x) {
        if (x.type == "temp") return x.value;
        return null;
    })
};

exports.sound = function() {
    return filter(function(x) {
        if (x.type == "sound") return x.value;
        return null;
    })
};


