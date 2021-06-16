function counterincrement() {
  var counter = 0;
  return function () {
    return ++counter;
  };
}

// function counterdecrement(){
//     return counter--
// }
// counterincrement()
// counterincrement()
// counterdecrement()
// var r =(counterincrement())
// console.log(r())
// console.log(r())
// console.log(r())
// function sum(){
//     return 1+2
// }
// var sum = function(){
//     var a=2
//     var b=4
//     return a+b}
// console.log(sum())
// var obj={
//     sum:function(){return 2+4}
// }
// console.log(obj.sum())
var obj = {
  fulllname: function (city,dob) {
    return this.firstname +" "+ this.lastname + "from"+" "+ city+ " "+ dob;
  },
};
var obj1 = {
  firstname: "rahul",
  lastname: "kashyap",
};
var obj2 = {
  firstname: "neha",
  lastname: "chourasia",
};
console.log(obj.fulllname.call(obj1,"bangalore","zindadil"))
console.log(obj.fulllname.apply(obj1,["bangalore","22/08/1996"]))
