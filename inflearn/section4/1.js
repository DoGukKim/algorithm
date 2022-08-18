// 방법 1
// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = 0;
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i];
    sum = 0;

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum >= max) {
      max = sum;
      result = numbers[i];
    }
  }

  return result;
};

console.log(main([128, 460, 603, 40, 521, 137, 123]));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (numbers) => {
  function dfs(arr) {
    if (arr.length < 1) {
      // 자릿수의 max, result 값
      return [-Infinity, 0];
    }

    const [max, result] = dfs(arr.slice(1));

    let temp = arr[0];
    let sum = 0;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      return [sum, arr[0] > result ? arr[0] : result];
    }

    return [max, result];
  }

  const [_, result] = dfs(numbers);
  return result; // -> 137
};

console.log(main2([128, 460, 603, 40, 521, 137, 123]));
