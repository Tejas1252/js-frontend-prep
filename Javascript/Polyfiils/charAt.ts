// Polyfill for string charAt
// input:
// "tejas".charAt(2)
// output: j

String.prototype.myCharAt = function (index) {
  const str = String(this);

  index = Number(index);

  if (Number.isNaN(index)) {
    index = 0;
  } else {
    index = Math.trunc(index);
  }

  if (index < 0 || index >= str.length) {
    return "";
  }
  return str[index];
};

const str = "tejas";
console.log("myCharAt result:", str.myCharAt(2));

// Time Complexity: O(1)
// Space Complexity: O(1)
