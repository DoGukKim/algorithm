// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (word) => {
  word = word.toLowerCase();

  for (let i = 0; i < Math.floor(word.length / 2); i += 1)
    if (word[i] !== word[word.length - 1 - i]) return "NO";

  return "YES";
};

console.log(main("gooG"));
console.log(main("ghoG"));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (word, index = 0) => {
  word = word.toLowerCase();

  if (index === Math.floor(word.length / 2)) return "YES";

  if (word[index] !== word[word.length - 1 - index]) return "NO";

  return recursion(word, (index += 1));
};

console.log(recursion("gooG"));
console.log(recursion("ghoG"));
