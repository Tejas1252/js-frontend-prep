// Polyfill for every
// input:
// [1,2,3,4,5,6,7].every(n=> n>=1)
// output: true
// [1,2,3,4,5,6,7].every(n=> n%2==0)
// output: false
// [].every(n=> n%2==0)
// output: true

Array.prototype.myEvery = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const len = arr.length >>> 0;

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      if (!callbackFn.call(thisArg, arr[i], i, arr)) {
        return false;
      }
    }
  }

  return true;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "myEvery result:",
  arr.myEvery((n) => n < 100),
);
