const solution = (arr, k) => {
  let result = Number.MIN_SAFE_INTEGER;

  let lp = 0;
  let rp = 0;

  while (lp < arr.length - k) {
    let count = k;
    let sum = 0;

    while (count--) sum += arr[rp++];

    lp++;
    rp = lp;
    if (result < sum) result = sum;
  }

  return result;
};
const result = solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log(result);
