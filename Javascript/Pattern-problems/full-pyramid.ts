/*
Program to Print Full Pyramid Pattern (Star Pattern)
Given an integer N, the task is to print a full pyramid pattern with N rows. In this pattern, each row contains an odd number of stars, ranging from 1 star in the first row to (2 * N - 1) stars in the Nth row. All the stars are center-aligned.

Examples:

Input: 3
Output: 
    *
  ***
*****

Input: 5
Output: 
        *
      ***
    *****
  *******
*********
*/

function fullPyramid(n: number) {
  let count = 1;
  let result = "";
  let space = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < count; j++) {
      result += "*";
    }
    for (let k = n - i; k > 0; k--) {
      space += " ";
    }

    console.log(space + result);
    count += 2;
    result = "";
    space = "";
  }
}

fullPyramid(5);

// Time complexity: O(n^2)
// space complexity: O(1)
