/*
Program to print half Diamond star pattern
Given an integer N, the task is to print half-diamond-star pattern.



Examples:

Input: N = 3
Output:
*
**
***
**
*

Input: N = 6
Output:
*
**
***
****
*****
******
*****
****
***
**
*

*/

function halfDiamondStarPattern(n: number) {
  let i = 0;
  let result = "";
  let j;
  // upper half
  for (j = 0; j < n; j++) {
    for (let k = 0; k <= j; k++) {
      result += "*";
    }
    console.log(result);
    result = "";
  }
  // lower half
  for (j = 0; j < n - 1; j++) {
    for (let k = n - j - 1; k > 0; k--) {
      result += "*";
    }
    console.log(result);
    result = "";
  }
}

halfDiamondStarPattern(3);

// Time complexity: O(n^2)
// space complexity: O(1)
