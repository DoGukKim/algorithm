const main = (n, arr) => {
  const students = Array.from({ length: n }, (_, i) => i + 1);

  let result = 0;
  for (let i = 0; i < students.length; i++) {
    let minRank = 0;
    for (let j = 0; j < arr.length; j++) {
      const rank = arr[j].findIndex((item) => item === students[i]);
      if (rank > minRank) minRank = rank;
    }
    result += students.length - 1 - minRank;
  }
  console.log(result);
};

main(4, [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
