/*
 Program to Print Inverted Right Half Pyramid Pattern (Star Pattern)
 Given an integer N, print N rows of an inverted right half pyramid pattern. In an inverted right half pattern of N rows, the first row has N number of stars, the second row has (N - 1) number of stars, and so on till the Nth row, which has only 1 star.


Examples:

Input: n = 5
Output:
*****
****
***
**
*

Input: n = 3
Output:
***
**
*
 */

function invertedRightHalfPyramidPattern(n: number) {
  let count = n;
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = count; j > 0; j--) {
      result += "*";
    }
    console.log(result);
    count--;
    result = "";
  }
}

invertedRightHalfPyramidPattern(5);

// Time complexity: O(n^2)
// space complexity: O(1)
