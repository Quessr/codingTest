// 문제: 모스부호 (1)
const assert = require("assert");

function solution(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  var answer = letter.split(" ").map(x => morse[x]).join("")
  return answer;
}

describe("모스부호 (1)", () => {
  it("case 1", () => {
    assert.deepEqual(solution(".... . .-.. .-.. ---"), "hello");
  });

  it("case 2", () => {
    assert.deepEqual(solution(".--. -.-- - .... --- -."), "python");
  });
});
