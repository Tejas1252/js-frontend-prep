// Polyfill for forEach
// input:
// const res=[];
// [1,2,3,4].forEach(n=> res.push(n+1))
// output: [2,3,4,5]

Array.prototype.myForEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i]);
  }
  return undefined;
};

const res = [];
const arr = new Array(1, 2, 3, 4);
arr.myForEach((n) => res.push(n + 1));

console.log("myForEach result:", res);
