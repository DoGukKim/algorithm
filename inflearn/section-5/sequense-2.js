const solution = (arr, m) => {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < m) result++;
    if (arr[i] + arr[i + 1] < m) result++;
    sum += arr[i];
    if (sum === 5) {
      result++;
      sum = 0;
    }
  }

  return result;
};
const result = solution([1, 3, 1, 2, 3], 5);
console.log(result);
