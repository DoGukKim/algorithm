// Title: 일곱 난쟁이
// Time: O(1)
// Space: O(1)
function main(n) {
  const cheatTall = n.reduce((a, c) => a + c, 0) - 100;
  const map = new Map();

  for (let i = 0; i < n.length; i++) {
    map.set(n[i], i);

    const index = map.get(cheatTall - n[i]);
    if (index) {
      n = [...n.slice(0, index), ...n.slice(i + 1)];
      console.log(n);
    }
  }
}

main([20, 7, 23, 19, 10, 15, 25, 8, 13]);
