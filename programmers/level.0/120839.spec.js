// 문제: 가위 바위 보
const assert = require("assert");

// 가위 2
// 바위 0
// 보 5

function solution(rsp) {
  // rsp가 2일 경우 => 0
  // rsp가 0일 경우 => 5
  // rsp가 5일 경우 => 2
  var answer = rsp.split("").map((x) => {
    if (x === "2") return "0"
    if (x === "0") return "5"
    if (x === "5") return "2"
    return x
  });

  return answer.join("");
}

describe("가위 바위 보", () => {
  it("case 1", () => {
    assert.deepEqual(solution("2"), "0");
  });

  it("case 2", () => {
    assert.deepEqual(solution("205"), "052");
  });
});
