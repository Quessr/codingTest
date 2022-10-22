const assert = require("assert");

/**
 * 문제: 배열 두배 만들기
 */
function solution(numbers) {
  var answer = numbers.map(x => x * 2);
  return answer;
}

describe("배열 두배 만들기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([1, 2, 100, -99, 1, 2, 3]), [2, 4, 200, -198, 2, 4, 6]);
  });

});
