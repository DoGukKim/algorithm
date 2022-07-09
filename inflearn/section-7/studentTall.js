// TimeComplexity O(n log n)
// SpaceComplexity O(n)
const main = (arr) => {
  let result = [];
  const sorted = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== sorted[i]) result.push(i + 1);

  return result;
};

//  main([120, 125, 152, 130, 135, 135, 143, 127, 160]);
console.log(main([120, 130, 150, 150, 130, 150]));
