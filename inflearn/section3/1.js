// Time: O(n)
// Space: O(1)
const main = (word) => {
  word = word.toLowerCase();

  for (let i = 0; i < Math.floor(word.length / 2); i++)
    if (word[i] !== word[word.length - 1 - i]) return "NO";

  return "YES";
};

console.log(main("gooG"));

// 재귀식 풀이
// Time: O(n)
// Space: O(n)
const recursion = (word, idx = 0) => {
  word = word.toLowerCase();
  if (idx === Math.floor(word.length / 2)) return "YES";

  if (word[idx] !== word[word.length - 1 - idx]) return "NO";

  return recursion(word, idx + 1);
};

console.log(recursion("gooG"));
