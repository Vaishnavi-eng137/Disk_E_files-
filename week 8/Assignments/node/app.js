var express = require("express");
var hbs = require("hbs")
var app = express();
var bodyParser = require("body-parser")
//view engine
//set the configuration so that hbs will identify views

app.use(bodyParser.urlencoded({
    extended:false
}))
app.set("view engine", "hbs");

app.post("/post", function (req, res) {
    res.send("post")
  console.log("this is post request");
});

$.ajax({
    method:"POST",
    url:"localhost:8000/post",
    data: {
        name:"Gopi",
        age:"don't know"
    }
})


app.get("/",function(req,res){
    res.render("index",{
        names:["vaishnavi","mohit","shalku"]
        // email:"vaisuch@gmail.com"
    })
})

app.listen(8000);
