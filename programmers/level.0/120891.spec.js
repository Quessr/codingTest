// 문제: 369게임 🍓
const assert = require("assert");

function solution(order) {
  const answer = order
    .toString()
    .split("")
    .map(Number)
    .filter((x) => x !== 0 && x % 3 === 0).length;
  return answer;
}

describe("369게임", () => {
  it("case 1", () => {
    assert.equal(solution(3), 1);
  });

  it("case 2", () => {
    assert.equal(solution(29423), 2);
  });
});
