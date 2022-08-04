// Time: O(n^2)
// Space: O(n)
const main = (s) => {
  if (s.length === 0) return "";
  return main(s.slice(1)) + s[0]; // "doo" + "g"
};

console.log(main("good")); // -> "doog"
