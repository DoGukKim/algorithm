// 일방적인 재귀를 활용한 피보나치 풀이
// TimeComplexity O(2^n)
// SpaceComplexity O(n)
const solution = (n) => {
  if (n <= 2) return 1;
  return solution(n - 2) + solution(n - 1);
};

// 메모이제이션을 통한 피보나치 풀이
// TimeComplexity O(n)
// SpaceComplexity O(n)
const memoSolution = (n, memo = new Map()) => {
  if (n <= 2) return 1;
  if (!memo.has(n)) {
    memo.set(n, solution(n - 2, memo) + solution(n - 1, memo));
  }
  return memo.get(n);
};

const memoFib = (n = 6, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
};

// 상향식 피보나치 풀이
// TimeComplexity O(n)
// SpaceComplexity O(n)
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
