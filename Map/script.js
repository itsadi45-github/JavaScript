// Map concept:- Creates a new array of the exact same length by running a function on every item in the original array.

// same lenght ko naya array creat garna ma help garxa with the running function on every item in the orignal array

let myNumbers = [1,2,3,4,5,6,7,8,9,10];

let newNums = myNumbers.map((num) => num + 10 )
let newNums2 = myNumbers.map((num) => {return num + 10} )
let newNums3 = myNumbers.map((num) => {return num * 10} )
console.log(newNums);  // it automatically return the value no need for return keyword when we are not using scope
console.log(newNums2);// simmilarly it shows the undefined value if we didnt use the scope. 
console.log(newNums3);

// lets do chaining:

let newNums4 = myNumbers
                .map((num) => num * 10 ) // map ma chai sabai return hunxa hamro mathi depend garxa hami k chanxam.
                .map((num) => num + 1) // yeta chai num ko value change bhaisakxa like yesko mathi jun 1st map lay value dinxa teyo 2nd map ma bhako num ko value hunxa
                .filter((num) => num >= 40 ) // simply true and false wala game xa filter ma ntg else 
        console.log(newNums4);
                


