// Time: O(1)
// Space: O(1)
const main = (a, b, c) => {
  let total = a + b + c;
  let max = Math.max(a, b, c);
  if (total - max <= max) return "NO";
  return "YES";
};

console.log(main(6, 7, 11));
console.log(main(13, 33, 17));
