// Title: 연속부분수열(1)
// 방법 1
// Time: O(n*m) -> if n have only 1 like [1,1,1,1...]
// Space: O(1)
function main(n, m) {
  let result = 0;
  let lt = 0;
  let sum = 0;

  for (let rp = 0; rp < n.length; rp++) {
    sum += n[rp];

    if (sum === m) result++;

    while (sum >= m) {
      sum -= n[lt++];
      if (sum === m) result++;
    }
  }

  console.log(result);
}

main([1, 2, 1, 3, 1, 1, 1, 2], 6);
