// 문제: 배열의 평균값

function solution(numbers) {
  var answer = 0;
  numbers.forEach(function (item) {
    answer += item;
  });

  return answer / numbers.length;
}

const case1 = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const result1 = 5.5;
if (case1 !== result1) {
  console.error(`case1은 잘못되었다. 결과값(${case1}) !== 기댓값(${result1})`);
}

const case2 = solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
const result2 = 94.0;
if (case2 !== result2) {
  console.error(`case2은 잘못되었다. 결과값(${case2}) !== 기댓값(${result2})`);
}
