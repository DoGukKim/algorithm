const solution = (n, result = "") => {
  if (n === 0) return result.split("").reverse().join("");
  result += String(n % 2);
  return solution(Math.floor(n / 2), result);
};
const result = solution(9);
console.log(result);
