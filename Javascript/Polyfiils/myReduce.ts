// Polyfill for reduce
// input:
// [1,2,3,4].reduce((acc,n)=> acc+n,0)
// output: 10
// ["t","e","j","a","s"].reduce((acc,n)=> acc+n)
// output: 'tejas'

Array.prototype.myReduce = function (callbackFn, initVal) {
  let accumulator = initVal;

  if (initVal == undefined) {
    accumulator = this[0];
  }
  for (let i = initVal == undefined ? 1 : 0; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i]);
  }
  return accumulator;
};

const arr = new Array(1, 2, 3, 4);

console.log(
  "myReduce result:",
  arr.myReduce((acc, n) => acc + n),
);
