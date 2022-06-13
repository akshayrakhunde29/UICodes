var express = require("express");
var router = express.Router();

var mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

router.post('/', function(req, res){
    mongoclient.connect(url, function(err, clientobj){
        if(!err){
            var dbo = clientobj.db("bookstore");
            var data = {
                userName: req.body.userName,
                emailId: req.body.emailId,
                password: req.body.password,
                confirmPass: req.body.confirmPass
            }
            dbo.collection("userRegistration").insertOne(data, function(err, result){
                console.log("submitted")
            })
        } else{
            console.log(err)
        }
    })
})

module.exports = router;