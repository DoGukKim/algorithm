// TimeComplexity O(n)
// SpaceComplexity O(n)
const isPrime = (number) => {
  if (number === 1) return false;

  for (let i = 2; i < Math.floor(Math.sqrt(number)); i += 1)
    if (number % i === 0) return false;

  return true;
};

const main = (numbers) => {
  numbers = numbers.map((i) =>
    parseInt(String(i).split("").reverse().join(""))
  );

  let result = [];

  for (let i = 0; i < numbers.length; i += 1)
    if (isPrime(numbers[i]) === true) result.push(numbers[i]);

  return result;
};

console.log(main([32, 55, 62, 20, 250, 370, 200, 30, 100]));
