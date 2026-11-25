// Polyfill for apply
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
 * getName.apply(user,['india','mumbai'])
 *
 * Output: Name: Tejas from mumbai, india
 */

Function.prototype.myApply = function (obj: any, arr) {
  if (typeof obj !== "object") {
    throw new TypeError("obj is required");
  }

  if (this == null) return;

  obj.fn = this;
  obj.fn(...arr);
  delete obj.fn;
};

const user = {
  name: "Tejas",
};

function getName(country, city) {
  console.log("Name:", this.name, `from ${city}, ${country}`);
}

getName.myApply(user, ["india", "mumbai"]);

export {};

// Alternate and more edge case handled implementation

/**
 * // Polyfill for apply

Function.prototype.myApply = function (thisArg, argsArray) {
  // 1. Ensure the function calling myApply is callable
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }

  // 2. Handle null and undefined (non-strict function behavior)
  const context =
    thisArg == null ? globalThis : Object(thisArg);

  // 3. Create a unique property to avoid overwriting existing properties
  const fnKey = Symbol("fn");

  // 4. Attach the function temporarily to the context
  context[fnKey] = this;

  // 5. Convert array-like arguments into an actual array
  const args =
    argsArray == null
      ? []
      : Array.from(
          { length: argsArray.length >>> 0 },
          (_, i) => argsArray[i]
        );

  // 6. Invoke the function with context as this
  const result = context[fnKey](...args);

  // 7. Remove the temporary property
  delete context[fnKey];

  // 8. Return the function's result
  return result;
};
 */
