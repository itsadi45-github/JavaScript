// in js we deal with two types of value:
  // 1. Primitives: Number,BigInt,Boolean,undefined,Null,symbol
  //2. (Non-Primitive)Objects: objects,functions,arrays,strings.

//   the moment we work with object and we try to pass the value inside one object to another object then here Comes "Pass by Reference"

let car1 = {
    name : "BMW",
    cost : "75.6lakh",
    average : 8.9
};
console.log(car1.name);
console.log(car1.cost);
console.log(car1.average);

let car2;

car2 = car1;
 // a variable which stores the address of the object is only called as a refernce variable 

 // passing address from one reference variable to another refernce variable is only called as a passs by Reference.

//  real life example:
   // asume gharma auta locker xa hamro jasma paisa haru sabai xa ani locker is locked by the key1 and aba hami teyo key2 lai duplicate garxam so hamro family bata aru lay ni access garna paos bhanera so the key is two but the locker is one...so this i called we have multiple reference but the object is one.
   
console.log(car2.name);
console.log(car2.cost);
console.log(car2.average);

car2.name = "KIA";
console.log(car2.name);
console.log(car1.name); // it changes to KIA


