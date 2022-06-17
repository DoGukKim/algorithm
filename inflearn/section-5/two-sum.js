const solution = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  result = [...result, ...arr1, ...arr2];

  return result;
};
const result = solution([1, 3, 5], [2, 3, 6, 7, 9]);
console.log(result);
