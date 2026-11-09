// Polyfill for filter
// input:
// [1,2,3,4,5,6,7].filter(n=> n>4)
// output: [5,6,7]

Array.prototype.myFilter = function (callbackFn) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i]) && res.push(this[i]);
  }
  return res;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "myFilter result:",
  arr.myFilter((n) => n > 4),
);
