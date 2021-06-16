//Create a Javascript program that produces a table of numbers from 1 to 10 and squares of them
let btnGet = document.querySelector("button");
let myTable = document.querySelector("#table");
let result = document.querySelector("#display");

let table1 = document.createElement("table");
let headerRow = document.createElement("tr");
let header1 = document.createElement("th");
let header2 = document.createElement("th");
let header3 = document.createElement("th");

let table2 = document.createElement("table");
let table2headerRow = document.createElement("tr");
let table2header1 = document.createElement("th");
let table2header2 = document.createElement("th");

table2header1.innerText = "numbers";
table2header2.innerText = "Multiples of 5";

header1.innerText = "numbers";
header2.innerText = "squares";
header3.innerText = "cubes";

headerRow.append(header1, header2, header3);
table1.append(headerRow);

table2headerRow.append(table2header1, table2header2);
table2.append(table2headerRow);
result.append(table2);
result.append(table1);

for (let i = 1; i <= 10; i++) {
  let row = document.createElement("tr");
  if (i % 2 == 0) {
    row.style.backgroundColor = "#87ceeb";
  } else {
    row.style.backgroundColor = "#FF0000";
  }

  let data1 = document.createElement("td");
  let data2 = document.createElement("td");
  let data3 = document.createElement("td");

  data1.innerText = i;

  data2.innerText = i * i;
  data3.innerText = i * i * i;
  row.append(data1, data2, data3);
  table1.append(row);
}

for (let j = 1; j <= 10; j++) {
  let row2 = document.createElement("tr");
  let data11 = document.createElement("td");
  let data22 = document.createElement("td");

  data11.innerText = j;
  data22.innerText = 5 * j;
  row2.append(data11, data22);
  table2.append(row2);
}
console.log(result.append(table2));
console.log(result.append(table1));

// function doMultiple(row, i) {
//   row.style.backgroundColor = colors[i % colors.length];
// }

// for (i = 1; i <= 10; i++) {
//   document.getElementsByTagName("td").append("result");
//   result.push(i);
// }
// btnGet.addEventListener("click", () => {
//   tr.style.color = purple;
//   let table = document.createElement("table");
//   let headerRow = document.createElement("tr");

//   Headers.forEach((headerText) => {
//     let header = document.createElement("th");
//     let textNode = document.createTextNode(headerText);
//     header.appendChild(textNode);
//     headerRow.appendChild(header);
//   });
//   table.appendChild(headerRow);
//   myTable.appendChild(table);
// });
// table.style.color = "purple";

// function square_it(no){
// return( no*no)
// }
// square_it(2)

// console.log(document.getElementById("speed"))
// console.log(document.getElementsByClassName("table")[0])
// console.log(document.getElementsByTagName("div"))

// var run= document.getElementById("speed")
// // alert(run.innerHTML)
// run.innerHTML
// console.log(document.querySelector("div.name"))
