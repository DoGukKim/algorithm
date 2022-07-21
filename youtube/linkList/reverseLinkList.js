// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time: O(n)
// Space: O(1)
const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return recursion(next, head);
};
