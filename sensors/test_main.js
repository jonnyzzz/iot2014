var report = require('./report.js');

for(var i = 0; i < 50000; i++)
{
    report.reportSensors("power", "power", 1);
}


