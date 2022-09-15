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

// Time: O(2^n)
// Space: O(n)
var isSymmetric = function (root) {
  function reverse(node) {
    if (!node) return null;
    [node.left, node.right] = [node.right, node.left];
    reverse(node.left);
    reverse(node.right);
  }
  reverse(root.left);

  function dfs(l, r) {
    if (!l && !r) return true;
    if (!l || !r) return false;
    if (l.val !== r.val) return false;

    const L = dfs(l.left, r.left);
    const R = dfs(l.right, r.right);
    return L && R;
  }

  return dfs(root.left, root.right);
};
