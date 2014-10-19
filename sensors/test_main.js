var report = require('./report.js');

var f = function() {
    report.reportSensors("power", "power", 1);
    setTimeout(f, 200);
};

f();

