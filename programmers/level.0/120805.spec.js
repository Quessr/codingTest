/**
 * 문제: 몫 구하기
 *
 * 문제 설명
 * - 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
 *
 * 알게된점
 * Math.floor를 처음에 사용했으나 예외적인 케이스가 음수에서 존재해서
 * Math.trunc로 고치니 문제가 해결되었음.
 *
 * Math.trunc: 소수점 버림
 * Math.round: 반올림
 * Math.floor: 내림
 * Math.ceil: 올림
 */
const assert = require("assert");

function solution(num1, num2) {
  var answer = Math.trunc(num1 / num2);
  return answer;
}

describe("몫 구하기", () => {
  it("case 1", () => {
    assert.equal(solution(10, 5), 2);
  });

  it("case 2", () => {
    assert.equal(solution(7, 2), 3);
  });
});
