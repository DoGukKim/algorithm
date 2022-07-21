// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time: O(n)
// Space: O(1)
const getNodeValue = (head, index) => {
  let count = 0;
  while (head !== null) {
    if (index === count) return head.val;
    head = head.next;
    count += 1;
  }
  return null;
};

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return recursion(head.next, index - 1);
};
