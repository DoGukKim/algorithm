/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Input: root = [1,null,2,2]
// Output: [2]

// Time: O(2^n)
// Space: O(n)
var findMode = function (root) {
  const map = new Map();
  let max = -Infinity;

  function dfs(node) {
    if (!node) return null;
    map.set(node.val, (map.get(node.val) || 0) + 1);
    if (map.get(node.val) > max) max = map.get(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  const result = [];
  for (let [key, val] of map) {
    if (val === max) result.push(key);
  }

  return result;
};
