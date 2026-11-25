// Polyfill for forEach
// input:
// const res=[];
// [1,2,3,4].forEach(n=> res.push(n+1))
// output: [2,3,4,5]

Array.prototype.myForEach = function (callbackFn, thisArg) {
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
      callbackFn.call(thisArg, arr[i], i, arr);
    }
  }

  return undefined;
};

const res = [];
const arr = new Array(1, 2, 3);
// const arr = [1, 2, 3];
// arr.myForEach((n) => {
//   res.push(n + 1);
// });
arr.myForEach((n) => res.push(n + 1));

console.log("myForEach result:", res);

/* Edge cases:

Empty array.

Array with one element.

Null or undefined as the method receiver.

Invalid callback (null, undefined, or non-function).

Sparse arrays (empty slots).

Explicit undefined values.

Array-like objects with a length property.

Example of an array-like object:

const obj = {
0: "A",
1: "B",
length: 2.8
};

Since the length can be a decimal value, we convert it to an unsigned 32-bit integer:

const len = arr.length >>> 0;

The >>> 0 operator truncates decimal values and converts the result into an unsigned 32-bit integer.

Note: This is a simplified conversion. Native forEach uses ToLength semantics, which also handle negative and very large lengths correctly.

*/
