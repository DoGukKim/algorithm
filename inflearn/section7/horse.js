// TimeComplexity O(log n)
// SpaceComplexity O(1)
const main = (stall, maxHorseCount) => {
  stall.sort((a, b) => a - b);

  let lt = 1;
  let rt = stall[stall.length - 1];
  let result = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let horse = 1;
    let recentPosition = stall[0];

    for (let i = 1; i < stall.length; i += 1) {
      if (stall[i] - recentPosition >= mid) {
        horse += 1;
        recentPosition = stall[i];
      }
    }

    if (horse >= maxHorseCount) {
      result = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return result;
};

console.log(main([1, 2, 8, 4, 9], 3));
