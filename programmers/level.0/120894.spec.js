// 문제: 영어가 싫어요 ❌
const assert = require("assert");

const numberMap = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
};

function solution(numbers) {
  // for ([index, key] of numberMap.entries()) {
  //   numbers = numbers.replaceAll(key, index);
  // }
  for ([key, value] of Object.entries(numberMap)) {
    numbers = numbers.replaceAll(key, value);
  }
  return Number(numbers);
}


describe("영어가 싫어요", () => {
  it("case 1", () => {
    assert.equal(solution("onetwothreefourfivesixseveneightnine"), 123456789);
  });

  it("case 2", () => {
    assert.equal(solution("onefourzerosixseven"), 14067);
  });
});
