const solution = (arr, c) => {
  let result;
  arr.sort((a, b) => a - b);

  let startPoint = 1;
  let endPoint = arr[arr.length - 1];

  while (startPoint <= endPoint) {
    const middlePoint = parseInt((startPoint + endPoint) / 2);

    let horse = 1;
    let recentPosition = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - recentPosition >= middlePoint) {
        horse++;
        recentPosition = arr[i];
      }
    }

    if (horse >= c) {
      result = middlePoint;
      startPoint = middlePoint + 1;
    } else {
      endPoint = middlePoint - 1;
    }
  }

  return result;
};

const result = solution([1, 2, 8, 4, 9], 3);
