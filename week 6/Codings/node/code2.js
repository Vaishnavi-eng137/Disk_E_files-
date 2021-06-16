//Write a Javascript program that removes duplicates from an array.
// For example, if the input array is [1, 2, 2, 3, 4, 5, 6, 6, 7], the output of the program should be [1, 2, 3, 4, 5, 6, 7]
var input = [1,2,3,4,5,6,2,12,34,2,23,4,5]
var output = []
function removeDuplicates(){
    input.forEach((ele)=>{
        if(!output.includes(ele)){
        output.push(ele)
        }
        
    })
    console.log(output)
}
removeDuplicates()


