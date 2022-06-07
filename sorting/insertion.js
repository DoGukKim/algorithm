const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i;
    while (
      array[currentIndex - 1] !== undefined &&
      array[currentIndex] < array[currentIndex - 1]
    ) {
      [array[currentIndex - 1], array[currentIndex]] = [
        array[currentIndex],
        array[currentIndex - 1],
      ];
      currentIndex--;
    }
  }
  return array;
};
