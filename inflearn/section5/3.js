// Title: 연속부분수열
// Time: O(n)
// Space: O(1)
function main(n, m, numbers) {
  let result = 0;
  let rt = 0;
  let sum = 0;

  for (let lt = 0; lt < n; lt++) {
    while (sum < m && rt < n) {
      sum += numbers[rt];
      rt++;
    }

    if (sum === m) result++;
    sum -= numbers[lt];
  }

  console.log(result);
}

main(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]);
