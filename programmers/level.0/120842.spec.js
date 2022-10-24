// 문제: 점의 위치 구하기
const assert = require("assert");

function solution(num_list, n) {
  var answer = [];
  const length = num_list.length
  for (let i = 0; i < length / n; i++) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}
// slice => 원본 안바뀐다
// splice => dnjsqhs qkRnlsek

describe("점의 위치 구하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5, 6, 7, 8], 2), [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3), [
      [100, 95, 2],
      [4, 5, 6],
      [18, 33, 948],
    ]);
  });
});
