const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = i;
    while (arr[current - 1] !== undefined && arr[current] < arr[current - 1]) {
      [arr[current], arr[current - 1]] = [arr[current - 1], arr[current]];
      current--;
    }
  }

  return arr;
};

// input
const result = solution([11, 7, 5, 6, 10, 9]);

// const solution = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let current = i;
//     while (arr[current - 1] !== undefined && arr[current - 1] > arr[current]) {
//       [arr[current - 1], arr[current]] = [arr[current], arr[current - 1]];
//       current--;
//     }
//   }
//   return arr;
// };
