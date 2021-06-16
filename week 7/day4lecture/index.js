// console.log("hello cutie")
// var http = require("http");
// http.createServer(function(request,response){
//     response.writeHead(200,{"Content-Type":"text/plain"})
//     response.end("hello world");
//     console.log("you are cute");
// }).listen(8080)
// const { query } = require("express");
var express = require("express")
var app = express();
//image upload
//1.store the image in some folder
//2.compress the file
//3.store image in database

//middlewares

//bodyparser for (req.body)
// app.post("/post-request",function(req,res){
//     console.log("this is a postman")
//     res.send("Post request")
// })
// app.delete("/delete",function(req,res){
//     console.log("you are deleted")
//     res.send("you are useless")
// })
// app.get("/name",function(req,res){
//     res.send("vaishnavi")
// })
// app.get("/name",function(req,res){
//     console.log("query params:",req.query);
//     // res.send("your name is",req.query.name);
//     res.status(200).send(req.query.name);
// })
// var users =["vaisu","mohit","neha"]
// app.get("/user/:userId",function(req,res){
//     console.log("query params:",req.params)
//     res.status(200).send(`your name is ${users[req.params.userId]}`)
// })

// 
app.use(function(req,res,next){
    req.date = new Date()
    next()
})
app.use(function(req,res,next){
    console.log("this is a middleware")
    next()
})
app.get("/",function(req,res,next){
    console.log("today's date is :",req.date)
    res.send(req.date)
 next()
})
app.get("/list",function(req,res,next){
    console.log("this is list")
    res.send([1,2])
})
app.get("/name", function (req, res, next) {
    console.log("this is first middleware")
    next()
}, function (req, res, next) {
    console.log("this is my 2nd middleware")
    res.send("this is express")
}
)
app.get("/public/hello.txt",function(req,res,){
    res.send("hello from public")
})
app.use(express.static("public"))

app.listen(8080)
//render html file
//serving static files
//middleware
//client-server
//Request-Response server