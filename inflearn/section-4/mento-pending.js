const solution = (n, m, arr) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        for (let t = 0; t < n; t++) {
          arr[k][t];
        }
      }
    }
  }

  return result;
};
const result = solution(4, 3, [3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]);
console.log(result);
