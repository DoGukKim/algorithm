// Title: 뮤직 비디오
// Math.max, reduce에서 O(n)으로 동작하기 떄문에 log n으로 표현할 수 없습니다.
// Time: O(n)
// Space: O(1)
function main(n, m, songs) {
  let result = 0;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    const pivot = Math.floor((lt + rt) / 2);

    if (countDVD(pivot) <= m) {
      result = pivot;
      rt = pivot - 1;
    } else {
      lt = pivot + 1;
    }
  }

  console.log(result);

  function countDVD(capacity) {
    let cnt = 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
      if (sum + songs[i] > capacity) {
        cnt++;
        sum = songs[i];
        continue;
      }

      sum += songs[i];
    }

    return cnt;
  }
}

main(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
