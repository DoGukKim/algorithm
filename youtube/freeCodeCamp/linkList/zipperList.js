// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Time: O(min(n,m))
// Space: O(1)
const zipperLists = (head1, head2) => {
  let head = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 && current2) {
    if (count % 2 === 0) {
      head.next = current2;
      current2 = current2.next;
    } else {
      head.next = current1;
      current1 = current1.next;
    }
    head = head.next;
    count += 1;
  }

  if (current1 !== null) head.next = current1;
  if (current2 !== null) head.next = current2;

  return head1;
};

// Recursive
// Time: O(min(n,m))
// Space: O(min(n,m))
const recursion = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;

  head1.next = head2;
  head2.next = recursion(next1, next2);

  return head1;
};
console.log(recursion(head1, head2));
