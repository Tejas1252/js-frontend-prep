const quickSortArray = [1, 45, 33, 6, 80, 26, 5];

function quickSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];

  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  // merge both halves along with pivot
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(quickSortArray));

// Time complexity: O(nlogn) best case
// space complexity: O(1)
