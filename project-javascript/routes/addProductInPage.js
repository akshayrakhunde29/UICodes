var express = require("express")
var router = express.Router()
var mongoclient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017";

router.post('/', function(req, res){
    mongoclient.connect(url, function(error, clientobj){
        if(!error){
            var dbo = clientobj.db("bookstore");
            var detailsObj = {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                image: req.body.image,
                rating:{
                    rate: 4,
                    count: 213
                }
            }
            console.log(detailsObj)
            dbo.collection("bookproducts").insertOne(detailsObj, function(error, result){
                console.log("submitted")
            })
        } else{
            console.log(error)
        }
    })
})

module.exports = router;