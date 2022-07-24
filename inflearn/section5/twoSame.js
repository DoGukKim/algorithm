// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (arr1, arr2) => {
  let result = [];
  const map = new Map();
  const newArr = arr1.concat(arr2);

  for (let i = 0; i < newArr.length; i += 1)
    map.set(newArr[i], (map.get(newArr[i]) || 0) + 1);

  for (const [key, value] of map) if (value > 1) result.push(key);

  return result.sort((a, b) => a - b);
};

console.log(main([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

// 투 포인터
const main2 = (arr1, arr2) => {
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

console.log(main2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

// Recursive
const recursive = (numbers1, numbers2) => {
  numbers1.sort((a, b) => a - b);
  numbers2.sort((a, b) => a - b);

  return recursion(numbers1, numbers2);
};

const recursion = (
  numbers1,
  numbers2,
  index1 = 0,
  index2 = 0,
  sameArray = []
) => {
  if (index1 === numbers1.length || index2 === numbers2.length) return;

  if (numbers1[index1] === numbers2[index2]) {
    sameArray.push(numbers1[index1]);
    recursion(numbers1, numbers2, (index1 += 1), (index2 += 1), sameArray);
  }

  if (numbers1[index1] !== numbers2[index2]) {
    recursion(numbers1, numbers2, (index1 += 1), index2, sameArray);
  }

  return sameArray;
};

console.log(recursive([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
