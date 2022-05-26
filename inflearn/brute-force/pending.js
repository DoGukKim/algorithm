const solution = (n, list) => {
  for (let i = 0; i < list.length; i++) {
    list[i][0] = list[i][0] / 2;
  }

  let result = 0;
  let sum = 0;

  for (let j = 0; j < list.length; j++) {
    if (list[j + 1]) {
      const total = list[j][0] + list[j][1] + list[j + 1][0] + list[j + 1][1];
      if (sum + total < n) {
        result += 1;
        sum += total;
      }
    }
  }

  return result;
};

const list = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
const result = solution(28, list);
console.log(result);
