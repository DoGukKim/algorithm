// Title: 결혼식
// Time: O(n log n)
// Space: O(n)
function main(n, record) {
  const timeLines = [];
  for (let i = 0; i < n; i++) {
    timeLines.push([record[i][0], "s"]);
    timeLines.push([record[i][1], "e"]);
  }

  timeLines.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[0] - b[0];
  });

  let result = 0;
  let sum = 0;
  for (let i = 0; i < timeLines.length; i++) {
    if (timeLines[i][1] === "s") {
      sum++;
    } else sum--;

    if (result < sum) result = sum;
  }

  console.log(result);
}

main(5, [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);

main(3, [
  [1, 5],
  [2, 3],
  [3, 4],
]);
