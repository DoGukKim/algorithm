// 방법 1
// Time: O(n)
// Space: O(1)
const main = (word, target) => {
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === target) {
      result += 1;
    }
  }

  return result;
};

console.log(main("COMPUTERPROGRAMMING", "R"));
