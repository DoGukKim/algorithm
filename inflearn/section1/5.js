// 방법 1
// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] < result) result = numbers[i];

  return result;
};

console.log(main([6, 5, 13, 11]));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (numbers) => {
  function dfs(arr) {
    if (arr.length < 1) return Infinity;

    const min = dfs(arr.slice(1)); // Infinity -> 4 -> 1 -> ...
    return Math.min(min, arr[0]); // (Infinity, 4) -> (4, 1) -> ...
  }

  return dfs(numbers);
};

console.log(main2([6, 3, 1, 4]));

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (numbers) => {
  let result = Infinity;

  function dfs(index) {
    if (index === numbers.length) {
      return;
    }

    if (numbers[index] < result) result = numbers[index];
    dfs(index + 1);
  }
  dfs(0);

  return result;
};

console.log(main3([6, 3, 1, 4]));
