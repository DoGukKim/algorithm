const arr = [
  [0, 13, 12, 11, 10, 9],
  [1, 0, 0, 0, 0, 8],
  [2, 3, 4, 5, 6, 7],
];

const n = 3;
const m = 6;
button(0);
function button(x) {
  let prev = 0;

  for (let i = 1; i < m; i++) {
    let temp = arr[x][i];
    arr[x][i] = prev;
    prev = temp;
  }

  for (let i = x + 1; i < n; i++) {
    let temp = arr[i][m - 1];
    arr[i][m - 1] = prev;
    prev = temp;
  }

  for (let i = m - 2; i >= 0; i--) {
    let temp = arr[n - 1][i];
    arr[n - 1][i] = prev;
    prev = temp;
  }

  for (let i = n - 2; i >= x; i--) {
    let temp = arr[i][0];
    arr[i][0] = prev;
    prev = temp;
  }

  arr[x][0] = 0;
}

console.log(arr);
