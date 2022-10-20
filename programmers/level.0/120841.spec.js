// 문제: 점의 위치 구하기
const assert = require("assert");

function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) return 1
  if (dot[0] < 0 && dot[1] > 0) return 2
  if (dot[0] < 0 && dot[1] < 0) return 3
  return 4;
}

describe("점의 위치 구하기", () => {
  it("case 1", () => {
    assert.equal(solution([2, 4]), 1);
  });

  it("case 2", () => {
    assert.equal(solution([-7, 9]), 2);
  });
});
