// 일방적인 재귀를 활용한 피보나치 풀이
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

// 상향식 피보나치 풀이
// O(N)
const upperSolution = (n) => {
  if (n === 0) return 0;

  let n1 = 0;
  let n2 = 1;
  let temp;

  for (let i = 1; i < n; i++) {
    temp = n1;
    n1 = n2;
    n2 = temp + n1;
  }

  return n2;
};
