// 문제: 캐릭터의 좌표 ❌
const assert = require("assert");

function solution(keyinput, board) {
  let y = 0;//세로
  let x = 0;//가로
  const rangeX = Math.trunc(board[0] / 2);
  const rangeY = Math.trunc(board[1] / 2);
  for(let i = 0;i< keyinput.length; i++){
    console.log(x, y)
    if(keyinput[i]==="up"  && Math.abs(y + 1) <= rangeY){
      y++;
    }
    else if(keyinput[i]==="down" && Math.abs(y - 1) <= rangeY){
      y--;
    }
    else if(keyinput[i]==="left" && Math.abs(x - 1) <= rangeX){
      x--;
    }
    else if(keyinput[i]==="right" && Math.abs(x + 1) <= rangeX){
      x++;
    }
    console.log(x, y)
  }

  return [x, y]
}

describe("캐릭터의 좌표", () => {
  it("case 1", () => {
    assert.deepEqual(solution(["left", "right", "up", "right", "right"], [11, 11]), [2, 1]);
  });

  it("case 2", () => {
    assert.deepEqual(solution(["down", "down", "down", "down", "down"], [7, 9]), [0, -4]);
  });
});
