// TimeComplexity O(2^n)
// SpaceComplexity O(n^2)
const main = (words) => {
  if (words.length === 0) return [[]];

  const combination = main(words.slice(1));
  const concatCombination = [];

  for (let i = 0; i < combination.length; i += 1) {
    const concat = [words[0], ...combination[i]];
    concatCombination.push(concat);
  }

  return [...combination, ...concatCombination];
};

console.log(main(["a", "b", "c"]));
// -> [
//  [],
//  [ 'c' ],
//  [ 'b' ],
//  [ 'c', 'b' ],
//  [ 'a' ],
//  [ 'c', 'a' ],
//  [ 'b', 'a' ],
//  [ 'c', 'b', 'a' ]
// ]
