// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n === 1) return 1;
  return main(n - 1) + n;
};

console.log(main(3)); // -> 6
console.log(main(7)); // -> 28
