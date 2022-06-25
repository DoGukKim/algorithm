// 풀이
const solution = (n) => {
  return (n + 1) * (n / 2);
};

// 재귀 풀이
const recursive = (n) => {
  if (n === 1) return 1;
  return n + recursive(n - 1);
};

const main = (n) => {
  let result = 0;
  const recursion = (m) => {
    if (m === 0) return;
    result += m;
    recursion(m - 1);
  };
  recursion(n);
  console.log(result);
};

main(3);

// input
const result = solution(2);
