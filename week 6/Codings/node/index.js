var fs= require("fs")
var math = require("./math");
var http = require("http");
http.createServer(function(){
    console.log("you are a fool")
}).listen(3000)
console.log("rgkpoj")

console.log("hello") 

var a = 2;
var b= 3;
console.log(a+b);

function printFileContent(error,data){
    if( error){
        console.log("something is wrong")
    }
    else{
        console.log(data)
    }
    }


fs.readFile("./hellotext","utf-8",printFileContent)
var a = 2;
var b= 3;
console.log(a+b);

console.log(math.sum(1,2))
console.log(math.diff(5,2))
console.log(math.mul(8,2))
// console.log(math.private())