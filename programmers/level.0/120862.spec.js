// 문제: 최댓값 만들기 (2)
const assert = require("assert");

function solution(numbers) {
  var answer = numbers.sort((a, b) => b - a);
  const result = Math.max(
    answer[0] * answer[1],
    answer[answer.length - 1] * answer[answer.length - 2]
  );
  return result;

  // * 다른풀이
  // const [a1, b1] = numbers.sort((a, b) => b - a);
  // const [a2, b2] = numbers.sort((a, b) => a - b);
  // return Math.max(a1 * b1, a2 * b2);
}

describe("최댓값 만들기 (2)", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, -3, 4, -5]), 15);
  });

  it("case 2", () => {
    assert.deepEqual(solution([0, -31, 24, 10, 1, 9]), 240);
  });

  it("case 2", () => {
    assert.deepEqual(solution([10, 20, 30, 5, 5, 20, 5]), 600);
  });
});
