// Title: 일곱 난쟁이
// 방법 1
// Time: O(n^2)
// Space: O(n)
function main(n) {
  const cheatTall = n.reduce((a, c) => a + c, 0) - 100;
  const map = new Map();

  for (let i = 0; i < n.length; i++) {
    map.set(n[i], i);

    const index = map.get(cheatTall - n[i]);
    if (index) {
      n = [...n.slice(0, index), ...n.slice(i + 1)];
      return n;
    }
  }

  return null;
}

console.log(main([20, 7, 23, 19, 10, 15, 25, 8, 13])); // -> [20, 7, 23, 19, 10, 8, 13]
