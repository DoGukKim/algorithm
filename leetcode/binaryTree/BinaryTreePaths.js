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
 * @return {string[]}
 */

// Time: O(n)
// Space: O(n)
var binaryTreePaths = function (root) {
  const allPaths = [];
  explore(root, all);
  return allPaths;
};

const explore = (root, allPaths, sum = "") => {
  if (root === null) return "";
  if (!root.left && !root.right) return allPaths.push((sum += root.val));

  sum += root.val + "->";
  explore(root.left, allPaths, sum);
  explore(root.right, allPaths, sum);
};
