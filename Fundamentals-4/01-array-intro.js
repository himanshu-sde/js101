"use strict";
// Array literal - hardcoding an array
// It is a common practice to declare arrays with the const keyword.
const arr = [4, "asa", null, undefined]; // [5.5, "asa", null, undefined]
console.log(arr);

// In JS, arrays are mutable - A mutable value is one that can be changed without creating an entirely new value.
arr[0] = 5.5;
console.log(arr); // [5.5, "asa", null, undefined]

// Using the JavaScript Keyword new for creating arrays
const cars = new Array("BMW", "Toyota", "Rolls Royce");

// arr_name[] => used to access as well as assign new value
cars[1] = "Tesla"; // assign
console.log(cars[1]); // "Tesla" => access

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
console.log(typeof cars); // object

// Objects use names to access its "members". In this example, person.firstName returns John:
const person = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person.firstName); // "John"

// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
let myArray = [];
myArray[0] = Date.now(); // object inside an array
const myFunc = () => console.log("Hello");
myArray[1] = myFunc; // function inside an array
myArray[2] = cars; // array inside an array
console.log(myArray); //[1680763526796,[Function: myFunc],[ 'BMW', 'Tesla', 'Rolls Royce' ]

// Array object has one property i.e, length
console.log(cars.length); // 3

// Accessing array element from last
console.log(cars[-1]); // undefined // -ve indexing does not work
console.log(cars[cars.length - 1]); // rolls royce

// looping through arrays - 2 methods => 1st - use for loop and indexing as i
// 2nd - use Array.forEach() methods
// The forEach() method executes a provided function once for each array element.
cars.forEach((element) => console.log(element)); // BMW  Tesla  Rolls Royce
// this method returns undefined

// Adding elements using push method
cars.push("Hyundai");
// Alternatively
cars[cars.length] = "Ferrari";
console.log(cars); //[ 'BMW', 'Tesla', 'Rolls Royce', 'Hyundai', 'Ferrari' ]

// Adding elements with high indexes can create undefined "holes" in an array:
cars[7] = "apple";
console.log(cars); // ['BMW','Tesla','Rolls Royce','Hyundai','Ferrari',<2 empty items>,'apple']
cars.pop();
cars.pop();
cars.pop();
console.log(cars); //[ 'BMW', 'Tesla', 'Rolls Royce', 'Hyundai', 'Ferrari' ]

// Difference Between Arrays and Objects - arrays use numbered indexes while objects use named indexes.

// Recognize an array - The problem is that the JavaScript operator typeof returns "object".
// solution 1- use Array,isArray(var_name)
console.log(Array.isArray(cars)); // True
// Solution 2 - The instanceof operator returns true if an object is created by a given constructor:
console.log(cars instanceof Array); // True
