// Polyfill for every
// input:
// [1,2,3,4,5,6,7].every(n=> n>=1)
// output: true
// [1,2,3,4,5,6,7].every(n=> n%2==0)
// output: false
// [].every(n=> n%2==0)
// output: true

Array.prototype.myEvery = function (callbackFn) {
  if (!this.length) return true;
  let res = true;
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i])) {
      res = false;
    }
  }
  return res;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "myEvery result:",
  arr.myEvery((n) => n < 100),
);
