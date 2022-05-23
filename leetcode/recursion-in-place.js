// reverse in place using recursion
const solution = (s) => {
  if (s.length === 0) return;
  let temp = s[0];
  s.shift();
  solution(s);
  s.push(temp);
};
const result = solution(["a", "b", "c", "d"]);
