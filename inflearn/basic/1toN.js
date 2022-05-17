const solution = (n) => {
  return (n + 1) * (n / 2);
};
const result = solution(2);

// 재귀 풀이
const recursive = (n) => {
  if (n === 1) return 1;
  return n + recursive(n - 1);
};