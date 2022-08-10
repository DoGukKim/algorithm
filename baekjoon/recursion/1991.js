const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const tree = {};
for (let i = 0; i < input.length; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

// 첫 번째 솔루션
let preOrder = "";
let inOrder = "";
let postOrder = "";

const explore = (node) => {
  if (node === ".") return;
  const [left, right] = tree[node];

  preOrder += node;
  explore(left);
  inOrder += node;
  explore(right);
  postOrder += node;
};

explore("A");

console.log(preOrder);
console.log(inOrder);
console.log(postOrder);

// 두 번째 솔루션
const preOrderExplore = (node) => {
  return node !== "."
    ? node + preOrderExplore(tree[node][0]) + preOrderExplore(tree[node][1])
    : "";
};

const inOrderExplore = (node) => {
  return node !== "."
    ? inOrderExplore(tree[node][0]) + node + inOrderExplore(tree[node][1])
    : "";
};

const postOrderExplore = (node) => {
  return node !== "."
    ? postOrderExplore(tree[node][0]) + postOrderExplore(tree[node][1]) + node
    : "";
};

console.log(preOrderExplore("A"));
console.log(inOrderExplore("A"));
console.log(postOrderExplore("A"));

// input
// A B C
// B D .
// C E F
// E . .
// F . G
// D . .
// G . .
