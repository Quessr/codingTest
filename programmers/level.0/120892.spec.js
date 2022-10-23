// 문제: 암호 해독
const assert = require("assert");

function solution(cipher, code) {
  // code의 배수의 순서에 있는 cipher의 문자를 합친 것 => 암호
  // code의 배수의 순서에 있는 문자들을 합친다 filter
  var answer = cipher
    .split("")
    .filter((x, i) => (i + 1) % code === 0)
    .join("");
  return answer;
}

describe("암호 해독", () => {
  it("case 1", () => {
    assert.deepEqual(solution("dfjardstddetckdaccccdegk", 4), "attack");
  });

  it("case 2", () => {
    assert.deepEqual(solution("pfqallllabwaoclk", 2), "fallback");
  });
});
