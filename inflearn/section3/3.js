// Time: O(n)
// Space: O(1)
const main = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i++)
    if (!isNaN(string[i])) result += string[i];

  return result;
};

console.log(main("good0123"));
