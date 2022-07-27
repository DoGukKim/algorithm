// Time: O(n log n) // 아마도 sort()가 n log n이라서..?
// Space: O(n)
const main = (arr) => {
  let result = [];
  const sorted = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== sorted[i]) result.push(i + 1);

  return result;
};

console.log(main([120, 130, 150, 150, 130, 150]));
