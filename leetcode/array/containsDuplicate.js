/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time: O(n^2)
// Space: O(1)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      if (j !== i && nums[i] === nums[j]) return true;

  return false;
};

// Time: O(1)
// Space: O(n)
var containsDuplicate = function (nums) {
  return [...new Set(nums)].length !== nums.length;
};
// -> [ 1, 2, 3, 4 ]

// Time: O(n)
// Space: O(n)
var containsDuplicate = function (nums) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) return true;
    hash.set(nums[i], nums[i]);
  }
  return false;
};
