const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (arr) => {
  let result = [];
  arr = arr.map((i) => parseInt(String(i).split("").reverse().join("")));
  for (i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) result.push(arr[i]);
  }
  return result;
};
const result = solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
