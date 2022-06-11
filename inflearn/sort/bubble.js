const solution = (arr) => {
  let isSwap = false;

  do {
    isSwap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwap = true;
      }
    }
  } while (isSwap);

  return arr;
};

const result = solution([13, 5, 11, 7, 23, 15]);
