const solution = (n) => {
  if (n > 7) return;
  // PreOrder
  console.log(n);
  solution(n * 2);
  // InOrder
  console.log(n);
  solution(n * 2 + 1);
  // PostOrder
  console.log(n);
};
solution(1);
