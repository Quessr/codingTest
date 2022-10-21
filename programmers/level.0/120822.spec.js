const assert = require("assert");

/**
 * 문제: 문자열 뒤집기
 */
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

describe("문자열 뒤집기", () => {
  it("case 1", () => {
    assert.equal(solution("jaron"), "noraj");
  });

  it("case 2", () => {
    assert.equal(solution("bread"), "daerb");
  });
});
