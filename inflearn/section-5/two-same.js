const solution = (arr1, arr2) => {
  let result = [];
  const map = new Map();
  const newArr = arr1.concat(arr2);

  for (let i = 0; i < newArr.length; i++)
    map.set(newArr[i], (map.get(newArr[i]) || 0) + 1);

  for (const [key, value] of map) if (value > 1) result.push(key);

  return result.sort((a, b) => a - b);
};
const result = solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log(result);
