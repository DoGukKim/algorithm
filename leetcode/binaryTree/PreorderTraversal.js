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

// Time: O(2^n)
// Space: O(n)
var preorderTraversal = function (root) {
  const result = [];

  function dfs(root) {
    if (!root) return null;

    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);

  return result;
};

// 다른 풀이
// Time: O(2^n)
// Space: O(n)
var preorderTraversal = function (root) {
  return root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
    : [];
}; // [1,...[]] -> [1,2] -> [1,2,3] -> [1,2,3,...[]] -> [1,2,3]

// 이터레이티브 풀이
// Time: O(n)
// Space: O(n)
var preorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  var stack = [root];

  while (stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};
