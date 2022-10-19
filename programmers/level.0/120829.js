// 문제: 각도기

function solution(angle) {
  if (angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle < 180) return 3;
  return 4;
}

const case1 = solution(70);
if (case1 !== 1) {
  console.error(`case1은 잘못되었다. 결과값(${case1}) !== 기댓값(1)`);
}

const case2 = solution(91);
if (case2 !== 3) {
  console.error(`case2은 잘못되었다. 결과값(${case2}) !== 기댓값(3)`);
}

const case3 = solution(180);
if (case3 !== 4) {
  console.error(`case2은 잘못되었다. 결과값(${case3}) !== 기댓값(4)`);
}
