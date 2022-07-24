// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (n) => {
  if (n > 7) return null;
  //   console.log(n);
  main(n * 2);
  // console.log(n);
  main(n * 2 + 1);
  //   console.log(n);
};

console.log(main(1));
