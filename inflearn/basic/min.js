const solution = (numbers) => {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    if (result > numbers[i]) result = numbers[i];
  }
  return result;
};
const result = solution([5, 3, 7, 11, 2, 15, 17]);
