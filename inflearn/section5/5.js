// Title: 최대 매출
// Time: O(n)
// Space: O(1)
function main(n, m, list) {
  let result = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += list[rt];

    while (rt - lt > m - 1) {
      sum -= list[lt++];
    }

    result = Math.max(result, sum);
  }

  console.log(result);
}

main(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);
