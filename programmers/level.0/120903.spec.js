// 문제: 배열의 유사도 💜
const assert = require("assert");

function solution(s1, s2) {
  var answer = s1.filter((x) => s2.includes(x)).length;
  return answer;
}

describe("배열의 유사도", () => {
  it("case 1", () => {
    assert.equal(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]), 2);
  });

  it("case 2", () => {
    assert.equal(solution(["n", "omg"], ["m", "dot"]), 0);
  });
});
