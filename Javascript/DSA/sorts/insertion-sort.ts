const insertionSortArray = [4, 1, 5, 2, 33, 7, 45, 90, 8, 34];

function insertionSort(arr: Array<number>) {
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    let j = i - 1;

    while (current < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  console.log("Result", arr);
}

insertionSort(insertionSortArray);

// time complexity: O(n^2)
// space complexity: O(1)
