// 3진법 뒤집기
// Time: O(n)
// Space: O(n)
const main = (n) => {
  let sum = "";

  while (n) {
    sum += n % 3;
    n = Math.floor(n / 3);
  }

  return parseInt(sum, 3);
};

console.log(main(45));
console.log(main(125));
