// 문제: 배열 자르기
const assert = require("assert");

function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}

describe("배열 자르기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5], 1, 3), [2, 3, 4]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([1, 3, 5], 1, 2), [3, 5]);
  });
});
