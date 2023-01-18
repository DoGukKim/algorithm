// Title: 큐
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
  }
  pop() {
    return this.queue.shift() ?? "-1";
  }
  size() {
    return this.queue.length;
  }
  empty() {
    return this.queue.length ? "0" : "1";
  }
  front() {
    return this.queue.length ? this.queue[0] : "-1";
  }
  back() {
    return this.queue.length ? this.queue[this.queue.length - 1] : "-1";
  }
}

const n = Number(input.shift());
let result = "";
const queue = new Queue();

for (let i = 0; i < n; i++) {
  const [m, v] = input[i].split(" ");

  switch (m) {
    case "push":
      queue.push(v);
      break;
    case "pop":
      result += `${queue.pop()}\n`;
      break;
    case "size":
      result += `${queue.size()}\n`;
      break;
    case "empty":
      result += `${queue.empty()}\n`;
      break;
    case "front":
      result += `${queue.front()}\n`;
      break;
    case "back":
      result += `${queue.back()}\n`;
      break;
  }
}

console.log(result);
