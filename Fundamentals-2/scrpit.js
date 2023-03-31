"use strict";

// Data Types - 8 in JS
// BigInt - values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

//For example, these two numbers (right above the safe range) are the same:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt)

// Strings
let fullName="Carl Sagan";
// use ${var_name} to encapsulte as string
console.log("His name was ${fullName}") // here does not work 
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
console.log(`His name was ${fullName}`) // here it works
console.log(`result is ${1+2}`) // $ can also evaluate expression

// Boolean - has only two values: true and false
console.log(4>1)  // true


// null - he special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value:
let age = null;
console.log(typeof age) // typeof of null is object

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.


// undefined - The meaning of undefined is “value is not assigned”.

//If a variable is declared, but not assigned, then its value is undefined:
let city;
console.log(city)  // undefined
console.log(typeof city) // undefined

// BEST PRACTICE :  Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.


// =================================================================================//
// Objects are special types.

//All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

//The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

console.log(typeof 123.91) // number 1
console.log(typeof NaN) // number 2
console.log(typeof 4n) // BigInt 2
console.log(typeof "abc") // String 3
console.log(false)  // boolean 4 
console.log(typeof undefined) // undefined 5
console.log(typeof null)  // is also an object 6
console.log(typeof Math ) // is also a built-in object library 6
console.log(Symbol("id")) // symbol 7
console.log(alert)  // function 8

// STRINGS (in detail)
// String methods : <str.fn_name(args)>
console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".length) // 26, lenghth is not a function/method. It is a property/attribute. Thats why we dont use parathesis.

console.log("Apple, Banana, Kiwi".slice(7,10)) // "Ban" slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).

console.log("Apple, Banana, Kiwi".slice(7)) // give one arg => slices from 7 till the end //  "Banana, Kiwi"

console.log("abcdefghi".substring(-3,4)) // substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// replace() method replaces a specified value with another value in a string:
console.log("Please visit Microsoft!".replace("Microsoft", "Google")) 

// The replace() method does not change the string it is called on.
//The replace() method returns a new string.
// The replace() method replaces only the first match

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log("abca".replace(/A/i,"X")) // "Xbca"

// To replace all matches, use a regular expression with a /g flag (global match):
console.log("abca".replace(/A/ig,"X")) // "XbcX"

console.log("abx".toUpperCase()) // ABX // similar is str.toLowerCase()


// The trim() method removes whitespace from both sides of a string:
console.log("      Hello World!      ".trim()) // Hello World!
// we also have trimStart() and trimEnd()


// Convering a string to array
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray) // (6) ['a', 'b', 'c', 'd', 'e', 'f']


// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
console.log("hello".charAt(1)) // "e"
// charCodeAt(position)
console.log("hello".charCodeAt(1)) // 101 i.e ascii value of "e"
// Property access [ ]
console.log("hello"[1]) // "e"

//Compare Strings: they are compared on ascii values
console.log("A"<"B") // true
console.log("a"<"B") // false
