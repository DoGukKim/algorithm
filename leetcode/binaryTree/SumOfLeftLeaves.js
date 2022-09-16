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
 * @return {number}
 */
// Input: root = [3,9,20,null,null,15,7]
// Output: 24

// Time: O(2^n)
// Space: O(n)
var sumOfLeftLeaves = function (root) {
  let result = 0;

  function dfs(node) {
    if (!node) return null;

    if (node.left && !node.left.left && !node.left.right) {
      result += node.left.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result;
};

// Time: O(2^n)
// Space: O(n)
var sumOfLeftLeaves = (node, isLeft) => {
  if (!node) return 0;
  if (!node.left && !node.right && isLeft) return node.val;

  return sumOfLeftLeaves(node.left, true) + sumOfLeftLeaves(node.right, false);
};
