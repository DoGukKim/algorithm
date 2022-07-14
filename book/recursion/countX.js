// TimeComplexity O(n^2)
// SpaceComplexity O(n)
const main = (string, count = 0) => {
  if (string.length === 0) return count;
  if (string[0] === "X") count += 1;
  return main(string.slice(1), count);
};

console.log(main("XCX"));
