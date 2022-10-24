// 문제: 한 번만 등장한 문자
const assert = require("assert");

function solution(s) {
  var answer = s.split("").filter(x => s.match(new RegExp(x, 'g')).length < 2).sort().join("")
  return answer;

  // * 다른 풀이
  // function solution(s) {
  //   var answer = s
  //     .split("")
  //     .filter((x) => s.split(x).length - 1 < 2)
  //     .sort()
  //     .join("");
  //   return answer;
  // }

//   const s = "abcabcadc";
// s.split("").map((x) => `${x}: ${s.split(x).length}, ${s.split(x)}`)
}

describe("한 번만 등장한 문자", () => {
  it("case 1", () => {
    assert.equal(solution("abcabcadc"), "d");
  });

  it("case 2", () => {
    assert.equal(solution("abdc"), "abcd");
  });

  it("case 2", () => {
    assert.equal(solution("hello"), "eho");
  });
});
