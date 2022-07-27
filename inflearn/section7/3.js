// Time: O(n^2)
// Space: O(1)
const main = (arr) => {
  let isSwap = false;

  do {
    isSwap = false;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwap = true;
      }
    }
  } while (isSwap);

  return arr;
};

console.log(main([1, 2, 3, -3, -2, 5, 6, -6]));
