// 방법 1
// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let sum = 0;
  let min = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sum += numbers[i];
      if (min > numbers[i]) min = numbers[i];
    }
  }

  return [sum, min];
};

console.log(main([12, 77, 38, 41, 53, 92, 85]));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (numbers) => {
  function dfs(arr) {
    if (arr.length === 0) return [0, Infinity];

    const [sum, min] = dfs(arr.slice(1)); // [0,infinity] -> [85, 85] -> ...

    const isOdd = arr[0] % 2 === 1;

    return [isOdd ? sum + arr[0] : sum, isOdd ? Math.min(arr[0], min) : min]; // 홀수 일시 계산 or 아무 것도 안함
  }

  const [sum, min] = dfs(numbers);
  return [sum, min];
};

console.log(main2([12, 77, 38, 41, 53, 92, 85]));

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (numbers) => {
  let min = Infinity;
  let sum = 0;

  function dfs(index) {
    if (index === numbers.length) {
      return;
    }

    if (numbers[index] % 2 === 1) {
      min = Math.min(numbers[index], min);
      sum += numbers[index];
    }

    dfs(index + 1);
  }
  dfs(0);

  return [sum, min];
};

console.log(main3([12, 77, 38, 41, 53, 92, 85]));
