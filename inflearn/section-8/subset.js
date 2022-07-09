// TimeComplexity O(2^n)
// SpaceComplexity O(n)
const main = (n, arr = []) => {
  if (n > 3) return;

  const arr1 = arr.slice();
  const arr2 = arr.slice();

  arr1.push(n);

  main(n + 1, arr1);
  console.log(arr1);
  main(n + 1, arr2);
};

main(1);
