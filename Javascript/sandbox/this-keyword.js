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
console.log(this); // undefined

// // Non strict:
console.log(this); // Window

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
// ("use strict");
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

// ("use strict");
function foo4() {
  console.log(this);
}

foo4(); // output: Undefined

// 3. this keyword value also depends on how its called:

function foo5() {
  console.log(this);
}

foo5(); // undefined in ES module

window.foo5(); // in non ES module will log window object and for ES module it will throw an error

// 4. this keyword inside an object's method:
/**
 * In non ES module "this" refers to the globalObject which is window and in ES module "this" is undefined
 * "this" retains the value of the enclosing lexical context's
 */

const obj = {
  name: "tejas",
  getName: function () {
    console.log("Name:", this.name);
  },
  getName2: () => {
    console.log("Name:", this.name);
  },
};

obj.getName(); // Name: tejas
obj.getName2(); // Cannot read properties of undefined (reading 'name') because "this" inside a arrow function is undefined

// 5. this keyword inside a nested function
/**
 * strict mode doesn't matter for this case
 */

const obj2 = {
  name: "tejas",
  getName: function () {
    const getName2 = () => {
      console.log("Name:", this.name);
    };
    getName2();
  },
};

obj2.getName(); // tejas (this inside a nested function will refer to the this of enclosing function)

// 6. this keyword inside a DOM element refers to the HTMLelement it's being used
