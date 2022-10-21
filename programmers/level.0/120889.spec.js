// 문제: 삼각형의 완성조건 (1)
const assert = require("assert");

function solution(sides) {
  sides.sort(function(a, b) {
    return b - a
  });
  if (sides[0] < sides[1] + sides[2]) return 1;
  else return 2;
}

describe("삼각형의 완성조건 (1)", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3]), 2);
  });

  it("case 2", () => {
    assert.deepEqual(solution([3, 6, 2]), 2);
  });
});
