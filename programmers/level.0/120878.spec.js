// 문제: 유한소수 판별하기 ❌❌
const assert = require("assert");

function getGCD(a, b) {
  let gcd = 1;
  for (let i = gcd; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

function isPrime(num) {
  const sqrtNum = Math.sqrt(num);
  for(let i = 2; i <= sqrtNum; i++){
    if(num % i === 0) return false;
  }
  return num > 1;
}

function solution(a, b) {
  const gcd = getGCD(a, b);
  const n = b / gcd;
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i) && n % i === 0) primes.push(i);
  }
  
  return primes.every((prime) => [2, 5].includes(prime)) ? 1 : 2
}

describe("유한소수 판별하기", () => {
  it("case 1", () => {
    assert.deepEqual(solution(7, 20), 1);
  });

  it("case 2", () => {
    assert.deepEqual(solution(11, 22), 1);
  });

  it("case 3", () => {
    assert.deepEqual(solution(12, 21), 2);
  });
});
