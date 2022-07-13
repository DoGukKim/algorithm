const main = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers[0] + main(numbers.slice(1));
};
console.log(main([2, 3, 4, 5]));
