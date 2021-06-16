function sayhello() {
  alert(document.getElementById("search_value").value);
}
var count = 0;
function keypress() {
  console.log("keypress");
}
function keydown() {
  console.log("keydown");
}
function keyup() {
  console.log("keyup");
}
function remove_me(event) {
  console.log("remove", event);
  document
    .getElementById("get this")
    .removeChild(document.getElementById("div-0"));
}
var count = 0;
function searchme() {
  var newEle = document.createElement("div");
  newEle.setAttribute("id", "div-" + count);
  count++
  newEle.innerHTML =
    document.getElementById("search_value").value +
    "<button onclick=remove_me(event) >Remove</button>";
  document
    .getElementById("get this")
    .insertBefore(newEle, document.getElementById("div-0"));
}

// document.getElementById("get this").append(newEle);
// document.getElementById("get this").innerHTML =document.getElementById("search_value").value
// document.getElementById("get this").innerHTML = event.target.value;
// console.log("Value of search", event.target.value);

// document.getElementById("serve").addEventListener("click", sayhello);
