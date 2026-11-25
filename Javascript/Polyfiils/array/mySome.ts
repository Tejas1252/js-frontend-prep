// Polyfill for some
// input:
// [1,2,3,4,5,6,7].some(n=> n>4)
// output: true
// [1,2,3,4,5,6,7].some(n=> n<0)
// output: false

Array.prototype.mySome = function (callbackFn, thisArg) {
  // Handle null or undefined
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  // Validate callback
  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const len = arr.length >>> 0;

  for (let i = 0; i < len; i++) {
    // Skip empty slots
    if (i in arr) {
      if (callbackFn.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }
  }

  return false;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "mySome result:",
  arr.mySome((n) => n < 0),
);
