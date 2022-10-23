// 문제: 최댓값 만들기 (1)
const assert = require("assert");

function solution(my_string) {
  // my_string을 배열로 바꾼다 split()
  // 숫자만 남기고 알파벳을 제거한다 filter() isNaN()
  // 정렬한다
  var answer = my_string.split("").filter(x => !isNaN(x)).map(Number);
  return answer.sort();
}

describe("최댓값 만들기 (1)", () => {
  it("case 1", () => {
    assert.deepEqual(solution("hi12392"), [1, 2, 2, 3, 9]);
  });

  it("case 2", () => {
    assert.deepEqual(solution("p2o4i8gj2"), [2, 2, 4, 8]);
  });

  it("case 3", () => {
    assert.deepEqual(solution("abcde0"), [0]);
  });
});
