// 문제: 대문자와 소문자
const assert = require("assert");

function solution(my_string) {
  var answer = "";
  for (let x of my_string) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else answer += x.toUpperCase()
  }
  return answer;

  // * 다른 풀이
  // function isUpperCase(x) {
  //   return x.toUpperCase() === x;
  // }
  
  // function toggleCase(x) {
  //   return isUpperCase(x) ? x.toLowerCase() : x.toUpperCase();
  // }
  
  // function solution(my_string) {
  //   var answer = my_string.split("").map(toggleCase).join("");
  //   return answer;
  // }
}

describe("대문자와 소문자", () => {
  it("case 1", () => {
    assert.deepEqual(solution("cccCCC"), "CCCccc");
  });

  it("case 2", () => {
    assert.deepEqual(solution("abCdEfghIJ"), "ABcDeFGHij");
  });
});
