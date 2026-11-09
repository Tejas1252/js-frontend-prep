const selectionSortArray = [4, 1, 5, 2, 33, 7, 45, 90, 8, 34];

function selectionSort(arr: Array<number>) {
  let smallestIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = smallestIndex; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        const left = arr[j];
        const right = arr[smallestIndex];
        arr[smallestIndex] = left;
        arr[j] = right;
      }
    }
    smallestIndex++;
  }
  console.log("Result", arr);
}

selectionSort(selectionSortArray);

// time complexity: O(n^2)
// space complexity: O(1)
