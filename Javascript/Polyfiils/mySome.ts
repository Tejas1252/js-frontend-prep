// Polyfill for some
// input:
// [1,2,3,4,5,6,7].some(n=> n>4)
// output: true
// [1,2,3,4,5,6,7].some(n=> n<0)
// output: false

Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return true;
    }
  }
  return false;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "mySome result:",
  arr.mySome((n) => n < 0),
);
