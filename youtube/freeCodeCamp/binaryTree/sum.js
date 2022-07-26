// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time: O(n)
// Space: O(n)
const treeSum = (root) => {
  if (root === null) return 0;
  let result = 0;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result += current.val;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

// Recursion
// Time: O(n)
// Space: O(n)
const recursion = (root) => {
  if (root === null) return 0;
  return root.val + recursion(root.left) + recursion(root.right);
};
