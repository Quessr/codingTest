// 문제: 두 수의 차
const assert = require("assert");

function solution(num1, num2) {
  var answer = num1 - num2;
  return answer;
}

describe("두 수의 차", () => {
  it("case 1", () => {
    assert.equal(solution(2, 3), -1);
  });

  it("case 2", () => {
    assert.equal(solution(100, 2), 98);
  });
});
