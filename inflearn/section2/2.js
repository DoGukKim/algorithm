// 방법 1
// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = 0;

  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] > numbers[i - 1]) result += 1;

  return result;
};

console.log(main([130, 135, 148, 140, 145, 150, 150, 153]));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (numbers) => {
  function dfs(index, result = []) {
    if (index === numbers.length) {
      return result;
    }

    if (numbers[index] > numbers[index - 1]) {
      result++;
    }

    return dfs(index + 1, result);
  }

  return dfs(1, 0);
};

console.log(main2([130, 135, 148, 140, 145, 150, 150, 153]));
