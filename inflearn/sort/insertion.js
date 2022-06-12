const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentIndex = i;
    while (
      arr[currentIndex] !== undefined &&
      arr[currentIndex] < arr[currentIndex - 1]
    ) {
      [arr[currentIndex - 1], arr[currentIndex]] = [
        arr[currentIndex],
        arr[currentIndex - 1],
      ];
      currentIndex--;
    }
  }
  return arr;
};
const result = solution([11, 7, 5, 6, 10, 9]);
