// 문제: 삼각형의 완성조건 (2)
const assert = require("assert");

function solution(sides) {
  var max = Math.max(...sides);
  const min = Math.min(...sides);
  const a = max - (max - min);
  const b = max + min - (max + 1);
  //i) sides의 배열중 한 수가 가장 긴 변인 경우
  // 		a = 될 수 있는 나머지 한 변 => 배열중 큰 수 - 작은 수 + 1 ~ 가장 큰 수
  //                              (6 - 3 + 1 ) ~ 6 /// 6 - 4
  //															4, 5, 6 => 3
  //ii) 나머지 변이 가장 긴 변인 경우
  // 		b = 될 수 있는 나머지 한 변 => 배열중 큰 수 + 1 ~ (큰 수 + 작은 수 - 1)
  //                              (6 + 1) ~ (6 + 3 - 1) /// 8 - 7
  //                               7, 8 => 2
  // return a의 수 + b의 수
  return a + b;
}

// *답변 리펙토링
// function solution(sides) {
//   const min = Math.min(...sides);
//   const a = min
//   const b = min - 1
//   return a + b;
// }

//* 또 다른 풀이
// => sides의 작은변 * 2 한 것의 - 1을 하면 정수의 개수가 나오는 규칙을 찾아서 푸는 방법
// function solution(sides) {
//   return Math.min(...sides) * 2 - 1;
// }

describe("삼각형의 완성조건 (2)", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2]), 1);
  });

  it("case 2", () => {
    assert.deepEqual(solution([3, 6]), 5);
  });

  it("case 2", () => {
    assert.deepEqual(solution([11, 7]), 13);
  });
});
