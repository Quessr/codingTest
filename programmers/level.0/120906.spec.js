// 문제: 자릿수 더하기
const assert = require("assert");

function solution(n) {
  const result = Array.from(n.toString()).map(Number);
  return result.reduce((acc, curr) => acc + curr);
}

describe("자릿수 더하기", () => {
  it("case 1", () => {
    assert.equal(solution(1234), 10);
  });

  it("case 2", () => {
    assert.equal(solution(930211), 16);
  });
});
