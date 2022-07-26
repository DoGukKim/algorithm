// TimeComplexity O(n!)
// SpaceComplexity O(n^2)
const main = (words) => {
  if (words.length === 0) return [[]];

  const permutation = main(words.slice(1));
  const allPermutation = [];

  for (let i = 0; i < permutation.length; i++) {
    for (let j = 0; j <= permutation[i].length; j++) {
      const concat = [
        ...permutation[i].slice(0, j),
        words[0],
        ...permutation[i].slice(j),
      ];
      allPermutation.push(concat);
    }
  }

  return allPermutation;
};
console.log(main(["a", "b", "c"]));
// ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
