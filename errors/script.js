"use strict";
// An error is a type of "object" built into the JS language.

// Reference error: when one refers/access a variable that is not declared and/or initialized within the current scope.
const a = "Hello";
const b = "World";
// console.log(c); // Uncaught ReferenceError: c is not defined at script.js:7:13
// another message you may run into is ReferenceError: can't access lexical declaration 'X' before initialization

// Syntax Error:
// The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.
// It is thrown in the 1st part of execution context i.e, skimming through the code
function helloWorld() {
  //   console.log "Hello World!" // Uncaught SyntaxError: Invalid or unexpected token
}
// because we forgot to add paranthesis() while calling a function

// Type Error: As Per MDN, a TypeError may be thrown when:
// an operand or argument passed to a function is incompatible with the type expected by that operator or function;
// or when attempting to modify a value that cannot be changed;
// or when attempting to use a value in an inappropriate way.
const str1 = "Hello";
const str2 = "World!";
// const message = str1.push(str2); // Uncaught TypeError: str1.push is not a function
// This is a common error message that confuses learners, because we know that .push() is certainly a function! You’ve probably used it to add items to arrays before, but that’s the key- .push() is not a String method, it’s an Array method. Hence, it is “not a function” that you can find as a String method.
// if we change push to concat, our code runs fine
const message = str1.concat(str2);
console.log(message);
// When faced with a typeError consider the data type you are trying to run a method or operation against.
