const assert = require("assert");

/**
 * 문제: 나머지 구하기
 */
function solution(array) {
  const newObject = array.reduce((acc, cur) => {
    acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

  function getKeyByValue(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const max = Math.max(...Object.values(newObject));
  if (Object.values(newObject).filter((x) => x === max).length > 1) {
    return -1;
  } else {
    return Number(getKeyByValue(newObject, max));
  }
}

// * 다른풀이
// function solution(array) {
//   const counts = array.reduce((acc, curr) => {
//     if (curr in acc) acc[curr] += acc[curr];
//     else acc[curr] = 1;
//     return acc;
//   }, {});
  
//   const max = Math.max(...Object.values(counts));
//   const result = Object.keys(counts).filter((key) => counts[key] === max);
//   return result.length === 1 ? Number(result[0]) : -1
// }

describe("나머지 구하기", () => {
  it("case 1", () => {
    assert.equal(solution([1, 2, 3, 3, 3, 4]), 3);
  });

  it("case 2", () => {
    assert.equal(solution([1, 1, 2, 2]), -1);
  });

  it("case 3", () => {
    assert.equal(solution([1]), 1);
  });
});
