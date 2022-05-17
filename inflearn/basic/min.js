const solution = (numbers) => {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    if (result > numbers[i]) result = numbers[i];
  }
  return result;
};
