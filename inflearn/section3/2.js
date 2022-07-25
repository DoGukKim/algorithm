// Time: O(n)
// Space: O(1)
const main = (word) => {
  word = word.toLowerCase().replace(/[^a-z]/g, "");

  for (let i = 0; i < Math.floor(word.length / 2); i++)
    if (word[i] !== word[word.length - 1 - i]) return "NO";

  return "YES";
};

console.log(main("found7, time: study; Yduts; emit, 7Dnuof"));
