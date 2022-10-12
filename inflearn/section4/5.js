// Title: K번째 큰 수
// 방법 1
// Time: O(n^3)
// Space: O(n)
// Input: [13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3
const main = (k, n) => {
  let result = [];
  const hash = {};

  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      for (let t = j + 1; t < n.length; t++) {
        const sum = n[i] + n[j] + n[t];
        if (!hash[sum]) {
          hash[sum] = true;
          result.push(sum);
        }
      }
    }
  }

  return result.sort((a, b) => b - a)[k - 1];
};

console.log(main(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
