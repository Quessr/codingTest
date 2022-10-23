// 문제: 피자 나눠 먹기 (2) ❌
const assert = require("assert");

function solution(n) {
  var answer = Math.max(n, 6);
  while (true) {
    if (answer % 6 === 0 && answer % n === 0) break;
    answer++;
  }
  return Math.trunc(answer / 6);
}

describe("피자 나눠 먹기 (2)", () => {
  it("case 1", () => {
    assert.equal(solution(6), 1);
  });

  it("case 2", () => {
    assert.equal(solution(10), 5);
  });

  it("case 3", () => {
    assert.equal(solution(4), 2);
  });
});

