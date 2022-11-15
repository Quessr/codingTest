// 문제: 로그인 성공? 
const assert = require("assert");

function solution([id, pw], db) {
  const user = db.find((user) => user[0] === id);
  if (!user) return "fail";
  if (pw !== user[1]) return "wrong pw";
  return "login";
}

describe("로그인 성공?", () => {
  it("case 1", () => {
    assert.equal(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]), "login");
  });

  it("case 2", () => {
    assert.equal(solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]), "wrong pw");
  });

  it("case 3", () => {
    assert.equal(solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]), "fail");
  });
});
