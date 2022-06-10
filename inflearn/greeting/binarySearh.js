const solution = (arr, target) => {
  arr.sort((a, b) => a - b);

  let startPoint = 0;
  let endPoint = arr.length - 1;

  while (startPoint <= endPoint) {
    const middlePoint = Math.floor((startPoint + endPoint) / 2);

    if (target === arr[middlePoint]) return middlePoint + 1;

    if (target > arr[middlePoint]) {
      startPoint = middlePoint + 1;
    }
    if (target < arr[middlePoint]) {
      endPoint = middlePoint - 1;
    }
  }
};
const result = solution([23, 87, 65, 12, 57, 32, 99, 81], 32);
console.log(result);
