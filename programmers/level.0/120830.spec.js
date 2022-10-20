// 문제: 양꼬치
const assert = require("assert");

function solution(n, k) {
    return (12000 * n) + (2000 * k) - Math.trunc(n / 10) * 2000;
}

describe("양꼬치", () => {
  it("case 1", () => {
    assert.equal(solution(10, 3), 124000);
  });

  it("case 2", () => {
    assert.equal(solution(64, 6), 768000);
  });
});
