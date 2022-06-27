const main = (m, arr) => {
  let result = 0;

  const recursion = (cur, slicedArr) => {
    if (slicedArr.length === 0) return;
    console.log(cur, slicedArr[0]);
    result++;
    recursion(cur, slicedArr.slice(1));
  };

  for (let i = 0; i < arr.length; i++) {
    recursion(
      arr[i],
      arr.filter((item) => item !== arr[i])
    );
  }

  console.log(result);
};
main(2, [3, 6, 9]);
