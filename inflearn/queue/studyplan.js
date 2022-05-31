// 풀이
const solution = (m, p) => {
  const queue = [...m];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === queue[0]) queue.shift();
  }
  return queue.length === 0 ? "YES" : "NO";
};
const result = solution("CBA", "CBDAGE");
console.log(result);

// 다른 사람 풀이
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}
