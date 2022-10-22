// 문제: n의 배수 고르기
const assert = require("assert");

function solution(n, numlist) {
  var answer = numlist.filter(x => x % n === 0);
  return answer
}

describe("n의 배수 고르기", () => {
  it("case 1", () => {
    assert.deepEqual(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 9, 12]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(5, [1, 9, 3, 10, 13, 5]), [10, 5]);
  });
});
