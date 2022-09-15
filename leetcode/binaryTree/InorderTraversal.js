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
var inorderTraversal = function (root) {
  const result = [];

  function dfs(root) {
    if (!root) return null;

    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  }
  dfs(root);

  return result;
};

// Iterative
// Time: O(n)
// Space: O(n)
var inorderTraversal = function (root) {
  if (!root) return [];
  const stack = [];
  const result = [];

  while (stack.length > 0 || root) {
    if (root) {
      // root를 stack에 저장해 놓고 left계속 파고 들어감
      // stack 상태
      // [ [1,null,2,3] ]
      // [ [2,3] ]
      // [ [2,3], [3] ]
      stack.push(root);
      root = root.left;
    } else {
      // left가 null이면 저장해 놓았던 root를 root에 다시 재할당
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }

  return result;
};

// Time: O(2^n)
// Space: O(n)
var inorderTraversal = function (root) {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
      ]
    : [];
};
