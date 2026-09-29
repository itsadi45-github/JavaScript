// Reduce Concept:- basically it is an Accumulator 
  //Reduces an array down to a single final value (like a sum, object, or total) by looping through and accumulating results.
const myNums = [1,2,3,4];

//  const myTotal = myNums.reduce((acc,currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval 
//  },0)

const myTotal = myNums.reduce((acc,currval) => acc + currval,0)

 console.log(myTotal);

// Example:-

let shoppingCart = [
    {
        itemName:"js Course",
        price: 2999
    },
    {
        itemName:"python Course",
        price: 999
    },
    {
        itemName:"MobDev Course",
        price: 5999
    },
    {
        itemName:"DatScience Course",
        price: 12999
    },
]

 let priceTopay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

 console.log(priceTopay);


//  another example :-

let ScoresObt = [60,50,90,70,89,95];

 let highestScore = ScoresObt.reduce((max,score) => 
    score > max ? score : max,0)

console.log(highestScore);

 

 