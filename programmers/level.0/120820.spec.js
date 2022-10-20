const assert = require("assert");

/**
 * 문제: 나이 출력
 */
function solution(age) {
  var answer = 2022 - age + 1;
  return answer;
}

describe("나이 출력", () => {
  it("case 1", () => {
    assert.equal(solution(40), 1983);
  });

  it("case 2", () => {
    assert.equal(solution(23), 2000);
  });
});