// 문제: 배열 원소의 길이
const assert = require("assert");

function solution(bin1, bin2) {
  return(parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

describe("배열 원소의 길이", () => {
  it("case 1", () => {
    assert.deepEqual(solution("10", "11"), "101");
  });

  it("case 2", () => {
    assert.deepEqual(solution("1001", "1111"), "11000");
  });
});
