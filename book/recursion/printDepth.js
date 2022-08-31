// 방법 1
// Time: O(n * 배열의 깊이)
// Space: O(n * 배열의 깊이)
const main = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (typeof n[i] !== "number") {
      main(n[i]);
    } else console.log(n[i]);
  }
};

console.log(main([1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]]));
