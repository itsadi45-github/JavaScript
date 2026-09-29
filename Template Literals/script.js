// Template Literal:- TL in javascript is a special way to create strings using backticks (`) instead of single ' ' or doubke " " quotes.
// TL auta special features ho javascript ko jaha hami backticks (`) use garera strings create garxam.
// template literals are ES6 String syntax.
    // ES6 = ECMAScript 6 also known as ECMAScript 2015.

    let name = "aditya sarraf";
        // age = 22;
        // let str = "my name is " +name+ " and my age is "+age+ "." ; // yek line bata arko line ma janey betekoi yo old tarika lay dheria prpblem garxa.
        // let str2 = `my name is ${name} and age is ${age}. and total is ${age*3}`//and yo new ES6 tarika lay gayo bhane hamro work easy hunxa.
        // console.log(str);
        // console.log(str2);

        function greet(strings,value) {
            return strings[0] + value.toUpperCase()
        }//this is called taged template lateral
         console.log(greet`hello ${name}`);
         
        
        