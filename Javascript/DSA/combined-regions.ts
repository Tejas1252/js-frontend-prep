// Combine regions group wise. [group by key pattern]
/**
 * const arr = [
  { name: "tejas", age: "26", region: "EMA" },
  { name: "rahul", age: "20", region: "Pune" },
  { name: "amit", age: "21", region: "mumbai" },
  { name: "praful", age: "36", region: "EMA" },
  { name: "sid", age: "36", region: "latur" },
  { name: "matt", age: "27", region: "mumbai" },
];

output: 
{
  EMA: [
    { name: 'tejas', age: '26', region: 'EMA' },
    { name: 'praful', age: '36', region: 'EMA' }
  ],
  Pune: [ { name: 'rahul', age: '20', region: 'Pune' } ],
  mumbai: [
    { name: 'amit', age: '21', region: 'mumbai' },
    { name: 'matt', age: '27', region: 'mumbai' }
  ],
  latur: [ { name: 'sid', age: '36', region: 'latur' } ]
}
 */

const arr = [
  { name: "tejas", age: "26", region: "EMA" },
  { name: "rahul", age: "20", region: "Pune" },
  { name: "amit", age: "21", region: "mumbai" },
  { name: "praful", age: "36", region: "EMA" },
  { name: "sid", age: "36", region: "latur" },
  { name: "matt", age: "27", region: "mumbai" },
];

function combineRegions(arr: Array<any>): object {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].region]) {
      obj[arr[i].region] = [arr[i]];
    } else {
      obj[arr[i].region].push(arr[i]);
    }
  }
  return obj;
}
console.log(combineRegions(arr));

export {};

// Time complecity: O(n)
// Space complecity: O(n)
