// 방식 1
// Time: O(2^n)
// Space: O(n)
const main = (tree) => {
  let preOrderResult = "";
  let inOrderResult = "";
  let postOrderResult = "";

  function traversal(node) {
    if (!node) return;
    const [left, right] = tree[node];

    preOrderResult += node;
    traversal(left);
    inOrderResult += node;
    traversal(right);
    postOrderResult += node;
  }
  traversal(1);

  console.log(preOrderResult);
  console.log(inOrderResult);
  console.log(postOrderResult);
};

// 트리를 생성
const tree = {
  1: [2, 3],
  2: [4, 5],
  3: [6, 7],
  4: [],
  5: [],
  6: [],
  7: [],
};

main(tree);

// 방식 2
// Time: O(2^n)
// Space: O(n)
const main2 = (tree) => {
  const preOrder = (node) => {
    return node ? node + preOrder(tree[node][0]) + preOrder(tree[node][1]) : "";
  };

  const inOrder = (node) => {
    return node ? inOrder(tree[node][0]) + node + inOrder(tree[node][1]) : "";
  };

  const postOrder = (node) => {
    return node
      ? postOrder(tree[node][0]) + postOrder(tree[node][1]) + node
      : "";
  };

  console.log(preOrder(1));
  console.log(inOrder(1));
  console.log(postOrder(1));
};

main2(tree);

// 방식 3
// Time: O(2^n)
// Space: O(n)
const main3 = (n = 1) => {
  if (n > 7) return;

  console.log(n); // 전위순회 (preOrder)
  main3(n * 2);
  console.log(n); // 중위순회 (inOrder)
  main3(n * 2 + 1);
  console.log(n); // 후위순회 (postOrder)
};

console.log(main3());
