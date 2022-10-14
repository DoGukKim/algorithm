// Title: 버블 정렬
// 방법 1
// Time: O(n^2)
// Space: O(1)
function main(n) {
  for (let i = 0; i < n.length - 1; i++) {
    for (let j = 0; j < n.length - i - 1; j++) {
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]];
      }
    }
  }

  return n;
}

console.log(main([13, 5, 11, 7, 23, 15]));

// 방법 2
// Time: O(n^2)
// Space: O(1)
function main(n) {
  let isSwap = true;

  while (isSwap) {
    isSwap = false;

    for (let i = 0; i < n.length; i++) {
      if (n[i] > n[i + 1]) {
        [n[i], n[i + 1]] = [n[i + 1], n[i]];
        isSwap = true;
      }
    }
  }

  return n;
}
