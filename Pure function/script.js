// Puree Function Concept:-

//  pure function behaves like a simple calculator like hami jasto input dinxam testai nai output dinxa ani teslay like afaile kai changes gardaina.
// like it totally depends upon input nothing changes outside

// example:-

function add(a,b) {
    return a + b;
}
add(3,2);

// reallife example :- a vending machine like hami 2dolor halda pani ko bottle dinxa and teyahi same machine ma 5 dolor halda drinks dinxa.  


// lets write impure function:-

// let tax = 5;

// function addtax(price) {
//     return price + tax;
// }
//  console.log(addtax(100));
// let tax = 5;

function addtax(price,tax) {
    return price + tax;
}
 console.log(addtax(100,24));
