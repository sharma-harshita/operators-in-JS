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


// Ternary operator   
{/* <condition>  ? <success/true output>  : <failure/false output> */}

// var isRahulPresent = false;

// var condition  =  10==12 ? "He is present" : "He is absent";

// console.log(condition);


// Bitwise Operators
// Bitwise And - a&b
// Bitwise OR - a|b
// Bitwise XOR - a^b
// Bitwise NOT - ~a
// Left Shift - a << b
// Sign Propagating Right Shift - a >> b
// Zero fill Right shift - a >>> b


//  Logic Gates
// AND 

// a b  c(AND)
// 0 0      0
// 0 1      0  
// 1 0      0
// 1 1      1


// OR
// a b  c(OR)
// 0 0      0
// 0 1      1
// 1 0      1
// 1 1      1


// XOR 
// a b  c(XOR)
// 0 0      0
// 0 1      1
// 1 0      1
// 1 1      0


// NOT  

// a    c(NOT)
// 0    1
// 1    0

// 2 =  0000 0000 0000 0 0 1 0
// (8bit converison)
// 8 = 2 raised to the power of 3
// 4 = 2 raised to the power of 2
// 2 = 2 raised to the power of 1
// 1 = 2 raised to the power of 0

// Binary coversions of the numbers :
// 5 = 0 1 0 1
// 7 = 0 1 1 1
// 3 = 0 0 1 1

var a = 3;      // 0000 0000 0000 0000 0011
var b = 2;      // 0010

var c = a & b;  // 0010

var d = a | b;  // 0011

var e = a ^ b;  // 0001

var f = ~a  //1100

console.log("Bitwise & ", c);
console.log("Bitwise | ", d);
console.log("Bitwise ^ XOR ", e);
console.log("Bitwise ~ NOT ", f);   // we predict the output should be 12 but it comes as -4 , reason behind is that JS works on 64 bit manipulation, so we can never predict the correct output.

