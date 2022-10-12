// Title: 졸업 선물
// 방법 1
// Time: O(n^2)
// Space: O(1)
// Input:
// 6, 6
// 2, 2
// 4, 3
// 4, 5
// 10, 3
// 28
function main(n, m) {
  n.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let result = 0;

  for (let i = 0; i < n.length; i++) {
    let count = 1;
    let sum = n[i][0] / 2 + n[i][1];

    for (let j = 0; j < n.length; j++) {
      if (i !== j) {
        const price = n[j][0] + n[j][1];

        if (sum + price > m) {
          if (result < count) result = count;
          break;
        }

        sum += price;
        count++;
      }
    }
  }

  return result;
}

console.log(
  main(
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    28
  )
); // -> 4
