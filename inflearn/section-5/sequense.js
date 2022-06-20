const solution = (arr, m) => {
  let result = 0;
  let lp = 0;
  let rp = lp + 1;
  let sum = arr[lp];

  while (lp <= arr.length) {
    if (sum + arr[rp] > m) {
      lp++;
      rp = lp + 1;
      sum = arr[lp];
    }

    if (sum + arr[rp] === m) {
      result++;
      lp++;
      rp = lp + 1;
      sum = arr[lp];
    }

    sum += arr[rp];
    rp++;

    if (rp >= arr.length - 1) break;
  }

  return result;
};
const result = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log(result);
