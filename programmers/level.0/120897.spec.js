// 문제: 약수 구하기
const assert = require("assert");

function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

describe("약수 구하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution(24), [1, 2, 3, 4, 6, 8, 12, 24]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(29), [1, 29]);
  });
});
