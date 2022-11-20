// 문제: 등수 매기기
const assert = require("assert");

function solution(score) {
  var average = score.map(x => (x[0] + x[1]) / 2);
let answer = Array(score.length).fill(1)
for (let i = 0; i < average.length; i++) {
  for (let j = 0; j < average.length; j++) {
    if(average[j] > average[i]) {answer[i] ++}
  }
}
  return answer;
}

describe("등수 매기기", () => {
  it("case 1", () => {
    assert.deepEqual(
      solution([
        [80, 70],
        [90, 50],
        [40, 70],
        [50, 80],
      ]),
      [1, 2, 4, 3]
    );
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([
        [80, 70],
        [70, 80],
        [30, 50],
        [90, 100],
        [100, 90],
        [100, 100],
        [10, 30],
      ]),
      [4, 4, 6, 2, 2, 1, 7]
    );
  });
});
