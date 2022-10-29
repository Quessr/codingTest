// 문제: 숨어있는 숫자의 덧셈 (2) ❌
const assert = require("assert");

function solution(my_string) {
  var answer = [...my_string.matchAll(/\d+/g)]
    .map((v) => v[0])
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  return answer;
}

describe("숨어있는 숫자의 덧셈 (2)", () => {
  it("case 1", () => {
    assert.deepEqual(solution("aAb1B2cC34oOp"), 37);
  });

  it("case 2", () => {
    assert.deepEqual(solution("1a2b3c4d123Z"), 133);
  });
});
