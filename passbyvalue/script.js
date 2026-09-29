// hami javascript use garda then auta value lai auta variable bata arko variable ma pass garaunxam teslai hamle pass by value bhanxam 
//  it can be done in two ways 
//    by value 
//    by reference 

// pass by value:- passsing a value inside one variable to another variable is only called as pass by value.
  
 let a = 100; // here is variable a and the value stored in a is 100.
 let b;
 
 b = a; // assigning always works form right to left:b<---a
//  jun value a ma xa teslai mah b maa halna chanxu teslai nai hamle pass by value bhanxam 
console.log(a);
console.log(b);

// in pass by value hami sanga duita variables hunxa with the same value but auta change garda arko lai kaile affect hiudaina  

b = 200; // here i change the value of b so it doesnt means that value of a also changes. 
console.log(a);
console.log(b);

// real life example :
//   assume hami sanga auta documents xa ani hamle tesko photo copy garayem ani tesko copy hami sanga ayo ani aba mah sanga duita document xa auta orignal raw auta photocopy...aba hami hamro photo copy ma jati sukai change garxam hamro orignal document thori change hunxa raw? yeah that is the thing  



