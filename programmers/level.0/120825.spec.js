// 문제: 문자 반복 출력하기
const assert = require("assert");

function solution(my_string, n) {
  const answer = my_string
    .split("")
    .map((x) => x.repeat(n))
    .join("");
  return answer;
}

describe("문자 반복 출력하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution("hello", 3), "hhheeellllllooo");
  });
});
