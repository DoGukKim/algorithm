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
// Space: O(n)
var postorderTraversal = function (root) {
  return root
    ? [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val,
      ]
    : [];
};

// 1 -> null => []; 첫 왼쪽 값
// 1 -> 2 -> 3 => [] -> [...[], ...[], 3] = [3] 3의 결과 값
// 1 -> 2 -> null => [] -> [3,...[],2] = [3,2] 2의 결과 값
// [...[], ...[3,2], 1]
// -> [3,2,1]
