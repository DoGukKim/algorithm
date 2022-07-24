// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i += 1)
    if (!isNaN(string[i])) result += string[i];

  return result;
};

console.log(main("good0123"));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(1)
const recursion = (string, index = 0, result = "") => {
  if (index === string.length) return result;

  if (!isNaN(string[index])) result += string[index];

  return recursion(string, (index += 1), result);
};

console.log(recursion("good0123"));
