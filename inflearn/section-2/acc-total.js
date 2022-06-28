const main = (array) => {
  let result = 0;
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) acc++;
    if (array[i] === 1) result++;
    else {
      result += acc;
      acc = 0;
    }
  }
  console.log(result);
};
main([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
