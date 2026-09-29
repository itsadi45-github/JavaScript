// Apply,Call and Bind in js

// lets make the problem statement

//call function:-
let userDetails = {
  name: "aditya sarraf",
  age: 23,
  Designation: "software engineer",
  // printDetails:function(){
  //     console.log(this.name); // i want to call userDetails2
  // }
};
let printDetails = function (state,country) {
  // created the generic funtion that can apply anywherer
  console.log(this.name ," " + state , " " + country);
};
printDetails.call(userDetails,"Birgunj","Nepal");

//here is apply 
//here we use array to call the individual vause in array form or list form.
printDetails.apply(userDetails,["Birgunj","Nepal"]); //so there is very thin difference between apply and call

let userDetails2 = {
  name: "sulav yadav",
  age: 20,
  Designation: "Digital Marketer",
};
printDetails.call(userDetails2,"Birgunj", "Nepal");

let userDetails3 = {
    name: "Ritesh shah",
    age: 28,
    Designation: "Pathao Manager",
};
printDetails.call(userDetails3,"Birgunj", "Nepal");

//  function borrowing
// userDetails.printDetails.call(userDetails2);
// userDetails.printDetails.call(userDetails3);

// autai function lay hami different object lai call garnas akxam 

// bind function:-
//  bind function like call function jastai hunxa but hamle call ma direct function call garxam tara Bind lay bhanxa ki timi direct funtion call nagara tesko copy banau ani jaba maan lagxa teslai call garihalnu bhanera
  // yeta hamlay function call garya haina hamle fucntion ko value newfun ma store garako ani jaba jaruri paryo then hamle bind function use garera value print garayea
  
let newfun = printDetails.bind(userDetails,"Birgunj","Nepal");
newfun();
