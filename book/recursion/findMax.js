const main = (numbers, max = -Infinity) => {
  if (numbers.length === 0) return max;
  if (max < numbers[0]) max = numbers[0];
  return main(numbers.slice(1), max);
};

console.log(main([2, 3, 4]));
