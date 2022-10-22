const assert = require("assert");

/**
 * 문제: 옷가게 할인 받기
 */
function solution(price) {
  if (price < 100000) return price
  if (price < 300000 ) return 0.95 * price
  if (price < 500000 ) return 0.9 * price
  return 0.8 * price;
}

describe("옷가게 할인 받기", () => {
  it("case 1", () => {
    assert.equal(solution(150000), 142500);
  });

  it("case 2", () => {
    assert.equal(solution(580000), 464000);
  });
});
