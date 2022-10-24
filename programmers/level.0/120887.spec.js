// 문제: k의 개수
const assert = require("assert");

function solution(i, j, k) {
  var answer = 0;
for (i; i <= j; i++) {
  answer = i.toString().split(k).length - 1 + answer
}
  return answer;
}


describe("k의 개수", () => {
  it("case 1", () => {
    assert.deepEqual(solution(1, 13, 1), 6);
  });

  it("case 2", () => {
    assert.deepEqual(solution(10, 50, 5), 5);
  });

  it("case 2", () => {
    assert.deepEqual(solution(3, 10, 2), 0);
  });
});
