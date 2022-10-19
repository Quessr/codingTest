// 문제: 각도기

function solution(num1, num2) {
  var answer = Math.trunc(num1 / num2 * 1000);
  return answer;
}

const case1 = solution(3, 2);
const result1 = 1500;
if (case1 !== result1) {
  console.error(`case1은 잘못되었다. 결과값(${case1}) !== 기댓값(${result1})`);
}

const case2 = solution(7, 3);
const result2 = 2333;
if (case2 !== result2) {
  console.error(`case2은 잘못되었다. 결과값(${case2}) !== 기댓값(${result2})`);
}

const case3 = solution(1, 16);
const result3 = 62;
if (case3 !== result3) {
  console.error(`case3은 잘못되었다. 결과값(${case3}) !== 기댓값(${result3})`);
}
