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
// console.log(reverseString(str));

export {};
// Time complecity: O(n)
// Space complecity: O(n)

// Alternate solution:
function reverseString2(str: string): string {
  const result: string[] = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join("");
}

// Time complecity: O(n)
// Space complecity: O(n)

/**
 * Reversing a string with the space complexity of O(1)
 */

function reverseString3(str: string): string {
  const arr = str.split("");

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i++;
    j--;
  }

  return arr.join("");
}

console.log(reverseString3("tejas"));

// Time complecity: O(n)
// Space complecity: O(1)
