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

// Input: [1,2,3,4,5]
var maxDepth = function (root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  let count = Math.max(left, right);

  return count + 1;
};

// 풀이
var maxDepth = function (root, sum = 1, arr = []) {
  if (!root) return 0;
  if (root.left === null && root.right === null) return arr.push(sum);

  maxDepth(root.left, sum + 1, arr);
  maxDepth(root.right, sum + 1, arr);

  return Math.max(...arr);
};
