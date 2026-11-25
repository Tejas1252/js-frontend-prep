// Polyfill for filter
// input:
// [1,2,3,4,5,6,7].filter(n=> n>4)
// output: [5,6,7]

Array.prototype.myFilter = function (callbackFn, thisArg) {
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

  const res = [];

  for (let i = 0; i < len; i++) {
    // Skip empty slots
    if (i in arr) {
      if (callbackFn.call(thisArg, arr[i], i, arr)) {
        res.push(arr[i]);
      }
    }
  }

  return res;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "myFilter result:",
  arr.myFilter((n) => n > 4),
);
