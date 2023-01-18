// Title: 덱
// Time: O(n)
// Space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

class Deck {
  constructor() {
    this.deck = [];
  }

  push_front(value) {
    this.deck.unshift(value);
  }
  push_back(value) {
    this.deck.push(value);
  }

  pop_front() {
    return this.deck.length ? this.deck.shift() : "-1";
  }
  pop_back() {
    return this.deck.length ? this.deck.pop() : "-1";
  }

  size() {
    return this.deck.length;
  }
  empty() {
    return this.deck.length ? "0" : "1";
  }

  front() {
    return this.deck.length ? this.deck[0] : "-1";
  }
  back() {
    return this.deck.length ? this.deck[this.deck.length - 1] : "-1";
  }
}

const n = Number(input.shift());
const deck = new Deck();
let result = "";
for (let i = 0; i < n; i++) {
  const [m, v] = input[i].split(" ");

  switch (m) {
    case "push_front":
      deck.push_front(v);
      break;
    case "push_back":
      deck.push_back(v);
      break;
    case "pop_front":
      result += `${deck.pop_front()}\n`;
      break;
    case "pop_back":
      result += `${deck.pop_back()}\n`;
      break;
    case "size":
      result += `${deck.size()}\n`;
      break;
    case "empty":
      result += `${deck.empty()}\n`;
      break;
    case "front":
      result += `${deck.front()}\n`;
      break;
    case "back":
      result += `${deck.back()}\n`;
      break;
  }
}

console.log(result);
