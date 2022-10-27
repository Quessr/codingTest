// 문제: 진료 순서 정하기
const assert = require("assert");

function solution(emergency) {
  var answer = [...emergency].sort((a, b) => b - a)
  return emergency.map((x) => answer.indexOf(x) + 1)
}

describe("진료 순서 정하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([3, 76, 24]), [3, 1, 2]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5, 6, 7]), [7, 6, 5, 4, 3, 2, 1]);
  });

  it("case 3", () => {
    assert.deepEqual(solution([30, 10, 23, 6, 100]), [2, 4, 3, 5, 1]);
  });
});
