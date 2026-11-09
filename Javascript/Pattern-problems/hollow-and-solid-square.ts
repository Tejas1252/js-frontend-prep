/*
Program to print solid and hollow square patterns

For any given number n, print Hollow and solid Squares and Rhombus made with stars(*). 
Examples: 
 

Input : n = 4
Output : 

Solid Square:
****
****
****
****

Hollow Square:
****
*  *
*  *
****

*/

function solidAndHollowSquare(n: number) {
  let result = "";
  console.log("\nSolid square:");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += "*";
    }
    console.log(result);
    result = "";
  }

  console.log("\nHollow square:");
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
      for (let j = 0; j < n; j++) {
        result += "*";
      }
      console.log(result);
      result = "";
    } else {
      for (let j = 0; j < n; j++) {
        result += j === 0 || j === n - 1 ? "*" : " ";
      }
      console.log(result);
      result = "";
    }
  }
}

solidAndHollowSquare(9);

// Time complexity: O(n^2)
// space complexity: O(1)
