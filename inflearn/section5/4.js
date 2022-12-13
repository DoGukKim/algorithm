// Title: 연속부분수열(2)
// Time: O(n)
// Space: O(1)
function main(n, m) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] < m) result++;
    if (n[i] + n[i + 1] < m) result++;
    sum += n[i];

    if (sum === m) {
      result++;
      sum = 0;
    }
  }

  console.log(result);
}

main([1, 3, 1, 2, 3], 5);
