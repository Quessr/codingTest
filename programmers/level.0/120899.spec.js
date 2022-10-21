// 문제: 가장 큰 수 찾기
const assert = require("assert");

function solution(array) {
  const max = Math.max(...array);
  const index = array.indexOf(max)
  answer = [max, index]
  return answer;

  // * 다른 풀이
  // function solution(array) {
  //   var answer = array.reduce(
  //     (acc, curr, idx) => {
  //       if (acc[0] < curr) return [curr, idx];
  //       return acc;
  //     },
  //     [0, 0]
  //   );
  //   return answer;
  // }
}

describe("가장 큰 수 찾기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 8, 3]), [8, 1]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([9, 10, 11, 8]), [11, 2]);
  });
});
