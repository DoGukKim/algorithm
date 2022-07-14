const main = (word) => {
  if (word.length === 1) return [word[0]];

  const remainder = main(word.slice(1));
  console.log(remainder);
};

console.log(main("ABC"));
