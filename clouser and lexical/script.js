// Clouser Concept :- clouser basically means that the function bind together with it lexical environment.
// function with the lexical scope forms a clouser.

//   lexical scoping :-

// function init() {
//   let name = "chrom";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// function outer() {
//     let username = "aditya" //  function bhitra jun pani variable declare garxam teyo outer scope ma availabe hudaina
// }
//  console.log(username);

// function outer() {
//   let username = "aditya";
//   // console.log("inner", secret); parent also cannot access
//   function inner() {
//     // let secret = "meandmy"
//     console.log("inner", username);
//   } // yeah child function afaima kai share gardainan
//   function iner2(params) {
//     console.log("iner2", username);
//     // console.log("inner", secret); // it canott access
//   }
//   inner();
//   iner2();
// }
// outer();
//  console.log("TOO OUTER",username); //it gives error

//  parent function ko variable lai chilld function lay access garna sakne lai nai hami lexical scoping bhanxam

// lets go for the clouser:-

// function makeFunc() {
//   const name = "aditya";
//   function disName() {
//     console.log(name);
//   }
//   return disName;
// }
// const myFunc = makeFunc();
// myFunc();
  
 // Clouser bhaneko simply hami purai function jaba return garxam then matra function return hudaina purai lexical scope return hunxa 

//  document.getElementById("orange").onclick = function () {
//         document.body.style.backgroundColor = 'orange';
//       };
//  document.getElementById("green").onclick = function () {
//         document.body.style.backgroundColor = 'green';
//       };

// function clickHandler(color) {
//   document.body.style.backgroundColor = '${color}';
// }
//  document.getElementById("orange").onclick = clickHandler("orange")

//  function clickHandler(color) {
//       // document.body.style.backgroundColor = '${color}';
//       return function () {
//         document.body.style.backgroundColor = `${color}`;
//       };
//     }
//     document.getElementById('orange').onclick = clickHandler("orange");

//     document.getElementById('green').onclick = clickHandler("green");


//     function clickHandler(color) {
//   return function () {
//     // Use backticks (`) instead of double quotes ("") for template literals
//     document.body.style.backgroundColor = `${color}`;
//   };
// }

// document.getElementById('orange').onclick = clickHandler("orange");
// document.getElementById('green').onclick = clickHandler("green");


// Program of clouser:- 

 function outcounter() {
     let count = 0;  // auta local variable create garey outcounter ma.
      return function(){ // ani inner funtion return garey 
        count++;  // then increment garey count lai.
        return count; // yeta caount ko new value lai return garey 
      };
 }
   let counter = outcounter(); // yeta chai purai inner function hamro variable counter ma save bhaihalxa 

   console.log(counter(1)); // inner funtion run hunxa ani teslay count lai khojxa ani one lay increment garxa ani result one dinxa hamlai 
   console.log(counter(2));
   console.log(counter(3));
   
