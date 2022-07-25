// Time: O(n)
// Space: O(1)
const main = (word, target) => {
  let result = 0;

  for (let i = 0; i < word.length; i++) if (word[i] === target) result += 1;

  return result;
};

console.log(main("COMPUTERPROGRAMMING", "R"));

// 재귀식 풀이
// Time: O(n^2)
// Space: O(n)
const recursion = (word, target, result = 0) => {
  if (word.length === 0) return result;

  if (word[0] === target) result += 1;

  return recursion(word.slice(1), target, result);
};

console.log(recursion("COMPUTERPROGRAMMING", "R"));
