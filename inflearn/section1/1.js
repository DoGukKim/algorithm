// Time: O(1)
// Space: O(1)
const main = (a, b, c) => {
  let result = Infinity;

  if (result > a) result = a;
  if (result > b) result = b;
  if (result > c) result = c;

  return result;
};

console.log(main(6, 5, 11));
