// Title: 졸업 선물
// Time: O(n^2)
// Space: O(1)
function main(n, m, list) {
  list.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let result = 0;

  for (let i = 0; i < n; i++) {
    let sum = Math.floor(list[i][0] / 2) + list[i][1];
    let count = 1;

    for (let j = 0; j < n; j++) {
      const price = list[j][0] + list[j][1];
      if (j !== i && sum + price <= m) {
        sum += price;
        count++;
      }
    }

    if (result < count) result = count;
  }

  console.log(result);
}

main(5, 28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
