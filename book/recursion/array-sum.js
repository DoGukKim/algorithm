const solution = (arr, index = 0) => {
  if (arr.length - 1 === index) return arr[index];
  return arr[index] + solution(arr, index + 1);
};

const otherSolution = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] + solution(arr.slice(1, arr.length));
};
