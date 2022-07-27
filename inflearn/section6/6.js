// Time: O(n)
// Space: O(n)
const main = (n, k) => {
  const princes = Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;

  while (princes.length) {
    for (let i = 1; i < k; i += 1) princes.push(princes.shift());
    princes.shift();
    if (princes.length === 1) result = princes.shift();
  }

  return result;
};

console.log(main(8, 3));

// Recursive
// Time: O(n)
// Space: O(n)
const recursion = (
  n,
  k,
  result = 0,
  princes = Array.from({ length: n }, (_, i) => i + 1)
) => {
  if (princes.length === 0) return result;

  for (let i = 1; i < k; i += 1) princes.push(princes.shift());
  princes.shift();
  if (princes.length === 1) result = princes.shift();

  return recursion(n, k, result, princes);
};

console.log(recursion(8, 3));
