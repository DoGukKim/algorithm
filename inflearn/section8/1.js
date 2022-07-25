// Time: O(n)
// Space: O(n)
const main = (n, c = 1) => {
  if (c > n) return;
  console.log(c);
  return main(n, c + 1);
};

console.log(main(3));
