const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      if (next) {
        if (current[0] > next[0])
          [arr[j][0], arr[j + 1][0]] = [arr[j + 1][0], arr[j][0]];
        if (current[1] > next[1])
          [arr[j][1], arr[j + 1][1]] = [arr[j + 1][1], arr[j][1]];
      }
    }
  }

  return arr;
};

const result = solution([
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]);
