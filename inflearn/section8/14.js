// Time: O(n^m)
// Space: O(n*m)
const main = (
  numbers,
  m,
  temp = numbers.slice(),
  index = 0,
  level = 0,
  allCombination = []
) => {
  if (level === m) return allCombination.push(temp.slice(0, 2));

  for (let i = index; i < numbers.length; i++) {
    temp[level] = i + 1;
    main(numbers, m, temp, i + 1, level + 1, allCombination);
  }

  return allCombination;
};

console.log(main([1, 2, 3, 4], 2));
