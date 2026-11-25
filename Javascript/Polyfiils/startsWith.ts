// Polyfill for string startsWith
// input:
// "tejas23".startsWith("te");
// output: true
// "tejas23".startsWith("terp");
// output: false

String.prototype.myStartsWith = function (strVal) {
  const str = String(this);
  strVal = String(strVal);

  if (strVal.length > str.length) {
    return false;
  }

  for (let k = 0; k < strVal.length; k++) {
    if (str[k] !== strVal[k]) {
      return false;
    }
  }

  return true;
};

const str = "tejas";
console.log("myStartsWith result:", str.myStartsWith("tej"));

// Time Complexity: O(m) m= length of the searching string
// Space Complexity: O(1)
