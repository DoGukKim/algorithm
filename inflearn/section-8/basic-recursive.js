const solution = (n) => {
  if (n === 0) return;
  console.log(n);
  return solution(n - 1);
};
const result = solution(3);
