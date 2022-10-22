// 문제: 숫자 찾기
const assert = require("assert");

function solution(num, k) {
  // num을 이루는 숫자중에 k가 있는지 확인
  // -> number를 나눠서 배열로 만든다 split()
  // -> IndexOf()를 사용해서 k에 해당하는 값의 index를 찾는다
  const str = String(num)
  const index = str.split('').map(Number).indexOf(k) 
  // num에 k가 포함 돼 있는 경우에 index + 1
  // num에 k가 포함 돼 있지 않은 경우 -1
  if (index >= 0) {
    return index + 1
  } return -1
}

describe("숫자 찾기", () => {
  it("case 1", () => {
    assert.equal(solution(29183, 1), 3);
  });

  it("case 2", () => {
    assert.equal(solution(232443, 4), 4);
  });
  it("case 3", () => {
    assert.equal(solution(123456, 7), -1);
  });
});
