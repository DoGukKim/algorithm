// 방법 1
// Time: O(n)
// Space: O(n)
const main = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i++)
    if (!isNaN(string[i])) result += string[i];

  return result;
};

console.log(main("good0123"));
