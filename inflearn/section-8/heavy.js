const solution = (c, arr) => {
  arr.sort((a, b) => b - a);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] >= c) return (result = sum);
    sum += arr[i];
  }

  return result;
};
const result = solution(259, [81, 58, 42, 33, 61]);
console.log(result);
