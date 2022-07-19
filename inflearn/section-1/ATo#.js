// TimeComplexity O(n)
// SpaceComplexity O(1)
const main = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== "A") result += word[i];
    else result += "#";
  }
  return result;
};

console.log(main("BANANA"));

// Recursive
// TimeComplexity O(n)
// SpaceComplexity O(n)
const recursion = (word, index = 0, result = "") => {
  if (index === word.length) return result;

  if (word[index] !== "A") result += word[index];
  else result += "#";

  return recursion(word, (index += 1), result);
};

console.log(recursion("BANANA"));
