const assert = require("assert");

/**
 * 문제: 직각삼각형 출력하기
 */
function solution(num) {
  var answer = [];
  for (let i = 1; i <= num; i++) {
    answer.push("*".repeat(i))
  }
  return answer;
}

describe("직각삼각형 출력하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution('3'), ["*", "**", "***"]);
  });
});
