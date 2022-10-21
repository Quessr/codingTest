const assert = require("assert");

/**
 * 문제: 배열 뒤집기
 */
function solution(num_list) {
  return num_list.reverse();
}

describe("배열 뒤집기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([1, 1, 1, 1, 1, 2]), [2, 1, 1, 1, 1, 1]);
  });
});
