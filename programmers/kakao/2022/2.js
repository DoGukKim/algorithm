const main = (n, k) => {
  const number = calcNumber(n, k);
  const formatNumber = number.split("0");
  let result = 0;

  for (let i = 0; i < formatNumber.length; i += 1)
    if (isPrime(Number(formatNumber[i]))) result += 1;

  return result;
};

const calcNumber = (n, k) => {
  if (n === 0) return "";
  return calcNumber(Math.floor(n / k), k) + String(n % k);
};

const isPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i < Math.floor(Math.sqrt(n) + 1); i += 1)
    if (n % i === 0) return false;

  return true;
};

console.log(main(437674, 3));
// console.log(main(110011, 10));
