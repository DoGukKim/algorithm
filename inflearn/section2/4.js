// Time: O(n)
// Space: O(1)
const main = (numbers) => {
  let result = 0;
  let acc = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === 1) acc += 1;
    else acc = 0;

    result += acc;
  }

  return result;
};

console.log(main([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
