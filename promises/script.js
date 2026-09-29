//Promises Concept:- promises lay like javscript maa operation handel garna ma help garxa such as downloading data or loading image etc.
// code stop garnuko sato teslay hamlai sure garauxa ki hamro code lay future ma result dinxa bhanera
//  real life example :-
//    hamlay online food order garda hamro food direct order garney betekoi hatma aunxa raw? aundaina ni it gives us confirmation ki um hamro food aundaixa bhanera that is called a promises in js.

// we can use promises by .then and .catch
//  fetch('https://something.com').then().catch().finally()

// suppoose we are creating e-comerce website
//  before promises
// const cart = ["shoes","pants","kurta"];
// createOrder(cart); //orderId API
// both are asyncronous and they are depended on each other
// proceedTopayment(orderId); //another API

// synchronous :-
//    Synchronous means code runs in a particular sequence  of instruction given in the program.Each instgruction wait for the previous instruction to complete its execution
// --------1st line of code
// --------2nd line of code
// --------3rd line of code
// --------4th line of code
//    in this way they execute

// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

//this is call synchrounous programing

//Asynchronous:-
// due to synchronous programing, sometimes imp instruction get blocked due to some previous instruction,which causes a delay in UI...
// Asynchronous code execution allows to execute next instrucions immediately and doesnot block the flow.
// ........code 1
// ........code 2
// ........API //if it takes time to run then agey wala code run honey doooo then yeah run hojayea to iska output dikhadena ....it means yo jun instruction xa yesko complete huna ko wait garnu pardaina
// ........code 3
// ........code 4

// console.log("one");
// console.log("two");

// function Hello() {
//   console.log("hello");
// }
// setTimeout(Hello, 2000); //timeout  It doesnot block the flow of execution of instruction

// console.log("three");
// console.log("four");

// Callbacks :- In simple terms, a callback is just a function you hand over to another function, with instructions to run it later.
//    sychnronous call back
// function sum(a, b) {
//   console.log(a + b);
// }

// function Calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// Calculator(1, 2, sum);

// const hello = () => {
//   console.log("hello");
// };
// setTimeout(hello, 3000); //set time out also gtakes the call back

//  we use call back tara real time program run garda auta prblem auna sakxa which is called callback hell.

//nesting
//this is called nested if else
//  let age = 23;

//  if (age >= 18) {
//     if (age >= 60) {
//         console.log("Senior");

//     }else{
//         console.log("middle");
//     }
//  }  else{
//     console.log("child");
//  }

//  nested for loop
//  for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i,str);
//  }
//  nestiing means yek cheess k andar dusri cheess ko likhnaa

// thats what ki callbacks ki bhi nesting hosakti hai aur wahi call backs ki nesting hojati hay deper level paar then the call back hell issues arives in our website

// lets assume ki hamne database say kuch data leke atey hay..asume we have awebsite and millons of user we have and koi bhi user jabhi login karta hay toh user apna id pw dalega then data base checks the code ki user id aur pw sahi hay ki nahi data base say match toh horaha hayna then we can enter to the  account;

// function getData(dataId) {
//   //it tooks 2s to fetch the data
//   //asssume this as a database
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }

// lets assume we need three different data
// getData(1);
// getData(2);
// getData(3);

// data1 1st then 2sec delay
// data2 2nd then 2nd delay
// data3 3rd

// in practical case lets assume hami afno insta id ma login gardaixam then .....hami pahila [username halxam].... then hami [password] halxam then assume ki hamro code yo tarika lay lekhya xa ki database bhitra pahila hamro username search hunxa then if username exist garxa bahney then only hami pw search garxam hamro data base ma. so username khojna ma assume garum 2 sec lagxa so hami lai data individual delay garera chahinxa

// we can use call back for this

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

//this is called callback hell and it is also problram in java script and to solve it we have a Baba jii called promises
getData(1, () => {
  console.log("geting data 2....");
  getData(2, () => {
    console.log("geting data 3....");
    getData(3, () => {
      console.log("geting data 4...."); //this is very complex to understand
      getData(4);
    });
  });
});

//This is not good way of programing
//   getData(1,getData(2));

// after thiss all call back hells and difficulties js introduce the Promises concept to solve the call back hell....

// Promises:- it is for eventual completion of task.it is an object in js.It is a solution to callback hell. (like ham hunxa tara reject hunxa ki resolve hunxa teyo tha hudaina hamlai but eventually kam chai hunxa hamro)

//  for example hamilay amazon bata auta saman kiney and paymnet gardiya but aile saman ako xaina tara amazon lay promise gardaixa ki tapaiko saman tapai sama delever hunxa bhanera. so hami dhuka bhayera afno aru kam garna ma lagihalxan....then duita case hunxa
// if delivery ko lagi done bhaihalxa then teslai hami unfullfilled promise bhanxam
// auta lita hamro deliver cancel hunxa order then yo case lai hami "reject" bhako bhanxam
// arko case yo hunxa ki hamro delivery successfully hami recive garxan yo case lai hami "resolve" bhako bhanxam
//   if order paisakxam bhane hami teslai bhanxam

//  how to create the promise:-
//   kunai pani promise create garda hami lekhxam "newpromise" when Promise is called a class jata hami nayapromise create garxam.ani yesma promise lai create garna lai basically hami auta function pass garxam ani function bhitra duita handlers hunxan (handelers afaima auta funtion hun) joslai hami call back bhana sakxam jasbata auta ko naam hunxa "resolve" and arko ko naam hunxa "reject"

// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve(112233);
//     // resolve("success");
//     reject("some error");
// });

//promise has 3 states: one is pending state...2nd is fullfill[resolve] state...3rd is rejected state.

// simply promise auta object ho javascript ma jasko tinta state hunxa pending resolve raw rejected.

// in general programing hami promise lai create gardainam like hami kunai API nira request pathaunxam ki hamlai kai data chahinxa bhanera then teyo API hamlai promise return garxa then after hami promise sanga hamro data sanga deal garxam like afno data nikalxam result nikalxam tesko state check garxam.

// how we accuallty use promise

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("data", dataId);
//       resolve("success");
//       // reject("something error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// now lets see hami nira promise aunda kasari deal garney

// hami nira if kunai pending promises aunxa bhane hami wait garxam kai garna sakdainam..

// but hami nira chai fullfilled promises aunxa then hami teslai promise.then((res)=>{...}) garera resolve garxam and yo function taba matra chalxa jaba hamro promise fullfill hunxa.

// for example

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // reject("Network error");
//     // resolve(112233);
//     resolve("success");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fullfilled", res);
// });

// promise.catch((err) => {
//   console.log("Rejected", err);
// });

// promise chain

// function asyncfunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncfunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1....");
// asyncfunc1().then((res) => {
//   console.log("fetching data2....");
//   asyncfunc2().then((res) => {});
// });

// console.log("fetching data2....");
// let p2 = asyncfunc2();
//  p2.then((res)=>{
//   console.log(res);
//  })

// lets do that nested call back program with promise chain

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       // reject("something error");
//     }, 2000);
//   });
// }

//promise chain:-
// let p1 = getData(1);

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(()=>{
//     console.log(res);
//   })
// });

//actual promise chaining

console.log("getting data1....");
getData(1)
  .then((res) => {
    console.log("getting data2....");
    return getData(2);
  }) //it is also dificult to understand so we get into async and await
  .then((res) => {
    console.log("getting data3....");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

// lets start with async and await:- this both are the keywords in javascript. bascially yeslay asynchronous programing lai simple banaunxa

// async keyword basically hami funtion sanga use garxam and async funtion alwasy retrun a promise.

async function hello() {
  console.log("hello");
}

// await pauses the execution of its surrounding asunc function until the promises is settled. simly jaba sama hamro promise pending rahanxa taba sama await lay wait garxa sabai program ko execution rokera
// await function lai hami async funtion ko bhitra matra use garna sakxam.

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}
async function getWeatherData() {
  await api();//1st call...it means pahila yo kam hunxa ani matra aru kunai kam hunxa
  await api();//2nd call....
}

// example:- instagram login garda pahila username check hunxa then pw check hunxa ani matra access garna paunxa userlai

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      // reject("something error");
    }, 2000);
  });
}

Async-Await 
  async function getAllData() {
    console.log("Getiing data1...");
    await getData(1);
    console.log("Getiing data2...");
    await getData(2);
    console.log("Getiing data3...");
    await getData(3);
    console.log("Getiing data4...");
    await getData(4);
    console.log("Getiing data5...");
    await getData(5);
    console.log("Getiing data6...");
    await getData(6);
  }

  // IIFE:-
  // hamlai yeslai call garnu pardaina afai execute hunxa 
  // this is for immediate use and one time use 
  // (async function () {
  //   console.log("Getiing data1...");
  //   await getData(1);
  //   console.log("Getiing data2...");
  //   await getData(2);
  //   console.log("Getiing data3...");
  //   await getData(3);
  //   console.log("Getiing data4...");
  //   await getData(4);
  //   console.log("Getiing data5...");
  //   await getData(5);
  //   console.log("Getiing data6...");
  //   await getData(6);
  // })();

  // to prevent unnecessary call the function 
  // we have IIFE:- it is immediately invoked function Expression ..dherai jaso use hudaina yoo 