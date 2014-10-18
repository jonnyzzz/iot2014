var DB = {};
var version = 0;

exports.save = function(board, sensor, type, value) {
  console.log("Reported data: " + board + ":" + sensor + " [" + type + "] --> " + value);
  version++;
};

exports.version = function() {
    return "" + version;
};

exports.dump = function() {
    return JSON.stringify(DB);
};


