// TimeComplexity O(n log n)
// SpaceComplexity O(n)
const merge = (left, right) => {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

const result = mergeSort([9, 5, 2, 3, 7, 8, 4]);
