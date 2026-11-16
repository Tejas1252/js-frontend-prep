// Compress a string
// Input: "aaabbcccaaa" Output: "a3b2c3a3"

const str = "aaabbcccaaa";

function CompressString(str: String) {
  let res = "";
  let i = 0;
  let j = 0;
  while (j <= str.length) {
    if (str[i] == str[j]) {
      j++;
    } else {
      res += str[i] + (j - i);
      i = j;
      j++;
    }
  }

  console.log("Compressed String:", res);
}
console.log(CompressString(str));

export {};

// Time complecity: O(n)
// Space complecity: O(1)
