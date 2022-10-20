const assert = require("assert");

/**
 * 문제: 두 수의 나눗셈
 */
function solution(num1, num2) {
  var answer = Math.trunc((num1 / num2) * 1000);
  return answer;
}

describe("두 수의 나눗셈", () => {
  it("case 1", () => {
    assert.equal(solution(3, 2), 1500);
  });

  it("case 2", () => {
    assert.equal(solution(7, 3), 2333);
  });

  it("case 3", () => {
    assert.equal(solution(1, 16), 62);
  });
});
