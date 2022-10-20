const assert = require("assert");

/**
 * 문제: 각도기
 */
function solution(angle) {
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
  return 4;
}

describe("각도기", () => {
  it("case 1", () => {
    assert.equal(solution(70), 1);
  });

  it("case 2", () => {
    assert.equal(solution(91), 3);
  });

  it("case 3", () => {
    assert.equal(solution(180), 4);
  });
});
