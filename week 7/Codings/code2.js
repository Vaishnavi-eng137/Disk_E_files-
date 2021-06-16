//Write a Javascript function that finds the missing numbers in an array of integers from 1 to N, where N being the largest number in the array.

let varibales = [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15,17,19,22];
let missingNo = [];
function findMissing() {
  for (let i =0; i<(varibales.length -1); i++) {
    if(!(varibales[i+1]-varibales[i]===1)){
        missingNo.push(varibales[i]+1)

    }
//    console.log(missingNo) 
  }
}
findMissing()
console.log(missingNo);
