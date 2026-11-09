const radixSortArray = [1, 45, 33, 6, 803, 26, 5];

function radixSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of arr) {
      const digit = Math.floor(num / exp) % 10;
      buckets[digit].push(num);
    }

    arr = buckets.flat();
  }

  return arr;
}
console.log(radixSort(radixSortArray));

// Time complexity: O(n*m)   n: lenght of the longest digit * m: size of an array
// space complexity: O(n)

/**
Notes:

const num = 802;

console.log(num % 10);           // 2 → ones digit
console.log(Math.floor(num / 10) % 10);   // 0 → tens digit
console.log(Math.floor(num / 100) % 10);  // 8 → hundreds digit

% 10 → extracts the last digit.
Math.floor(num / 10) → removes the last digit from a positive integer.
 */
