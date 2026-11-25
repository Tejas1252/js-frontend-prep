// Polyfill for Concat
// input:
// [1,2,3].concat([4,5,6])
// output: [1,2,3,4,5,6]

Array.prototype.myConcat = function (...args) {
  if (this == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const result = [];
  let n = 0;

  // Include the original array as the first item
  const items = [Object(this), ...args];

  for (const item of items) {
    const spreadable =
      item != null &&
      (item[Symbol.isConcatSpreadable] !== undefined
        ? Boolean(item[Symbol.isConcatSpreadable])
        : Array.isArray(item));

    if (spreadable) {
      const obj = Object(item);
      const len = obj.length >>> 0;

      for (let i = 0; i < len; i++) {
        if (i in obj) {
          result[n] = obj[i];
        }
        n++;
      }
    } else {
      result[n] = item;
      n++;
    }
  }

  return result;
};

const arr = [1, 2, 3];
console.log("myConcat result:", arr.myConcat([4, 5, 6]));

console.log(arr.myConcat([4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(arr.myConcat(4, 5));
// [1, 2, 3, 4, 5]

console.log(arr.myConcat([4, [5, 6]]));
// [1, 2, 3, 4, [5, 6]]

console.log(arr.myConcat([4], [5], 6));
// [1, 2, 3, 4, 5, 6]

console.log([1, , 3].myConcat([4]));
// [1, empty, 3, 4]

// Time Complexity: O(n)
// Space Complexity: O(n)
