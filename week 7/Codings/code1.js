//Given a boolean 2D array, where each row is sorted.
//Find the row with the maximum number of 1s
var matrix = [
  [0, 1, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
];
function find1s() {
  var sum = 0;
  var index = 0;
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i])
    var numbers = matrix[i].reduce((a,b)=>(a+b))
    //  console.log(numbers)s
    if(numbers>sum){
      sum=numbers
      index=i
    }
  }
  return index
}
find1s();
// console.log(find1s())
// console.log(nextSum);
