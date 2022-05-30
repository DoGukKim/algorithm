const solution = (n, k) => {
  let head = null;
  let size = 0;

  const push = (value) => {
    if (head === null) {
      head = { value, next: head };
      size++;
      return;
    }
    let current = head;
    for (let i = 0; i < size - 1; i++) {
      current = current.next;
    }
    current.next = { value, next: head };
    size++;
  };

  const remove = (value) => {
    if (head.value === value) {
      let current = head;
      for (let i = 0; i < size - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
      head = head.next;
      size--;
      return;
    }

    let current = head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = current.next.next;
    size--;
  };

  for (let j = 1; j < n + 1; j++) {
    push(j);
  }

  let current = head;
  let count = k;

  while (--count) {
    current = current.next;
  }

  while (size !== 0) {
    remove(current.value);
    let count = k;
    while (count--) {
      current = current.next;
    }
  }

  return head.value;
};
const result = solution(8, 3);
console.log(result);

////////////////////////////////////////////////////////

function otherSolution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}
