// Combine regions group wise. [group by key pattern]
/**
Find an element in an sorted array
input: arr: [2,4,6,8,10,12,14],element: 12 output: found at location: 6
 */

const arr = [2, 4, 6, 8, 10, 12, 14];

function findElementInSortedArray(arr: Array<number>, elem): string {
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

// [2, 4, 6, 8, 10, 12, 14]
// Alternate and best approach is to use binary search. Time complexity: O(logn)

function findElementInSortedArray2(arr, elem, offset = 0) {
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
