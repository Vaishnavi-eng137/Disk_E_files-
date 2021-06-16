//Given a number, return the sum of digits of the number Input: 123 Output: 6 (1+2+3)
let input = 123
function sumDigits(input){
    input = input.toString()
    let inputBreak = input.split("")
     let sum = inputBreak.reduce((a, b) =>parseInt(a) + parseInt (b));
     console.log(sum)
}
sumDigits(input)