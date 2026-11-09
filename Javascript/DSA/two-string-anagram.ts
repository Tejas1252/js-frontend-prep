// two string anagrams
// input: ["listen","silent"], output: anagram
// input: ["hello","world"], output: Not an anagram

const arr = ["listen", "silent"];
// const arr = ["hello", "world"];

function arrToObj(str: String): Object {
  const obj = {};
  for (let i of str) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  return obj;
}

function isAnagram(arr: Array<string>) {
  const [first, second] = arr;
  let res = true;

  const firstConvertedObj = arrToObj(first);
  const secondConvertedObj = arrToObj(second);
  if (first.length !== second.length) {
    console.log("Strings are not an Anagram");
    return;
  }

  for (let item of Object.entries(firstConvertedObj)) {
    if (
      secondConvertedObj[item[0]] &&
      firstConvertedObj[item[0]] === secondConvertedObj[item[0]]
    ) {
      continue;
    } else {
      res = false;
      console.log("Strings are not an Anagram");
      return;
    }
  }

  console.log("Strings are Anagram");
}
console.log(isAnagram(arr));

export {};

// Time complecity: O(n)
// Space complecity: O(n)

// Same solution diffrent syntax:
function isAnagram2(arr: string[]): boolean {
  const [first, second] = arr;

  if (first.length !== second.length) {
    return false;
  }

  const firstObj = arrToObj(first);
  const secondObj = arrToObj(second);

  for (const [char, count] of Object.entries(firstObj)) {
    if (secondObj[char] !== count) {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram2(["listen", "silent"])); // true
// console.log(isAnagram2(["hello", "world"]));  // false

// Time complecity: O(n)
// Space complecity: O(n)
