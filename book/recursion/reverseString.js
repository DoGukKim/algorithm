// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (string) => {
  if (string.length === 0) return "";
  return main(string.slice(1)) + string[0];
};

console.log(main("abc"));
