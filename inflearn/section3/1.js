// 방법 1
// Time: O(n)
// Space: O(1)
const main = (word) => {
  word = word.toLowerCase();

  for (let i = 0; i < Math.floor(word.length / 2); i++)
    if (word[i] !== word[word.length - 1 - i]) return "NO";

  return "YES";
};

console.log(main("gooG"));

// 방법 2
// Time: O(n)
// Space: O(1)
const recursion = (word) => {
  word = word.toLowerCase();

  function dfs(index) {
    if (index === word.length) {
      return null;
    }

    if (word[index] !== word[word.length - 1 - index]) {
      return "NO";
    }

    return dfs(index + 1) || "YES"; // null 이면 YES
  }

  return dfs(0);
};

console.log(recursion("good"));
