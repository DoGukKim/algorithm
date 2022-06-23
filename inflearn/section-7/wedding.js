const solution = (arr) => {
  let result = 0;
  const timeLine = [];

  for (let i = 0; i < arr.length; i++) {
    timeLine.push([arr[i][0], "s"]);
    timeLine.push([arr[i][1], "e"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let i = 0; i < timeLine.length; i++) {
    if (timeLine[i][1] === "s") cnt++;
    else cnt--;
    result = Math.max(result, cnt);
  }

  return result;
};

// 재풀이
const repeat = (arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  const queue = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (queue[0][1] <= arr[i][0]) queue.shift();
    queue.push(arr[i]);
  }

  return queue.length;
};

// const result = solution([
//   [14, 18],
//   [12, 15],
//   [15, 20],
//   [20, 30],
//   [5, 14],
// ]);
// console.log(result);
