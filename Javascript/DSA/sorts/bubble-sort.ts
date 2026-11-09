const bubbleSortArr = [4, 1, 5, 2, 33, 7, 45, 90, 6, 23];

function bubbleSort(arr: Array<number>) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      const left = arr[j];
      const right = arr[j + 1];
      if (left > right) {
        arr[j + 1] = left;
        arr[j] = right;
      }
    }
  }
  console.log("Result", arr);
}

bubbleSort(bubbleSortArr);

// time complexity: O(n^2)
// space complexity: O(1)
