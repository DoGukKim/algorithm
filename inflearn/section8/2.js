// Time: O(n)
// Space: O(n)
const main = (n) => {
  if (n === 0) return "";
  return main(Math.floor(n / 2)) + String(n % 2);
};

console.log(main(6));
