// Title: 최장증가수열
// TIme: O(n^2)
// Space: O(n)
function main(n) {
  const dy = Array.from({ length: n.length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      if (n[j] < n[i]) {
        dy[i] = Math.max(dy[i], dy[j] + 1);
      } else dy[i] = 1;
    }
  }

  console.log(dy);
  console.log(Math.max(...dy));
}

main([5, 3, 7, 8, 6, 2, 9, 4]);
