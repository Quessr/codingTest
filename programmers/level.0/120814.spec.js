// 문제: 피자 나눠 먹기 (1)
const assert = require("assert");

function solution(n) {
  return Math.ceil(n / 7) 
}

describe("피자 나눠 먹기 (1)", () => {
  it("case 1", () => {
    assert.equal(solution(7), 1);
  });

  it("case 2", () => {
    assert.equal(solution(1), 1);
  });
});

