// 방법 1
// Time: O(n)
// Space: O(n)
const main = (n, index = 0) => {
  if (index === n.length) return 0;
  // 또는 if(index === n.length - 1) return n[index]
  return n[index] + main(n, index + 1);
};

console.log(main([1, 2, 3, 4]));

// 방법 2
// Time: O(n^2) // 각 재귀호출의 slice method * n
// Space: O(n)
const main2 = (n) => {
  if (n.length === 1) return n[0];
  return n[0] + main2(n.slice(1));
};

console.log(main2([1, 2, 3, 4]));

// 방법 3
// Time: O(n^2)
// Space: O(n)
const main3 = (n) => {
  if (n.length === 0) return 0;
  const remainder = main3(n.slice(1));
  return n[0] + remainder;
};

console.log(main3([1, 2, 3, 4]));
