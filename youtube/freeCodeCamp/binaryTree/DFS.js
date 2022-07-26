// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time: O(n)
// Space: O(n)
const depthFirstValues = (root) => {
  if (root === null) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return result;
};

//    -> ['a', 'b', 'd', 'e', 'c', 'f']

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (root, result = []) => {
  if (root === null) return [];

  result.push(root.val);
  recursion(root.left, result);
  recursion(root.right, result);

  return result;
};

const recursion2 = (root) => {
  if (root === null) return [];

  const leftValues = recursion2(root.left);
  const rightValues = recursion2(root.right);

  return [root.val, ...leftValues, ...rightValues];
};
