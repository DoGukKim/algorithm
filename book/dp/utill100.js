// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n.length === 1) return n[0];
  const remainder = main(n.slice(1));
  return n[0] + remainder > 100 ? remainder : n[0] + remainder;
};

console.log(main([1, 2, 100, 3, 4]));
