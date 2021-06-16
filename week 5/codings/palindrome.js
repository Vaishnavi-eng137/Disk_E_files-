//Given a string, write a javascript function to check if it is palindrome or not. A string is said to be palindrome if reverse of the string is same as string.
// For example, “abba” is palindrome, but “abbc” is not palindrome.

// function checkpalindrome(string){
//     let length = string.length
//     for(let i=0;i<length;i++){
//         if(string[i] !==string[length-1-i]){
//             return"it is not a palindrome"
//         }
//     }
//     return "it is a palindrome"
// }

// var string = prompt("enter a string")

 var palindrome = function checkPalindrome(string) {

    let arrayValues = string.split('');

    let reverseArrayValues = arrayValues.reverse();


    let reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}
console.log("hello")

$("button").on('click',function(){
    palindrome($("input").val())
})

// document.getElementById("serve").addeventlistener("click",function(){
    
//     palindrome(document.getElementsByTagName('input').value())
// }) 