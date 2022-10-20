// 문제: 편지
const assert = require("assert");

function solution(message) {
  var answer = message.length * 2;
  return answer;
}

describe("편지", () => {
  it("case 1", () => {
    assert.equal(solution("happy birthday!"), 30);
  });

  it("case 2", () => {
    assert.equal(solution("I love you~"), 22);
  });
});
