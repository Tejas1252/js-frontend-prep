//  merge two sorted arrays in to one sorted arrays

const arr1 = [1, 2, 16, 70, 72];
const arr2 = [5, 6, 20, 44];

function merge(arr1: Array<number>, arr2: Array<number>) {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      console.log("if", arr1[i], "<", arr2[j], ":", arr1[i] < arr2[j]);

      res.push(arr1[i]);
      i++;
    } else {
      console.log("else", arr1[i], ">", arr2[j], ":", arr1[i] > arr2[j]);
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}
console.log(merge(arr1, arr2));

export {};

// Time complecity: O(n+m)
// Space complecity: O(n+m)

// Alternate solution:
function merge2(arr1: number[], arr2: number[]) {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }

  return res.concat(arr1.slice(i), arr2.slice(j));
}

// Time complecity: O(n+m)
// Space complecity: O(n+m)
