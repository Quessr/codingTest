// 문제: 소인수분해 ❌
const assert = require("assert");

function solution(n) {
  const mySet = new Set();
  for (let i = 2; n !== 1; i++) {
    if (n % i === 0) {
      mySet.add(i);
      n = n / i;
      i = 1;
    }
  }
  return Array.from(mySet);
}

// * 다른풀이
// function isPrime(target, n) {
//   if (n <= 1) return false;
//   return target % n === 0;
// }

// function solution(n) {
//   const mySet = new Set();
//   for (let i = 2; n !== 1; i++) {
//     if (isPrime(n, i)) {
//       mySet.add(i);
//       n = n / i;
//       i = 1;
//     }
//   }
//   return Array.from(mySet);
// }

describe("소인수분해", () => {
  it("case 1", () => {
    assert.deepEqual(solution(12), [2, 3]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(17), [17]);
  });

  it("case 3", () => {
    assert.deepEqual(solution(420), [2, 3, 5, 7]);
  });
});
