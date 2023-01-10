// 문제: 특이한 정렬 ❌❌
const assert = require("assert");

function solution(numlist, n) {
  var answer = numlist.sort(function (a, b) {
    const r = Math.abs(n - a) - Math.abs(n - b);
    return r === 0 ? b - a : r;
  });
  return answer;
}

describe("특이한 정렬", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3, 4, 5, 6], 4), [4, 5, 3, 6, 2, 1]);
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30),
      [36, 40, 20, 47, 10, 6, 7000, 10000]
    );
  });
});
