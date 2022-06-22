const solution = (t, arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {}

  console.log(arr);
};
const result = solution(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
console.log(result);
