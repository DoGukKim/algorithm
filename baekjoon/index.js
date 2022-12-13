const input = require("fs").readFileSync("./input.txt").toString().trim();

let s = Array.from({ length: 2 * input - 1 }, () => "*").join("");
s[0] = "";
s[s.length - 1] = "";
console.log(s);
// console.log(s.length);

// let mid = Math.floor(arr.length / 2);
// let lp = mid;
// let rp = mid;

// arr[mid] = "*";
// let result = "";
// while (lp >= 0 && rp <= arr.length - 1) {
//   arr[lp] = "*";
//   arr[rp] = "*";
//   lp--;
//   rp++;
//   result += `${arr.join("").replaceAll("", "")}\n`;
// }

// console.log(result);
