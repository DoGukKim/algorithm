// TimeComplexity O(1)
// SpaceComplexity O(1)
const main = (n) => {
  return (n + 1) * (n / 2);
};
console.log(main(6));

// TimeComplexity O(n)
// SpaceComplexity O(1)
const main2 = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i += 1) result += i;
  return result;
};
console.log(main2(6));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (n) => {
  if (n === 1) return 1;
  return n + recursion(n - 1);
};
console.log(recursion(6));
