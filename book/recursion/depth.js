const main = (numbers) => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (isNaN(numbers[i])) main(numbers[i]);
    else console.log(numbers[i]);
  }
};

console.log(main([1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]]));
