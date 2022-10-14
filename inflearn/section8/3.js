// Title: 이진트리 순회(깊이우선탐색)
// 방법 1
// Time: O(2^n)
// Space: O(n)
// Input: 7
function main(n) {
  function dfs(m) {
    if (m > n) return;

    console.log(m); // preOrder
    dfs(m * 2);
    console.log(m); // inOrder
    dfs(m * 2 + 1);
    console.log(m); // postOrder
  }
  dfs(1);
}

// 방식 2
// Time: O(2^n)
// Space: O(n)
function main(n) {
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

  console.log(preOrder(1)); // 전위순회
  console.log(inOrder(1)); // 중위순회
  console.log(postOrder(1)); // 후위순회
}

console.log(main(7));
