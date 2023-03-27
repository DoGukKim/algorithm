// Title: 이분검색
// 이진 탐색은 log n이지만, 정렬에서 n log n이 발생합니다.
// Time: O(n log n)
// Space: O(1)
const main = (n, t, numbers) => {
  numbers.sort((a, b) => a - b);
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (numbers[middle] === t) {
      console.log(middle + 1);
      return;
    }

    if (t > numbers[middle]) start = middle + 1;
    if (t < numbers[middle]) end = middle - 1;
  }
};

main(8, 32, [23, 87, 65, 12, 57, 32, 99, 81]);
