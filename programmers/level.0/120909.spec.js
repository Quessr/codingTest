// 문제: 제곱수 판별하기
const assert = require("assert");

function solution(n) {
  if(Number.isInteger(Math.sqrt(n))) return 1
  else return 2
}

describe("제곱수 판별하기", () => {
  it("case 1", () => {
    assert.equal(solution(144), 1);
  });

  it("case 2", () => {
    assert.equal(solution(976), 2);
  });
});
