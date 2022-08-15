// 방법 1
// Time: O(n^2)
// Space: O(n)
const main = (words) => {
  let result = [];

  for (let i = 0; i < words.length; i++)
    if (words.indexOf(words[i]) === i) {
      result.push(words[i]);
    }

  return result;
};

console.log(main(["good", "time", "good", "time", "student"]));
