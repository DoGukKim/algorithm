function solution(lines) {
  let result = 0;

  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[i][1] <= lines[j][0] || lines[i][0] >= lines[j][1]) {
        continue;
      } // 포함되지 않는 경우
    }
  }

  return result;
}

const lines = [
  [0, 1],
  [2, 5],
  [3, 9],
];

const lines2 = [
  [0, 5],
  [3, 9],
  [1, 10],
];

const lines3 = [
  [-1, 1],
  [1, 3],
  [3, 9],
];

const lines4 = [
  [0, 2],
  [-3, -1],
  [-2, 1],
];

console.log(solution(lines));
