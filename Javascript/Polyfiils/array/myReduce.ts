// Polyfill for reduce
// input:
// [1,2,3,4].reduce((acc,n)=> acc+n,0)
// output: 10
// ["t","e","j","a","s"].reduce((acc,n)=> acc+n)
// output: 'tejas'

Array.prototype.myReduce = function (callbackFn, initialValue) {
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

  let accumulator;
  let startIndex = 0;

  // Check whether initialValue was provided
  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // Find the first existing element
    while (startIndex < len && !(startIndex in arr)) {
      startIndex++;
    }

    // No initial value and no elements
    if (startIndex >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = arr[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < len; i++) {
    if (i in arr) {
      accumulator = callbackFn(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};

const arr = new Array(1, 2, 3, 4);

console.log(
  "myReduce result:",
  arr.myReduce((acc, n) => acc + n),
);
