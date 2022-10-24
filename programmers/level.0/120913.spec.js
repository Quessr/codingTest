// 문제: 잘라서 배열로 저장하기
const assert = require("assert");

function solution(my_str, n) {
  var answer = [];
  my_str = my_str.split("") 
  while(my_str.length !== 0) {
    answer.push(my_str.splice(0, n).join(""))
  }
  return answer;
}

describe("잘라서 배열로 저장하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution("abc1Addfggg4556b", 6), ["abc1Ad", "dfggg4", "556b"]);
  });

  it("case 2", () => {
    assert.deepEqual(solution("abcdef123", 3), ["abc", "def", "123"]);
  });

});
