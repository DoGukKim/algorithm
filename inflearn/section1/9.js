// Time: O(n)
// Space: O(1)
const main = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A") {
      result += "#";
      continue;
    }

    result += word[i];
  }
  return result;
};

console.log(main("BANANA"));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (word, idx = 0, result = "") => {
  if (idx === word.length) return result;

  if (word[idx] !== "A") result += word[idx];
  else result += "#";

  return recursion(word, idx + 1, result);
};

console.log(recursion("BANANA"));
