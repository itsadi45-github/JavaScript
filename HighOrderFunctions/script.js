//High order Functions:- a function which takes another functions as an arguements or returns a function from it, is known as highh order function 

function x() { // here X is the callback function 
    console.log("Aditya");
    
}
function y() { // here y is the high order function
    x();
}

// sample is here

// let radius = [3,2,1,4];

// calculate the area of this 4 circles
 

// let calculateArea = function(radius) {
//     let output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//          return output;
// };
// console.log(calculateArea(radius));

// let calculateCircumference = function(radius) {
//     let output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//          return output;
// };
// console.log(calculateCircumference(radius));

// let calculateDiameter = function(radius) {
//     let output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(2 * radius[i]);
//     }
//          return output;
// };
// console.log(calculateDiameter(radius));

// these are not the good way to write a code. so much repeatation is there....





// so now we will optimize the code: thisis called a functional programing.

let radius = [3,1,2,4];

let area = function (radius) { //these are the callback function which passed inside the logic of higherorder function
    return Math.PI * radius * radius;
}
let circumference = function (radius) {
    return 2 * Math.PI * radius;
}
let diametere = function (radius) {
    return 2 * radius;
}

// the calculate is called a higer order function.
let calculate = function(radius,logic) {
    let output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
         return output;
};

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diametere));








