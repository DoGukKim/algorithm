const solution = (n) => {
  if (n === 0) return console.log("start!");
  console.log(n);
  return solution(n - 1);
};
solution(10);
