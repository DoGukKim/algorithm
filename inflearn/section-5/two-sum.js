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
  let leftPoint = 0;
  let rightPoint = 0;

  while (leftPoint < arr1.length && rightPoint < arr2.length) {
    if (arr1[leftPoint] <= arr2[rightPoint]) {
      result.push(arr1[leftPoint]);
      leftPoint++;
    } else {
      result.push(arr2[rightPoint]);
      rightPoint++;
    }
  }

  while (leftPoint < arr1.length) result.push(arr1[leftPoint++]);
  while (rightPoint < arr2.length) result.push(arr2[rightPoint++]);

  return result;
};
