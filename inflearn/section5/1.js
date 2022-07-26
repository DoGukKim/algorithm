// Time: O(min(n,m))
// Space: O(n+m)
const main = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) result.push(arr1.shift());
    else result.push(arr2.shift());
  }

  result = [...result, ...arr1, ...arr2];
  return result;
};

console.log(main([1, 3, 5], [2, 3, 6, 7, 9]));

// 투 포인터 방식
const main2 = (arr1, arr2) => {
  let result = [];
  let lp = 0;
  let rp = 0;

  while (lp < arr1.length && rp < arr2.length) {
    if (arr1[lp] <= arr2[rp]) result.push(arr1[lp++]);
    else result.push(arr2[rp++]);
  }

  while (lp < arr1.length) result.push(arr1[lp++]);
  while (rp < arr2.length) result.push(arr2[rp++]);

  return result;
};

console.log(main2([1, 3, 5], [2, 3, 6, 7, 9]));

// 재귀식 풀이
const recursion = (numbers1, numbers2, sortedArray = []) => {
  if (numbers1.length === 0 || numbers2.length === 0) return;

  if (numbers1[0] <= numbers2[0]) {
    sortedArray.push(numbers1.shift());
    recursion(numbers1, numbers2, sortedArray);
  }

  if (numbers2[0] <= numbers1[0]) {
    sortedArray.push(numbers2.shift());
    recursion(numbers1, numbers2, sortedArray);
  }

  return [...sortedArray, ...numbers1, ...numbers2];
};

console.log(recursion([1, 3, 5], [2, 3, 6, 7, 9]));
