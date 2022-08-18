// 방법 1
// Time: O(n+m)
// Space: O(1)
const main = (arr, m) => {
  let result = 0;
  let lp = 0;
  let rp = lp + 1;
  let sum = arr[lp];

  while (lp <= arr.length) {
    if (sum + arr[rp] > m) {
      lp++;
      rp = lp + 1;
      sum = arr[lp];
    }

    if (sum + arr[rp] === m) {
      result++;
      lp++;
      rp = lp + 1;
      sum = arr[lp];
    }

    sum += arr[rp];
    rp++;

    if (rp >= arr.length - 1) break;
  }

  return result;
};

console.log(main([1, 2, 1, 3, 1, 1, 1, 2], 6));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (n, m) => {
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    dfs(i);
  }

  function dfs(i, index = i, sum = 0) {
    if (sum > m) {
      return;
    }
    if (sum === m) {
      result++;
      return;
    }
    if (index === n.length) {
      return;
    }

    dfs(i, index + 1, sum + n[index]);
  }

  return result; // -> [ [ 2, 1, 3 ], [ 1, 3, 1, 1 ], [ 3, 1, 1, 1 ] ]
};

console.log(main2([1, 2, 1, 3, 1, 1, 1, 2], 6));
