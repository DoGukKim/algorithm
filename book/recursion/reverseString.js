// TimeComplexity O(n^2)
// SpaceComplexity O(n)
const main = (string) => {
  if (string.length === 1) return string[0];
  return main(string.slice(1)) + string[0];
};

console.log(main("abc"));
