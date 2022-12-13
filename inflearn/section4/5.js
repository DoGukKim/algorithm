// Title: K번째 큰 수
// Time: O(n^3)
// Space: O(n!)
function main(k, n) {
  let result = [];
  const hash = {};

  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      for (let t = j + 1; t < n.length; t++) {
        const sum = n[i] + n[j] + n[t];
        if (!hash[sum]) {
          hash[sum] = true;
          result.push(sum);
        }
      }
    }
  }

  console.log(result.sort((a, b) => b - a)[k - 1]);
}

// 방법 2
// Time: O(n!)
// Space: O(n!)
function main(k, n) {
  const combinations = new Set();

  function dfs(i, combination) {
    // 만약 뽑는 카드가 3장으로 정해진게 아닌 n장일 경우는 재귀로 풀이
    if (combination.length === 3) {
      const sum = combination.reduce((a, c) => a + c, 0);
      combinations.add(sum);
      return;
    }

    for (let j = i; j < n.length; j++) {
      combination.push(n[j]);
      dfs(j + 1, combination);
      combination.pop();
    }
  }

  for (let i = 0; i < n.length; i++) {
    dfs(i, []);
  }

  console.log([...combinations].sort((a, b) => b - a)[k - 1]);
}

main(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
