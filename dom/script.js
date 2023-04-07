"use strict";

// JS - has ability to manipulate DOM(Document Object Model) =>  - a tree of “nodes” with different relationships(parent,child,siblings) depending on how they’re arranged in the HTML document.

// Targeting Nodes with Selectors

// You could use the following selectors to refer to <div class="display"></div>:
/* <div id="container">
      <div class="display"></div>
      <div class="controls"></div>
   </div>; */
// div.display , .display ,#container > .display , div#container > div.display

// You can also use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes.

const container = document.querySelector("div#container");
// selects the #container div (don't worry about the syntax, we'll get there)
console.log(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector(".controls");
// selects the .controls div
console.log(controls.previousElementSibling);
// selects the prior sibling => .display

// Both above selects the same div.display
console.dir(controls.previousElementSibling);
console.dir(container.firstElementChild); // console.dir() displays the actual object node

//
// DOM METHODS: When your HTML code is parsed by a web browser, it is converted to the DOM.
// These object nodes have properties and methods attached to them which helps in manipulating DOM.

// 1. Query Selectors - these help in targeting nodes
