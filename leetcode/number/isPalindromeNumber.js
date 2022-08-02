/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;

  let temp = x;
  let res = 0;

  while (x) {
    res *= 10;
    res += x % 10;
    x = parseInt(x / 10, 10);
  }

  return temp === res;
};
