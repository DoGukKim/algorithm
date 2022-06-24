const main = (time, arr) => {
  let result = -Infinity;
  const recursion = (level = 0, timeSum = 0, gradeSum = 0) => {
    if (timeSum > time) return;
    if (level === arr.length) {
      result = Math.max(gradeSum, result);
      return;
    }

    recursion(level + 1, timeSum + arr[level][1], gradeSum + arr[level][0]);
    recursion(level + 1, timeSum, gradeSum);
  };
  recursion();

  console.log(result);
};

main(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
