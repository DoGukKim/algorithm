// Title: 연속부분수열(2)
// Time: O(n)
// Space: O(1)
function main(n, m, numbers) {
  let result = 0;
  let sum = 0;
  let rt = 0;

  for (let lt = 0; lt < n; lt++) {
    sum += numbers[lt];

    while (sum > m) {
      sum -= numbers[rt++];
    }

    result += lt - rt + 1;
  }

  console.log(result);
}

main(5, 5, [1, 3, 1, 2, 3]);
