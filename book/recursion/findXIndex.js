// Time: O(n)
// Space: O(n)
const main = (s, index = 0) => {
  if (s[index] === "x") return index;
  return main(s, index + 1);
};

console.log(main("abcdxdsdfs")); // -> 4
