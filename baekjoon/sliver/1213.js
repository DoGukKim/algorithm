// title: 팰린드롬 만들기
// time: O(nm)
// space: O(n)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = input.split("").sort();

const map = new Map();
for (let i = 0; i < input.length; i++) {
  const key = input[i];
  map.set(key, (map.get(key) || 0) + 1);
}

let oddCount = 0;
let oddChar = "";
for (const [key, value] of map) {
  if (value % 2 !== 0) {
    oddChar = key;
    oddCount++;
  }
}

if (oddCount >= 2) {
  console.log("I'm Sorry Hansoo");
  return null;
}

const front = [];
for (const [key, value] of map) {
  for (let i = 0; i < Math.floor(value / 2); i++) {
    front.push(key);
  }
}
const back = front.slice().reverse();
const result = front.join("") + oddChar + back.join("");
console.log(result);

// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim();

// input = input.split("").sort();

// const result = [];
// const memo = {};
// const ch = Array.from({ length: input.length }, () => 0);
// getPermutation([]);

// if (result.length === 0) {
//   console.log("I'm Sorry Hansoo");
// } else {
//   console.log(result[0]);
// }

// function getPermutation(arr) {
//   if (memo[arr.join("")]) return;
//   if (arr.length === input.length) {
//     const isPalindrome = getIsPalindrome(arr.join(""));
//     if (isPalindrome) {
//       result.push(arr.join(""));
//     }

//     memo[arr.join("")] = true;
//     return;
//   }

//   for (let i = 0; i < input.length; i++) {
//     if (ch[i] === 1) continue;

//     arr.push(input[i]);
//     ch[i] = 1;
//     getPermutation(arr);
//     ch[i] = 0;
//     arr.pop();
//   }
// }

// function getIsPalindrome(word) {
//   for (let i = 0; i < Math.floor(word.length / 2); i++) {
//     if (word[i] !== word[word.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }
