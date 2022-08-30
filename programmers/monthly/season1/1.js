// 내적
// Time: O(n)
// Space: O(1)
const main = (a, b) => {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
};

console.log(main([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(main([-1, 0, 1], [1, 0, -1]));
