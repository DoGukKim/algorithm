// Title: 마구간 정하기
// Time: O(n log n)
// Space: O(1)
function main(n, c, coordinates) {
  coordinates.sort((a, b) => a - b);

  let lt = 1;
  let rt = coordinates[coordinates.length - 1];
  let result = 0;

  while (lt <= rt) {
    const pivot = Math.floor((lt + rt) / 2);

    if (countHorse(pivot) >= c) {
      result = pivot;
      lt = pivot + 1;
    } else {
      rt = pivot - 1;
    }
  }

  console.log(result);

  function countHorse(dist) {
    let horse = 1;
    let recent = coordinates[0];

    for (let i = 1; i < n; i++) {
      if (coordinates[i] - recent >= dist) {
        horse++;
        recent = coordinates[i];
      }
    }

    return horse;
  }
}

main(5, 3, [1, 2, 8, 4, 9]);
