// 방법 1
// Time: O(n)
// Space: O(1)
const main = (arr, k) => {
  let result = -Infinity;

  let lp = 0;
  let rp = 0;

  while (lp < arr.length - k) {
    let count = k;
    let sum = 0;

    while (count--) sum += arr[rp++];

    lp++;
    rp = lp;

    if (result < sum) result = sum;
  }

  return result;
};

console.log(main([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));

// 방법 2
// Time: O(n*k)
// Space: O(n)
const main2 = (n, k) => {
  const result = [];

  // k 번을 뺀 만큼 반복해야 19,13,15에서 끝난다
  for (let i = 0; i <= n.length - k; i++) {
    // i + k는 i 번 부터 k번만 실행하기 위함
    dfs(i, i + k);
  }

  function dfs(i, k, sum = 0) {
    if (i === k) {
      result.push(sum);
      return;
    }

    dfs(i + 1, k, sum + n[i]);
  }

  return Math.max(...result);
};

console.log(main2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
