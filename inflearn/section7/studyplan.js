// TimeComplexity O(n)
// SpaceComplexity O(n)
const main = (m, p) => {
  const queue = [...m];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === queue[0]) queue.shift();
  }
  return queue.length === 0 ? "YES" : "NO";
};

console.log(main("CBA", "CBDAGE"));
