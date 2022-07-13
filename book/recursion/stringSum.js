const main = (words) => {
  if (words.length === 0) return 0;
  return words[0].length + main(words.slice(1));
};
console.log(main(["ab", "abc", "abcd"]));
