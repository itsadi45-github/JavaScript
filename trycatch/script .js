// Try Catch Concept:-
//  try catch basically used for error handling is javascript
// i mean jaba javascript ma error aunxa then code afai run huna stop hunxa and hamro app or website crash hunxa teti bela try catch lay hamro website or app lai crash huna bata bachaunxa by handling the error.

let a = prompt("Enter 1st number");

let b = prompt("Enter 2nd number");
// let x = 2;
// let sum = a + b;

if (isNaN(a) || isNaN(b)) {
  //its called a throwing error
  throw SyntaxError("sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);

let x = 1;
try {
  console.log("The sum is ", sum * x); //Check garxa if code thikxa bhaney chalxa natra error dekhaunxa yo ("Error ako xa yekaixin pakhnus").
} catch (error) {
  console.log("Error ako xa yekaixin pakhnus");
} finally {
  console.log("Files are being closed and db connection is being closed");
}
// console.log("The sum is ", sum);
// function main() {
//   let x = 1;
//   try {
//     console.log("The sum is ", sum * x); //Check garxa if code thikxa bhaney chalxa natra error dekhaunxa yo ("Error ako xa yekaixin pakhnus").
//   } catch (error) {
//     console.log("Error ako xa yekaixin pakhnus");
//   } finally {
//     console.log("Files are being closed and db connection is being closed");
//   }
// }

// let c = main();
