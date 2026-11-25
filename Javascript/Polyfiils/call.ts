// Polyfill for call
/**
 * input:
 * user={
 * this.name= "Tejas",
 * }
 *
 * function getName(name){
 * console.log("Name:",this.name);
 * }
 *
 * getName.call(user)
 *
 * Output: Name: Tejas
 */

Function.prototype.myCall = function (obj: object) {
  if (typeof obj !== "object") {
    throw new TypeError("obj is required");
  }

  if (this == null) return;

  obj.fn = this;
  obj.fn();
  delete obj.fn;
};

const user = {
  name: "Tejas",
};

function getName(this: any) {
  console.log("Name:", this.name);
}

getName.myCall(user);

export {};

/**
 * Improved with edge cases:
 * 
Function.prototype.myCall = function (context, ...args) {
  // 1. Ensure this is a callable function
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }

  // 2. Handle null and undefined
  // In non-strict mode, use the global object.
  // In strict mode, preserve null/undefined.
  const isStrict = (function () {
    return this === undefined;
  })();

  if (context == null) {
    context = isStrict ? context : globalThis;
  } else {
    // 3. Box primitive values (number, string, boolean, etc.)
    context = Object(context);
  }

  // 4. Generate a unique temporary property
  const fnKey = Symbol("fn");

  // 5. Attach the current function to the context
  context[fnKey] = this;

  try {
    // 6. Invoke the function with supplied arguments
    return context[fnKey](...args);
  } finally {
    // 7. Clean up even if the function throws an error
    delete context[fnKey];
  }
};

// Example
const user = {
  name: "Tejas",
};

function getName(greeting) {
  return `${greeting}, ${this.name}`;
}

console.log(getName.myCall(user, "Hello"));
// Hello, Tejas

 */
