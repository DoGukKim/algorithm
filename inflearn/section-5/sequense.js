const solution = (arr, m) => {
  let result = 0;
  let pinPointer = 0;
  let positionPointer = pinPointer + 1;
  let sum = arr[pinPointer];

  while (pinPointer <= arr.length) {
    if (sum + arr[positionPointer] > m) {
      pinPointer++;
      positionPointer = pinPointer + 1;
      sum = arr[pinPointer];
    }

    if (sum + arr[positionPointer] === m) {
      result++;
      pinPointer++;
      positionPointer = pinPointer + 1;
      sum = arr[pinPointer];
    }

    sum += arr[positionPointer];
    positionPointer++;

    if (positionPointer >= arr.length - 1) break;
  }

  return result;
};
const result = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log(result);
