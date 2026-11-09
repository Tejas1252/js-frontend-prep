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
      firstConvertedObj[item[1]] === secondConvertedObj[item[1]]
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
