// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (words) => {
  let result = words[0];

  for (let i = 1; i < words.length; i += 1)
    if (words[i].length > result.length) result = words[i];

  return result;
};

console.log(main(["teacher", "time", "student", "beautiful", "good"]));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (words, index = 0, result = words[0]) => {
  if (index === words.length) return result;

  if (words[index].length > result.length) result = words[index];

  return recursion(words, (index += 1), result);
};

console.log(recursion(["teacher", "time", "student", "beautiful", "good"]));
