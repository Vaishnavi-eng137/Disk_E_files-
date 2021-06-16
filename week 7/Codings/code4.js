//Given an array of n distinct elements, the task is to find all elements in array which have at-least two greater elements than themselves.
// Input: [2, 8, 7, 1, 5] Output: 2 , 1, 5
// var input = [2, 8, 7, 1, 5,7,7,7,7];
// var numbers = input.sort((a, b) => a - b);
// var leastnos = numbers.slice(0,-2)


// console.log(leastnos)






var a=[2, 8, 7, 1, 5,7,7,7,7]

function find_greater(a){
  var res = []
  for(i=0;i<a.length;i++){
    var j=0
    var count = 0
    while(count<2 && j<a.length){
      a[i]<a[j]?count++:0
      j++
    }
    count==2?res.push(a[i]):0
  }
  return res
}

console.log(find_greater(a)) 