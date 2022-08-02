// Time: O(n^2)
// Space: O(1)
const main = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
};

console.log(main([13, 5, 11, 7, 23, 15]));
