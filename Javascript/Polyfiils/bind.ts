// Polyfill bind
/**
 * input:
 * user={
 * this.name= "Tejas",
 * }
 *
 * function getName(city,country){
 * console.log("Name:",this.name,`from ${city}, ${this.country}`);
 * }
 *
 * const name= getName.bind(user,'india','mumbai')
 * name();
 *
 * Output: Name: Tejas from mumbai, india
 */

Function.prototype.myBind = function (obj, ...args) {
  // Ensure myBind is called on a function
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }

  const originalFn = this;

  return function (...newArgs) {
    return originalFn.apply(obj, [...args, ...newArgs]);
  };
};

const user = {
  name: "Tejas",
};

function getName(country, city) {
  console.log("Name:", this.name, `from ${city}, ${country}`);
}

const name = getName.myBind(user, "india");

name("mumbai");

export {};

// Alternate or more advanced which covers all the edge cases

/**
 * 
Function.prototype.myBind = function (thisArg, ...bindArgs) {
  // 1. Ensure myBind is called on a function
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }

  const originalFn = this;

  // 2. Return a new function
  function boundFn(...callArgs) {
    // 3. Check whether boundFn was called using `new`
    const isConstructorCall = this instanceof boundFn;

    // 4. Determine the correct `this`
    const context = isConstructorCall ? this : thisArg;

    // 5. Combine arguments and invoke original function
    return originalFn.apply(context, [...bindArgs, ...callArgs]);
  }

  // 6. Preserve prototype chain for constructor behavior
  if (originalFn.prototype) {
    boundFn.prototype = Object.create(originalFn.prototype);

    // Restore constructor property
    boundFn.prototype.constructor = boundFn;
  }

  return boundFn;
};
 */
