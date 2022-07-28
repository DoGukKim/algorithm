/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 내 풀이
// Runtime: 111 ms
// Memory Usage: 43.9 MB
var isSameTree = function (p, q) {
  let pValues = [];
  let qValues = [];

  explore(p, pValues);
  explore(q, qValues);

  for (let i = 0; i < pValues.length; i++) {
    if (pValues[i] !== qValues[i]) return false;
  }

  return true;
};

const explore = (root, values) => {
  if (root === null) return values.push(null);
  values.push(root.val);
  explore(root.left, values);
  explore(root.right, values);
};

// BFS
// Runtime: 70 ms
// Memory Usage: 42.6 MB
var isSameTree = function (p, q) {
  const queue = [[p, q]];

  while (queue.length > 0) {
    const [p, q] = queue.shift();

    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    if (p.left || q.left) queue.push([p.left, q.left]);
    if (p.right || q.right) queue.push([p.right, q.right]);
  }

  return true;
};

// DFS
// Runtime: 57 ms
// Memory Usage: 42.4 MB
var isSameTree = function (p, q) {
  const stack = [[p, q]];

  while (stack.length > 0) {
    const [p, q] = stack.pop();

    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    if (p.left || q.left) stack.push([p.left, q.left]);
    if (p.right || q.right) stack.push([p.right, q.right]);
  }
  return true;
};

// 다른 사람풀이
// Runtime: 69 ms
// Memory Usage: 41.8 MB
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  const L = isSameTree(p.left, q.left);
  const R = isSameTree(p.right, q.right);

  return L && R;
};
