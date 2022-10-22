// 문제: 숨어있는 숫자의 덧셈 (1)
const assert = require("assert");

function solution(my_string) {
  var answer = 0;
  /** my_string의 길이만큼 반복문 */ 
  for (let i = 0; i < my_string.length; i++) {
    // 문자열을 숫자로 변환하여 숫자인지 아닌지 확인
    if (!isNaN(my_string[i])) {
    // 숫자가 맞으면 answer에 더해준다
      answer = answer + Number(my_string[i])
    }
  }
  return answer;
}

describe("숨어있는 숫자의 덧셈 (1)", () => {
  it("case 1", () => {
    assert.equal(solution("aAb1B2cC34oOp"), 10);
  });

  it("case 2", () => {
    assert.equal(solution("1a2b3c4d123"), 16);
  });
});
