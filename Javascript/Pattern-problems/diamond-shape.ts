/*
Print the Diamond Shape

Given a number n, print a diamond-shaped star pattern with 2n rows, where the number of stars first increases and then decreases to form the diamond.

*/

function diamondShape(n: number) {
  // upper half
  let space = "";
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += "* ";
    }
    for (let k = n - i; k > 0; k--) {
      space += " ";
    }
    console.log(space + result);
    space = "";
    result = "";
  }

  // lower half
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      result += " *";
    }
    for (let k = 0; k < i; k++) {
      space += " ";
    }
    console.log(space + result);
    space = "";
    result = "";
  }
}

diamondShape(5);

// Time complexity: O(n^2)
// space complexity: O(1)
