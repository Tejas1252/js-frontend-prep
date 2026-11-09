/*
Print Hollow Rectangle Pattern
Given two integers n and m, print a hollow rectangle star pattern of the given n rows and m columns. In this pattern, stars (*) are printed on the boundary of the rectangle, while the inner area contains spaces.

*/

function hollowRectangleOrSquare(row: number, column: number) {
  for (let i = 0; i < row; i++) {
    let result = "";
    if (i === 0 || i === row - 1) {
      for (let j = 0; j < column; j++) {
        result += "*";
      }
    } else {
      for (let j = 0; j < column; j++) {
        result += j === 0 || j === column - 1 ? "*" : " ";
      }
    }
    console.log(result);
  }
}

hollowRectangleOrSquare(5, 17);

// Time complexity: O(n^2)
// space complexity: O(1)
