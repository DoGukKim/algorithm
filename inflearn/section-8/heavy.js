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

// 재귀 이진트리 풀이
const main = (c, arr) => {
  let result = -Infinity;

  const recursion = (level = 0, sum = 0) => {
    if (sum > c) return;
    if (level === arr.length) {
      result = Math.max(sum, result);
      return;
    }

    recursion(level + 1, sum + arr[level]);
    recursion(level + 1, sum);
  };

  recursion();

  console.log(result);
};

main(259, [81, 58, 42, 33, 61]);
