// =====================================
// 1. GLOBAL / SCRIPT SCOPE
// =====================================

var globalVar = 10;
let globalLet = 20;
const globalConst = 30;

// =====================================
// 2. OUTER FUNCTION
// =====================================

function outer(outerParam) {
  var outerVar = 40;
  let outerLet = 50;
  const outerConst = 60;

  // =====================================
  // 3. INNER FUNCTION
  // =====================================

  function inner(innerParam) {
    var innerVar = 70;
    let innerLet = 80;
    const innerConst = 90;

    inner(200);
  }
}

// =====================================
// 4. EXECUTION STARTS HERE
// =====================================

console.log("Heello");
