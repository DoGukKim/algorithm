/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 풀이
// Time: O(n)
// Space: O(n)
var intersection = function (nums1, nums2) {
  const map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true);
  }

  const result = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) result.add(nums2[i]);
  }

  return [...result];
};

// 다른 사람 풀이
// Time: O(n)
// Space: O(n)
// Runtime: 58 ms, faster than 98.77% of JavaScript online submissions
// Memory Usage: 42.1 MB
var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  return nums2.filter((num) => nums1.delete(num));
};
