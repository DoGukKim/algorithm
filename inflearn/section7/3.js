// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (n) => {
  for (let i = 0; i < n.length - 1; i++) {
    for (let j = 0; j < n.length - i - 1; j++) {
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]];
      }
    }
  }

  return n;
};

console.log(main([1, 2, 3, -3, -2, 5, 6, -6]));

// 방법 2
// Time: O(n^2)
// Space: O(1)
const main2 = (n) => {
  let isSwap = true;

  while (isSwap) {
    isSwap = false;

    for (let i = 0; i < n.length; i++) {
      if (n[i] > n[i + 1]) {
        [n[i], n[i + 1]] = [n[i + 1], n[i]];
        swap = true;
      }
    }
  }

  return n;
};

console.log(main2([1, 2, 3, -3, -2, 5, 6, -6]));
