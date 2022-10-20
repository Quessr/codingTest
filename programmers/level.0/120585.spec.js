// 문제: 머쓱이보다 키 큰 사람
const assert = require("assert");

function solution(array, height) {
  var answer = array.reduce((acc, curr) => {
    if (curr > height) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return answer;
}

describe("머쓱이보다 키 큰 사람", () => {
  it("case 1", () => {
    assert.equal(solution([149, 180, 192, 170], 167), 3);
  });

  it("case 2", () => {
    assert.equal(solution([180, 120, 140], 190), 0);
  });
});
