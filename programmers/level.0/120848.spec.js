// 문제: 팩토리얼
const assert = require("assert");

function solution(n) {
  var answer = 1;
  for (let i = 1; answer <= n; i++) {
    answer = answer * i;
    if (answer > n) return i - 1;
  }
}

describe("팩토리얼", () => {
  it("case 1", () => {
    assert.equal(solution(3628800), 10);
  });

  it("case 2", () => {
    assert.equal(solution(7), 3);
  });
});
