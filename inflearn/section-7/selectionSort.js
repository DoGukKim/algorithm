const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
};

// input
const result = solution([13, 5, 11, 7, 23, 15]);
