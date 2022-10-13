// Title: 교육과정 설계
// 방법 1
// Time: O(n)
// Space: O(n)
function main(m, p) {
  const queue = [...m];

  for (let i = 0; i < p.length; i++) if (p[i] === queue[0]) queue.shift();

  return queue.length === 0 ? "YES" : "NO";
}

console.log(main("CBA", "CBDAGE")); // -> YES
