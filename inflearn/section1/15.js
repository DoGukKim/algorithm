// Time: O(1)
// Space: O(1)
const main = (word) => {
  const mid = Math.floor(word.length / 2);

  if (word.length % 2 === 1) return word[mid];
  else return word[mid - 1] + word[mid];
};

console.log(main("good"));
