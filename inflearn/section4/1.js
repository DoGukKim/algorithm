// Title: 자릿수의 합
// Time: O(n^2)
// Space: O(1)
function main(n) {
  let result = 0;
  let max = -Infinity;

  for (let i = 0; i < n.length; i++) {
    const temp = n[i];
    let sum = 0;

    while (n[i] > 0) {
      sum += n[i] % 10;
      n[i] = Math.floor(n[i] / 10);
    }

    if (max <= sum) {
      max = sum;
      if (result < temp) result = temp;
    }
  }

  console.log(result);
}

main([128, 460, 603, 40, 521, 137, 123]);
