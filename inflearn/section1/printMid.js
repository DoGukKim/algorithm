// TimeComplexity O(1)
// SpaceComplexity O(1)
const main = (word) => {
  const mid = Math.floor((word.length - 1) / 2);

  if (word.length % 2 !== 1) return word[mid] + word[mid + 1];
  else return word[mid];
};

console.log(main("good"));
console.log(main("study"));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (
  word,
  index = 0,
  mid = Math.floor((word.length - 1) / 2),
  isOdd = word.length % 2
) => {
  if (index === mid) {
    if (isOdd) return word[mid];
    else return word[mid] + word[mid + 1];
  }

  return recursion(word, (index += 1), mid, isOdd);
};

console.log(recursion("good"));
console.log(recursion("study"));
