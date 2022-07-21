// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time: O(n)
// Space: O(1)
const linkedListFind = (head, target) => {
  while (head) {
    if (head.val === target) return true;
    head = head.next;
  }
  return false;
}; // -> true

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return recursion(head.next, target);
};
