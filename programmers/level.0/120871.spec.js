// 문제: 저주의 숫자 3 ❌
const assert = require("assert");

function solution(n) {
  var answer = 1;
for(let i = answer; i < n; i++) {
  answer = answer + 1
  while (answer % 3 === 0 || answer.toString().includes(3)) {
    answer = answer + 1
  }
}
  return answer;
}

describe("저주의 숫자 3", () => {
  it("case 1", () => {
    assert.deepEqual(solution(15), 25);
  });

  it("case 2", () => {
    assert.deepEqual(solution(40), 76);
  });
});
