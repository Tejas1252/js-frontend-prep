// Find Missing number in array [9,6,4,2,3,5,7,0,1]
// Input: [9,6,4,2,3,5,7,0,1] output: 8
const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function findMissingNumber(arr: Array<number>): number {
  const sortedArray = arr.sort((a, b) => a - b);

  let i = 1;
  while (i < sortedArray.length) {
    if (sortedArray[i] != sortedArray[i - 1] + 1) {
      return sortedArray[i] - 1;
    }
    i++;
  }
  return -1;
}
console.log(findMissingNumber(arr));

export {};

// Time complexity: O(n)
// Space complexity: O(1)

// Alternate solution, Without sorting:

function findMissingNumber2(arr: number[]): number {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Time complexity: O(n)
// Space complexity: O(1)
