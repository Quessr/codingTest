const assert = require("assert");

/**
 * 문제: 중앙값 구하기
 */
function solution(array) {
  const sortedArray = array.sort(function (a, b) {
    return b - a;
  });
  const index = parseInt(array.length / 2)
  return sortedArray[index];

  // function solution(array) {
  //   var answer = array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
  //   return answer;
  // }
}

describe("중앙값 구하기", () => {
  it("case 1", () => {
    assert.equal(solution([1, 2, 3, 4, 5]), 3);
  });

  it("case 2", () => {
    assert.equal(solution([9, -1, 0]), 0);
  });
});
