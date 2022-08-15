// 방법 1
// Time: O(n)
// Space: O(1)
const main = (word) => {
  let result = 0;

  for (let i = 0; i < word.length; i++)
    if (word[i] === word[i].toUpperCase()) result += 1;

  return result;
};

console.log(main("KoreaTimeGood"));
