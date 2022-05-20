const solution = (s) => {
  if (s.length === 1) return s[0];
  return solution(s.substring(1)) + s[0];
};
solution("abc");
