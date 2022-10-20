// 문제: 짝수의 합
const assert = require("assert");

function solution(n) {
  // let answer = 0;
  // for (let i = 0; i <= n; i++) {
  //   if (i % 2 === 0) {
  //     answer = answer + i;
  //   }
  // }
  // return answer;

  let answer = 0;
  for (let i = 2; i <= n; i = i + 2) {
    answer = answer + i;
  }
  return answer;
}

describe("짝수의 합", () => {
  it("case 1", () => {
    assert.equal(solution(10), 30);
  });

  it("case 2", () => {
    assert.equal(solution(4), 6);
  });
});
