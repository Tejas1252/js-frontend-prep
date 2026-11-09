// Polyfill for flat
// input:
// [1,2,[3,4],6,7].flat()
// output: 10

Array.prototype.myFlat = function () {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    return this;
  }
};

const arr = new Array(1, 2, 3, 4);

console.log("myFlat result:", arr.myFlat());
