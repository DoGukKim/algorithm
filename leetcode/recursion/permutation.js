/**
 * @param {number[]} nums
 * @return {number[][]}
 */

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
  const temp = [];

  function permutation(nums, temp, result) {
    if (nums.length === temp.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) continue;
      temp.push(nums[i]);
      permutation(nums, temp, result);
      temp.pop();
    }
  }

  permutation(nums, temp, result);
  return result;
};
