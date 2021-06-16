// let btnget = document.querySelectorAll("btn");
// let btnget = document.querySelector("button")
var btnget = document.querySelector("#get");

// var resetButton = document.querySelector("#reset");
// resetButton.addEventListener("click", function () {
//   reset();
// });
init();
function init(){

	validate();
}

btnget.addEventListener("click", function () {
  validate();
});

function validate() {
  var userName = document.getElementById("Username").value;
  var passWord = document.getElementById("password").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (userName == "") {
    alert("please enter user name.");
  } else if (passWord == "") {
    alert("enter the password");
  } else if (!filter.test(userName)) {
    alert("Enter valid email id.");
  } else {
    alert("Thank You for Login & You are Redirecting to new page");
    window.location = "https://stackoverflow.com";
  }
}

//Redirecting to other page or webste code or you can set your own html page.

//   if (userName == "vaisu "&& passWord == "vaisu@gmail.com") {
//     alert("Login Successful");
//     console.log("me");
//     window.location = "https://stackoverflow.com";
//   } else {
//     alert("please write a valid id or password");
//   }
// }
