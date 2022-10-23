// 문제: 인덱스 바꾸기
const assert = require("assert");

function solution(my_string, num1, num2) {
  const splitedString = my_string.split("")
  splitedString[num1] = my_string[num2]
  splitedString[num2] = my_string[num1]
  return splitedString.join("");
}

describe("인덱스 바꾸기", () => {
  it("case 1", () => {
    assert.equal(solution("hello", 1, 2), "hlelo");
  });

  it("case 2", () => {
    assert.equal(solution("I love you", 3, 6), "I l veoyou");
  });
});
