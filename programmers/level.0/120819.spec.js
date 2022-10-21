const assert = require("assert");

/**
 * 문제: 아이스 아메리카노
 */
function solution(money) {
  var answer = [parseInt(money / 5500), money % 5500];
  return answer;
}

describe("아이스 아메리카노", () => {
  it("case 1", () => {
    assert.deepEqual(solution(5500), [1, 0]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(15000), [2, 4000]);
  });
});
