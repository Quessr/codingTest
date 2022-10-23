// 문제: 외계행성의 나이
const assert = require("assert");

// a = 0
// b = 1
// c = 2
// d = 3
// j = 9

function solution(age) {
  var old = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const answer = age
    .toString()
    .split("")
    .map(Number)
    .map((x) => old[x])
    .join("");
  return answer;
}

describe("외계행성의 나이", () => {
  it("case 1", () => {
    assert.deepEqual(solution(23), "cd");
  });

  it("case 2", () => {
    assert.deepEqual(solution(51), "fb");
  });

  it("case 3", () => {
    assert.deepEqual(solution(100), "baa");
  });
});
