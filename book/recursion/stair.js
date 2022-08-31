// 방법 1
// Time: O(2^n)
// Space: O(n)
const main = (n) => {
  if (n === 0) return 1;
  if (n < 0) return 0;
  return main(n - 1) + main(n - 2);
};

console.log(main(3));
console.log(main(4));
