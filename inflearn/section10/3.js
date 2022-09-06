// TIme: O(n^2)
// Space: O(n)
const main = (n) => {
  let dp = Array.from({ length: n.length }, () => 1);
  let longest = 0;

  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      if (n[j] < n[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        longest = Math.max(longest, dp[i]);
      }
    }
  }

  return longest;
};

console.log(main([5, 3, 7, 8, 6, 2, 9, 4]));
