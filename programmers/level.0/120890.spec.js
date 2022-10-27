// 문제: 가까운 수
const assert = require("assert");

function solution(array, n) {
  array.sort();
  var answer = array.map((x) => Math.abs(n - x));
  return array[answer.indexOf(Math.min(...answer))];
}

// * 문제 풀이
// 문제 : 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
// Maht.max로 절대값을 만들어 준 경우 28, 12의 Maht.min의 값은 8로 같은수가 나온다.
// 이 경우 위의 문제의 조건에 따라 더 작은 수인 12를 return 하기 위해서는
// indexOf의 '배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환' 한다는 성질을 이용할 수 있고
// indexOf의 성질을 이용하기 위해 sort()함수로 정렬을 통해 작은 수를 return 할 수 있다.

describe("가까운 수", () => {
  it("case 1", () => {
    assert.deepEqual(solution([3, 10, 28], 20), 28);
  });

  it("case 2", () => {
    assert.deepEqual(solution([10, 11, 12], 13), 12);
  });
});
