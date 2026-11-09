/*
Print Right Half Pyramid Star Pattern
Given an integer N, print a right half pyramid star pattern with N rows. The first row has 1 star, the second row has 2 stars, and each next row has one more star than the previous row. The Nth row has N stars, and all stars are left aligned.

Examples:
Input: N = 3
Output: 
*
**
***

Input: N = 5
Output: 
*
**
***
****
*****
*/

function rightHalfPyramidPattern(n: number) {
  let count = 1;
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < count; j++) {
      result += "*";
    }
    console.log(result);
    count++;
    result = "";
  }
}

rightHalfPyramidPattern(5);

// Time complexity: O(n^2)
// space complexity: O(1)
