// Time: O(n)
// Space: O(1)
const main = (arr, m) => {
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

console.log(main([1, 2, 1, 3, 1, 1, 1, 2], 6));

// 재귀식 풀이
const recursion = (
  numbers,
  max,
  lt = 0,
  rt = lt + 1,
  sum = numbers[lt],
  result = 0
) => {
  if (rt === numbers.length) return result;

  if (sum + numbers[rt] === max) {
    lt += 1;
    sum = numbers[lt];
    return recursion(numbers, max, lt, (rt = lt + 1), sum, (result += 1));
  }

  if (sum + numbers[rt] > max) {
    lt += 1;
    sum = numbers[lt];
    return recursion(numbers, max, lt, (rt = lt + 1), sum, result);
  }

  sum += numbers[rt];
  return recursion(numbers, max, lt, (rt += 1), sum, result);
};

console.log(recursion([1, 2, 1, 3, 1, 1, 1, 2], 6));
