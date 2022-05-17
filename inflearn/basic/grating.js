const solution = (array) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let 행 = 0;
  let 열 = 0;
  let 왼대각 = 0;
  let 오대각 = 0;

  for (let i = 0; i < array.length; i++) {
    행 = 0;
    열 = 0;

    for (let j = 0; j < array.length; j++) {
      행 += array[i][j];
      열 += array[j][i];
    }

    왼대각 += array[i][i];
    오대각 += array[i][array.length - i - 1];

    answer = Math.max(answer, 행, 열);
  }
  return (answer = Math.max(answer, 왼대각, 오대각));
};
const result = solution([
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
