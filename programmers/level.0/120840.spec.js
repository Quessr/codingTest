// 문제: 구슬을 나누는 경우의 수

const assert = require("assert");

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }
// function solution(balls, share) {
//       var answer = factorial(balls) / (factorial(balls - share) * factorial(share))
//     return answer;
// }

function factorial(n) {
  let result = BigInt(1);
  for (let i = 1; i <= n; i++) {
    result = result * BigInt(i);
  }
  return result;
}

function solution(balls, share) {
      var answer = factorial(balls) / (factorial(balls - share) * factorial(share))
    return answer;
}
describe("구슬을 나누는 경우의 수", () => {
  it("case 1", () => {
    assert.equal(solution(3, 2), 3);
  });

  it("case 2", () => {
    assert.equal(solution(5, 3), 10);
  });
});
