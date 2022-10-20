const assert = require("assert");

/**
 * 문제: 배열의 평균값
 */
function solution(numbers) {
  return (
    numbers.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / numbers.length
  );
}

describe("배열의 평균값", () => {
  it("case 1", () => {
    assert.equal(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5.5);
  });

  it("case 2", () => {
    assert.equal(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]), 94.0);
  });
});
