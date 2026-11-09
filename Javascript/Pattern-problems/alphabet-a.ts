/*
Program to print alphabet "A" using stars
Given the number of lines n, print the alphabet A pattern using stars.
Examples : 
 

Input : Number of lines : 5
Output :
 * 
* *
***
* *
* *

Input : Number of lines : 10
Output :
 **** 
*    *
*    *
*    *
*    *
******
*    *
*    *
*    *
*    *
*/

function printA(n: number) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < Math.ceil(n / 2); j++) {
      if (j === 0 || j == Math.ceil(n / 2) - 1) {
        result +=
          (i == 0 && j == 0) || (i == 0 && j == Math.ceil(n / 2) - 1)
            ? " "
            : "*";
      } else {
        result += i == 0 || i === Math.ceil(n / 2) - 1 ? "*" : " ";
      }
    }
    console.log(result);
  }
}

printA(10);

// Time complexity: O(n^2)
// space complexity: O(1)
