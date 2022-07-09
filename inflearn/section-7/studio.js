// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (arr, m) => {
  let result = 0;
  let startPoint = Math.max(...arr);
  let endPoint = arr.reduce((acc, cur) => acc + cur, 0);

  while (startPoint <= endPoint) {
    const middlePoint = Math.floor((startPoint + endPoint) / 2);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > middlePoint) {
        result++;
        sum = arr[i];
      } else {
        sum += arr[i];
      }
    }

    if (result <= m) {
      endPoint = middlePoint - 1;
    } else {
      startPoint = middlePoint + 1;
    }
  }

  return result;
};

console.log(main([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
