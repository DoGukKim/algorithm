const solution = (n) => {
  if (n < 2) return 1;
  return solution(n - 1) + solution(n - 2);
};
solution(7);
