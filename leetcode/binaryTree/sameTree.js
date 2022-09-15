/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Time: O(2^n)
// Space: O(n)
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  return left && right;
};

// BFS
var isSameTree = function (p, q) {
  const queue = [[p, q]];

  while (queue.length > 0) {
    const [p, q] = queue.shift();

    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    if (p.left || q.left) queue.push([p.left, q.left]);
    if (p.right || q.right) queue.push([p.right, q.right]);
  }

  return true;
};
