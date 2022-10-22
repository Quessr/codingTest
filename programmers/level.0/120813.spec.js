const assert = require("assert");

/**
 * 문제: 짝수는 싫어요
 */
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}

describe("짝수는 싫어요", () => {
  it("case 1", () => {
    assert.deepEqual(solution(10), [1, 3, 5, 7, 9]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(15), [1, 3, 5, 7, 9, 11, 13, 15]);
  });
});
