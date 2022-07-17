// TimeComplexity O(2^n+m)
// SpaceComplexity O(n+m)
const gridTraveler = (r, c) => {
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  return gridTraveler(r - 1, c) + gridTraveler(r, c - 1);
};

const main = (row, colum, memo = {}) => {
  const pos = row + "," + colum;
  if (pos in memo) return memo[pos];
  if (row === 0 || colum === 0) return 0;
  if (row === 1 || colum === 1) return 1;

  memo[pos] = main(row - 1, colum) + main(row, colum - 1);

  return memo[pos];
};

console.log(main(3, 7));
