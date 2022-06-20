const solution = (n, result = "") => {
  if (n === 0) return result;
  result += n % 2;
  return solution(Math.floor(n / 2), result);
};
const result = solution(25);
console.log(result);
