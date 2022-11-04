// 문제: 문자열 계산하기 ❌
const assert = require("assert");

function solution(my_string) {
  const arr = my_string.split(" ");
  while (arr.length > 1) {
    const [a, op, b] = arr.splice(0, 3);
    if (op === '+') {
      arr.unshift(Number(a) + Number(b));
    } else if (op === '-') {
      arr.unshift(Number(a) - Number(b))
    }
  }
  return arr[0];
}

// function solution(my_string) {
//   return eval(my_string)
// }

describe("문자열 계산하기", () => {
  it("case 1", () => {
    assert.equal(solution("6 - 4"), 2);
  });

});
