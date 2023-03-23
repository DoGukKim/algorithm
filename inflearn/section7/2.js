// Title: 버블 정렬
// 방법 1
// Time: O(n^2)
// Space: O(1)
function main(n, numbers) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (numbers[j] > numbers[j + 1])
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
    }
  }

  console.log(numbers);
}

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

  console.log(n);
}

main(6, [13, 5, 11, 7, 23, 15]);
