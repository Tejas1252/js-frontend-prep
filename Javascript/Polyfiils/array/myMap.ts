// Polyfill for map
// [1,2,3,4].map(n=>n*2) output: [2,4,6,8]

Array.prototype.myMap = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const len = arr.length >>> 0;

  const resArr = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      resArr[i] = callbackFn.call(thisArg, arr[i], i, arr);
    }
  }

  return resArr;
};

console.log([1, 2, 3, 4].myMap((n) => n * 2));
