var express = require('express');
var app = express();
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


router.get("/data", function(req, res){
   res
       .status(200)
       .set({
           'Content-Type' : 'text/javascript',
           'ETag' : db.version()
       })
       .send(db.dump())
       .end();
});

app.use(router);
app.listen(3000);

console.log("Running the server @ localhost:3000");

