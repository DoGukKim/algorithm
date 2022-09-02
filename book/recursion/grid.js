// Time: O(2^n+m)
// Space: O(n+m)
const main = (r, c) => {
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  return main(r - 1, c) + main(r, c - 1);
};

console.log(main(3, 3));
