const main = (m, arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let result = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let money = arr[i][0] / 2 + arr[i][1];
    let cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && money + (arr[j][0] + arr[j][1]) <= m) {
        money += arr[j][0] + arr[j][1];
        cnt++;
      } else break;
    }
    result = Math.max(result, cnt);
  }
  console.log(result);
};

main(28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
