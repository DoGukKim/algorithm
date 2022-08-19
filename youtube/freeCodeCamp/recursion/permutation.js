// 방법 3
// Time: O(n!)
// Space: O(n^2)
const permute = (n) => {
  if (n.length === 0) return [[]];

  const withOutElement = permute(n.slice(1));
  const allPermutation = [];

  for (let i = 0; i < withOutElement.length; i++) {
    for (let j = 0; j <= withOutElement[i].length; j++) {
      const permWithElement = [
        ...withOutElement[i].slice(0, j),
        n[0],
        ...withOutElement[i].slice(j),
      ];
      allPermutation.push(permWithElement);
    }
  }

  return allPermutation;
};

console.log(permute([1, 2, 3]));
console.log(permute(["a", "b", "c"]));

// ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
