// Time: O(n^2)
// Space: O(1)
const main = (arr) => {
  let isSwap = false;

  do {
    isSwap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwap = true;
      }
    }
  } while (isSwap);

  return arr;
};

console.log(main([13, 5, 11, 7, 23, 15]));

// Recursive
const recursion = (numbers, index = 0, isSwap = false) => {
  if (index === numbers.length && !isSwap) return numbers;
  if (index === numbers.length - 1 && isSwap) index = 0;

  isSwap = false;

  if (numbers[index] > numbers[index + 1]) {
    [numbers[index], numbers[index + 1]] = [numbers[index + 1], numbers[index]];
    isSwap = true;
  }

  return recursion(numbers, index++, isSwap);
};

console.log(recursion([13, 5, 11, 7, 23, 15]));
