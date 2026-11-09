// right rotate an array by K numbers
// inout: [1,2,3,4,5] and 2 output: [4,5,1,2,3]

const arr = [1, 2, 3, 4, 5, 66, 78, 23];
const k = 2;

function rotateByK(arr: Array<Number>, k: number): Array<Number> {
  let resArr = [];
  const itemsToRotate = arr.splice(arr.length - k, arr.length);
  resArr.push(...itemsToRotate, ...arr);
  return resArr;
}
console.log(rotateByK(arr, k));

export {};

// Time complecity: O(n)
// Space complecity: O(n)

// Alternate solution:
function rotateByK2(arr: number[], k: number): number[] {
  const n = arr.length;

  if (n === 0) return arr;

  k = k % n;

  function reverse(start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return arr;
}

// Time complecity: O(n)
// Space complecity: O(1)
