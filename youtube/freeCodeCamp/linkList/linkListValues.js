// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

// Recursive
const main = () => {
  const result = [];
  fillValues(head, result);
  return result;
};

const fillValues = (head, results) => {
  if (head === null) return;
  results.push(head.val);
  return fillValues(head.next, results);
};
