// Title: Special Sort
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

  console.log(n);
}

main([1, 2, 3, -3, -2, 5, 6, -6]);
