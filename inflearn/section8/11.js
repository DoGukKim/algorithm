// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (n) => {
  if (n === 1) return 1;
  return n * main(n - 1);
};

console.log(main(5));
