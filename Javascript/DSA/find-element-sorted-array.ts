// Combine regions group wise. [group by key pattern]
/**
Find an element in an sorted array
input: arr: [2,4,6,8,10,12,14],element: 12 output: found at location: 6
 */

const arr = [2, 4, 6, 8, 10, 12, 14];

function findElementInSortedArray(arr: Array<number>, elem: any): string {
  let str = "Found at location: ";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return (str += i + 1);
  }
  return "Not found";
}
console.log(findElementInSortedArray(arr, 12));

export {};

// Time complecity: O(1) in best case
// Space complecity: O(1)

// Alternate approach:

function findElementInSortedArray2(arr: any, elem: any, offset = 0) {
  if (arr.length === 0) return "Not found";

  const middleIndex = Math.floor(arr.length / 2);
  const middle = arr[middleIndex];

  if (middle === elem) {
    return `Found at location: ${offset + middleIndex}`;
  }

  if (elem > middle) {
    return findElementInSortedArray2(
      arr.slice(middleIndex + 1),
      elem,
      offset + middleIndex + 2,
    );
  }

  return findElementInSortedArray2(arr.slice(0, middleIndex), elem, offset);
}
console.log("Result:", findElementInSortedArray2(arr, 12));

// Alternate and best approach is to use binary search. Time complexity: O(logn)

function findElementInSortedArray3(
  arr: any,
  elem: any,
  left = 0,
  right = arr.length - 1,
) {
  // Base case: element not found
  if (left > right) {
    return "Not found";
  }

  const middleIndex = Math.floor((left + right) / 2);
  const middle = arr[middleIndex];

  // Element found
  if (middle === elem) {
    return `Found at index ${middleIndex + 1}`;
  }

  // Search right half
  if (elem > middle) {
    return findElementInSortedArray3(arr, elem, middleIndex + 1, right);
  }

  // Search left half
  return findElementInSortedArray3(arr, elem, left, middleIndex - 1);
}

console.log("Result:", findElementInSortedArray3(arr, 12));

// Time complecity: O(logn)
// Space complecity: O(logn) = recursive call stack
