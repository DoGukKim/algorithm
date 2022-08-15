// 방법 1
// Time: O(1)
// Space: O(1)
const main = (n) => {
  return (n + 1) * (n / 2);
};

console.log(main(6));

// 방법 2
// Time: O(n)
// Space: O(1)
const main2 = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) result += i;
  return result;
};

console.log(main2(6));

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (n) => {
  if (n === 0) return 0; // or if(n === 1) return 1
  return n + main3(n - 1);
};

console.log(main3(6));
