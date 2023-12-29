let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

input = input.split("").sort();

const result = [];
const memo = {};
const ch = Array.from({ length: input.length }, () => 0);
getPermutation([]);

if (result.length === 0) {
  console.log("I'm Sorry Hansoo");
} else {
  console.log(result[0]);
}

function getPermutation(arr) {
  if (memo[arr.join("")]) return;
  if (arr.length === input.length) {
    const isPalindrome = getIsPalindrome(arr.join(""));
    if (isPalindrome) {
      result.push(arr.join(""));
    }

    memo[arr.join("")] = true;
    return;
  }

  for (let i = 0; i < input.length; i++) {
    if (ch[i] === 1) continue;

    arr.push(input[i]);
    ch[i] = 1;
    getPermutation(arr);
    ch[i] = 0;
    arr.pop();
  }
}

function getIsPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
