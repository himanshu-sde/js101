"use strict";
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Convering Arrays to strings
// toString() - returns string representation of an array
let fruitString = fruits.toString();
console.log(fruitString); // Banana,Orange,Apple,Mango
console.log(typeof fruitString); // string
// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
let fruitStringHash = fruits.join("#");
console.log(fruitStringHash); // Banana#Orange#Apple#Mango

//Popping and Pushing
// The push() method returns the new array length while pop() returns the element popped.
let newArraylength = fruits.push("Kiwi");
console.log(fruits, newArraylength); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ] 5
const poppedElement = fruits.pop();
console.log(fruits, poppedElement); // [ 'Banana', 'Orange', 'Apple', 'Mango' ] Kiwi

// Shifting and Unshifting - behaves exactly like push and pop but acts on 0th index of the array
const shiftedElement = fruits.shift();
console.log(shiftedElement, fruits); // Banana [ 'Orange', 'Apple', 'Mango' ]
newArraylength = fruits.unshift("Banana");
console.log(newArraylength, fruits); // 4 [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Using delete leaves undefined holes in the array. Use pop(), shift() instead.
const naturalNos = [1, 2, 3, 4, 5, 6, 7];
delete naturalNos[3];
console.log(naturalNos); // [ 1, 2, 3, <1 empty item>, 5, 6, 7 ]

// Merging (Concatenating) Arrays - concat() method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren); // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
// concat() method can take any number of array arguments and always returns a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9, 0];
const arr = arr1.concat(arr2, arr3);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let newArr = myArr.flat(); // converts 2-d to 1-d array => returns a new array
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
// Using splice() to Remove Elements
let removedEle = fruits.splice(2, 2);
console.log(removedEle, fruits); // [ 'Lemon', 'Kiwi' ]  [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// JavaScript Array slice()
// slice() method slices out a piece of an array into a new array.
// It does not change the array upon which method was called.
// 1st arg -start(inclusive) , 2nd arg- end(exclusive)
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]
const slicedArray = newArr.slice(1, 4);
console.log(newArr, slicedArray); // [ 1, 2, 3, 4, 5, 6 ] [ 2, 3, 4 ]
