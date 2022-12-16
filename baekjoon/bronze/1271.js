// Title: 엄청난 부자2
// Time: O(1)
// Space: O(1)
let input = require("fs").readFileSync("./input.txt").toString().trim();

input = input.split(" ").map(BigInt);
const [n, m] = input;

console.log(String(n / m));
console.log(String(n % m));
