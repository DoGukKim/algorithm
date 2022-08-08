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
var postorderTraversal = function (root) {
  const result = [];

  function dfs(root) {
    if (!root) return null;
    dfs(root.left);
    dfs(root.right);
    result.push(root.val);
  }
  dfs(root);

  return result;
};

// Time: O(2^n)
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

// 이터레이티브 풀이
// TimeL: O(n)
// Space: O(n)
var postorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();

    result.push(current.val);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return result.reverse();
};
