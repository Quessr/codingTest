const assert = require("assert");

/**
 * 문제: 숫자 비교하기
 */
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

describe("숫자 비교하기", () => {
  it("case 1", () => {
    assert.equal(solution(2, 3), -1);
  });

  it("case 2", () => {
    assert.equal(solution(11, 11), 1);
  });

  it("case 3", () => {
    assert.equal(solution(7, 99), -1);
  });
});