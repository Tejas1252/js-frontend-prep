// Polyfill for find
// input:
// [1,2,3,4,5,6,7].find(n=> n>4)
// output: 5

Array.prototype.myFind = function (callbackFn) {
  let val = undefined;
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return this[i];
    }
  }
  return val;
};

const arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(
  "myFind result:",
  arr.myFind((n) => n > 4),
);
