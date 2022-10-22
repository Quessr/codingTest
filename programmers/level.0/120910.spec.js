// 문제: 세균 증식
const assert = require("assert");

function solution(n, t) {
  var answer = n * 2 ** t;
  return answer;
}

describe("세균 증식", () => {
  it("case 1", () => {
    assert.equal(solution(2, 10), 2048);
  });

  it("case 2", () => {
    assert.equal(solution(7, 15), 229376);
  });
});
