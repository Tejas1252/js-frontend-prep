// "this" keyword in different scopes

// 1. Global scope:
/*
In global space "this" object will always point to the globalObject. 
Note: since Javascript can run on any enviromnents like watch, mobile, nodejs,etc so it depents on the env in which it's been used.
For browser Window is the globalObject.

If it's ES module then value of this in global scope is always undefined in both modes(strict and non-strict)
and value of non ES module is always pointing to the window object in both modes(strict and non-strict)
*/

// // Strict:
// "use strict";
// console.log(this); // undefined

// // Non strict:
// console.log(this); // Window

// 2. Function scope:
/*
In case of "this" keyword in funcitions
Window object is only for non ES module and non strict mode, for rest it will be undefined
*/

// non ES module:
// a. non-strict
function foo() {
  console.log(this);
}

foo(); // output: Window

// b. strict
("use strict");
function foo2() {
  console.log(this);
}

foo2(); // output: Undefined

// ES module:
// a. non-strict
function foo3() {
  console.log(this);
}

foo3(); // output: Undefined

// b. strict

("use strict");
function foo4() {
  console.log(this);
}

foo4(); // output: Undefined
