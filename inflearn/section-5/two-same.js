const solution = (arr1, arr2) => {
  let result = [];
  const map = new Map();
  const newArr = arr1.concat(arr2);

  for (let i = 0; i < newArr.length; i++)
    map.set(newArr[i], (map.get(newArr[i]) || 0) + 1);

  for (const [key, value] of map) if (value > 1) result.push(key);

  return result.sort((a, b) => a - b);
};

// two pointer version
const twoPointerSolution = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let result = new Set();
  let lp = 0;
  let rp = 0;

  while (lp < arr1.length) {
    if (arr1[lp] === arr2[rp]) {
      result.add(arr1[lp++]);
      result.add(arr2[rp++]);
    } else lp++;
  }

  return result;
};

const result = solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log(result);
