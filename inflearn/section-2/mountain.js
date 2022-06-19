const solution = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const cur = arr[i][j];
      let top = arr[i - 1] ? arr[i - 1][j] : 0;
      let right = arr[i][j + 1] ? arr[i][j + 1] : 0;
      let bottom = arr[i + 1] ? arr[i + 1][j] : 0;
      let left = arr[i][j - 1] ? arr[i][j - 1] : 0;

      if (cur > top && cur > right && cur > bottom && cur > left) result++;
    }
  }

  return result;
};

const result = solution([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
console.log(result);
