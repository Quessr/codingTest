// 문제: 두 수의 곱
const assert = require("assert");

function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}

describe("두 수의 곱", () => {
  it("case 1", () => {
    assert.equal(solution(3, 4), 12);
  });

  it("case 2", () => {
    assert.equal(solution(27, 19), 513);
  });
});