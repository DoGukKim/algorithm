// 소수 만들기
// Time: O(n^3)
// Space: O(1)
const main = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k]) === true) {
          result++;
        }
      }
    }
  }

  return result;
};

// 소수 구하기
const isPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(main([1, 2, 3, 4]));
console.log(main([1, 2, 7, 6, 4]));
