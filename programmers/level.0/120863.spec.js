// 문제: 직사각형 넓이 구하기 ❌
const assert = require("assert");

function solution(polynomial) {
  var x = polynomial
    .split(" ")
    .filter((x) => x.includes("x"))
    .map((x) => +x.replace("x", "") || 1)
    .reduce((prev, curr) => prev + curr, 0);

  const con = polynomial
    .split(" ")
    .map(Number)
    .filter((x) => !isNaN(x))
    .reduce((prev, curr) => prev + curr, 0);
  
  const result = [];
  if (x !== 0) result.push(x === 1 ? 'x' : `${x}x`);
  if (con !== 0) result.push(con);
  return result.join(" + ");
}

// *답변코드 갱신버전 => 중복되는 split를 splited 변수로 선언하여 위쪽으로 빼줌
// function solution(polynomial) {
//   const splited = polynomial.split(" + ");
  
//   var x = splited
//     .filter((x) => x.includes("x"))
//     .map((x) => +x.replace("x", "") || 1)
//     .reduce((prev, curr) => prev + curr, 0);

//   const con = splited
//     .map(Number)
//     .filter((x) => !isNaN(x))
//     .reduce((prev, curr) => prev + curr, 0);
  
//   const result = [];
//   if (x !== 0) result.push(x === 1 ? 'x' : `${x}x`);
//   if (con !== 0) result.push(con);
//   return result.join(" + ");
// }

//* 다른풀이
// function solution(polynomial) {
//   let xCount = 0;
//   let nCount = 0;

//   polynomial.split(" + ").forEach((x) => {
//     if (x.includes("x")) {
//       xCount += +x.replace("x", "") || 1;
//     } else {
//       nCount += +x;
//     }
//   });

//   const result = [];
//   if (xCount > 0) result.push(xCount === 1 ? "x" : `${xCount}x`);
//   if (nCount > 0) result.push(`${nCount}`);
//   return result.join(" + ");
// }

describe("직사각형 넓이 구하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution("3x + 7 + x"), "4x + 7");
  });

  it("case 2", () => {
    assert.deepEqual(solution("x + x + x"), "3x");
  });
});
