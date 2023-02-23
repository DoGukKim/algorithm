// Title: 바둑이 승차
// 방법 1 (그리디)
// Time: O(n log n)
// Space: O(1)
function main(c, n, dogs) {
  let result = 0;
  dogs.sort((a, b) => b - a); // 무게가 무거운 바둑이 순으로 정렬

  for (let i = 0; i < n; i++) {
    if (result + dogs[i] < c) result += dogs[i];
  }

  console.log(result);
}

// 방법 2 (재귀)
// 만약 풀이 제한시간이 1초로 정해져 있다면,
// 입력값 n이 30으로 올때 해당 방법으로 풀 수 없다.
// Time: O(2^n)
// Space: O(n)
function main(c, n, dogs) {
  let result = 0;
  dfs(0, 0);
  console.log(result);

  function dfs(l, max) {
    if (l === n) return;
    if (max + dogs[l] > c) return;

    const contain = max + dogs[l];
    if (result < contain) result = contain;
    dfs(l + 1, contain);
    dfs(l + 1, max);
  }
}

// 방법 3 (재귀)
// Time: O(n^n)
// Space: O(n)
// 만약 풀이 제한시간이 1초로 정해져 있다면,
// 입력값 n이 30으로 올때 해당 방법으로 풀 수 없다.
function main(c, n, dogs) {
  let result = 0;
  dfs(0, 0);
  console.log(result);

  function dfs(j, max) {
    for (let i = j; i < n; i++) {
      const contain = max + dogs[i];
      if (contain > c) continue;
      if (result < contain) result = contain;
      dfs(i + 1, contain);
    }
  }
}
