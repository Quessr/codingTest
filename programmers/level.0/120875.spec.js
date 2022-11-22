// 문제: 평행 
const assert = require("assert");

function solution(dots) {
  var x = dots.map(x => x[0]).sort((a, b) => a - b);
  const y = dots.map(y => y[1]).sort((a, b) => a - b)
if ((y[1] - y[0]) / (x[1] - x[0]) === (y[3] - y[2]) / (x[3] - x[2])) {
return 1
}
return 0
}

describe("평행", () => {
  it("case 1", () => {
    assert.deepEqual(solution([[1, 4], [9, 2], [3, 8], [11, 6]]), 1);
  });

  it("case 2", () => {
    assert.deepEqual(solution([[3, 5], [4, 1], [2, 4], [5, 10]]), 0);
  });
});
