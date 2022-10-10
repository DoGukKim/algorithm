// Title: 연필 개수
// 방법 1
// Time: O(1)
// Space: O(1)
// InputA: 25
// InputB: 178
function main(n) {
  return Math.ceil(n / 12);
}

console.log(main(25)); // -> 3
console.log(main(178)); // -> 15

// 방법 2
// Time: O(n) -> n / 12
// Space: O(n)
function main(n) {
  function dfs(p, d) {
    if (p > n) return d;
    // 12자루씩 더해가면서 다스 1씩 추가
    return dfs(p + 12, d + 1);
  }
  return dfs(0, 0);
}
