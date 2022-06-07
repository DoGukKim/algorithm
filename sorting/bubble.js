const bubbleSort = (array) => {
  let isSorted = false;

  do {
    isSorted = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        //swap
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = true;
      }
    }
  } while (isSorted);

  return array;
};
