// Title: 소인수분해
// 방법 1
// Time: O(n)
// Space: O(n)
// Input: 12
function solution(n) {
  if (isPrime(n)) return [n];

  let d = 2;
  const s = new Set();

  while (n !== 1) {
    if ((n / d) % 1 !== 0) {
      d++;
      continue;
    }

    n = n / d;
    s.add(d);
  }

  return [...s];
}

const isPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
}; // -> [2, 3]

console.log(solution(12));
