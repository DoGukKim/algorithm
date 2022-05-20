const solution = (s) => {
  if (s.length === 1) {
    if (s[0] === "x") return 1;
  }

  if (s[0] === "x") return 1 + solution(s.substring(1));
  return solution(s.substring(1));
};
