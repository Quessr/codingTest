const assert = require("assert");

/**
 * 문제: 피자 나눠 먹기 (3)
 */
function solution(slice, n) {
  var answer = Math.ceil(n / slice)
  return answer;
}

describe("피자 나눠 먹기 (3)", () => {
  it("case 1", () => {
    assert.equal(solution(7, 10), 2);
  });

  it("case 2", () => {
    assert.equal(solution(4, 12), 3);
  });
});