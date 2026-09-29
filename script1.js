// word vs keywords
//  chacha is useless word that compiler doesnot understand and if compiler doesnot understand then it called words that useless in js 
//  for = keyword ( something that has meaning in js is a keyword)
// aditya 
// is
// good
// man
// the upper four are words 

// the lower 5 are a keywords
// for
// if
// else
// var
// let

// Now-var const let 

// variables and constants 

// we play game like chess mario and pubg etc 
// score = 0 when we kill score increases to 1 to 2 to 3
// lives = 3 when we die our lives decreases to 2 to 1 to 0 

//  program 
// code mein koi bhi data store karney k liya jiska use hota hai usey kahete hay variables

// variable means yesto kai jasko value change hunxa 
// constants means jasko value change hudaina 

// demo 
//  this demo is in var so we can change the value
// var can be redeclared and reassign both
// var hubby = "lab";
// var wify = "laby";
// var hubby = "mohan"

// console.log()

// thhe demo is in const so we cannot change the value  
// const hubby = "subh";
// const wify = "surbe";

// console.log()

// var and const has complete now lets go towards let 

// let say bhi variables bantey hay mainly 3 difference hay var const aur let may 

// let may bhi values change hosaktey hay just like a var 
// let can be reassign but cant be redeclared and that is the difference between var and let 
// let hubby = "ram"
// let wify = "sita"
// hubby = "hari"
// console.log()

// hoisting - variables and functions are hoisted which means there decleration is moved on the top of the code 
// var ko bananey say pehele usko use karsaktey hay usiko hoisting boltey hay 
// var a; //undefiend

// console.log(a); // a may undefined print hoga 
// var a = 12;

// console.log(b);
// var b = 30;
//  we get undefiend not the error 
// var a; //decelration 
// a = 12; //initialization 
// undefined and not-defined had a diference 

// Types in Js - Primitive and Reference 
 
//  primitive = Number, string, null, undefined, boolean
//  reference = [] () {}
// aisi koi bhi value jisko copy karney par real copy nahi hota, balki us main value ka reference pass hojata hay, usay ham reference value kahete hay, aur jiska copy karney paar real copy hojayea woo value primitive type hota hay 

// demo 
// var a = 12;
// var b = a;

// b = b+2;

// var a = [1,2,3,4]; // this is called reference type 
// var b = a;

// b.pop();

// example 

// var a = 12; //this is called ma primitive type of value 


// conditionals - if else , else if 

// if (true) idhar bracket k andar sirf true or false type of condition hi asaktey hay. yeah fir kuch ayesa jo true aur false may convert hojayea.

// if (11>12){

// }
// else{

// }

// if (11>12){

// }
// else if(123>13) {

// }
// else if(14>16) {

// }
// else{

// }

// loops - for while 
// loops ka matlab hay repeat 
// 1 1 1 1 1 1 1 1 1 
// 1 2 3 4 5 6 7 8 9 
//   the both numbers are called loop
// 3 bar harsh 
// console.log("harsh")
// console.log("harsh")
// console.log("harsh")

// 30 bar harsh
// then here we will use loop 

// for (var i = 0; i<11; i++) {
//     console.log(i);
// }

//   25 - 50 

//  for (var i = 25; i<=50; i++) {
//     console.log(i);
//  }

// var a = 12;

// while (a<20) {
//     a++;
// }


// function ka matlab app kuch code ko likh ke usko naam desaktey ho aur badmey usay use karsaktey ho 
// functions - mainly tin kam ke liyaa hote hay
// 1) jab apka code app turant nahi chalana chatey future may chalana chatey ho 
// 2) jab app apna code reuse karna chatey hoo 
// 3) jab appp apna code chalana chatey hoo haar baar with different data

// function abcd() {
//   console.log("helloBolo")
// }
// abcd();

// function masubhat() {
// console.log("masu kharido")
// console.log("kadhai chadhau gas ma")
// console.log("masu aur pyaz dalo kadhai may")
// console.log("thoda pani bhi dalo ")
// console.log("masala daal kar chalao usko")
// console.log("pakney k baad khalo")
// }

// masubhat();

// function abcd(a,b,c) {
//     console.log(a,b,c);
// }

// abcd(1,23,45);

// arguments = real value jo hamdete hay function chaltey time
// parameter = variables jismey value store hota hay arguments wali 

// arrays = hum yek varibale may yek value store karpatey hay paar jab hamey yek say jada value store karni hoti hay tab fir use hota hay array ka, matlab ki array apko freeedom deta hai ek say jada value use karney ki

// var a = [12,13,14];

// Array is simply a group of Values

// let arr = [1,2,3,4,5];

//  arr[0];





// push pop shift unsift splice

// let arr = [1,2,3,4,5,6,7]; 
// arr.push("a d i t y a"); //to add a member 
// arr.pop(); //to remove a member 
// arr.unshift(0); //to add a member at 1st place 
// arr.shift(); // to remove the value from the 1st place 
//  arr.splice(4,1); // place the index number and it will remove the number


// objects - 









/*
# JavaScript Fundamentals — Interview Prep

Keep answers short: **definition → one-line example → stop.** You don't need to say more unless they ask a follow-up.

---

## 1. Variables — `var`, `let`, `const`

- **var**: old way, function-scoped, can be re-declared. Avoid using it now.
- **let**: block-scoped, can be reassigned.
- **const**: block-scoped, cannot be reassigned.

> Say: "let and const are block-scoped, var is function-scoped. I use const by default, let when the value changes, and avoid var."

---

## 2. Data Types

**Primitive:** string, number, boolean, null, undefined, symbol, bigint
**Non-primitive:** object (includes arrays, functions)

> Say: "JS has primitive types like string and number, and object types like arrays and functions."

---

## 3. `==` vs `===`

- `==` compares value only, converts types first.
- `===` compares value AND type, no conversion.

Example: `"5" == 5` → true. `"5" === 5` → false.

> Say: "Double equals converts types before comparing. Triple equals doesn't. I always use triple equals."

---

## 4. Hoisting

JS moves declarations to the top of their scope before running the code.

- `var` is hoisted and initialized as `undefined`.
- `let`/`const` are hoisted but not initialized — using them early throws an error (temporal dead zone).

> Say: "Hoisting means declarations are moved to the top of scope. var gets set to undefined, let and const don't — they stay in a temporal dead zone."

---

## 5. Scope

- **Global scope**: accessible everywhere.
- **Function scope**: only inside that function.
- **Block scope**: only inside `{ }` — applies to let/const.

---

## 6. Closures

A function that "remembers" variables from where it was created, even after that outer function has finished running.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

> Say: "A closure is a function that remembers variables from its outer scope, even after the outer function has finished."

---

## 7. `this` keyword

`this` refers to the object that is calling the function. Its value depends on **how** a function is called, not where it's written.

- In a regular function: depends on the caller.
- In an arrow function: `this` comes from the surrounding (lexical) scope, not the caller.

> Say: "this depends on how a function is called. Arrow functions don't have their own this — they use the this from where they were defined."

---

## 8. Function Types

```js
function normal() {}          // regular function
const arrow = () => {};       // arrow function
```

Key difference: arrow functions don't have their own `this`, and can't be used as constructors.

---

## 9. Array Methods (very commonly asked)

| Method | What it does |
|---|---|
| `map()` | returns a new array, transformed |
| `filter()` | returns a new array, filtered by condition |
| `reduce()` | reduces array to a single value |
| `forEach()` | loops, no return value |
| `find()` | returns first matching element |

> Say: "map transforms and returns a new array. filter keeps items matching a condition. reduce combines everything into one value."

---

## 10. Higher-Order Functions

A function that takes another function as an argument, or returns a function.

Example: `map`, `filter`, `reduce` are all higher-order functions.

---

## 11. Callbacks, Promises, Async/Await

- **Callback**: a function passed into another function, run later.
- **Promise**: represents a value that will be available in the future (pending → fulfilled/rejected).
- **async/await**: cleaner syntax to work with promises, looks like normal synchronous code.

```js
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

> Say: "A promise represents a future value. Async/await is just a cleaner way to write promise-based code."

---

## 12. Event Loop (common but tricky — keep it short)

JS is single-threaded. The **call stack** runs code. Async tasks (like `setTimeout`, fetch) go to a queue and only run once the call stack is empty.

> Say: "JS runs on a single thread. The event loop lets async tasks wait in a queue and run only after the current code finishes."

---

## 13. Objects & Prototypes

- Objects store key-value pairs.
- Every object has a prototype it can inherit properties/methods from.
- `class` in JS is really just syntax on top of prototypes.

---

## 14. Useful ES6+ Features (name a few if asked)

- Arrow functions
- Template literals: `` `Hello ${name}` ``
- Destructuring: `const {a, b} = obj;`
- Spread/rest: `...arr`
- Default parameters: `function f(x = 1) {}`
- Modules: `import`/`export`

---

## 15. DOM Basics (if it's web-dev focused)

- `document.querySelector()` — select an element
- `addEventListener()` — listen for events like clicks
- `element.innerHTML` / `textContent` — change content

---

## Quick Practice Drill

Say each of these out loud, slowly, once before your interview:

1. "let and const are block-scoped, var is function-scoped."
2. "Triple equals checks type and value, double equals only checks value."
3. "A closure remembers variables from its outer function."
4. "This depends on how a function is called."
5. "A promise represents a value that will exist in the future."

---

## If You Get Stuck On a Question

It's fine to say:
- "Let me think for a second."
- "I know part of this — let me start with what I'm sure of."

Partial, honest answers said calmly are much stronger than rushing.

**You know this material. Go get it.**

*/






