// 문제: A로 B 만들기
const assert = require("assert");

function solution(before, after) {
  const B = before.split("").sort().join()
  const A = after.split("").sort().join()
  return Number(B === A);
}

// * 참조타입과 원시타입 *
// 배열은 참조타입(주소값)이라서 직접 비교가 안된다 => split().sort()까지만 한 상태에서는 배열이라서 값이 비교가 안됨 (같지 않음)
// join()을 해줘서 문자열로 만든다음에 비교가 가능하다
describe("A로 B 만들기", () => {
  it("case 1", () => {
    assert.deepEqual(solution("olleh", "hello"), 1);
  });

  it("case 2", () => {
    assert.deepEqual(solution("allpe", "apple"), 	0);
  });
});
