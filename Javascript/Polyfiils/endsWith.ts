// Polyfill for string endsWith
// input:
// "tejas".endsWith("as")
// output: true
// "tejas".endsWith("las")
// output: false

String.prototype.myEndsWith = function (strVal) {
  const str = String(this);
  let res = true;
  let i = str.length - 1;
  let j = strVal.length - 1;

  if (strVal.length > str.length) {
    return false;
  }

  for (let k = 0; k < strVal.length; k++) {
    if (str[i] !== strVal[j]) {
      return false;
    }
    j--;
    i--;
  }
  return res;
};

const str = "tejas";
console.log("myEndsWith result:", str.myEndsWith("ajas"));

// Time Complexity: O(n)
// Space Complexity: O(1)
