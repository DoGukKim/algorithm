// Title: 이진트리 순회(깊이우선탐색)
// 방법 1
// 만약 n 값이 주어지고 2배씩 재귀호출을 하면 아래와 같다.
// Time: O(2^log n)
// Space: O(log n)
function main() {
  function dfs(n) {
    if (n > 7) return null;

    console.log(n); // preOrder
    dfs(n * 2);
    console.log(n); // inOrder
    dfs(n * 2 + 1);
    console.log(n); // postOrder
  }

  dfs(1);
}

// 방식 2
function main() {
  const preOrder = (n) => {
    if (n > 7) return "";
    return n + preOrder(n * 2) + preOrder(n * 2 + 1);
  };

  const inOrder = (n) => {
    if (n > 7) return "";
    return inOrder(n * 2) + n + inOrder(n * 2 + 1);
  };

  const postOrder = (n) => {
    if (n > 7) return "";
    return postOrder(n * 2) + postOrder(n * 2 + 1) + n;
  };

  console.log(preOrder(1)); // 전위순회
  console.log(inOrder(1)); // 중위순회
  console.log(postOrder(1)); // 후위순회
}

main();
