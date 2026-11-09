/*
Program to Print Inverted Full Pyramid Pattern (Star Pattern)
Given an integer N, the task is to print a pattern of N rows representing an inverted full pyramid. In this pattern, the first row has (2 * N - 1) stars, the second row has (2 * N - 3) stars, and so on until the Nth row, which has only 1 star. All stars are center-aligned.

Examples:

Input: 3
Output: 
*****
  ***
    *



Input: 5
Output: 
*********
  *******
    *****
      ***
        *
*/

function invertedFullPyramid(n: number) {
  let count = 1;
  let result = "";
  let space = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - count; j++) {
      result += "*";
    }
    for (let k = 0; k <= i; k++) {
      space += " ";
    }

    console.log(space + result);
    count += 2;
    result = "";
    space = "";
  }
}

invertedFullPyramid(9);

// Time complexity: O(n^2)
// space complexity: O(1)
