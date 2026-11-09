// reverse a string
// input: tejas
// output: sajet

const str = "tejas";

function reverseString(str: String): String {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseString(str));

export {};
// Time complecity: O(n)
// Space complecity: O(n)

// Alternate solution:
function reverseString(str: string): string {
  const result: string[] = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join("");
}

// Time complecity: O(n)
// Space complecity: O(n)
