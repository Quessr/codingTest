// 문제: 중복된 숫자 개수
const assert = require("assert");

function solution(array, n) {
  var answer = array.filter(v => v === n).length;
  return answer;
}

describe("중복된 숫자 개수", () => {
  it("case 1", () => {
    assert.equal(solution(	[1, 1, 2, 3, 4, 5], 1), 2);
  });

  it("case 2", () => {
    assert.equal(solution([0, 2, 3, 4], 1), 0);
  });
});