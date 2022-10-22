// 문제: 특정 문자 제거하기
const assert = require("assert");

function solution(my_string, letter) {
  const answer = my_string.split("").filter((word) => word !== letter).join('');
  return answer;

// * 다른풀이
  // function solution(my_string, letter) {
  //   return my_string.replaceAll(letter, "");
  // }
}

describe("특정 문자 제거하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution("abcdef", "f"), "abcde");
  });

  it("case 2", () => {
    assert.deepEqual(solution("BCBdbe", "B"), "Cdbe");
  });
});
