// n: numbers , m: m
// Time: O(n^m)
// Space: O(m^2)
const main = (numbers, m, temp = numbers.slice()) => {
  if (numbers.length === 0) return [];

  const combination = main(numbers.slice(1), m, temp);
  let allCombination = [];

  for (let i = 0; i < temp.length; i++) {
    if (numbers[0] !== temp[i]) {
      const combinationWithFirst = [numbers[0], temp[i]];
      allCombination.push(combinationWithFirst);
    }
  }

  return [...allCombination, ...combination];
};

console.log(main([3, 6, 9], 2));
// -> [ [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ] ]
