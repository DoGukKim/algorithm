// TimeComplexity O(n*m)
// SpaceComplexity O(n)
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
