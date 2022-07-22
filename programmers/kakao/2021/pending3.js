const main = (words, c) => {
  for (let i = 0; i < c.length; i++) {
    const remainder = recursion(words, c[i]);
    console.log(remainder);
  }
};

const recursion = (word, limit, index = 0, sum = "", combination = []) => {
  if (index === limit) return combination.push(sum);

  for (let i = index; i < word.length; i++) {
    recursion(word, limit, index + 1, sum + word[i], combination);
  }

  return combination;
};

console.log(main(["A", "B", "C", "D"], [2, 3, 4]));
