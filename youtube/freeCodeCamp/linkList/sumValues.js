// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time: O(n)
// Space: O(1)
const sumList = (head) => {
  // todo
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

// Recursive
// Time: O(n)
// Space: O(n)
function sumList(head) {
  if (head === null) return 0;
  return head.val + sumList(head.next);
}
