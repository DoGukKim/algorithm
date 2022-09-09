// 방법 1
// n: numbers m: target
// Time: O(n^m)
// Space: O(m)
const main = (n, target) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i = 0; i < n.length; i++) {
    if (main(n, target - n[i]) === true) return true;
  }

  return false;
};

console.log(main([2, 3, 5], 7)); // true
console.log(main([2, 4], 7)); // false
console.log(main([5, 3, 4, 7], 7)); // true

// 방법 2
// DP
// Time: O(n*m)
// Space: O(m)
const main2 = (n, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i = 0; i < n.length; i++) {
    if (main2(n, target - n[i], memo) === true) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

console.log(main2([2, 3, 5], 7)); // true
console.log(main2([2, 4], 7)); // false
console.log(main2([5, 3, 4, 7], 7)); // true
console.log(main2([5, 3, 4, 7], 300)); // true
