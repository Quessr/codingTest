// 문제: 모음 제거
const assert = require("assert");

function solution(my_string) {
  // my_string을 배열로 만든다
  // my_string의 길이만큼 반복문을 돌면서 a,e,i,o,u를 filter
  // join
  const collection = ['a', 'e', 'i', 'o', 'u']
  return my_string.split('').filter(x => !collection.includes(x)).join('')
}

describe("모음 제거", () => {
  it("case 1", () => {
    assert.equal(solution("bus"), "bs");
  });

  it("case 2", () => {
    assert.equal(solution("nice to meet you"), "nc t mt y");
  });
});
