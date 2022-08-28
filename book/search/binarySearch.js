// 방법 1
// Time: O(log n)
// Space: O(1)
const main = (n, t) => {
  n.sort((a, b) => a - b);

  let lp = 0;
  let rp = n.length - 1;

  while (lp <= rp) {
    const m = Math.floor((lp + rp) / 2);

    if (t === n[m]) return n[m];
    if (t > n[m]) {
      lp = m + 1;
    }
    if (t < n[m]) {
      rp = m - 1;
    }
  }
};

console.log(main([1, 2, 3, 4, 5, 6], 2));
console.log(main([23, 87, 65, 12, 57, 32, 99, 81], 32));

// 방법 2
// Time: O(log (n^2))
// Space: O(n)
const main2 = (n, t) => {
  function search(arr) {
    const m = Math.floor(arr.length - 1 / 2);

    if (t === arr[m]) {
      // 기저 조건
      return arr[m];
    }

    if (t > arr[m]) {
      return search(arr.slice(m + 1, arr.length));
    }

    if (t < arr[m]) {
      return search(arr.slice(0, m - 1));
    }
  }

  return search(n.slice());
};

console.log(main2([1, 2, 3, 4, 5, 6], 2));
console.log(main2([23, 87, 65, 12, 57, 32, 99, 81], 32));
