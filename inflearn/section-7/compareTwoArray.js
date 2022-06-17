const solution = (arr) => {
  const result = [];
  const sortedArray = arr.slice().sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArray[i]) result.push(i + 1);
  }
  return result;
};
const result = solution([120, 125, 152, 130, 135, 135, 143, 127, 160]);
