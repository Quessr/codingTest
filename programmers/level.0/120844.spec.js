// 문제: 배열 회전시키기
const assert = require("assert");

function solution(numbers, direction) {

  if (direction === "left") {
    numbers.push(numbers.shift());
    return numbers;
  }
  numbers.unshift(numbers.pop());
  return numbers;

  // function solution(numbers, direction) {
  //   if (direction === "left") {
  //     numbers.push(numbers.shift());
  //     return numbers;
  //   }
  //   numbers.splice(0, 0, numbers.pop());
  //   return numbers;
  // }
}

describe("배열 회전시키기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([1, 2, 3], "right"), [3, 1, 2]);
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([4, 455, 6, 4, -1, 45, 6], "left"),
      [455, 6, 4, -1, 45, 6, 4]
    );
  });
});
