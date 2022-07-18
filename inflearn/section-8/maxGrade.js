// TimeComplexity O(2^n)
// SpaceComplexity O(n^2)
const main = (limitTime, info) => {
  const remainder = calc(limitTime, info);
  return Math.max(...remainder);
};

const calc = (
  limitTime,
  info,
  index = 0,
  sumTime = 0,
  sumPoint = 0,
  arr = []
) => {
  if (sumTime > limitTime) return;
  if (index === info.length) return arr.push(sumPoint);

  calc(
    limitTime,
    info,
    index + 1,
    sumTime + info[index][1],
    sumPoint + info[index][0],
    arr
  );
  calc(limitTime, info, index + 1, sumTime, sumPoint, arr);

  return arr;
};

console.log(
  main(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
