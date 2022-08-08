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

var binaryTreePaths = function (root) {
  const result = [];
  explore(root, result);
  return result;
};

const explore = (root, result, sum = "") => {
  if (!root) return "";
  if (!root.left && !root.right) return result.push(sum + root.val);
  explore(root.left, result, sum + root.val + "->");
  explore(root.right, result, sum + root.val + "->");
};

// 다른 방법
var binaryTreePaths = function (root) {
  const result = [];

  function DFS(root, sum) {
    if (!root) return "";
    if (!root.left && !root.right) return result.push(sum + root.val);
    DFS(root.left, sum + root.val + "->");
    DFS(root.right, sum + root.val + "->");
  }

  DFS(root, "");

  return result;
};
