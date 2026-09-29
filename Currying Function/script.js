// Currying function in Js

// function addition(a,b,c) {
    // return a+b+c;
// }     // its a normal case.  while we are not using currying 

// let result = addition(2,3,4);
// console.log(result);



function addition(a) {
    return function (b) {
        return function(c){
            return a+b+c;
        }
    }
}
// let result = addition(2);
// let data = result(4);
// let data1 = data(7);
// this is called a curring method 
// currying:-Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a series of functions, each taking only one argument at a time.

 let result = addition(2)(4)(7);
console.log(result);


 userObj = {
    name:"aditya",
    age : 23,
 }

 function userInfo(obj) {
    return function(userinfo){
        return obj[userinfo];
    }
 }
 let res = userInfo(userObj);
 console.log(res('name'));
 




