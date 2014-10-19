var express = require('express');

var cors = require('cors');
var corsOptions = {
    origin:         '*',
    methods:        ['GET', 'PUT', 'POST', 'DELETE']
};

var app = express();
app.use(cors(corsOptions));

var router = express.Router();



router.get('/', function (req, res) {
    res.send('Hello to the IoT world');
});


var db = require("./db.js");
router.get("/sensor", function(req, res){
    var board = req.param("board");
    var sensor = req.param("sensor");
    var type = req.param("type");
    var value = req.param("value");

    db.save(board, sensor, type, value);

    res.status(201).send("Roger that").end();
});

router.get('/drop', function(res) {
    db.drop();
    res.status(200).send("Roger that").end();
});

var jsonny = function(path, data) {
    router.get(path, function(req, res){
        res
            .status(200)
            .set({
                'Content-Type' : 'text/javascript',
                'ETag' : db.version()
            })
            .send(data())
            .end();
    })
};

jsonny("/data/color", function() {return db.color();});
jsonny("/data/power", function() {return db.power();});
jsonny("/data/temp", function() {return db.temp();});
jsonny("/data/sound", function() {return db.sound();});
jsonny("/data/touch", function() {return db.touch();});
jsonny("/data/touch/count", function() {return db.touchCounts();});
jsonny("/data", function() {return db.dump();});


app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root
app.use(router);
app.listen(3000);

console.log("Running the server @ localhost:3000");

