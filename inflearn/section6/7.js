// Title: 교육과정 설계
// 방법 1
// Time: O(n)
// Space: O(n)
function main(n, m) {
  const queue = n.split("");

  for (let i = 0; i < m.length; i++) {
    if (queue[0] === m[i]) queue.shift();
  }

  console.log(queue.length ? "NO" : "YES");
}

// 방법 2
// Time: O(n)
// Space: O(1)
function main(n, m) {
  let lt = 0;

  for (let i = 0; i < m.length; i++) {
    if (n[lt] === m[i]) lt++;
  }

  console.log(lt !== n.length ? "NO" : "YES");
}

main("CBA", "CBDAGE");
main("CBA", "BAC");
