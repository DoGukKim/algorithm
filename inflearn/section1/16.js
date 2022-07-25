// Time: O(n)
// Space: O(1)
const main = (word) => {
  let result = "";

  for (let i = 0; i < word.length; i++)
    if (word.indexOf(word[i]) === i) result += word[i];

  return result;
};

console.log(main("ksekkset"));

// Time: O(n)
// Space: O(1)
const main2 = (word) => {
  return new Set(word);
};

console.log(main2("ksekkset"));
