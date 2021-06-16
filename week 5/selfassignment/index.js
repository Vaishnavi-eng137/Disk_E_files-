// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");
// let count = 1;
// setInterval(() => {
//     if(count<=1000){
//   count++;
//   counter.innerText = count;}

// }, 10);
// setTimeout(() => {
//     followers.innerText = "followers in instagram"
// }, 5000);

const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const violet = document.querySelector(".violet");
const purple = document.querySelector(".purple");
const centre = document.querySelector(".centre");

// console.log(window.getComputedStyle(red).background)
const bgColor = (selectedelement) => {
  return window.getComputedStyle(selectedelement).backgroundColor;
};
// // console.log(bgcolor(purple))
// var Color = bgcolor(purple);
// purple.addEventListener("mouseenter", () => {
//   centre.style.background = Color;
//  });
const magicColor = (Element, Color) => {
  return Element.addEventListener("mouseenter", () => {
    centre.style.background = Color;
  });
};
magicColor(red, bgColor(red));
magicColor(pink, bgColor(pink));
magicColor(violet, bgColor(violet));
magicColor(purple, bgColor(purple));

