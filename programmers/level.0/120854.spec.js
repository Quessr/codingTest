// 문제: 배열 원소의 길이
const assert = require("assert");

function solution(strlist) {
  const answer = strlist.map((x) => x.length);
  return answer;
}

describe("배열 원소의 길이", () => {
  it("case 1", () => {
    assert.deepEqual(solution(["We", "are", "the", "world!"]), [2, 3, 3, 6]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(["I", "Love", "Programmers."]), [1, 4, 12]);
  });
});
