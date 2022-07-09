// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (arr, m) => {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
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

console.log(main([1, 3, 1, 2, 3], 5));
