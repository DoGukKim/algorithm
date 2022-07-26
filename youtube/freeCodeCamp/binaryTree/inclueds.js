// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time: O(n)
// Space: O(n)
const treeIncludes = (root, target) => {
  if (root === null) return false;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return false;
};

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return recursion(root.left, target) || recursion(root.right, target);
};
