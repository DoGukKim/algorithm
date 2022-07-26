// Time: O(2^n)
// Space: O(n)
const main = (m, info) => {
  const remainder = calc(m, info);
  return Math.max(...remainder);
};

const calc = (m, info, idx = 0, sumTime = 0, sumPoint = 0, arr = []) => {
  if (sumTime > m) return;
  if (idx === info.length) return arr.push(sumPoint);

  calc(m, info, idx + 1, sumTime + info[idx][1], sumPoint + info[idx][0], arr);
  calc(m, info, idx + 1, sumTime, sumPoint, arr);

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
