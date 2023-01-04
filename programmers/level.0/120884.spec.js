// 문제: 치킨 쿠폰
const assert = require("assert");

function solution(chicken) {
  let maxServiceChicken = 0
  let coupon = chicken
  while (true) {
    maxServiceChicken += Math.trunc(coupon / 10)
    coupon = Math.trunc(coupon / 10) + coupon % 10
    console.log(maxServiceChicken)
    if ( coupon < 10 ) { 
    break 
    }
  } 
  return maxServiceChicken
}

//1081

//서비스 치킨(쿠폰의 수): 108
//남은 쿠폰의 수: 1
//총 쿠폰의 수: 109

//서비스 치킨(쿠폰의 수): 10
//남은 쿠폰의 수: 9
//총 쿠폰의 수: 19

//서비스 치킨(쿠폰의 수): 1
//남은 쿠폰의 수: 9
//총 쿠폰의 수: 10

//서비스 치킨(쿠폰의 수): 1
//남은 쿠폰의 수: 0
//총 쿠폰의 수: 1

//최대 서비스 치킨의 수: 108 + 10 + 1 + 1 = 120

describe("치킨 쿠폰", () => {
  it("case 1", () => {
    assert.equal(solution(100), 11);
  });

  it("case 2", () => {
    assert.equal(solution(1081), 120);
  });
});
