// Title: 팩토리얼
// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n === 1) return 1;
  return n * main(n - 1);
};

console.log(main(5));
