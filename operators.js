// "use strict"
// console.log("Hello world");

//strict mode in JS


// var a = 10;
// var b == 20; 

// console.log("Value of a is ", a);


// Arithmetic Operators

// %,- , +,/, * 

// var a = 9;
// var b = 8;

// console.log("Addition",a+b);
// console.log("Subtraction",a-b, b-a);
// console.log("Multiplication" , a*b);
// console.log("Division" , a/b, b/a);
// console.log("Modulus" , a%b, b%a);


// comparison operators = always returns you boolean values : true or false

// ==, ===, !=, !==, >, <, >=, <=

// var a = "110";
// var b = 10;

// var doubleEqual = a == b;   // it just compares the value of the variables on both the sides.
// var tripleEqual = a === b;   // it compares both the value and type of the variables on both the sides.

// console.log(" == ",doubleEqual);
// console.log(" === ",tripleEqual);


// var notEqual = a != b;  // return true when values are not equal, just checks the values only
// var doubleNotEqual = a !== b;  // return true when values are not equal, checks the values and type

// console.log(" != ", notEqual);
// console.log(" !== ", doubleNotEqual);

// var c = 20; 
// var d = 100;

// console.log(">", c > d);
// console.log("<", c < d);
// console.log(">=", c >= d);
// console.log("<=", c <= d);



// Increment and Decrement Operators ++, --

// var a = 10;
// console.log(a);
// // a = a + 1;   line 61 can be replaced with line 62
// // a++;
// // ++a;
// console.log(a++);   //post increment operator : variable gets printed first, then its value gets incremented
// console.log(a);

// console.log(++a);   //pre increment operator : increments the value first then will print the variable.

// console.log(a--);   // post decrement operator
// console.log(--a);   // pre decrement operator



// Logical Operators
//  &&  ||  !

// var a = 10>5 && 2==2    // returns true if both conditions are true
// var b = 10<5 || 2==="2" // return true , if any of the condition is falling true
// var c = !b      // if true, it will make it false. If false, it will make it true

// console.log("Logical And &&", a);
// console.log("Logical OR ||", b);
// console.log("Logical Not !", c);