// 문제: 짝수 홀수 개수
const assert = require("assert");

function solution(num_list) {
  var answer = [0, 0];
  num_list.forEach((el) => {
    if (el % 2 === 0) {
      answer[0] = answer[0] + 1;
    } else {
      answer[1] = answer[1] + 1;
    }
  });
  return answer;
}

describe("짝수 홀수 개수", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5]), [2, 3]);
  });

  it("case 2", () => {
    assert.deepEqual(solution([1, 3, 5, 7]), [0, 4]);
  });
});
