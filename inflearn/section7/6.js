// 방법 1
// Time: O(n log n)
// Space: O(n)
const main = (n) => {
  let result = [];
  const sorted = n.slice().sort((a, b) => a - b);

  for (let i = 0; i < n.length; i++) {
    if (n[i] !== sorted[i]) result.push(i + 1);
  }

  return result;
};

console.log(main([120, 130, 150, 150, 130, 150]));
