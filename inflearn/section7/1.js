// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (n) => {
  for (let i = 0; i < n.length; i++) {
    let min = i;

    for (let j = i + 1; j < n.length; j++) {
      if (n[j] < n[min]) min = j;
    }

    [n[i], n[min]] = [n[min], n[i]];
  }

  return n;
};

console.log(main([13, 5, 11, 7, 23, 15]));
