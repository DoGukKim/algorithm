// 방법 1
// Time: O(n^2)
// Space: O(1)
const main = (budget, wish_list) => {
  wish_list.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let result = -Infinity;

  for (let i = 0; i < wish_list.length; i++) {
    let sum = wish_list[i][0] / 2 + wish_list[i][1];
    let count = 1;

    for (let j = 0; j < wish_list.length; j++) {
      const currentPrice = wish_list[j][0] + wish_list[j][1];
      if (j !== i && sum + currentPrice <= budget) {
        sum += currentPrice;
        count += 1;
      }
    }

    if (count > result) result = count;
  }

  return result;
};

console.log(
  main(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);

// 방법 2
// Time: O(2^n)
// Space: O(n^2)
const main2 = (budget, wish_list) => {
  let result = -Infinity;

  for (let i = 0; i < wish_list.length; i++) {
    let temp = wish_list[i][0];
    wish_list[i][0] = wish_list[i][0] / 2;

    const studentCount = dfs(wish_list, 0);
    if (studentCount > result) result = studentCount;

    wish_list[i][0] = temp; // 50% 해주었던 친구 다시 되돌려줘야 계산이 맞게 됨
  }

  function dfs(list, index, sum = 0, count = 0) {
    if (index === list.length) {
      return count;
    }

    if (sum > budget) {
      return count;
    }

    const left = dfs(
      list,
      index + 1,
      sum + list[index][0] + list[index][1],
      count + 1
    );
    const right = dfs(list, index + 1, sum, count);

    return Math.max(left, right);
  }

  return result;
};

console.log(
  main2(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
