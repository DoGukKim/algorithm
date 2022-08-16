// 방법 1
// Time: O(n)
// Space: O(n)
const main = (numbers) => {
  let result = [numbers[0]];

  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] > numbers[i - 1]) result.push(numbers[i]);

  return result;
};

console.log(main([7, 3, 9, 5, 6, 12]));

// 방법 2
// Time: O(n)
// Space: O(n)
const main2 = (numbers) => {
  function dfs(index, result = []) {
    if (index === numbers.length) {
      return result;
    }

    if (numbers[index] > numbers[index - 1]) {
      result.push(numbers[index]);
    }

    return dfs(index + 1, result);
  }

  return dfs(1, [numbers[0]]);
};

console.log(main2([7, 3, 9, 5, 6, 12]));
