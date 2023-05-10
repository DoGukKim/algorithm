// Title: 소인수분해
// Time: O(nm)
// Space: O(n)
function solution(n) {
  if (isPrime(n)) return [n];

  const divisors = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }

  const result = [];
  for (let i = 0; i < divisors.length; i++) {
    if (isPrime(divisors[i])) result.push(divisors[i]);
  }
  return result;

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
