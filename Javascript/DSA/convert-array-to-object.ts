// convert an array [4,5,6,7] into an object { 4: 10, 5: 11, 6: 12, 7: 13 }

const arr = [4, 5, 6, 7];

function convert(arr: Array<number>): Object {
  const obj = {};

  for (const item of arr) {
    obj[item] = item + 6;
  }
  return obj;
}

console.log(convert(arr));

// Time complecity: O(n)
// Space complecity: O(n)

// ALlternate with same complexity:

function convert2(arr: number[]): Record<number, number> {
  return arr.reduce(
    (obj, item) => {
      obj[item] = item + 6;
      return obj;
    },
    {} as Record<number, number>,
  );
}

// Time complecity: O(n)
// Space complecity: O(n)
