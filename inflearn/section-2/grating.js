const solution = (arr) => {
  let result = 0;

  let leftCross = 0;
  let rightCross = 0;

  for (let i = 0; i < arr.length; i++) {
    let row = 0;
    let colum = 0;

    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      colum += arr[j][i];
    }

    leftCross += arr[i][i];
    rightCross += arr[i][arr.length - 1 - i];

    const max = Math.max(row, colum, leftCross, rightCross);
    if (result < max) result = max;
  }

  return result;
};

const result = solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);

console.log(result);
