var express = require('express');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

var connectingdb = "mongodb://127.0.0.1.27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.post("/getmessage", function(req, res){
    MongoClient.connect(connectingdb, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("potfolio");
            dbo.collection("contactInfo").find({}).toArray(function(err, document){
                if(!err){
                    res.send(document);
                }
            })
        }
    })
})
app.listen(8080);
console.log('server started: http://127.0.0.1:8080')