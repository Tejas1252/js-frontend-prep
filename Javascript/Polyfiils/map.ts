// Polyfill for map
// [1,2,3,4].map(n=>n*2) output: [2,4,6,8]

Array.prototype.myMap = function (callbackFn) {
  const resArr = [];
  for (let i = 0; i < this.length; i++) {
    resArr.push(callbackFn(this[i]));
  }
  return resArr;
};

const arr = new Array(1, 2, 3, 4);
console.log(
  "Map result:",
  arr.myMap((n) => n * 20),
);
