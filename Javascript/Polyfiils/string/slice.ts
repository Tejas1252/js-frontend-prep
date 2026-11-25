// Polyfill for string slice
// input:
// "tejas23".slice(2,4)
// output:  ja
// Polyfill for string slice

String.prototype.mySlice = function (start, end) {
  const str = String(this);
  const len = str.length;

  // Convert start and end to numbers
  start = Number(start) || 0;
  end = end === undefined ? len : Number(end);

  // Handle negative start
  start =
    start < 0
      ? Math.max(len + Math.trunc(start), 0)
      : Math.min(Math.trunc(start), len);

  // Handle negative end
  end =
    end < 0
      ? Math.max(len + Math.trunc(end), 0)
      : Math.min(Math.trunc(end), len);

  let res = "";

  for (let i = start; i < end; i++) {
    res += str[i];
  }

  return res;
};

const str = "tejas23";

console.log(str.mySlice(2, 4)); // "ja"
console.log(str.mySlice(2)); // "jas23"
console.log(str.mySlice(-3)); // "s23"
console.log(str.mySlice(1, -1)); // "ejas2"
console.log(str.mySlice(-3, -1)); // "s2"
console.log(str.mySlice(4, 2)); // ""

// Time Complexity: O(k)
// Space Complexity: O(k) k= number of characters in the resulting substring
