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
 * @return {boolean}
 */

// Time: O(n)
// Space: O(n)
var isBalanced = function (tree) {
  let isBalanced = true;
  function dfs(t) {
    if (!t) return 0;
    const left = dfs(t.left);
    const right = dfs(t.right);
    if (Math.abs(left - right) > 1) {
      isBalanced = false;
    }
    return 1 + Math.max(left, right);
  }
  dfs(tree);
  return isBalanced;
};
