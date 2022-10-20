const assert = require("assert");

/**
 * 문제: 나머지 구하기
 */
function solution(num1, num2) {
  return num1 % num2;
}

describe("나머지 구하기", () => {
  it("case 1", () => {
    assert.equal(solution(3, 2), 1);
  });

  it("case 2", () => {
    assert.equal(solution(10, 5), 0);
  });
});
