// Time: O(n)
// Space: O(n)
const main = (n = 1) => {
  if (n > 7) return;

  console.log(n); // 전위순회 (preOrder)
  main(n * 2);
  console.log(n); // 중위순회 (inOrder)
  main(n * 2 + 1);
  console.log(n); // 후위순회 (postOrder)
};

console.log(main());
