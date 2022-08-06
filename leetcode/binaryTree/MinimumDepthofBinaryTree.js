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

// DFS
var minDepth = function (root) {
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return left == 0 || right == 0 ? left + right + 1 : Math.min(left, right) + 1;
};

// BFS
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [{ node: root, height: 1 }];

  while (queue.length) {
    const current = queue.shift();

    if (!current.node.left && !current.node.right) {
      return current.height;
    }

    if (current.node.left)
      queue.push({ node: current.node.left, height: current.height + 1 });
    if (current.node.right)
      queue.push({ node: current.node.right, height: current.height + 1 });
  }
};
