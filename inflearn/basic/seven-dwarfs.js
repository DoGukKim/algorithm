const solution = (array) => {
  const map = new Map();
  const targetValue = array.reduce((acc, cur) => acc + cur, 0) - 100;
  for (let i = 0; i < array.length; i++) {
    if (map.has(targetValue - array[i])) {
      return array.filter((item, index) => {
        if (index !== i && index !== map.get(targetValue - array[i]))
          return item;
      });
    }
    map.set(array[i], i);
  }
};
const result = solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
