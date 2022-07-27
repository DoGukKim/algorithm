// Normal
// Time: O(2^n)
// Space: O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
};

console.log(fib(6)); // -> 8

// DP
// Time: O(n)
// Space: O(n)
const fibM = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibM(n - 1, memo) + fibM(n - 2, memo);
  return memo[n];
};

console.log(fibM(6));

// { '3': 2 } 3번째 수열의 값 저장
// { '3': 2, '4': 3 } 4번째 수열의 값 저장
// { '3': 2, '4': 3, '5': 5 } 5번째 수열의 값 저장
// -> 8
