// call stack : it is present inside the javascript engine and all the code of javscript executed inside a call stack 


// suppose we have a code 

function a() {
    console.log("a");// this is the function definition of a. so a will be the located memory and funtion will stored
}
a(); // this is the function invocation. then the execution context will be created for this function a(). to execute the whole code... soo Now a will be inside the call stack.
console.log("End");

// whenever javascript program is run Global Execution Context is created inside the call stack. now inside the global execution context whole code will run.

// the main job of this callstack is to execute whatever comes inside it.

// what if we have to wait for something but how we do it beacuse call stack doesnot have anytimer.

// Browser-->jsEngine-->callStack-->here program runs
// browser also have a local storage where it store data in it. we can also have a timer inside the browser
// we also have a URL in browser https:// 

// asume we want a best tv series and there we have a netflix server and we have to fetch() best series then the browser make conection to the Netflix server and get the data and also shows us in the screen.

// suppose in a js code runnig in call stack we need acces to timer, page which is being render,URL,local storage,bluetooth etc .....

// lets go to web-APIs: 
  // these are the super power that browser have it.and these are the part of browser not javscript. And browser give the access to the js engine to use this super powers
//      1. setTimeout(): // it gives acces to set time
//      2. DOM APIs // it gives acces to dom tree html
//      3. fetch() // it gives access to make connection with other servers.
//      4. localStorage
//      5. console
//      6. location

// what is global object: Window(it is an keyword)
  // browser gives the javascript engine the facility to access all this web APIs throught the Window.

// lets have one example:-
//   that how webapi works 
    // this whole code will run line by line.

console.log("Start"); // this will accutally use console API. when we write console.log it basically calls the webAPI...which makes us show our start in Console when we inspect....and This API will Pluged Thorugh Window to our code.

setTimeout( function cb() { // setTimeout() will basically goes and calls the WebAPI (Settimeout) and it gives us the access to the timer feature of the browser
    // and it basically registerd a callback and we started the delay of 5000 milisecond so it satrted the timer of 5 sec.
    console.log("Callback");
}, 5000);

console.log("End"); // and this line again calls the Console webAPI 

// and onces the code runs then Global Execution Context just pops off from the Call Stack. 
// but the Timer is still running but after the 5 sec that callback functions needs to be executed soo here Comes Callbacksqueues and EventLoop.
// that callback funtion needs to execute but it cant go directly to the callStack so it goes through the CallBack Queue.
// so when the timer Ends then the callback function puts inside the call back queue. 


// Callback Queue:-

//Event Loop:-the job of the eventloop is to check that callbackQueue and put that functions of callbackqueue into the call Stack. so event loop is acts like a gateKepper which checks whether we have something in our callbackqueue and if we have something in callbackqueue then it puts it in the call stack then the callstack quickly executes that callbacksFunction 



// lets go for the example:
console.log("Start"); // same as before it calls webAPi menthod ans shows in the Console.

document.getElementById("btn")//
 .addEventListener("click", function cb(){
    //when ever we put the .addeventlistner it registerd a call back. on a event called "click"
    //cb() call back will registerd over there and event"click" is attached to it. 
    console.log("callback");
    // when the user clicks to the button this callback method cb() then pushed inside the callbackqueue and sit over there 
    // where Event loop has only job to continiously monitor the callStack and as well as CallBackQueue.
    // so Whenever the Event loop sees that the callstack is empty and there is also a funtion waiting in the callbackqueue then eventloop takes that functiona and pushes inside the callStack and it will quickly executed.
 })

//  .addEventListener is the another superpower given by the browser to the javascript engine through the Window object in the form of WebAPI which is DOM APIs. 
// whenever we say document. it basically calling DOM APIs which is like html sourcecode.
 console.log("End")

//  why we need callbackqueue:- Suppose a user clicks on the button continiously 7 8 times inthat case the callback funtion will be pushed in the callbackqueue 7 8 times. so javascript has only one call stack so eventloop helps to execute one by one 


// letss go for the fetch() WebAPI: Fetch() is a intresting case and it really doesnot works like other APIs. it works little different.
// fetch() basically goes and request the API calls.
 // Example:-

console.log("Start");

setTimeout(function cbT() {  // cbT()  is waiting to expired the time of 5000 milisec...and goes inside the callbackqueue.
  console.log("CB SetTimeout");
},5000)
// this time we have settiout and as well as fetch funtion both.
fetch("https://api.netflix.com")// fetch is again a webAPI which is used to make network calls.it also registerd the call function cbF() in webapi environment.
.then(function cbF(){ // where cbF() funtion is waiting to data return from the netfix server and netfilx server once return the data to the fetch then the callback funtion cbF() now is ready to be executed.
  // netfilx server are supper fast and returns data in 50 milisecond 

  // here comes the MICROTasks Queue.....it is similar to callbackqueue but it has higher priority than callbackqueue... wahat ever function comes in Microtasks queue will be executed 1st and callbackqueue executed later. 

  // the function cbF() which is callback funtion in case of promises will go to the MicroTask queue....and the event loop job is to check whether the callStack is empty or not. and if the call stack is empty it gives the chance to execute the funtion which is present in microtasks queue.

  // suppose we have millions of lines of code and codes are runnig and the cbf and cbt are waitng to execute.. then eventloop checks whether the call stack is empty or not and if the call satck is empty after the executions or millions of code then cbf and cbt will execute.
   console.log("CB Netflix");

   // all the call back functions or mutation observer which comes through promises will goo inside the microtaskqueue 
});

console.log("Ends");





