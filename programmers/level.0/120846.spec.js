// 문제: 합성수 찾기
const assert = require("assert");

function solution(n) {
  var answer = 0;
  for(let i = 0; i < n; i++) {
    let x = 0;
    for(let j = 0; j < n; j++) {
      if (i % j === 0) x++;
    }
    if (x >= 3) answer++
  }
  return answer;
}

describe("합성수 찾기", () => {
  it("case 1", () => {
    assert.equal(solution(10), 5);
  });

  it("case 2", () => {
    assert.equal(solution(15), 8);
  });
});
