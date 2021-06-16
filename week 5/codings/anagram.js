//Anagram Given 2 strings, find whether one is an anagram of the other. Two strings are anagrams if they are written using the same exact letters.
// Each letter should have the same count in both strings. e.g. 'binary' and 'brainy'
    function findAnagram(string1,string2){
    console.log("hgiug")
    let inputValue1 = string1.split("")
    let splittedValue1 = inputValue1.sort()
    let resultant1= splittedValue1.join("")
    let inputValue2 = string2.split("")
    let splittedValue2 = inputValue2.sort()
    let resultant2= splittedValue2.join("")

    if (resultant1 == resultant2){
       alert ("both"+ " " + string1+" "+ string2 + " "+"are anagram of one another")
    }
    else{
        alert(`${string1},${string2} are not anagram of one another`)
    }
}


$("#serve").on("click",function(){
    findAnagram($("#value1").val(),$("#value2").val())
})