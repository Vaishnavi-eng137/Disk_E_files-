
function getNewName(string){
    let newName=" "
    for (let i=0;i<string.length;i++){
        // var real = string.split("")
        let chCode = string.charCodeAt(i)+1
        let newCh = String.fromCharCode(chCode)
        newName = newName+newCh
    }
    $("#root").text(newName)
}
$("button").on("click",function(){
getNewName($("input").val())
})