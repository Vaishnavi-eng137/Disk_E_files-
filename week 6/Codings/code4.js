//Write a Javascript function that finds all the number pairs in an array whose sum is equal to a given number.
// For example, if findPairs is our number, here are some sample calls - findPairs(10, [1, 2, 4, 5, 6, 10, 12]) will return [4, 6] as adding those two together produces 10. 
//Remember, we are trying to find all pairs, which means set of two values.
var numbers = [1, 2, 4, 5, 6, 10, 12]
var result = []
let sum = 10
function findPairs(){
    for (let i = 0; i< numbers.length; i++) {
        for(let j=i+1;j<numbers.length; j++){
        if( numbers[i]+numbers[j] === sum   ){
            result.push(numbers[i],numbers[j])
        }
        }
        
    }
}
findPairs();
console.log(result)