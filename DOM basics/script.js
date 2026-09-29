// Pillars of DOM
// The four pillars are here.
// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listner

// 1 and 2 are done.
// let a = document.querySelector("h1");
//   a.innerHTML = "Change garya bahrkar";
// console.log(a);

// lets go for 3
// a.style.color = "red"
// a.style.backgroundColor = "black"

// a.addEventListener("click", function () {
//   // console.log("hey");
//   a.innerHTML = "I am changed";
//   a.style.color = "purple";
//   a.style.backgroundColor = "rgba(255, 4, 21, 0.33)";
// });

// let b = document.querySelector(".box");

// b.addEventListener("mouseover", function () {
//   b.innerHTML = "i am hovering";
//   b.style.color = "rgba(104, 208, 43, 0.98)";
//   b.style.backgroundColor = "rgba(255, 204, 0, 0.53)";
// });

// let bulb = document.querySelector("#bulb");
// let onbtn = document.querySelector("#on");
// // let ofbtn = document.querySelector("#off");
// let flag = 0;
// onbtn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     flag = 0;
//   }

//    bulb.style.border = "2px solid yellow";
// });
// ofbtn.addEventListener("click",function(){
//     bulb.style.backgroundColor = "white";
//     // bulb.style.border = "2px solid white"
// })

// //  to sellect the multiple element
// let h = document.querySelectorAll("h1");
// console.log(h);
//  h.forEach(function(e){
//     console.log(e);
//  })

//  document.getElementById("box");

  let box = document.querySelector("#box");
  box.innerHTML = "<h1>hello</h1>"// data text fromate may convert nahi hota.
  box.textContent = "<h1>hello</h1>" // yeah oura conent text k hisab say change akrdeta hay.
     
     




