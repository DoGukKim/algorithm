// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const main = (budget, wish_list) => {
  wish_list.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let result = -Infinity;

  for (let i = 0; i < wish_list.length; i += 1) {
    let sum = wish_list[i][0] / 2 + wish_list[i][1];
    let count = 1;

    for (let j = 0; j < wish_list.length; j += 1) {
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
