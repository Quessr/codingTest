// 문제: 직사각형 넓이 구하기
const assert = require("assert");

function solution(dots) {
  const x = dots.map(x => x[0])
	const xMax = Math.max(...x)
	const xMin = Math.min(...x)
  const y = dots.map(x => x[1])
	const yMax = Math.max(...y)
  const yMin = Math.min(...y)

 return Math.abs((xMax - xMin) * (yMax - yMin))
}

describe("직사각형 넓이 구하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution([[1, 1], [2, 1], [2, 2], [1, 2]]), 1);
  });

  it("case 2", () => {
    assert.deepEqual(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]), 4);
  });
});
