// TimeComplexity O(2^n)
// SpaceComplexity O(n^2)
const main = (n, arr = []) => {
  if (n > 3) return;

  const arr1 = arr.slice();
  const arr2 = arr.slice();

  arr1.push(n);

  main(n + 1, arr1);
  console.log(arr1);
  main(n + 1, arr2);
};

main(1);

// TimeComplexity O(2^n)
// SpaceComplexity O(n^2)
const main2 = (n, arr = Array.from({ length: n }, (_, i) => i + 1)) => {
  if (arr.length === 0) return [[]];

  const remainder = main2(n, arr.slice(1));
  const allCombination = [];

  for (let i = 0; i < remainder.length; i++) {
    const combination = [arr[0], ...remainder[i]];
    allCombination.push(combination);
  }

  return [...allCombination, ...remainder];
};

console.log(...main2(3));
