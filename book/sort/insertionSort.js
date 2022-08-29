// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (n) => {
  for (let i = 1; i < n.length; i++) {
    let current = i;

    while (n[current - 1] !== undefined && n[current] < n[current - 1]) {
      [n[current], n[current - 1]] = [n[current - 1], n[current]];
      current--;
    }
  }

  return n;
};

console.log(main([11, 7, 5, 6, 10, 9]));
