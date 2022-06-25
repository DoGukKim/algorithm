// 재귀식 풀이
const main = (arr) => {
  const result = [arr[0]];
  const recursion = (level = 0) => {
    if (level === arr.length) return;
    if (arr[level] < arr[level + 1]) result.push(arr[level + 1]);
    recursion(level + 1);
  };
  recursion();

  console.log(result);
};

main([7, 3, 9, 5, 6, 12]);
