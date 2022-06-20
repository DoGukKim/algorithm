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

// 투 포인터 방식
const pointerSolution = (arr1, arr2) => {
  let result = [];
  let lp = 0;
  let rp = 0;

  while (lp < arr1.length && rp < arr2.length) {
    if (arr1[lp] <= arr2[rp]) result.push(arr1[lp++]);
    else result.push(arr2[rp++]);
  }
  // 남는 것들을 넣는 로직
  while (lp < arr1.length) result.push(arr1[lp++]);
  while (rp < arr2.length) result.push(arr2[rp++]);
  return result;
};
