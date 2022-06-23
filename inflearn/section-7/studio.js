const solution = (arr, m) => {
  let result = 0;
  let startPoint = Math.max(...arr);
  let endPoint = arr.reduce((acc, cur) => acc + cur, 0);

  while (startPoint <= endPoint) {
    const middlePoint = Math.floor((startPoint + endPoint) / 2);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > middlePoint) {
        result++;
        sum = arr[i];
      } else {
        sum += arr[i];
      }
    }

    if (result <= m) {
      endPoint = middlePoint - 1;
    } else {
      startPoint = middlePoint + 1;
    }
  }

  return result;
};
const result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// 또 다른 풀이
const otherSolution = (m, arr) => {
  let min = Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / m);
  let sum = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] >= min) {
      result = sum + arr[i];
      sum = 0;
    }
    sum += arr[i];
  }

  return result;
};
