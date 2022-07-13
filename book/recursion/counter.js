const main = (n) => {
  if (n === 0) return console.log("start!");
  console.log(n);
  return main(n - 1);
};
main(10);
