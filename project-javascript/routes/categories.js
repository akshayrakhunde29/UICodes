var express = require('express');
var router = express.Router();

var mongoclient = require("mongodb").MongoClient;
var url =  "mongodb://localhost:27017";

/* GET home page. */
router.get('/categories', function(req, res) {
    mongoclient.connect(url, function(err, clientobj){
        if(!err){
            var dbs = clientobj.db("bookstore")
            dbs.collection("bookCategories").find({}).toArray(function(err, document){
                if(!err){
                    res.send(document)
                }else{
                    console.log(err)
                }
            })
        }else{
            console.log(err)
        }
    })
});

module.exports = router;
