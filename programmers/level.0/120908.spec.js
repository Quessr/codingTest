// 문제: 문자열안에 문자열
const assert = require("assert");

function solution(str1, str2) {
  if (str1.includes(str2)) return 1
  else return 2

  // var answer = str1.indexOf(str2);
  // if (answer < 0) return 2;
  // return 1;
}

describe("문자열안에 문자열", () => {
  it("case 1", () => {
    assert.equal(solution("ab6CDE443fgh22iJKlmn1o", "6CD"), 1);
  });

  it("case 2", () => {
    assert.equal(solution("ppprrrogrammers", "pppp"), 2);
  });
});
