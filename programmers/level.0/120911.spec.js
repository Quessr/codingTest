// 문제: 문자열 정렬하기 (2)
const assert = require("assert");

function solution(my_string) {
  var answer = my_string.toLowerCase().split('').sort().join('');
  return answer;
}

describe("문자열 정렬하기 (2)", () => {
  it("case 1", () => {
    assert.equal(solution("Bcad"), "abcd");
  });

  it("case 2", () => {
    assert.equal(solution("heLLo"), "ehllo");
  });

  it("case 3", () => {
    assert.equal(solution("Python"), "hnopty");
  });
});
