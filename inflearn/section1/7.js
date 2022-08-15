// Time: O(n)
// Space: O(1)
const main = (day, numbers) => {
  let result = 0;

  for (let i = 0; i < numbers.length; i += 1)
    if (numbers[i] % 10 === day) result += 1;

  return result;
};

console.log(main(3, [25, 23, 11, 47, 53, 17, 33]));

// 방법 2
// Time: O(n^2)
// Space: O(n)
const main2 = (n, numbers) => {
  function dfs(arr) {
    if (arr.length === 0) return 0;

    const count = dfs(arr.slice(1));
    return arr[0] % 10 === n ? count + 1 : count;
  }

  return dfs(numbers);
};

console.log(main2(3, [25, 23, 11, 47, 53, 17, 33]));

// 방법 3
// Time: O(n)
// Space: O(n)
const main3 = (n, numbers) => {
  let result = 0;

  function dfs(index) {
    if (index === numbers.length) {
      return;
    }

    if (numbers[index] % 10 === n) {
      result++;
    }

    dfs(index + 1);
  }
  dfs(0);

  return result;
};

console.log(main3(3, [25, 23, 11, 47, 53, 17, 33]));
