// find if the string is palindrome or not
// input: tejas, output:false
// input: malayalam, output: true

const str = "malayalam";

function reverseString(str: String): String {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function isPalindrome(str: String): String {
  const resversedStr = reverseString(str);
  if (str === resversedStr) {
    console.log("String is palindrome");
  } else {
    console.log("String is not a palindrome");
  }
}
console.log(isPalindrome(str));

export {};

// Time complecity: O(n)
// Space complecity: O(n)

// Alternate solution
function isPalindrome2(str: string): boolean {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("malayalam")); // true
console.log(isPalindrome("tejas")); // false

// Time complecity: O(n)
// Space complecity: O(1)
