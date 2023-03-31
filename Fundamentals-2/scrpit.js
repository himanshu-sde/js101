"use strict";

// Data Types - 8 in JS
// BigInt - values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

//For example, these two numbers (right above the safe range) are the same:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);

// Strings
let fullName = "Carl Sagan";
// use ${var_name} to encapsulte as string
console.log("His name was ${fullName}"); // here does not work
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
console.log(`His name was ${fullName}`); // here it works
console.log(`result is ${1 + 2}`); // $ can also evaluate expression

// Boolean - has only two values: true and false
console.log(4 > 1); // true

// null - he special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value:
let age = null;
console.log(typeof age); // typeof of null is object

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

// undefined - The meaning of undefined is “value is not assigned”.

//If a variable is declared, but not assigned, then its value is undefined:
let city;
console.log(city); // undefined
console.log(typeof city); // undefined

// BEST PRACTICE :  Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

// =================================================================================//
// Objects are special types.

//All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

//The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

console.log(typeof 123.91); // number 1
console.log(typeof NaN); // number 2
console.log(typeof 4n); // BigInt 2
console.log(typeof "abc"); // String 3
console.log(false); // boolean 4
console.log(typeof undefined); // undefined 5
console.log(typeof null); // is also an object 6
console.log(typeof Math); // is also a built-in object library 6
console.log(Symbol("id")); // symbol 7
console.log(alert); // function 8

// STRINGS (in detail)
// String methods : <str.fn_name(args)>
console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".length); // 26, lenghth is not a function/method. It is a property/attribute. Thats why we dont use parathesis.

console.log("Apple, Banana, Kiwi".slice(7, 10)); // "Ban" slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).

console.log("Apple, Banana, Kiwi".slice(7)); // give one arg => slices from 7 till the end //  "Banana, Kiwi"

console.log("abcdefghi".substring(-3, 4)); // substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// replace() method replaces a specified value with another value in a string:
console.log("Please visit Microsoft!".replace("Microsoft", "Google"));

// The replace() method does not change the string it is called on.
//The replace() method returns a new string.
// The replace() method replaces only the first match

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log("abca".replace(/A/i, "X")); // "Xbca"

// To replace all matches, use a regular expression with a /g flag (global match):
console.log("abca".replace(/A/gi, "X")); // "XbcX"

console.log("abx".toUpperCase()); // ABX // similar is str.toLowerCase()

// The trim() method removes whitespace from both sides of a string:
console.log("      Hello World!      ".trim()); // Hello World!
// we also have trimStart() and trimEnd()

// Convering a string to array
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray); // (6) ['a', 'b', 'c', 'd', 'e', 'f']

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
console.log("hello".charAt(1)); // "e"
// charCodeAt(position)
console.log("hello".charCodeAt(1)); // 101 i.e ascii value of "e"
// Property access [ ]
console.log("hello"[1]); // "e"

//Compare Strings: they are compared on ascii values
console.log("A" < "B"); // true
console.log("a" < "B"); // false

// =========================== CONDITIONALS ======================================//
console.log(
  "=============================CONDITIONALS======================================"
);
// Conditional operators ==>  a < b, a > b, a <= b, a >= b, equality test(a == b), not equal(a! = b) , strictly equal (a===b)

console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" > 1); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
console.log(Number(true), ",", Number(false));
console.log(true == 1); // true
console.log(false == 0); // true

// Strict equality

console.log(Number("")); // 0
console.log("" == false); // true

// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// A strict equality operator === checks the equality without type conversion.
// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

console.log(0 === false); // false.
// There is also a “strict non-equality” operator !== analogous to !=.

// Comparisons with null and undefined
console.log(null === undefined); // false as null is object type and undefined is itself a type
console.log(null == undefined); // true
// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// since string obeys dictionary comparisons
console.log("2" > "12"); // true, first char "2" is greater than the first char "1".

//  ------------------ Conditional Statements---------------------//
// if,else, else if, switch - 4 keywords
let time = 10;
if (time > 12) {
  console.log("good evening");
} else {
  console.log("good morning");
}

// ========== Logical operators ======== //
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// OR algorithm :
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is a truthy value, stops and returns the original value of that operand.

// null and undefined are falsy values.

// 2 use-cases of OR
// For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

// Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
// If all variables were falsy, "Anonymous" would show up.

// 2nd use case - Short-circuit evaluation.
false || console.log("not printed");

// AND ALGORITHM:
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.

console.log(1 && 2 && null && 3); // null

console.log(1 && 2 && 3); // 3, when all values are truthy it returns the last one

// A problem: Use of ("" \\ null) to check for escape key or cancelled click in the prompt

let userName = prompt("Who's there?");
if (userName === "Admin") {
  let password = prompt("Enter the password");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I dont know you!!");
}

// Ternary Operator - sometimes we need to assign a variable depending on a condition.
let accessAllowed;
let yourAge = 20;

if (yourAge > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

// Syntax : let result = condition ? value1 : value2; The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
let accessAllowed1 = age > 18 ? true : false;

// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
let accessAllowed2 = age > 18;

// Multiple ternary operator:
age = 17;
let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
console.log(message);

// Switch Case:
const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("It's Sunday, time to relax!");
    break;
  case 1:
    console.log("Happy Monday!");
    break;
  case 2:
    console.log("It's Tuesday. You got this!");
    break;
  case 3:
    console.log("Hump day already!");
    break;
  case 4:
    console.log("Just one more day 'til the weekend!");
    break;
  case 5:
    console.log("Happy Friday!");
    break;
  case 6:
    console.log("Have a wonderful Saturday!");
    break;
  default:
    console.log("Something went horribly wrong...");
}

let number = Number(prompt("enter a number"));

function numberChecker() {
  return number >= 10;
}

console.log(numberChecker());
