// convert an array [4,5,6,7] into an object { 4: 10, 5: 11, 6: 12, 7: 13 }

const arr = [4, 5, 6, 7];

function reverse(arr: Array<number>): Array<number> {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverse(arr));

export {};

// Time complecity: O(n)
// Space complecity: O(n)

// Alternate solution:
function reverse2(
  arr: Array<number>,
  start: number,
  end: number,
): Array<number> {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }
  return arr;
}

// Time complecity: O(n)
// Space complecity: O(1)
