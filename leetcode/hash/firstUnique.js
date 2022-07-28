/**
 * @param {string}
 * @return {number}
 */

// Time: O(n)
// Space: O(n)
// Runtime: 115 ms faster than 85.66% of JavaScript online submissions.
// Memory Usage: 45.7 MB.
var firstUniqChar = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }

  return -1;
};

// Time: O(n^2)
// Space: O(1)
// Runtime: 97 ms, faster than 96.46% of JavaScript online submissions
// Memory Usage: 44.8 MB
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
      return i;
    }
  }

  return -1;
};
