// 동전교환(냅색)
// Time: O(n*m)
// Space: O(m)
function main(m, coin) {
  const dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }

  console.log(dy[m]);
}

main(15, [1, 2, 5]);
