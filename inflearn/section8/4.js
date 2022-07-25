// Time O(n^2)
// Space O(n)
const main = (n = 1, arr = []) => {
  if (n > 3) return;

  const combination = arr.slice();
  const combination2 = arr.slice();

  combination.push(n);
  main(n + 1, combination);
  console.log(combination);
  main(n + 1, combination2);
};

console.log(main());

// 순서에 상관없이 부분집합 구해보기
// Time O(2^n)
// Space O(n^2)
const main2 = (n = 1, arr = Array.from({ length: 3 }, (_, v) => v + 1)) => {
  if (arr.length === 0) return [[]];

  const withoutElement = main2(n, arr.slice(1));
  const allCombination = [];

  for (let i = 0; i < withoutElement.length; i++) {
    const remainder = [arr[0], ...withoutElement[i]];
    allCombination.push(remainder);
  }

  return [...allCombination, ...withoutElement];
};
console.log(main2());
