// Polyfill for flat
// input:
// [1,2,[3,4,78,34,[31,44]],6,7].flat()
// output: [1,2,3,4,78,34,[31,44],6,7]

Array.prototype.myFlat = function (depth = 1) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  const arr = Object(this);

  // Normalize depth
  depth = Math.floor(Number(depth));

  if (Number.isNaN(depth) || depth < 0) {
    depth = 0;
  }

  const result = [];

  function simplify(currentArr, currentDepth) {
    const len = currentArr.length >>> 0;

    for (let i = 0; i < len; i++) {
      // Skip empty slots
      if (!(i in currentArr)) continue;

      const element = currentArr[i];

      if (Array.isArray(element) && currentDepth > 0) {
        simplify(element, currentDepth - 1);
      } else {
        result.push(element);
      }
    }
  }

  simplify(arr, depth);

  return result;
};

const arr = [1, 2, [3, 4, 78, 34, [31, 44]], 6, 7];

console.log("myFlat result:", arr.myFlat());

// Time Complexity: O(n)
// Space Complexity: O(n+d) d=> recursion stack
