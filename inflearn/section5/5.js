// Title: 최대 매출
// Time: O(n*k)
// Space: O(1)
function main(n, k) {
  let result = -Infinity;

  for (let lp = 0; lp < n.length; lp++) {
    let c = k;
    let sum = 0;
    let rp = lp;

    while (c--) {
      sum += n[rp];
      rp++;
    }

    if (result < sum) result = sum;
  }

  console.log(result);
}

main([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
