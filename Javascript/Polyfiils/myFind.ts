// Polyfill for find
// input:
// [1,2,3,4,5,6,7].find(n=> n>4)
// output: 5

Array.prototype.myFind = function (callbackFn, thisArg) {
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
    // find() visits every index, including empty slots
    if (callbackFn.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "myFind result:",
  arr.myFind((n) => n > 4),
);
