// 문제: 순서쌍의 개수
const assert = require("assert");

function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i)
    }
  }
  return answer.length;
}

describe("순서쌍의 개수", () => {
  it("case 1", () => {
    assert.deepEqual(solution(20), 6);
  });

  it("case 2", () => {
    assert.deepEqual(solution(100), 9);
  });
});
