// Time: O(n)
// Time: O(n)
const main = (s) => {
  if (s.length === 0) return;
  let temp = s[0];
  s.shift();
  main(s);
  s.push(temp);
};

const result = main(["a", "b", "c", "d"]);
