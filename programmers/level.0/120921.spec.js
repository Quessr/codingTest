// 문제: 문자열 밀기 ❌
const assert = require("assert");

function solution(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < B.length-1; i++) {
    A = A.split("")
    A.unshift(A.pop());
    A = A.join("")
    if (A === B) return i+1;
  }
  return -1;
}

//* 다른풀이
// function solution(A, B) {
//   return (B + B).indexOf(A);
// }

describe("문자열 밀기", () => {
  it("case 1", () => {
    assert.deepEqual(solution("hello", "ohell"), 1);
  });

  it("case 2", () => {
    assert.deepEqual(solution("apple", "elppa"), -1);
  });

});
