/*
Inverted Left Half Pyramid Star Pattern

Given an integer N, create an inverted left half pyramid pattern with N rows. In this pattern, the first row contains N stars, the second row contains N - 1 stars, and each following row has one star less than the previous row, until the last row contains only 1 star. All stars are right-aligned.

Examples:

Input: N = 3
Output: 
***
  **
    *

Input: N = 5
Output: 
*****
  ****
    ***
      **
        *
*/

function invertedLeftHalfPyramidPattern(n: number) {
  let count = n;
  let result = "";
  let space = "";
  for (let i = 0; i < n; i++) {
    for (let j = count; j > 0; j--) {
      result += "*";
    }

    for (let k = 0; k <= i; k++) {
      space += " ";
    }
    console.log(space + result);
    count--;
    result = "";
    space = "";
  }
}

invertedLeftHalfPyramidPattern(3);

// Time complexity: O(n^2)
// space complexity: O(1)
