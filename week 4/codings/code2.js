//Find a given a number is prime or not
function prime(no) {
  for (i = 2; i < no; i++) {
    var primeis = false;
    if (no % i === 0) {
      break;
    } else {
      primeis = true;
    }
  }

  if (primeis === true) {
    console.log("number is prime");
  } else {
    console.log("number is not prime");
  }
}
// console.log(result)}
prime(8);
