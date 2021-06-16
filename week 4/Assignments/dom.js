// document.getElementById("fox").innerHTML = "Game started";
let btnget = document.querySelector('button');
var mytable = document.querySelector('#table');
let result = [];
for (i = 1; i <= 10; i++) {
  result.push(i);
}
let headers = ["NUMBERS", "SQUARES"];
btnget.addEventListener('click', () => {
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');
  headers.foreach(headerText => {
    var header = document.createElement('th');
    var textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  mytable.appendChild(table);
//   document.getElementById("row").appendChild("td");
//   document.getElementById("table").appendChild(table);
});
