// n: N, m: stages
// Time: O(n*m)
// Space: O(n)
const main = (N, stages) => {
  stages.sort((a, b) => a - b);

  const result = [];

  for (let i = 1; i <= N; i++) {
    const failPercent =
      stages.filter((p) => i === p).length /
      stages.filter((p) => i <= p).length;
    result.push([i, failPercent]);
  }

  result.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });

  return result.map((i) => i[0]);
};

console.log(main(5, [2, 1, 2, 6, 2, 4, 3, 3]));
