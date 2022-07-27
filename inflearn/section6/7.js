// Time: O(n)
// Space: O(n)
const main = (m, p) => {
  const queue = [...m];

  for (let i = 0; i < p.length; i += 1) if (p[i] === queue[0]) queue.shift();

  return queue.length === 0 ? "YES" : "NO";
};

console.log(main("CBA", "CBDAGE"));

// 재귀식 풀이
// Time: O(n^2)
// Space: O(n)
const recursion = (m, p, queue = [...m]) => {
  if (p.length === 0) return queue.length === 0 ? "YES" : "NO";

  if (p[0] === queue[0]) queue.shift();

  return recursion(m, p.slice(1), queue);
};

console.log(recursion("CBA", "CBDAGE"));
