// 문제: 7의 개수
const assert = require("assert");

function solution(array) {
  var answer = array
    .join("")
    .split("")
    .filter((x) => x === "7").length;

    return answer;
    
    // * 다른풀이
    // var answer = array.join("").split(7).length - 1;
    // return answer;
}

describe("7의 개수", () => {
  it("case 1", () => {
    assert.equal(solution([7, 77, 17]), 4);
  });

  it("case 2", () => {
    assert.equal(solution([10, 29]), 0);
  });
});
