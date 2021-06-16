//Write a function that takes a number input in seconds and returns the number of hours, minutes and seconds as output.
// Separate the number of hours, minutes and seconds with colons :. Input: 126 Output: "0:2:6" Input: 45 Output: "0:0:45" Input: 3700 Output: "1:1:40"

function getTime(num){
var hours = parseInt(num/3600)
var minutes =parseInt(num/60)
var seconds = num%60
$("#root").text(hours+"hours"+ ':'+ minutes+ "minutes"+':'+seconds+"seconds")
}

$("#get").on("click",function(){
   getTime( $("#copu").val())
})

