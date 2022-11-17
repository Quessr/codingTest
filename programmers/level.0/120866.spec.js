// 문제: 안전지대 ❌❌
const assert = require("assert");

function solution(board) {
  const len = board.length;
  const posArr = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ]
  const booms = [];
  board.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col === 1) booms.push([rowIdx, colIdx]);
    })
  })
  booms.forEach((boom) => {
    posArr.forEach((pos) => {
      let rIdx = boom[0]+pos[0];
      let cIdx = boom[1]+pos[1];
      if (rIdx < 0) rIdx = 0;
      else if (rIdx >= len) rIdx = len-1;
      if (cIdx < 0) cIdx = 0;
      else if (cIdx >= len) cIdx = len-1;
      board[rIdx][cIdx] = 1;
    })
  })
  let cnt = 0;
  board.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col === 0) cnt += 1;
    })
  })
  return cnt;
}

describe("안전지대", () => {
  it("case 1", () => {
    assert.deepEqual(
      solution([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ]),
      16
    );
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ]),
      13
    );
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ]),
      0
    );
  });
});
