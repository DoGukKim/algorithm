// 일방적인 피보나치 풀이
// O(N^2)
const solution = (n) => {
  if (n === 0 || n === 1) return n;
  return solution(n - 2) + solution(n - 1);
};

// 메모이제이션을 통한 피보나치 풀이
// O(N)
const memoSolution = (n, memo = new Map()) => {
  if (n === 0 || n === 1) return n;
  if (!memo.has(n)) {
    memo.set(n, solution(n - 2, memo) + solution(n - 1, memo));
  }
  return memo.get(n);
};
