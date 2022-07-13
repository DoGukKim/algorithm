const main = (n) => {
  if (n === 1) return 1;
  return main(n - 1) + n;
};
console.log(main(3));
