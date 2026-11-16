// Find largest and second largest element in an array
// input: arr=[4, 5, 6, 7,23,54,34,77,1,26]  output:  largest is 77 and second largest is 54

const arr = [14, 5, 6, 7, 23, 54, 34, 77, 1, 26];

function bubbleSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i; k < arr.length - 1; k++) {
      if (arr[k + 1] < arr[k]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }
  return arr;
}

function checkIfSorted(arr: Array<number>): String {
  // const sortedArray = arr.sort((a, b) => a - b);
  const sortedArray = bubbleSort(arr);

  return `largest is ${sortedArray[arr.length - 1]} and second largest is ${sortedArray[arr.length - 2]}`;
}
console.log(checkIfSorted(arr));

export {};

// Time complecity: O(n^2)
// Space complecity: O(1)
