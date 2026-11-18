// Remove duplicate numbers from sorted array [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18]
// Input: [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18] output: [2,  4, 6, 8, 10, 18]
const arr = [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18];

function removeDuplicates(arr: Array<number>): Array<number> {
  const res: Array<number> = [];
  for (let i of arr) {
    if (!res.includes(i)) {
      res.push(i);
    }
  }
  return res;
}
console.log(removeDuplicates(arr));

export {};

// Time complexity: O(n^2)
// Space complexity: O(n)

// Alternate approach using two pointers and spoace complexity of O(1):
function removeDuplicates2(arr: number[]): number[] {
  if (arr.length === 0) return [];

  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }

  return arr.slice(0, j + 1);
}

// Time complexity: O(n)
// Space complexity: O(1)
