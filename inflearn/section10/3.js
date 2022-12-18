// Title: 최장증가수열
// 방법 1
// TIme: O(n^2)
// Space: O(n)
function main(n) {
  const dy = Array.from({ length: n.length }, () => 1);

  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      if (n[j] < n[i] && dy[i] <= dy[j]) {
        dy[i] = Math.max(dy[i], dy[j] + 1);
      }
    }
  }

  console.log(Math.max(...dy));
}

main([5, 3, 7, 8, 6, 2, 9, 4]);

// 방법 2
// TIme: O(n log n)
// Space: O(n)
function main(n) {
  const lis = [n[0]];

  for (let i = 1; i < n.length; i++) {
    if (n[i] > lis[lis.length - 1]) {
      lis.push(n[i]);
    } else {
      let lp = 0;
      let rp = lis.length - 1;

      while (lp <= rp) {
        const mid = Math.floor((lp + rp) / 2);

        if (lis[mid] < n[i]) {
          lp = mid + 1;
        } else rp = mid - 1;
      }

      lis[lp] = n[i];
    }
  }

  console.log(lis.length);
}

main([5, 3, 7, 8, 6, 2, 9, 4]);
