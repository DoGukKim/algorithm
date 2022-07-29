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

// Time: O(n)
// Space: O(n^2)
// Runtime: 84 ms, faster than 56.43% of JavaScript online submissions
// Memory Usage: 42.2 MB
var preorderTraversal = function (root) {
  const result = [];
  explore(root, result);
  return result;
};

const explore = (root, result) => {
  if (!root) return null;

  result.push(root.val);
  explore(root.left, result);
  explore(root.right, result);
};

// 다른 풀이
var preorderTraversal = function (root) {
  return root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
    : [];
};
