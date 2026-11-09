/*
Program to Print Left Half Pyramid Pattern (Star Pattern)

Given an integer N, the task is to print N rows of left half pyramid pattern. In left half pattern of N rows, the first row has 1 star, second row has 2 stars and so on till the Nth row which has N stars. All the stars are right aligned.


Input: 3
Output: 
    *
  **
***

Input: 5
Output: 
        *
      **
    ***
  ****
*****
*/

function leftHalfPyramidPattern(n: number) {
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
    count++;
    result = "";
    space = "";
  }
}

leftHalfPyramidPattern(7);

// Time complexity: O(n^2)
// space complexity: O(1)
