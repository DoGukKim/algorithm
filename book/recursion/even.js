// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (numbers, evens = []) => {
  if (numbers.length === 0) return evens;

  if (numbers[0] % 2 === 0) evens.push(numbers[0]);
  return main(numbers.slice(1), evens);
};

console.log(main([2, 3, 4, 5, 6]));
