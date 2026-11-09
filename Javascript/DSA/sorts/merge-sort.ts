const mergeSortArray = [1, 45, 33, 6, 80, 26, 5];

function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  // divide array into 2 parts
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  // sort both halves
  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  // merge both halves
  return merge(leftSortedArray, rightSortedArray);
}

function merge(
  leftArray: Array<number>,
  rightArray: Array<number>,
): Array<number> {
  const res: Array<number> = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      res.push(leftArray[i]);
      i++;
    } else {
      res.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    res.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    res.push(rightArray[j]);
    j++;
  }

  return res;
}

console.log(mergeSort(mergeSortArray));

// Time complexity: O(nlogn)
// space complexity: O(1)
