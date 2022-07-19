// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const main = (words) => {
  for (let i = 0; i < words.length; i++)
    if (words.indexOf(words[i]) === i) console.log(words[i]);
};

console.log(main(["good", "time", "good", "time", "student"]));

// Recursive
// TimeComplexity O(n^2)
// SpaceComplexity O(n)
const recursion = (words, index = 0) => {
  if (index === words.length) return;

  if (words.indexOf(words[index]) === index) console.log(words[index]);

  return recursion(words, (index += 1));
};

console.log(recursion(["good", "time", "good", "time", "student"]));
