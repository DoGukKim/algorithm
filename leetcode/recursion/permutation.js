/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time: O(n!)
// Space: O(n^2)
var permute = function (nums) {
  const result = [];

  function dfs(i) {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    } else {
      for (let j = i; j < nums.length; j++) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        dfs(i + 1);
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  dfs(0);

  return result;
};

var permute = function (nums) {
  const result = [];

  function permutation(temp) {
    if (nums.length === temp.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) continue;
      temp.push(nums[i]);
      permutation(temp);
      temp.pop();
    }
  }

  permutation([]);

  return result;
};
