// 문제: 개미 군단
// 장군개미 5
// 병정개미 3
// 일개미 1

const assert = require("assert");

function solution(hp) {
  const a1 = parseInt(hp / 5)
  const a2 = parseInt(hp % 5 / 3)
  const a3 = hp % 5 % 3
  
  return a1 + a2 + a3;
}

describe("개미 군단", () => {
  it("case 1", () => {
    assert.deepEqual(solution(23), 5);
  });

  it("case 2", () => {
    assert.deepEqual(solution(24), 6);
  });
});
