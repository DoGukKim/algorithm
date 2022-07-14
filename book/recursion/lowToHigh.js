// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (low, high) => {
  if (low > high) return;
  console.log(low);
  return main((low += 2), high);
};

console.log(main(0, 10));
