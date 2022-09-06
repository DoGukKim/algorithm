// Time: O(n)
// Space: O(n)
const main = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 0) return 0;
  if (n === 0) return 1;
  memo[n] = main(n - 1, memo) + main(n - 2, memo);
  return memo[n];
};

console.log(main(7)); // 21
console.log(main(100)); // 573147844013817200000
