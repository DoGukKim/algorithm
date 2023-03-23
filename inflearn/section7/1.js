// Title: 선택 정렬
// Time: O(n^2)
// Space: O(1)
function main(n, numbers) {
  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (numbers[j] < numbers[min]) min = j;
    }

    [numbers[i], numbers[min]] = [numbers[min], numbers[i]];
  }

  console.log(numbers);
}

main(6, [13, 5, 11, 7, 23, 15]);
