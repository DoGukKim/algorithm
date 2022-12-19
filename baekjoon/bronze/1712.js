let input = require("fs").readFileSync("./input.txt").toString().trim();

input = input.split(" ").map(Number);
const [a, b, c] = input;
if (b >= c) console.log("-1");
else console.log(Math.floor(a / (c - b)) + 1);
