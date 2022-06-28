const main = (arr, k, m) => {
  let result = 0;
  const recursion = (cur, array) => {
    if (array.length === 0) return;
    const sum = array
      .slice()
      .splice(0, 2)
      .reduce((a, b) => a + b, cur);
    if (sum % 6 === 0) result++;

    return recursion(cur, array.slice(1));
  };

  for (let i = 0; i < arr.length; i++) {
    const format = arr.filter((item) => item !== arr[i]);
    recursion(arr[i], format);
  }

  console.log(result);
};
main([2, 4, 5, 8, 12], 3, 6);
