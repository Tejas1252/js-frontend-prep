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
