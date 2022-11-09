// 문제: 컨트롤 제트
const assert = require("assert");

// i = 0;
// [10, 'Z', 20, 'Z', 1]

// i = 1;
// [10, 'Z', 20, 'Z', 1] => [20, 'Z', 1]
// i=i-2; => i = -1;

// i = 0;
// [20, 'Z', 1]

// i = 1;
// [20, 'Z', 1] => [1]
// i=i-2 => i = -1;

// i = 0;
// [1] split.length === 1;

function solution(s) {
  const split = s.split(" ").map(Number);
  for (let i = 0; i < split.length; i++) {
    if (isNaN(split[i])) {
      split.splice(i-1, 2);
      i = i - 2;
    }
  }
  return split.reduce((acc, cur) => acc + cur, 0);
}

// * 다른풀이
// function solution(s) {
//   const split = s.split(" ");
//   while (split.includes("Z")) {
//     split.splice(split.indexOf("Z") - 1, 2);
//   }
//   return split.reduce((acc, cur) => acc + Number(cur), 0);
// }


describe("컨트롤 제트", () => {
  it("case 1", () => {
    assert.deepEqual(solution("1 2 Z 3"), 4);
  });

  it("case 2", () => {
    assert.deepEqual(solution("10 20 30 40"), 100);
  });

  it("case 3", () => {
    assert.deepEqual(solution("10 Z 20 Z 1"), 1);
  });
});
