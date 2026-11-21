// Combine regions group wise
/**
 * const arr = [
  { name: "tejas", age: "26", region: "EMA" },
  { name: "rahul", age: "20", region: "Pune" },
  { name: "amit", age: "21", region: "mumbai" },
  { name: "praful", age: "36", region: "EMA" },
  { name: "sid", age: "36", region: "latur" },
  { name: "matt", age: "27", region: "mumbai" },
];

output: Obj={
regions:
{
  EMA: [
    { name: "tejas", age: "26", region: "EMA" },
     { name: "praful", age: "36", region: "EMA" }
  ],
mumbai: [
{ name: "amit", age: "21", region: "mumbai" },
  { name: "matt", age: "27", region: "mumbai" }
],
pune: [
  { name: "rahul", age: "20", region: "Pune" }
  }
],
latur:[
{ name: "sid", age: "36", region: "latur" }
 ]
}
 */

const arr = [
  { name: "tejas", age: "26", region: "EMA" },
  { name: "rahul", age: "20", region: "Pune" },
  { name: "amit", age: "21", region: "mumbai" },
  { name: "praful", age: "36", region: "EMA" },
  { name: "sid", age: "36", region: "latue" },
  { name: "matt", age: "27", region: "mumbai" },
];

function combineRegions(str: Array<obj>): object {
  const obj = {};
  let res = "";
  let i = 0;
  let j = 0;
  while (j <= str.length) {
    if (str[i] == str[j]) {
      j++;
    } else {
      res += str[i] + (j - i);
      i = j;
      j++;
    }
  }

  console.log("Compressed String:", res);

  return obj;
}
console.log(combineRegions(arr));

export {};

// Time complecity: O(n)
// Space complecity: O(1)
