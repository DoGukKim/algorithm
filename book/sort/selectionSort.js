// TimeComplexity O(n^2)
// SpaceComplexity O(1)
const main = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[min] > arr[j]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
};

// input
const result = main([13, 5, 11, 7, 23, 15]);
