// TimeComplexity O(2^n+m)
// SpaceComplexity O(n+m)
const gridTraveler = (r, c) => {
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  return gridTraveler(r - 1, c) + gridTraveler(r, c - 1);
};

// TimeComplexity O(n + m)
// SpaceComplexity O(n + m)
const memoGridTravel = (r, c, memo = {}) => {
  const key = r + "," + c;
  if (key in memo) return memo[key];
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  memo[key] = gridTraveler(r - 1, c, memo) + gridTraveler(r, c - 1, memo);
  return memo[key];
};
