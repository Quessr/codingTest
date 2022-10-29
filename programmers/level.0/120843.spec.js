// 문제: 공 던지기 ❌ ❌ 
const assert = require("assert");


function solution(numbers, k) {
  const odd = numbers.filter((v, i) => i % 2 === 0);
  const even = numbers.filter((v, i) => i % 2 === 1);
  // const repeatCnt = Math.ceil((k+1) / odd.length);
  const repeatCnt = k;
  const isEven = numbers.length % 2 === 0;
  const array = new Array(repeatCnt).fill().reduce((acc, _, index) => {
    if (isEven || index % 2 === 0) return [...acc, ...odd];
    return [...acc, ...even];
  }, []);
  return array[k-1];
}

describe("공 던지기", () => {
  it("case 1", () => {
    assert.equal(solution([1, 2, 3, 4], 2), 3);
  });

  it("case 2", () => {
    assert.equal(solution([1, 2, 3, 4, 5, 6], 5), 3);
  });

  it("case 3", () => {
    assert.equal(solution([1, 2, 3], 3), 2);
  });
});
