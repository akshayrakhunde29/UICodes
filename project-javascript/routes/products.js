var express = require("express");
var router = express.Router();

var mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

router.get('/products', function(req, res){
    mongoclient.connect(url, function(err, clientobj){
        if(!err){
            var dbo = clientobj.db("bookstore");
            dbo.collection("bookproducts").find({}).toArray(function(err, document){
                if(!err){
                    res.send(document)
                } else{
                    console.log(err)
                }
            })
        } else{
            console.log(err)
        }
    })
})

module.exports = router;