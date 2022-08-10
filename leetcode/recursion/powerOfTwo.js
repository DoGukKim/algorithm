/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
  if (n === 1) return true;

  function dfs(m) {
    if (m > n) return false;
    if (m === n) return true;
    return dfs(m * 2);
  }

  return dfs(2);
};
