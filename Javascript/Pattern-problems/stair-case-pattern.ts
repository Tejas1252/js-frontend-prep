/*
Program for Stair Case Patterns

Programs to print following pattern.
Examples: 

Input : 6
Output :
* *
* *
* * * *
* * * *
* * * * * *
* * * * * *

*/

function stairCasePattern(n: number) {
  let count = 2;
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < count; j++) {
      result += "*";
    }
    console.log(result);
    if (i % 2 != 0) count += 2;
  }
}

stairCasePattern(8);

// Time complexity: O(n^2)
// space complexity: O(1)
