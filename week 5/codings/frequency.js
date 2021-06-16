let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"];
let mf = 1;
let m = 0;
var item = [];
console.log("hello");
function frequency() {
    let count = {}
  names.forEach((ele)=>{
      if(count[`${ele}`]){
          count[`${ele}`] = count[`${ele}`] + 1
      }
      else{
        count[`${ele}`] = 1
      }
  })
  console.log(count);
}
$("button").on("click", frequency);
