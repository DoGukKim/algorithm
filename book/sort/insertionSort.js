// Time: O(n^2)
// Space: O(1)
const main = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = i;

    while (arr[current - 1] !== undefined && arr[current] < arr[current - 1]) {
      [arr[current], arr[current - 1]] = [arr[current - 1], arr[current]];
      current--;
    }
  }

  return arr;
};

console.log(main([11, 7, 5, 6, 10, 9]));
