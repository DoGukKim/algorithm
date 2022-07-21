/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const sum = calcSum(l1) * 1 + calcSum(l2) * 1;
  const formatSum = String(sum).split("").reverse();
  let result = new ListNode(formatSum[0]);
  let current = result;
  for (let i = 1; i < formatSum.length; i++) {
    current.next = new ListNode(formatSum[i]);
    current = current.next;
  }
  return result;
};

const calcSum = (ll) => {
  if (ll.next === null) return ll.val;
  return String(calcSum(ll.next)) + ll.val;
};

var addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let carry = 0;
  let current = head;
  let sum;
  while (l1 || l2) {
    sum = carry;
    if (l1.val) sum += l1.val;
    if (l2.val) sum += l2.val;
    l1 = l1.next;
    l2 = l2.next;
    if (sum > 10) carry = sum / 10;
    current.next = head;
    current = new ListNode((sum % 10) + carry);
  }
  console.log(head);
};
