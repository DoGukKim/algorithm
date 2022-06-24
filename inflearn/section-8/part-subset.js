const main = (arr) => {
  let result = "NO";
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  let flag = false;

  const recursion = (level = 0, sum = 0) => {
    if (flag) return;
    if (level === arr.length) {
      if (total - sum === sum) {
        result = "YES";
        flag = true;
      }
    } else {
      recursion(level + 1, sum + arr[level]);
      recursion(level + 1, sum);
    }
  };
  recursion();

  console.log(result);
};

main([1, 3, 5, 6, 7, 10]);
