const assert = require("assert");

/**
 * 문제: 분수의 덧셈
 */

// gcd = 최대공약수
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

function solution(denum1, num1, denum2, num2) {
  const a = denum1 * num2 + denum2 * num1;
  const b = num1 * num2;
  var answer = [
    (denum1 * num2 + denum2 * num1) / gcd(a, b),
    (num1 * num2) / gcd(a, b),
  ];

  return answer;
}

describe("분수의 덧셈", () => {
  it("case 1", () => {
    assert.deepEqual(solution(1, 2, 3, 4), [5, 4]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(9, 2, 1, 3), [29, 6]);
  });
});
