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

var inorderTraversal = function (root) {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
      ]
    : [];
};

// 다른 방법
var inorderTraversal = function (root) {
  let res = [];

  inorder(root, res);

  return res;
};

function inorder(root, res) {
  if (!root) return null;

  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
}
