// 문제: 주사위의 개수
const assert = require("assert");

function solution(box, n) {
  var answer =
    parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
  return answer;
}

describe("주사위의 개수", () => {
  it("case 1", () => {
    assert.equal(solution([1, 1, 1], 1), 1);
  });

  it("case 2", () => {
    assert.equal(solution([10, 8, 6], 3), 12);
  });
});
