// n: 3, m: 2
// Time: O(n^m)
// Space: O(n^2)
const main = (n, m, numbers = Array.from({ length: n }, (_, v) => v + 1)) => {
  if (numbers.length === 0) return [];

  const permutation = main(n, m, numbers.slice(1));
  let allPermutation = [];

  for (let i = 1; i <= n; i++) {
    const permutationWithFirst = [numbers[0], i];
    allPermutation.push(permutationWithFirst);
  }

  return [...allPermutation, ...permutation];
};

const result = main(3, 2);
console.log(result, result.length); // -> array, 9
