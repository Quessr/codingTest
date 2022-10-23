// 문제: 배열 원소의 길이
const assert = require("assert");

function solution(my_string) {
  var answer = my_string.split("");
  const set = Array.from(new Set(answer))
  return set.join("");

  // * 다른풀이
  // var answer = [...new Set(my_string)].join("");
  // return answer;
}

describe("배열 원소의 길이", () => {
  it("case 1", () => {
    assert.deepEqual(solution("people"), "peol");
  });

  it("case 2", () => {
    assert.deepEqual(solution("We are the world"), "We arthwold");
  });
});
