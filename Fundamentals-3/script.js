"use strict";

// Functions — reusable blocks of code
// JavaScript structure that features a pair of parentheses — () is a function.

const no = Math.random(); // Returns a pseudorandom number between 0 and 1.
console.log(no);

function pow(a, x) {
  // This form of creating a function is also known as function declaration. It is always hoisted, so you can call function above function definition and it will work fine.
  return a ** x;
}
console.log(pow(4, 3)); // 64

// functions vs methods - Functions that are part of objects are called methods whereas functions defined in your code are called functions.

// Function arguments are the actual values we decide to pass to the function while parameters are the items listed between the parentheses in the function declaration.
// Parameters - 3types- optional, default and necessary.
// eg of defaul parameter
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

// 4 tpes of funcs - function declaration, anonymous function, function expression and arrow functions.

// Anonymous funs hav no name and they are generally expected as arguments for another function.
(function () {
  console.log("anonymous func");
})(); // note: to run it we have put a paranthesis sign after we are done writing it.

// anonymous func as argument
// textBox.addEventListener("keydown", function (event) {
//    console.log(`You pressed "${event.key}".`);
// });

// Arrow functions - If you pass an anonymous function above, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:
// textBox.addEventListener("keydown", (event) => {
//    console.log(`You pressed "${event.key}".`);
// });

// If the function only has one line in the curly brackets, you omit the curly brackets:
// textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

// you can omit return statement if func uses one line
const originals = [1, 2, 3];
const doubled = originals.map((item) => item * 2); //The map() method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.
console.log(doubled); // [2, 4, 6]

// Scope - since execution of function creates its own execution context, therefore all the variables and other things defined in the func have different scope.

let userName = "John";

function showText() {
  userName = "Bob"; // (1) changed the outer variable, but if we'd used let userName = "Bob", it would've print "John" in the last statement because a new local var(userName) is created with value("Bob") and execution context of func is destroyed after invoke.

  let message = "Hello, " + userName;
  console.log(message);
}
console.log(userName); // John before the function call
showText();
console.log(userName); // Bob, the value was modified by the function

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

// a function always gets a copy of the value when given as arg.
function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer
  console.log(from + ": " + text);
}
let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
showMessage("Kobe"); //*Kobe*: undefined
// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =
function showMessage1(from, text = "no text given") {
  console.log(from + ": " + text);
}
showMessage1("Ann"); // Ann: no text given

// A function with an empty return or without it returns undefined.
function doNothing() {
  return;
}
console.log(doNothing() === undefined); // true

// One function – one action
// A function should do exactly what is suggested by its name, no more.
// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

// Function expressions
let sayHi = function () {
  console.log("Hello from func expression");
}; // Function Expression is created here as function(…) {…} inside the assignment statement, hence the semicolon

sayHi(); // to invoke func expression use paranthesis

// Another special feature of Function Declarations is their block scope.
// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.
// If we use Function Declaration, it won’t work as intended.

// whereas function expression has scope depending on it defined by what var,let.

// var vs let
// 1. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
// 2. While variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared, let variables are not initialized until their definition is evaluated. Accessing them before the initialization results in a ReferenceError. The variable is said to be in "temporal dead zone" from the start of the block until the initialization is processed.
// 3. At the top level, let, unlike var, does not create a property on the global object.
// 4. In strict mode, var will let you re-declare the same variable in the same scope while let raises a SyntaxError.

// const -It is like (let)- it's block-scoped and has TDZ. There are, however, two things which are different.
// 1. Variable declared using const can't be re-assigned.
// 2. Initializer is required i.e, You always must specify a value when declaring a variable using const.
// const age; // SyntaxError: Missing initializer in const declaration.
