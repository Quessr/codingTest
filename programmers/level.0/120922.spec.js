// 문제: 종이 자르기
const assert = require("assert");

function solution(M, N) {
  var answer = M * N - 1;
  return answer;
}

describe("종이 자르기", () => {
  it("case 1", () => {
    assert.deepEqual(solution(2, 2), 3);
  });

  it("case 2", () => {
    assert.deepEqual(solution(2, 5), 9);
  });

  it("case 2", () => {
    assert.deepEqual(solution(1, 1), 0);
  });
});
