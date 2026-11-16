// Check if give array is sorted or not
// input: arr=[4, 5, 6, 7]  output:  sorted
// input: arr=[4, 50, 16, 77]  output:  not sorted

const arr = [4, 5, 6, 7];
// const arr = [4, 50, 16, 77];

function checkIfSorted(arr: Array<number>): String {
  let sorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      sorted = false;
    }
  }
  return sorted ? "sorted" : "not sorted";
}
console.log(checkIfSorted(arr));

export {};

// Time complecity: O(n)
// Space complecity: O(1)
