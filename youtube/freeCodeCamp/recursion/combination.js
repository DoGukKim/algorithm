// Time: O(2^n)
// Space: O(n^2)
const main = (words) => {
  if (words.length === 0) return [[]];

  const withOutElement = main(words.slice(1));
  const withElement = [];

  for (let i = 0; i < withOutElement.length; i++) {
    const concat = [words[0], ...withOutElement[i]];
    withElement.push(concat);
  }

  return [...withOutElement, ...withElement];
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
