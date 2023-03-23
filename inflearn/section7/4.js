// Title: 삽입 정렬
// Time: O(n^2)
// Space: O(1)
function main(n, numbers) {
  for (let i = 1; i < n; i++) {
    let current = i;

    while (
      numbers[current - 1] !== undefined &&
      numbers[current] < numbers[current - 1]
    ) {
      [numbers[current], numbers[current - 1]] = [
        numbers[current - 1],
        numbers[current],
      ];
      current--;
    }
  }

  console.log(numbers);
}

main(6, [11, 7, 5, 6, 10, 9]);
