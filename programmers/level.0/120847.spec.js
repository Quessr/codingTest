// 문제: 최댓값 만들기 (1)
const assert = require("assert");

function solution(numbers) {
  var answer = numbers.sort((a, b) => b - a);
  return answer[0] * answer[1];
}

describe("최댓값 만들기 (1)", () => {
  it("case 1", () => {
    assert.equal(solution([1, 2, 3, 4, 5]), 20);
  });

  it("case 2", () => {
    assert.equal(solution([0, 31, 24, 10, 1, 9]), 744);
  });
});
