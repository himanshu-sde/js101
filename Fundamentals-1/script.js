"use strict";
// FUNDAMENTALS Part-1

// used to log values to dev console
console.log("hello world!");
console.log(3 * 2);

// Variables: keywords- let, const and var
let message = "pick"; // declaring a variable and assigning it
let int; // only declaring
int = 22;
alert(message);
console.log(int + 1);

//declare multiple variables in one line
let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);

// Declaring twice triggers an error
// A variable should be declared only once.
let message1 = "This";

// repeated 'let' leads to an error
// let message1 = "That"; // SyntaxError: 'message' has already been declared
// A repeated declaration of the same variable is an error:

// Pure functional langs like haskell,forbids changing variable values.these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits

// In js we can change variable values.
let fName = "Tom";
console.log(fName);
fName = "Dick";
console.log(fName);

//==================================================================================//

// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

// note: no "use strict" in this example

// num = 5; // the variable "num" is created if it didn't exist

// console.log(num); // 5
// This is a bad practice and would cause an error in strict mode:

// "use strict";

// num = 5; // error: num is not defined

//==============================================================================//

// When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone, instead of let:
const birthDate = "19.10.2003";
// birthDate = '01.01.2001'; // error, can't reassign the constant!

console.log(birthDate);

// var – is an old-school variable declaration. Normally we don’t use it at all,

//=================================NUMBERS=============================================//

// JS operators =>  +,-,*,/,%(mod),**(exponent),  ++,--(incre/decrement)

console.log(5 / 3); // division returns float - 1.6666666666666667
console.log(4 / 2); // integer if it is fully divisible - 2

let inc = 9;
inc++; // incrementing
console.log(inc); // 10
inc--;
inc--; // decrementing twice
console.log(inc); //8

// Note : you can only increment/decrement an exsiting variable eg expressions like 3--; 15++; will throw an error

// JavaScript has only one type of number. Numbers can be written with or without decimals.

let m = 1; // A number with decimals
let n = 2.5; // A number without decimals
let o = 123e4,
  p = 123e-5; // can write extra -large/small nos with exponent
console.log(m, n, o, p);
// JavaScript Numbers are Always 64-bit Floating Point
// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
// 52bits(0-51) - value , 11bits(52-62) - exponent , 1bit(63) - sign

// INTEGER PRECISION -Integers (numbers without a period or exponent notation) are accurate up to 15 digits only.

console.log(999999999999999); // it will be 999999999999999
console.log(9999999999999999); // it will be 10000000000000000

// Floating precision - arithmetic is not always 100% accurate
console.log(0.1 + 0.2); // 0.30000000000000004
//  To solve the problem above, it helps to multiply and divide:
console.log((0.1 * 10 + 0.2 * 10) / 10); // gives 0.3

// WARNING !!  JavaScript uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated.

// num + num = arithmetic behaviour,  str+str= concatenated str, but num+str = concatenated str
console.log(10 + "20"); // gives 1020(retuned type is string)

console.log("The result is: " + 10 + 20); // A common mistake is to expect this:  The result is : 30:  ACTUAL O/P: The result is : 1020(str)

console.log(10 + 20 + "30"); // "A common mistake is to expect this result to be 102030.
// actual o/p : 3030 (str)

//RULE : When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

// JS will try to convert number strings to numerics in all numeric operations except "+" (concat)

console.log("100" / "10"); // 10
console.log("100" * 2); // 200
console.log(100 - "10"); // 90
console.log("100" + "10"); // "10010"

// ======================== NOT A NUMBER (NaN)=============================//
//NaN is a JavaScript reserved word indicating that a number is not a legal number. Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

console.log("apple" * 2); //NaN
// use the global JavaScript function isNaN() to find out if a value is a not a number:
console.log(isNaN("apples" * 2)); // True
console.log(isNaN(100 - "45")); //False

// typeof
console.log(typeof "oranges"); // string
console.log(typeof (100 * "3")); // Number

// "typeof NaN is Number"
console.log(typeof NaN); // Number

// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
console.log(typeof Infinity); // Number

//Division by 0 (zero) also generates Infinity:
console.log(8 / 0); // Infinity

// Hexadecimal- JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

console.log(0xff); // 255
console.log(typeof 0xff); // Number

// Useful Methods

// Number.toFixed(n) - rounds off upto n specified decimal places
console.log((22.45667653).toFixed(2)); // 22.46

// Type-Casting => Converting to Number/string type by
console.log(typeof Number("22")); // Number
console.log(typeof String(55)); // String
