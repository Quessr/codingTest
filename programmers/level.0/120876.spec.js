// 문제: 겹치는 선분의 길이 ❌❌
const assert = require("assert");

function solution(lines) {
  const overlaps = [];
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const [s1, e1] = lines[i];
      const [s2, e2] = lines[j];
      const sMax = Math.max(s1, s2);
      const eMin = Math.min(e1, e2);
      if (sMax < eMin) overlaps.push([sMax, eMin]);
    }
  }

  const min = Math.min(...lines.map((x) => x[0]));
  const max = Math.max(...lines.map((x) => x[1]));

  const cntMap = overlaps
    .flatMap((overlap) =>
      Array.from(
        { length: overlap[1] - overlap[0] + 1 },
        (_, i) => i + overlap[0]
      )
    )
    .reduce((acc, cur) => {
      if (cur in acc) acc[cur] += 1;
      else acc[cur] = 1;
      return acc;
    }, {});
  const isAllOverlap = Object.values(cntMap).some((v) => v === overlaps.length);
  return Object.values(cntMap).length - (isAllOverlap ? 1 : overlaps.length);
}

describe("겹치는 선분의 길이 ❌", () => {
  it("case 1", () => {
    assert.deepEqual(
      solution([
        [0, 1],
        [2, 5],
        [3, 9],
      ]),
      2
    );
  });

  it("case 2", () => {
    assert.deepEqual(
      solution([
        [-1, 1],
        [1, 3],
        [3, 9],
      ]),
      0
    );
  });

  it("case 3", () => {
    assert.deepEqual(
      solution([
        [0, 5],
        [3, 9],
        [1, 10],
      ]),
      8
    );
  });
});
