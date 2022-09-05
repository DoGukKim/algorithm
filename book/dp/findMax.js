// 최적화 전
// Time: O(2^n)
// Space: O(n)
const main = (n) => {
  if (n.length === 1) return n[0];

  if (n[0] > main(n.slice(1))) {
    return n[0];
  } else {
    return main(n.slice(1));
  }
};

console.log(main([1, 2, 3, 4]));

// 최적화 후
// Time: O(n)
// Space: O(n)
const main2 = (n) => {
  if (n.length === 1) return n[0];
  const remainder = main(n.slice(1));
  return n[0] > remainder ? n[0] : remainder;
};

console.log(main([1, 2, 3, 4]));

console.log(main2([1, 2, 3, 4]));
