//Create two Javascript functions - largest and smallest.
//Both of them takes an array of numbers as an input.
//largest should return the largest number in the array.
//smallest should return the smallest number in the array.

var input = [1,4,5,6,1000,56,3484]
var uio = [2,3,4,56,890,]
var largest = []
var smallest = []

    function returnComparison(){
        largest = input.sort((a,b)=> b-a)
       smallest = uio.sort((a,b)=>a-b) 
       console.log(smallest)
       console.log(largest)
    }
    returnComparison()
console.log(smallest)
console.log("Largest no. is"+largest[0],"Smallest no. is"+ smallest[0])
