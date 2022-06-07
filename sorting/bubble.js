const bubbleSort = (array) => {
  let isSwap = false;

  do {
    isSwap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        //swap
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSwap = true;
      }
    }
  } while (isSwap);

  return array;
};
