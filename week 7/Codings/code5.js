//Write a Javascript function that takes two arrays as an input and calculate the number of elements that belong to both of the arrays. 
//For example, given two arrays -let a =[5,2,8,9,4] and let b = [3,2,9,5] The function commonElements(a, b) should return 3 because 2, 5 and 9 are common to both of the arrays.
let a =[5,2,8,9,4]
let b = [3,2,9,5]
var values = []
function commonno(){
for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]==b[j]){
         values.push(a[i])
        }
    }
}
}
commonno()
console.log(values)