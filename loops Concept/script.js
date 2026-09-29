// Lopps concept

// let a =1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);
// console.log(a+4);
// this is so lanthy so we use loop that makes our program short and sweet
// we use loop to perform a repetative task actions simply we can say we use it for repetation of any program

// let a = 1;
//   for (let i = 0 ; i < 100 ; i++) {
//      console.log(a+i);
//   }

// for loop:- hami for loop taba use garxam jaba hamlai tha hunxa ki hami kati patak kunai chees lai reapat garna chahanxam.

let a = 1;
for (let i = 0; i < 10; i++) {
  console.log(a + i);
}
for (let i = 0; i < 10; i++) {
  console.log("Helloworld");
}
for (let i = 1; i <= 10; i++) {
  console.log("Step: " + i);
}

// While Loop:- hami while loop taba use garxam jaba kai repeat garnu parney hunxa jaba hamro condition true hunxa.

let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}

let watch = 4;

while (watch > 0) {
  console.log("watch is On. Batery level: " + watch);
  watch--;
}
console.log("watch is dead");

//  for of loop:- hamle forof loop taba use garxam jaba hamlai list or array of items lai one by one check garnu parney hunxa

let x = [3, 4, 5, 6];

for (let y of x) {
  console.log(y);
}

let SenDev = ["aditya", "sulav", "ritesh"];

for (let JunDev of SenDev) {
  console.log(JunDev);
}

// do while loop:- do while loop chai while loop jastai ho but auta huge difference yo xa ki hamro condition false huda ni yo atelast yek patak run hunxa.....kina ki javascript suru ma do ma action linxa then last ma condition check garxa while ma.

let wtch = 4;
do {
  console.log("checking watch.....");
} while (wtch < 1);

let abc = 10;

do {
  console.log("Hello");
} while (abc < 5);

// for in loop:- for in loop taba use garxam when we want to look thorugh object.

// like: 

let student = {
// keys : label 
   name: "aditya",
   age: 23,
   city: "Birgunj",
};

for (let key in student) {
   console.log(key + " : " , student[key])
}

let showroom ={
   car1 : "Nexon",
   car2 : "kia",
   car3 : "brezaa",
};

for (let key in showroom) {
   console.log(key + " : " , showroom[key]);
}


// for each:- foreach() hami taba use garxam jaba hami sanga array hunxa and we want to do something with every item in that array.

//forEach() is an array method used to execute a function for every element of an array.

 let fruits = ["apple","Banana","Mango"];

 fruits.forEach(function(fruit){
  console.log(fruit); // this code means For each fruit inside fruits, print that fruit.
 });


 let clothes = ["watch","tshirt","pant"];
 
 clothes.forEach((cloth)=>{
       console.log(cloth);
       
 })

 let CarModels = ["BMW","Ferari","RangeRover"];
 
 CarModels.forEach((CarModel,index)=>{
       console.log(index,CarModel);
       
 })

 let numbers = [2,4,5];
   numbers.forEach((number)=>{
          // console.log(number);
          console.log(number*2);          
   });


