function private(){
    console.log("something is private")
}


function sum(a,b){
    private()
    return(a+b)
}
function diff(a,b){
    return (a-b)
}
function mul(a,b){
    return(a*b)
}
module.exports = {
    sum,
    diff,
    mul
}