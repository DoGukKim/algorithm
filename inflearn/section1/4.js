// 공식 풀이
// Time: O(1)
// Space: O(1)
const main = (n) => {
  return (n + 1) * (n / 2);
};

console.log(main(6));

// Time: O(n)
// Space: O(1)
const main2 = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) result += i;
  return result;
};
console.log(main2(6));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (n) => {
  if (n === 0) return 0; // or if(n === 1) return 1
  return n + recursion(n - 1);
};

console.log(recursion(6));
