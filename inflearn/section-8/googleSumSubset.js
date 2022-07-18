// TimeComplexity O(2^n*n^2)
// SpaceComplexity O(n^2)
const main = (numbers) => {
  const remainder = recursion(numbers);

  for (let i = 0; i < remainder.length; i += 1)
    if (i !== remainder.indexOf(remainder[i])) return "YES";

  return "NO";
};

const recursion = (numbers, index = 0, sum = 0, arr = []) => {
  if (index === numbers.length) return arr.push(sum);

  recursion(numbers, index + 1, sum + numbers[index], arr);
  recursion(numbers, index + 1, sum, arr);

  return arr;
};

console.log(main([1, 3, 5, 6, 7, 10]));
