// functions: function  auta simpple way ho hamro 20 30 line ko code lai auta package maa banda gardinxam ani hami tesko copy jata pani lagna sakxam jun pani code line maaa.

// console.log("A");
// console.log("D");
// console.log("I");
// console.log("T");
// console.log("Y");
// console.log("A"); // same work we have to do 10 times it make difficult

// now go with function:

function sayMyName() {
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}
// yo sayMyName chai fucntion ko Reference bhaninxa () aani yeslay chai execute hunxa.
sayMyName();

//  (number1,number2) these are the Parameters:Parameter is the placeholder / variable name inside the function definition. It is the label that says "put something here."
// jaba hami function ko definition banaunnxam and tesko bhitra hami j pani input linxam chahey strings hos or j saukai hos teslai nai hami parameters bhanxam

// function addTwoNumbers(number1,number2) {
//     console.log( number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result;
  // but yahi console lai if hami return line bhanda mathi lekhxam bhane yo execute hunxa.
  // console.log("Aditya");
  // this will not execute because funtion ko auta rule hunxa ki yek patak return garisakey paxi kunai kam hudaina function bhitra...
  return number1 + number2; // jaba pani return garxam taw teslai hami kunai pani variable ma store garna sakxam.
}

// (3,4) these are called an Arguments:Argument is the actual value you pass into the function when you call it.

// ani jaba hami function lai call garxam ani tesko bhitra jaba kunai value pass garunxam teslai hamle bhanxam arguements
// addTwoNumbers(3,4);

let result = addTwoNumbers(3, 4);
// console.log("Result: ",result);

// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
// addTwoNumbers(3,null);

function loginUserMessage(username) {
  if (username === undefined) // if(!username) yo ni same kam garxa;
  {
    console.log("Please Enter a Username");
    return;
  }
  return `${username} just logged in`;
}

//  console.log(loginUserMessage("Aditya"));
//  console.log(loginUserMessage()); //if kunai value hami pass gardainam then undefined aunxa.

// when we make a shoping cart:-

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200,400,500,2000,1000));

const user = {
  username: "aditya",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}
// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

let myNewArray = [200,400,300,600]

function returnSecondVlaue(getarray) {
   return getarray[0]; 
}

console.log(returnSecondVlaue(myNewArray));
