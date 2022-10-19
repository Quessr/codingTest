/**
 * 문제: 나이 출력
 */
function solution(age) {
  var answer = 2022 - age + 1;
  return answer;
}

const case1 = solution(40);
if (case1 !== 1983) {
  console.error(`case1은 잘못되었다. 결과값(${case1}) !== 기댓값(1983)`);
}

const case2 = solution(23);
if (case2 !== 2000) {
  console.error(`case2은 잘못되었다. 결과값(${case2}) !== 기댓값(2000)`);
}
