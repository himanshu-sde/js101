"use strict";

// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while
// do {
//   // loop body
// } while (condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 < 3);

//for loop
// begin 	let index = 0; 	Executes only "ONCE" upon entering the loop.
// condition	index < 10;	Checked before every loop iteration. If false, the loop stops.
// body	 console.log(index);	Runs again and again while the condition is truthy.
// step	 index++	Executes "AFTER" the body on each iteration.
for (let index = 15; index < 20; index++) {
  console.log(index);
}

// we can force the exit at any time using the special break directive.
let sum = 0;
while (true) {
  let value = 60;
  if (value) break; // (*)
  sum += value;
}
// continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
for (let x = 0; x < 10; x++) {
  // if true, skip the remaining part of the body
  if (x % 2 == 0) continue;

  console.log(x); // 1, then 3, 5, 7, 9
}

// The for...of loop => looping through a collection
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// use map() to do something to each item in a collection and create a new collection containing the changed items
function toUpper(string) {
  return string.toUpperCase();
}

const cats1 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats1 = cats1.map(toUpper);

console.log(upperCats1); // returns a collection/array/obj
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// use filter() to test each item in a collection, and create a new collection containing only items that match:
function lCat(cat) {
  return cat.startsWith("L");
}

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats2.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
// This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array.

// write map() and filter() with arrowfuncs
const cats3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered3 = cats3.filter((cat) => cat.startsWith("L"));
console.log(filtered3);
// [ "Leopard", "Lion" ]
