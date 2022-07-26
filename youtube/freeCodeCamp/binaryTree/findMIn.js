// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time: O(n)
// Space: O(n)
const treeMinValue = (root) => {
  const stack = [root];
  let result = Infinity;
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < result) result = current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (root) => {
  if (root === null) return Infinity;
  const leftMin = recursion(root.left);
  const rightMin = recursion(root.right);
  return Math.min(root.val, leftMin, rightMin);
};
