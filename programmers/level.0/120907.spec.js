// 문제: OX퀴즈 ❌
const assert = require("assert");

function solution(quiz) {
  var Q = quiz.map(x => {
    const [xy, z] = x.split(" = ");
    return eval(xy) === Number(z) ? "O" : "X";
    
      //* 다른풀이1
       // const arr = x.split(" ")
       // const [a, op, b, _, d] = arr;
       // let result;
       // if (op === '+') result = Number(a) + Number(b); 
       // else result = Number(a) - Number(b)
       // return result === Number(d) ? "O" : "X"
    
      //* 다른풀이2
       // if (op === '+' && Number(a) + Number(b) === Number(d)) {
       // return "O"
       // } else if (op === '+' && Number(a) + Number(b) !== Number(d)) {
       // return "X"
       // } else if (op === '-' && Number(a) - Number(b) === Number(d)) {
       // return "O"
       // } else if (op === '-' && Number(a) - Number(b) !== Number(d)) {
       // return "X"
       // }
  })
return Q;
}

solution(["3 - 4 = -3", "5 + 6 = 11"])

describe("OX퀴즈", () => {
  it("case 1", () => {
    assert.equal(solution(["3 - 4 = -3", "5 + 6 = 11"]), ["X", "O"]);
  });

  it("case 2", () => {
    assert.equal(solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]), ["O", "O", "X", "O"]);
  });
});
