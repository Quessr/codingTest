// 문제: 외계어 사전
const assert = require("assert");

function solution(spell, dic) {
  var answer = spell.sort().join("")
  const result = dic.map(x => x.split("").sort().join(""))
  if (result.includes(answer)) {
    return 1
  } return 2
}

// *dic과 spell 모두 중복된 원소를 갖지 않습니다. 제한 사항이 없는 경우 => 중복 가능한 경우는 includes 사용 불가
// function solution(spell, dic) {
//   var answer = 0;
//   return dic
//     .map((v) =>
//       v.split("").reduce((acc, curr) => {
//         if (acc[curr]) acc[curr] = acc[curr] + 1;
//         else acc[curr] = 1;
//         return acc;
//       }, {})
//     )
//     .filter((obj) => {
//       return spell.every((s) => obj[s] === 1);
//     }).length === 0
//     ? 2
//     : 1;
// }

describe("외계어 사전", () => {
  it("case 1", () => {
    assert.deepEqual(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]), 2);
  });

  it("case 2", () => {
    assert.deepEqual(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]), 1);
  });

  it("case 3", () => {
    assert.deepEqual(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]), 2);
  });
});
