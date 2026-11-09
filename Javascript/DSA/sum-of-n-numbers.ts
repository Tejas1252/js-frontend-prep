//  sum of N numbers
// Given any number of items, return sum of those
// Input: [1,2,3,4] output: 10
// Input: [7, 11,22,30,40] output: 110

function sum(...args: Array<Number>): Number {
  let res = 0;
  for (let item of args) {
    res += item;
  }

  return res;
}
console.log(sum(7, 11, 22, 30, 40));

export {};

// Time complecity: O(n)
// Space complecity: O(1)

// Alternate solution
function sum2(...args: number[]): number {
  return args.reduce((total, item) => total + item, 0);
}

// Time complecity: O(n)
// Space complecity: O(1) excluding the inout storage
