// 문제: 평행
const assert = require("assert");

function solution(dots) {
  const D = dots.sort((a, b) => a[0] - b[0]);
  const l1 = (D[1][1] - D[0][1]) / (D[1][0] - D[0][0]);
  const l2 = (D[3][1] - D[2][1]) / (D[3][0] - D[2][0]);
  return Number(l1 === l2);
}

describe("평행", () => {
  it("case 1", () => {
    assert.deepEqual(
      solution([
        [1, 4],
        [9, 2],
        [3, 8],
        [11, 6],
      ]),
      1
    );
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([
        [3, 5],
        [4, 1],
        [2, 4],
        [5, 10],
      ]),
      0
    );
  });
});
